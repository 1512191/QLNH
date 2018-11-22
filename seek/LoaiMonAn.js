var loaiMonAn = require('../modle/LoaiMonAn.js');
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/QUAN_LI_NHA_HANG');
var loai_mon_an = [
    new loaiMonAn({
        ma_loai:1,
    ten_loai:'Thực đơn ăn sáng'
    }),
    new loaiMonAn({
        ma_loai:2,
    ten_loai:'Salat, Súp, Nộm, Gỏi'
    }),
    new loaiMonAn({
        ma_loai:3,
        ten_loai:'Khai vị-Điểm tâm'
    }),
    new loaiMonAn({
        ma_loai:4,
    ten_loai:'Các món thủy hải sản'
    }),
    new loaiMonAn({
        ma_loai:5,
    ten_loai:'Dê-Bò-Lợn-Cừu'
    }),
    new loaiMonAn({
        ma_loai:6,
    ten_loai:'Gà-Vịt-Chim-Yến'
    }),
    new loaiMonAn({
        ma_loai:7,
        ten_loai:'Cơm-Mì-Cháo-Phở'
    }),
    new loaiMonAn({
        ma_loai:8,
    ten_loai:'Các món lẩu đặc sản'
    }),
    new loaiMonAn({
        ma_loai:9,
    ten_loai:'Rượu bia-Đồ uống'
    }),
    new loaiMonAn({
        ma_loai:10,
        ten_loai:'Món tráng miệng'
    }),
]
var done = 0;
for(var i = 0; i<loai_mon_an.length; i++)
{
    loai_mon_an[i].save(function(err, result){
        done ++;
        if(done === loai_mon_an.length)
        {
            exist();
        }
    });
   
}
function exist()
{
    mongoose.disconnect();
}