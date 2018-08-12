const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: String,
    username: { type: String, default: null },
    email: String,
    password: String,
    address: {
        line1: {type:String},
        line2: String,
        city: {type:String},
        state: {type:String},
        pin: {type:Number}
    },
    phone: {type:Number}
});

export default mongoose.model('User', UserSchema);