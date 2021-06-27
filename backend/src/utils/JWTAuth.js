const jwt = require("jsonwebtoken")

function verifyJWT(req, res, next) {
  const token = req.headers['x-access-token'];
  if(!token)
    return res.status(200).json({
      status: 401,
      auth: false,
      token: null,
      message: 'No token provided',
    });

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if(err)
      return res.status(200).json({
        status: 500,
        auth: false,
        token: null,
        message: 'Failed to authenticate token'
      });
    
    req.body.userIdJwt = decoded.id;
    next();
  })
}

module.exports = { verifyJWT, jwt }