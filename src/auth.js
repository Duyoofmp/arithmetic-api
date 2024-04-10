const jwt = require('jsonwebtoken');


//Token specifications
const secretKey = 'arithmeticKey';
const accessTokenExpiry = '1h'; 
const refreshTokenExpiry = '7d';



function generateTokens(payload) {
  const accessToken = jwt.sign(payload, secretKey, { expiresIn: accessTokenExpiry });
  const refreshToken = jwt.sign(payload, secretKey, { expiresIn: refreshTokenExpiry });
  return { accessToken, refreshToken };
}

function verifyToken(token) {
  return jwt.verify(token, secretKey);
}

module.exports = { generateTokens, verifyToken };
