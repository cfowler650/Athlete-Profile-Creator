const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
    name: { type: String, required: true },
    dob: String,
    nationality:String,
    gender: String,
    location:String,
    sports: String,
    team:String,
    about:String,
    linkedin: String,
    facebook: String,
    twitter: String,
    youtube: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Player', PlayerSchema);
