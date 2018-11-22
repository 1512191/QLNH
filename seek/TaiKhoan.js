var mongoose = require('mongoose');
var tk = require("../model/TaiKhoan")
mongoose.connect('mongodb://localhost/QUAN_LI_NHA_HANG');
var tai_khoan = [ 
    new tk({
    ma:1,
    _user:"thanhhue",
    pass:"thanhhueqng",
    loaiTK:2,
    trangThai:2

}),
new tk({
    ma:2,
    _user:"thanhhue123",
    pass:"thanhhueqng",
    loaiTK:2,
    trangThai:1
})
]
var done = 0;
for(var i = 0; i<tai_khoan.length; i++)
{
    tai_khoan[i].save(function(err, result){
        done ++;
        if(done === tai_khoan.length)
        {
            exist();
        }
    });
   
}
function exist()
{
    mongoose.disconnect();
}