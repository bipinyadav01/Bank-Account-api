const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
    userName: { type: String, required: true },
    accountNumber: { type: Number, required: true }, // Change to String if leading zeros matter
    email: { type: String, required: true }, // Fixed typo
    phoneNo: { type: Number, required: true }, // Fixed typo (use String for phone numbers)
    balance: { type: Number, required: true }
});

module.exports = mongoose.model("Account", accountSchema);


