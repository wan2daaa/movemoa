const mongoose = require('mongoose');
const {Schema} = mongoose;

const studentSchema = new Schema({
    idx: {type: Number, default: 0, unique: true},
    start: {type: String},
    end: {type:String},
    member: {type:Number},
    price: {type:Number},
    date: {type:String},
});



const StudentBoard= mongoose.model('Student', studentSchema);
module.exports= {StudentBoard}
