const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
    name: { type: String, required: true },
    dob: String,
    nationality:String,
    location:String,
    team:String,
    gender:String,
    sports:String,
    about:String,
    linkedin: String,
    facebook: String,
    youtube: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Player', PlayerSchema);




// name: { type: String, required: true },
// dob: { type: String, required: true },
// nationality: { type: String, required: true },
// location: { type: String, required: true },
// team: { type: String, required: true },
// gender: { type: String, required: true },
// sports: { type: String, required: true },
// about: { type: String, required: true },
// linkedin: String,
//     facebook: String,
//         youtube: String
