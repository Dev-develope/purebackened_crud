import jwt from "jsonwebtoken";

// Middleware for logging request method and path
export const dataMiddleware = (req, res, next) => {
  console.log(`The method is called ${req.method} and the path is ${req.path}`);
  next();
};

// Function to sign JWT and return token
export function jwtSign(data) {
  return new Promise((resolve, reject) => {
    jwt.sign(data, "Dev", { expiresIn: '1h' }, (err, token) => {
      if (err) {
        reject(err); // Reject if there's an error
      } else {
        resolve(token); // Resolve with the token
      }
    });
  });
}

// JWT authentication middleware
export const authenticate = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Get the token from the Authorization header

  if (!token) {
    return res.status(403).json({ error: "No token provided" });
  }

  // Verify token
  jwt.verify(token, "Dev", (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid or expired token" });
    }

    // Store decoded user info in the request object
    req.user = decoded;
    next(); // Proceed to the next middleware/handler
  });
};
