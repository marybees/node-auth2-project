const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../api/config");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        // toke is invalid
        res.status(401).json({ you: "Can't touch this!" });
      } else {
        // token is valid
        req.jwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ you: "shall not pass!" });
  }
};
