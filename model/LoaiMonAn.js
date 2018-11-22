var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/QUAN_LI_NHA_HANG');
var Schema = mongoose.Schema;
 
var loai_mon_an = new Schema({
 ma_loai: {type: Number,min :0, required:true, default: 0},
 ten_loai: {type:String,required:true}
});
module.exports = mongoose.model('LOAI_MON_AN',loai_mon_an);
