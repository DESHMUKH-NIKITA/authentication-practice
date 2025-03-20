export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    console.log('✅ Request received:', { email, password });

    try {
      // Step 1: Get CSRF Token
      console.log('🚀 Fetching CSRF Token...');
      const csrfResponse = await fetch('https://losservices.finanalyz.com/api/csrf/token', {
        method: 'GET',
        headers: {
          'accept': '*/*'
        },
        credentials: 'include' // ✅ Required for cookies to be stored
      });

      // console.log('✅ CSRF Response Status:', csrfResponse.status);

      if (!csrfResponse.ok) {
        // console.error('❌ Failed to get CSRF token:', csrfResponse.statusText);
        throw new Error('Failed to get CSRF token');
      }

      // ✅ Extract CSRF token from response headers
      const setCookieHeader = csrfResponse.headers.get('set-cookie');
      // console.log('✅ Set-Cookie Header:', setCookieHeader);

      const csrfToken = setCookieHeader.match(/XSRF-TOKEN=(.*?);/)[1];
      const antiforgeryCookie = setCookieHeader.match(/\.AspNetCore\.Antiforgery\.(.*?)=(.*?);/);
      const antiforgeryKey = antiforgeryCookie[1];
      const antiforgeryValue = antiforgeryCookie[2];

      // console.log('✅ Extracted CSRF Token:', csrfToken);
      // console.log('✅ Extracted Antiforgery Cookie:', `${antiforgeryKey}=${antiforgeryValue}`);

      // Step 2: Perform Login
      console.log('🚀 Sending Login Request...');
      const loginResponse = await fetch('https://losservices.finanalyz.com/api/Auth/login', {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
          'Cookie': `.AspNetCore.Antiforgery.${antiforgeryKey}=${antiforgeryValue}; XSRF-TOKEN=${csrfToken}`
        },
        body: JSON.stringify({ email, password })
      });

      // console.log('✅ Login Response Status:', loginResponse.status);

      if (!loginResponse.ok) {
        const errorBody = await loginResponse.text();
        console.error('❌ Login failed:', errorBody);
        throw new Error(`Login failed: ${errorBody}`);
      }

      const data = await loginResponse.json();
      // console.log('✅ Login successful:', data);

      res.status(200).json(data);
    } catch (error) {
      console.error('❌ Error:', error.message);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
