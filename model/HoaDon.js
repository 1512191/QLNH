var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/QUAN_LI_NHA_HANG');
var Schema = mongoose.Schema;
 
var hoadon = new Schema({
 _idmahd: {type: Number, min:0, default: 0, required:true},
 ma_khach_hang: {type:Number,min :0, required:true},
 ngay_dat: {type:Date,default: Date.now()},
 tong_tien: {type:Number,default: 0},
 con_lai: {type:Number,min: 0, default: 0},
 ghi_chu: {type:String, default:''}
});
module.exports = mongoose.model('HOA_DON',hoadon);
