import nodemailer from 'nodemailer';

/**
 * IONOS SMTP-Transporter für E-Mail-Versand.
 * Konfiguration über Umgebungsvariablen (siehe .env.example).
 */
function getTransporter() {
  const host = process.env.SMTP_HOST ?? 'smtp.ionos.com';
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error(
      'SMTP nicht konfiguriert: SMTP_USER und SMTP_PASS in .env setzen (IONOS E-Mail-Adresse und Passwort).'
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    tls: { rejectUnauthorized: true },
  });
}

export interface SendMailOptions {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
  html?: string;
}

/**
 * E-Mail über IONOS SMTP senden.
 */
export async function sendMail(options: SendMailOptions): Promise<void> {
  const from = process.env.SMTP_USER;
  if (!from) throw new Error('SMTP_USER fehlt in .env');

  const transporter = getTransporter();
  await transporter.sendMail({
    from: `"da-sound Website" <${from}>`,
    to: options.to,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    html: options.html ?? options.text.replace(/\n/g, '<br>'),
  });
}
