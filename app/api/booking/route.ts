import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail';

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      date,
      eventType,
      location,
      act,
      duration,
      name,
      email,
      phone,
      message,
    } = body;

    if (!date?.trim() || !eventType?.trim() || !location?.trim() || !act?.trim() || !name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus (Datum, Event-Art, Ort, Act, Name, E-Mail).' },
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
      'Neue Buchungsanfrage (da-sound.de)',
      '',
      '---',
      'Datum: ' + date.trim(),
      'Event-Art: ' + eventType.trim(),
      'Veranstaltungsort: ' + location.trim(),
      'Gewünschter Act: ' + (act || '–').trim(),
      'Dauer: ' + (duration || '–').trim(),
      '',
      'Kontakt:',
      'Name: ' + name.trim(),
      'E-Mail: ' + email.trim(),
      'Telefon: ' + (phone?.trim() || 'Nicht angegeben'),
      '',
      ...(message?.trim() ? ['Weitere Informationen:', message.trim(), ''] : []),
    ].join('\n');

    await sendMail({
      to: CONTACT_EMAIL,
      replyTo: email.trim(),
      subject: `Buchungsanfrage: ${eventType.trim()} am ${date.trim()} (da-sound.de)`,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Booking API error:', err);
    return NextResponse.json(
      { error: 'Anfrage konnte nicht gesendet werden. Bitte später erneut versuchen oder uns direkt anrufen.' },
      { status: 500 }
    );
  }
}
