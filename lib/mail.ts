import nodemailer from 'nodemailer';

/**
 * IONOS SMTP-Transporter für E-Mail-Versand.
 * Konfiguration über Umgebungsvariablen (siehe .env.example).
 */
function getTransporter() {
  const host = process.env.SMTP_HOST ?? 'smtp.ionos.de';
  const port = 587;
  const user = process.env.SMTP_USER?.trim();
  let pass = process.env.SMTP_PASS?.trim() ?? '';
  // Optional: Wenn SMTP_PASS_EXTRA gesetzt ist, Passwort zusammensetzen (für $ in .env: SMTP_PASS=L@n65xt, SMTP_PASS_EXTRA=14Pl1)
  const extra = process.env.SMTP_PASS_EXTRA?.trim();
  if (extra) pass = pass + '$' + extra;
  // Falls .env die Anführungszeichen mit liefert (z. B. unter Windows/Next.js)
  if ((pass.startsWith("'") && pass.endsWith("'")) || (pass.startsWith('"') && pass.endsWith('"'))) {
    pass = pass.slice(1, -1);
  }

  if (!user || !pass) {
    throw new Error(
      'SMTP nicht konfiguriert: SMTP_USER und SMTP_PASS in .env setzen (IONOS E-Mail-Adresse und Passwort).'
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: false,
    requireTLS: true,
    auth: { user, pass },
    authMethod: 'PLAIN',
    tls: { rejectUnauthorized: false },
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
