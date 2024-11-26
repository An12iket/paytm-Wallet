const jwt = require("jsonwebtoken");
const JWT_SECRET = "Aniket1234";

const authMiddleware = (req, res, next) => {
    // Log the incoming Authorization header
    const token = req.headers.authorization?.split(' ')[1];
    console.log('Token:', token);  // Log token for debugging

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);  // Verify token using secret
        console.log('Decoded JWT:', decoded);  // Log the decoded token for debugging
        req.userId = decoded.userId;  // Attach userId from decoded token to the request
        next();  // Proceed to next middleware or route handler
    } catch (error) {
        console.error('JWT Decoding Error:', error);  // Log any decoding errors
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

module.exports = {
    authMiddleware
};
