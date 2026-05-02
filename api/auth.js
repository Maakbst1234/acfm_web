export default function handler(req, res) {
  const host = req.headers.host;
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const url = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=repo,user&redirect_uri=${protocol}://${host}/api/callback`;
  res.redirect(url);
}
