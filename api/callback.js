export default async function handler(req, res) {
  const { code } = req.query;
  
  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });
    
    const data = await response.json();
    
    if (data.error) {
      return res.status(400).send(`Error: ${data.error_description}`);
    }

    const script = `
      <script>
        (function() {
          function receiveMessage(e) {
            console.log("Receive message:", e);
            // send message to main window
            window.opener.postMessage(
              'authorization:github:success:${JSON.stringify({
                token: data.access_token,
                provider: 'github',
              })}',
              e.origin
            );
          }
          window.addEventListener("message", receiveMessage, false);
          // Start handshaking
          window.opener.postMessage("authorizing:github", "*");
        })()
      </script>
    `;
    res.send(script);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
