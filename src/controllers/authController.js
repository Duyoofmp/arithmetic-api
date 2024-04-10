const { generateTokens } = require('../auth');

// Dummy user credentials (replace with your actual user data logic)
const users = [
  {
    id: 1,
    username: 'user',
    password: 'password',
  },
];

function login(req, res) {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const { accessToken, refreshToken } = generateTokens({ id: user.id });
    res.json({ accessToken, refreshToken });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
}

function refreshTokens(req, res) {
  const refreshToken = req.body.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token not provided' });
  }

  try {
    const decoded = verifyToken(refreshToken);
    const { accessToken } = generateTokens(decoded);
    res.json({ accessToken });
  } catch (err) {
    return res.status(403).json({ message: 'Invalid refresh token' });
  }
}

module.exports = { login,refreshTokens };
