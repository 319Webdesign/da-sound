import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail';

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Alle Pflichtfelder (Name, E-Mail, Nachricht) müssen ausgefüllt sein.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Bitte eine gültige E-Mail-Adresse angeben.' },
        { status: 400 }
      );
    }

    if (!CONTACT_EMAIL) {
      console.error('CONTACT_EMAIL oder SMTP_USER fehlt in .env');
      return NextResponse.json(
        { error: 'E-Mail-Versand ist nicht konfiguriert.' },
        { status: 500 }
      );
    }

    const text = [
      'Neue Nachricht vom Kontaktformular (da-sound.de)',
      '',
      '---',
      'Name: ' + name.trim(),
      'E-Mail: ' + email.trim(),
      'Telefon: ' + (phone?.trim() || 'Nicht angegeben'),
      '',
      'Nachricht:',
      message.trim(),
    ].join('\n');

    await sendMail({
      to: CONTACT_EMAIL,
      replyTo: email.trim(),
      subject: `Kontaktanfrage von ${name.trim()} (da-sound.de)`,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Nachricht konnte nicht gesendet werden. Bitte später erneut versuchen oder uns direkt anrufen.' },
      { status: 500 }
    );
  }
}
