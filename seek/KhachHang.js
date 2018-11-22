var mongoose = require('mongoose');
var kh = require("../model/KhachHang")
mongoose.connect('mongodb://localhost/QUAN_LI_NHA_HANG');
var khach_hang = [ 
    new kh({
        ma_khach_hang: 1,
        ten_khach_hang: "Nguyễn Thị Mỹ Duyên",
        email: "nguyenmyduyenqngg@gmail.com",
        dienthoai: 123445565,
        ghi_chu: "Duyên điên",
        diachi: "13/26, Trần Văn Hoàng",
        userName: "duyen123",
        passWord: "duyen1234",

}),
new kh({
    ma_khach_hang: 2,
    ten_khach_hang: "Đỗ Thị Thanh Huệ",
    email: "nguyenmyduyenqngg@gmail.com",
    dienthoai: 1234455657,
    ghi_chu: "Duyên điên",
    diachi: "13/26, Trần Văn Hoàng",
    userName: "duyen1234",
    passWord: "duyen1234",

}),
]
var done = 0;
for(var i = 0; i<khach_hang.length; i++)
{
    khach_hang[i].save(function(err, result){
        done ++;
        if(done === khach_hang.length)
        {
            exist();
        }
    });
   
}
function exist()
{
    mongoose.disconnect();
}