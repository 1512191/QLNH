var monAn = require('../modle/MonAn.js');
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/QUAN_LI_NHA_HANG');
var mon_an = [
    new monAn({
        ma_mon:1,
            ma_loai :1,
            ten_mon: 'Cơm chiên thập cẩm',
            noi_dung_tom_tat:'cơm chiên',
            noi_dung_chi_tiet:' Vị béo béo của lạp xưởng, ngọt của đậu Hà Lan làm món ăn thêm đậm đà hương vị.',
            don_gia:50000,
            don_gia_khuyen_mai:0,
            hinh:'../images/comchienthapcam.jpg'
}),
new monAn({
    ma_mon:2,
    ma_loai :1,
    ten_mon: 'Bún riêu cua ốc',
    noi_dung_tom_tat:'bún',
    noi_dung_chi_tiet:"Bún riêu cua là một món ăn đặc sản của Hà Nội. Món ăn này gồm 'bún' (bún rối hoặc bún lá) và 'riêu cua'. Riêu cua được nấu từ gạch cua, thân cua giã, lọc với quả dọc, cà chua, mỡ nước, mẻ ngấu, nước mắm, muối, hành hoa. Bún riêu thường thêm chút mắm tôm để tăng thêm vị đậm đà, thường ăn kèm với rau ghém (rau diếp thái nhỏ hay cọng rau muống chẻ).",
    don_gia:40000,
    don_gia_khuyen_mai:0,
    hinh:'../images/bunrieucuaoc.jpg'
}),
new monAn({
    ma_mon:3,
    ma_loai :1,
    ten_mon: 'Phở bò tái',
    noi_dung_tom_tat:'phở',
    noi_dung_chi_tiet:'vị ngon của phở và thịt bò khó thể cưỡng lại',
    don_gia:50000,
    don_gia_khuyen_mai:0,
    hinh:'../images/phobo.jpg'
}),
new monAn({
    ma_mon:4,
    ma_loai :3,
    ten_mon: 'Cà tím chiên kiểu Hàn Quốc',
    noi_dung_tom_tat:'cà tím',
    noi_dung_chi_tiet:'cà tím chiên kiểu Hàn Quốc',
    don_gia:50000,
    don_gia_khuyen_mai:0,
    hinh:'../images/catimchien.jpg'
}),
new monAn({
    ma_mon:5,
    ma_loai :3,
    ten_mon: 'Tam Quý khai vị Thủy Tạ',
    noi_dung_tom_tat:'khai vị',
    noi_dung_chi_tiet:'Với sự kết hợp một cách hài hòa các loại món ăn khai vị bổ dưỡng, cộng với phần bày trí thật sinh động và lãng mạn,đã tạo nên ấn tượng khó phai cho quý khách đến dự tiệc tại Nhà hàng Ẩm thực Việt',
    don_gia:200000,
    don_gia_khuyen_mai:0,
    hinh:'../images/TamquyKhaivi.jpg'
}),
new monAn({
    ma_mon:6,
    ma_loai :3,
    ten_mon: 'Chả giò long phụng',
    noi_dung_tom_tat:'chả giò',
    noi_dung_chi_tiet:'Chả giò long phụng',
    don_gia:60000,
    don_gia_khuyen_mai:0,
    hinh:'../images/chagiolongphung.jpg'
}),
new monAn({
    ma_mon:7,
    ma_loai :2,
    ten_mon: 'Súp cua vị nấm',
    noi_dung_tom_tat:'súp',
    noi_dung_chi_tiet:'súp cua vị nấm',
    don_gia:45000,
    don_gia_khuyen_mai:0,
    hinh:'../images/supcua.jpg'
}),
new monAn({
    ma_mon:8,
    ma_loai :2,
    ten_mon: 'Gỏi Trung Hoa',
    noi_dung_tom_tat:'gỏi',
    noi_dung_chi_tiet:'gỏi Trung Hoa',
    don_gia:100000,
    don_gia_khuyen_mai:0,
    hinh:'../images/goitrunghoa.jpg'
}),
new monAn({
    ma_mon:9,
    ma_loai :2,
    ten_mon: 'Salad rau trộn',
    noi_dung_tom_tat:'salad',
    noi_dung_chi_tiet:'salad rau trộn',
    don_gia:80000,
    don_gia_khuyen_mai:0,
    hinh:'../images/saladrautron.jpg'
}),
new monAn({
    ma_mon:10,
    ma_loai :4,
    ten_mon: 'Ếch đồng rang muối',
    noi_dung_tom_tat:'ếch đồng',
    noi_dung_chi_tiet:'ếch đồng rang muối',
    don_gia:75000,
    don_gia_khuyen_mai:70000,
    hinh:'../images/echdongnuongmuoiot.jpg'
}),
new monAn({
    ma_mon:11,
    ma_loai :4,
    ten_mon: 'Sò dương hấp vị tỏi',
    noi_dung_tom_tat:'sò dương',
    noi_dung_chi_tiet:'sò dương hấp vị tỏi',
    don_gia:100000,
    don_gia_khuyen_mai:85000,
    hinh:'../images/soduonghapvitoi.jpg'
}),
new monAn({
    ma_mon:12,
    ma_loai :4,
    ten_mon: 'Cua Alaska',
    noi_dung_tom_tat:'cua',
    noi_dung_chi_tiet:'cua Alaska',
    don_gia:150000,
    don_gia_khuyen_mai:0,
    hinh:'../images/cua-alaska.jpg'
}),
new monAn({
    ma_mon:13,
    ma_loai :5,
    ten_mon: 'Bắp bò nấu đậu tiêu xanh',
    noi_dung_tom_tat:'bắp bò',
    noi_dung_chi_tiet:'bắp bò nấu đậu tiêu xanh',
    don_gia:120000,
    don_gia_khuyen_mai:0,
    hinh:'../images/bapbonaudautieuxanh.jpg'
}),
new monAn({
    ma_mon:14,
    ma_loai :5,
    ten_mon: 'Bò cuộn kim châm',
    noi_dung_tom_tat:'bò cuộn',
    noi_dung_chi_tiet:'bò cuộn kim châm',
    don_gia:120000,
    don_gia_khuyen_mai:100000,
    hinh:'../images/bocuonkimcham.jpg'
}),
new monAn({
    ma_mon:15,
    ma_loai :5,
    ten_mon: 'Lưỡi bò nấu hạt sen',
    noi_dung_tom_tat:'lưỡi bò',
    noi_dung_chi_tiet:'lưỡi bò nấu hạt sen',
    don_gia:145000,
    don_gia_khuyen_mai:130000,
    hinh:'../images/Luoibo.jpg'
}),
new monAn({
    ma_mon:16,
    ma_loai :6,
    ten_mon: 'Tiết canh vịt',
    noi_dung_tom_tat:'tiết canh',
    noi_dung_chi_tiet:'tiết canh vịt',
    don_gia:60000,
    don_gia_khuyen_mai:50000,
    hinh:'../images/Tietcanhvit.jpg'
}),
new monAn({
    ma_mon:17,
    ma_loai :6,
    ten_mon: 'Gà hấp lá chanh',
    noi_dung_tom_tat:'gà hấp',
    noi_dung_chi_tiet:'gà hấp lá chanh',
    don_gia:200000,
    don_gia_khuyen_mai:0,
    hinh:'../images/gahaplasen.jpg'
}),
new monAn({
    ma_mon:18,
    ma_loai :6,
    ten_mon: 'Gà cánh phượng hạnh nhân',
    noi_dung_tom_tat:'gà',
    noi_dung_chi_tiet:'gà cánh phượng hạnh nhân',
    don_gia:250000,
    don_gia_khuyen_mai:220000,
    hinh:'../images/canhphuonghanhnhan.jpg'
}),
new monAn({
    ma_mon:19,
    ma_loai :7,
    ten_mon: 'Cơm Tứ Quý',
    noi_dung_tom_tat:'cơm',
    noi_dung_chi_tiet:'cơm tứ quý',
    don_gia:150000,
    don_gia_khuyen_mai:0,
    hinh:'../images/Comtuquy.jpg'
}),
new monAn({
    ma_mon:20,
    ma_loai :7,
    ten_mon: 'Cơm rang hải sản',
    noi_dung_tom_tat:'cơm rang',
    noi_dung_chi_tiet:'cơm rang hải sản thơm ngon',
    don_gia:80000,
    don_gia_khuyen_mai:0,
    hinh:'../images/comranghaisan.jpg'
}),
new monAn({
    ma_mon:21,
    ma_loai :7,
    ten_mon: 'Mì hải sản',
    noi_dung_tom_tat:'mì',
    noi_dung_chi_tiet:'vị ngon từ sự kết hợp giữa mì và vị ngon của hải sản tươi ngon',
    don_gia:60000,
    don_gia_khuyen_mai:50000,
    hinh:'../images/MyHaiSan.jpg'
}),
new monAn({
    ma_mon:22,
    ma_loai :8,
    ten_mon: 'Lẩu ngũ vị',
    noi_dung_tom_tat:'lẩu',
    noi_dung_chi_tiet:'sự kết hợp tuyệt vời của năm vị trong một nồi lẩu',
    don_gia:400000,
    don_gia_khuyen_mai:0,
    hinh:'../images/LauNguVi.jpg'
}),
new monAn({
    ma_mon:23,
    ma_loai :8,
    ten_mon: 'Lẩu Thái Lan',
    noi_dung_tom_tat:'lẩu',
    noi_dung_chi_tiet:'lẩu thái lan chua chua cay cay ngon tuyệt',
    don_gia:400000,
    don_gia_khuyen_mai:0,
    hinh:'../images/lauThaiLan.jpg'
}),
new monAn({
    ma_mon:24,
    ma_loai :8,
    ten_mon: 'Lẩu cháo cua đồng',
    noi_dung_tom_tat:'lẩu',
    noi_dung_chi_tiet:'lẩu cháo cua đồng',
    don_gia:400000,
    don_gia_khuyen_mai:0,
    hinh:'../images/Laucuadong.jpg'
}),
new monAn({
    ma_mon:25,
    ma_loai :9,
    ten_mon: 'Bia các loại',
    noi_dung_tom_tat:'bia',
    noi_dung_chi_tiet:'bia các loại',
    don_gia:16000,
    don_gia_khuyen_mai:0,
    hinh:'../images/BiaTiger.jpg'
}),
new monAn({
    ma_mon:26,
    ma_loai :9,
    ten_mon: 'Rượu các loại',
    noi_dung_tom_tat:'rượu',
    noi_dung_chi_tiet:'Rượu nước ngoài',
    don_gia:0,
    don_gia_khuyen_mai:0,
    hinh:'../images/Turuou.jpg'
}),
new monAn({
     ma_mon:27,
    ma_loai :9,
    ten_mon: 'Đồ uống',
    noi_dung_tom_tat:'đồ uống',
    noi_dung_chi_tiet:'đồ uống',
    don_gia:10000,
    don_gia_khuyen_mai:0,
    hinh:'../images/douongcualo3.jpg'
}),
new monAn({
    ma_mon:28,
    ma_loai :10,
    ten_mon: 'Sinh tố các loại',
    noi_dung_tom_tat:'sinh tố',
    noi_dung_chi_tiet:'sinh tố tươi mát',
    don_gia:30000,
    don_gia_khuyen_mai:25000,
    hinh:'../images/sinhto.jpg'
}),
new monAn({
    ma_mon:29,
    ma_loai :10,
    ten_mon: 'Trái cây bốn mùa',
    noi_dung_tom_tat:'trái cây',
    noi_dung_chi_tiet:'trái cây tươi ngon',
    don_gia:60000,
    don_gia_khuyen_mai:0,
    hinh:'../images/traicaytrangmieng.jpg'
}),
new monAn({
    ma_mon:30,
    ma_loai :10,
    ten_mon: 'Ngọc trong đá',
    noi_dung_tom_tat:'tráng miệng',
    noi_dung_chi_tiet:'ngọc trong đá tươi ngon',
    don_gia:100000,
    don_gia_khuyen_mai:0,
    hinh:'../images/ngoctrongda.jpg'
})


];
var done = 0;
for(var i = 0; i<mon_an.length; i++)
{
    mon_an[i].save(function(err, result){
        done ++;
        if(done === mon_an.length)
        {
            exist();
        }
    });
   
}
function exist()
{
    mongoose.disconnect();
}
