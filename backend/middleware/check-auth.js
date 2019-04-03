const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "secret-long-verylong-password-i-guess");
    next();
  } catch {
    res.status(401).json({
      message: "Auth Failed"
    });
  }
};
