const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ message: 'Authorization token missing or invalid' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, jwtSecret);

        if(!decoded.userId){
            req.userId = decoded.userId;
            next();
        } else {
            return res.status(403).json({});
        }

    } catch (err) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

module.exports = {
    authMiddleware
};
