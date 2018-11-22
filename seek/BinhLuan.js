var mongoose = require('mongoose');
var binhLuan = require("../model/Comment")
mongoose.connect('mongodb://localhost/QUAN_LI_NHA_HANG');
var binh_luan = [ 
    new binhLuan({
    ma :1,
    username  : 'hue',
    content   : 'món ăn hấp dẫn',
    likes      : 0,
    

}),
new binhLuan({
    ma :2,
    username  : 'thanhhue',
    content   : 'món ăn hấp dẫn',
    likes      : 0,
})]
var done = 0;
for(var i = 0; i<binh_luan.length; i++)
{
    binh_luan[i].save(function(err, result){
        done ++;
        if(done === binh_luan.length)
        {
            exist();
        }
    });
   
}
function exist()
{
    mongoose.disconnect();
}