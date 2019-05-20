const mongoose = require("mongoose");

// Schema variable
const Schema = mongoose.Schema;

// Users
//Os users assumem 2 tipos: 0 - Moderator // 1 - Student
const trophySchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    trophyType: {
        type: String,
        required: true
    },
    goal: {
        type: Number
    }
});

const Trophy = mongoose.model('Trophy', trophySchema);

module.exports = Trophy;