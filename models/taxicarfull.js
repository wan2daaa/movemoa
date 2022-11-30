const mongoose = require('mongoose');
const {Schema} = mongoose;

const taxiSchema = new Schema({
    idx: {type: Number, default: 0, unique: true},
    start: {type: String},
    end: {type:String},
    member: {type:Number},
    price: {type:Number},
});



const TaxiBoard= mongoose.model('Taxi', taxiSchema);
module.exports= {TaxiBoard}
