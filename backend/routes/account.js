const express = require('express');
const mongoose = require('mongoose');
const { Account } = require('../db');
const { authMiddleware } = require('../middleware');

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    try {
        const account = await Account.findOne({ userId: req.userId });
        if (account) {
            res.json({ balance: account.balance });
        } else {
            res.status(404).json({ message: "Account not found" });
        }
    } catch (error) {
        console.error("Error fetching balance:", error);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { amount, to } = req.body;

        const account = await Account.findOne({ userId: req.userId }).session(session);
        if (!account || account.balance < amount) {
            throw new Error('Insufficient balance');
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);
        if (!toAccount) {
            throw new Error('Invalid recipient account');
        }

        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

        await session.commitTransaction();
        res.json({ message: 'Transfer successful' });
    } catch (error) {
        await session.abortTransaction();
        if (error.message === 'Insufficient balance') {
            res.status(400).json({ message: 'Insufficient balance' });
        } else if (error.message === 'Invalid recipient account') {
            res.status(404).json({ message: 'Recipient account not found' });
        } else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    } finally {
        session.endSession();
    }
});

module.exports = router;
