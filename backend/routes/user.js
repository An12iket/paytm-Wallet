const express = require("express");
const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware");

const JWT_SECRET = "Aniket1234";

// Validation schemas
const signupBody = zod.object({
    username: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string(),
});

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
});

const updateBody = zod.object({
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
});

// Signup route
router.post("/signup", async (req, res) => {
    const { success, data } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid input data" });
    }

    const existingUser = await User.findOne({ username: data.username });
    if (existingUser) {
        return res.status(400).json({ message: "Email already taken" });
    }

    const user = await User.create(data);
    const userId = user._id;

    // Create account
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000,
    });

    const token = jwt.sign({ userId }, JWT_SECRET);
    res.json({ message: "User created successfully", token });
});

// Signin route
router.post("/signin", async (req, res) => {
    const { success, data } = signinBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid input data" });
    }

    const user = await User.findOne({ username: data.username, password: data.password });
    if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.json({ token });
});

// Update route
router.put("/", authMiddleware, async (req, res) => {
    const { success, data } = updateBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid input data" });
    }

    await User.updateOne({ _id: req.userId }, data);
    res.json({ message: "Update successful" });
});

// Bulk user retrieval
router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";
    const users = await User.find(
        filter
            ? {
                  $or: [{ firstname: { $regex: filter, $options: "i" } }],
              }
            : {}
    );
    res.json({
        users: users.map((user) => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id,
        })),
    });
});

module.exports = router;
