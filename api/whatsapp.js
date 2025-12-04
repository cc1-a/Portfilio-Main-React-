export default async function handler(req, res) {
  // 1. Get the data from the frontend
  const { name, email, message } = JSON.parse(req.body);

  // 2. Your Twilio Keys (Backend side)
  const accountSid = 'ACa687751b23438c65b56306e9e677e520';
  const authToken = '94d6c479e22209717e6c511e78520f54';
  const to = 'whatsapp:+94766226039';       // Your Number
  const from = 'whatsapp:+14155238886';     // Twilio Sandbox Number

  // 3. Format the WhatsApp message
  const textBody = `📦 *NEW PORTFOLIO MESSAGE* 📦\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n\n📝 *Message:*\n${message}`;

  // 4. Send to Twilio
  const params = new URLSearchParams();
  params.append('To', to);
  params.append('From', from);
  params.append('Body', textBody);

  const auth = Buffer.from(accountSid + ':' + authToken).toString('base64');

  try {
    const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: data.message || 'Twilio failed' });
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}