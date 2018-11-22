var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Comment = new Schema({
    ma : {type:Number, min: 1, required:true},
    username  : {type: String, required: true},
    content   : {type: String, required: true},
    likes      : {type: Number, default: 0},
    created_at : {type:Date, default: Date.now}
  });
  module.exports =   mongoose.model('BinhLuan',Comment);