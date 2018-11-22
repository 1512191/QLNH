
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var mon_an = new Schema({
 ma_mon: {type: Number, min :0, default: 0},
 ma_loai: {type:Number,min:0, default: 0},
 ten_mon: {type: String, required:true},
 noi_dung_tom_tat:{type: String, default:''},
 noi_dung_chi_tiet: {type:String,default: ''},
 don_gia: {type:Number,min: 0,  required:true, default:0},
 don_gia_khuyen_mai:{type:Number,min:0, default: 0},
 khuyen_mai:{type:String, default:'Khăn lạnh'},
 ngay_cap_nhat:{type:Date, default:Date.now()},
 don_vi_tinh:{type: String, default:'đĩa'},
 hinh:{type:String, default:''}
});
module.exports =   mongoose.model('MON_AN',mon_an);


