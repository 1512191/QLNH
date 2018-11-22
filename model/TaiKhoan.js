var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/QUAN_LI_NHA_HANG');
var Schema = mongoose.Schema;
 
var tk = new Schema({
    _user:{type:String, required:true, minlength:6, maxlength:15},
    pass:{type:String, required:true, minlength:8, maxlength:50}, 
    loaiTK:{type:Number, required:true, min:1, max:2},//1: quản lí, 2: nhân viên,
    ma:{type:Number, min:1},
    trangThai:{type:Number, required:true, min:1, max:2}//1: block, 2: unblock
})
module.exports = mongoose.model('TAI_KHOAN',tk);
