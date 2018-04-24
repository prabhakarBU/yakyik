var mongoose = require('mongoose');

var ZoneSchema = new mongoose.Schema({
    name:{type:String,default:''},
    //location:{type:[Number]},//lot of places use zip codes
    //zip:{type:String,default:''},//could be multiple zip codes
    zipCodes:{type:Array,default:[]},
    timestamp:{type:Date,default:Date.now}
});

module.exports = mongoose.model('ZoneSchema',ZoneSchema);