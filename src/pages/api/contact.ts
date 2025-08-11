import type { APIRoute } from 'astro';

export const prerender = false; // ensure this runs on the server

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    let data: Record<string, string> = {};

    if (contentType.includes('multipart/form-data')) {
      const form = await request.formData();
      for (const [k, v] of form.entries()) {
        data[k] = typeof v === 'string' ? v : '';
      }
    } else if (contentType.includes('application/json')) {
      data = await request.json();
    } else {
      return new Response(JSON.stringify({ message: 'Unsupported content type' }), { status: 415 });
    }

    // Honeypot check
    if (data.company_website) {
      // Pretend success but ignore (spam)
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    // Basic validation
    const { name, email, subject, message, consent } = data;
    if (!name || !email || !subject || !message || consent !== 'on') {
      return new Response(JSON.stringify({ message: 'Invalid form submission.' }), { status: 400 });
    }

    // TODO: send email or create ticket here.
    // Example (pseudo):
    // await sendEmail({ from: email, subject: `[Contact] ${subject}`, text: `From: ${name} <${email}>\n\n${message}` });

    // For now, just log:
    console.log('[CONTACT]', { name, email, subject, message });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Server error.' }), { status: 500 });
  }
};
