const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables from .env file

const secretKey = process.env.SECRET_KEY;
const accessTokenExpiry = process.env.ACCESS_TOKEN_EXPIRY;
const refreshTokenExpiry = process.env.REFRESH_TOKEN_EXPIRY;

function generateTokens(payload) {
  const accessToken = jwt.sign(payload, secretKey, { expiresIn: accessTokenExpiry });
  const refreshToken = jwt.sign(payload, secretKey, { expiresIn: refreshTokenExpiry });
  return { accessToken, refreshToken };
}

function verifyToken(token) {
  return jwt.verify(token, secretKey);
}

module.exports = { generateTokens, verifyToken };
