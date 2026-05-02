export default function handler(req, res) {
  const host = req.headers.host;
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const clientId = process.env.GITHUB_CLIENT_ID || 'Ov23lip6m5bsVmLQCGVL';
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user&redirect_uri=${protocol}://${host}/api/callback`;
  res.redirect(url);
}
