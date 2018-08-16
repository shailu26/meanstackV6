const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: { type: String, required: true},
    username: { type: String, default: null},
    email: {type: String, required: true},
    password: {type: String, required: true},
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