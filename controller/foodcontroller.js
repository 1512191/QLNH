var monAn = require('../model/MonAn');
var Handlebars = require('handlebars');
var loaiMonAn = require('../model/LoaiMonAn')
var multer  = require('multer'); 
var storage = multer.diskStorage({//
  destination: function (req, file, cb) {
     cb(null, '../images/')
  },
  filename: function (req, file, cb) {
    //cb(null, Date.now() + '_' + file.originalname);
    //cb(null, file.originalname)
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname) );

    console.log(file.fieldname);
    console.log(file.originalname);
  }
});
var upload = multer({ storage: storage });
 exports.loadListFood = function(req,res) {
     monAn.find(function(err, docs){
         if(err) return;
        var monAnChuck=[];
        var chucksize = 3;
        for(var i =0; i <docs.length; i+=chucksize){
         monAnChuck.push(docs.slice(i, i+chucksize));
         }
        res.render('index',{  user: req.user, title:'Quản lí quán ăn', mon_ans:monAnChuck});        
    });
};
exports.FoodPage = function(req, res){
    var perPage = 5;
    var page = req.params.page || 1;
    monAn
        .find({})
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function(err, result) {
            monAn.count().exec(function(err, count) {
                if (err) return next(err)
                res.render('thu', {
                    mon_ans: result,
                    current: page,
					pages: Math.ceil(count / perPage),
					size:perPage
                })
            })
        })
        
}


exports.foodDetail= (req, res)=>{
    var ma = req.params.id;
    monAn.findOne({ma_mon : ma},function(err, result){
    if(err) throw err;
    res.render('layouts/single', result);
  });
}

exports.adminMainPage= (req, res)=>{
    res.render('admin/main',  { layout:'../admin/layout.hbs' });
}

exports.adminListFood=(req, res)=>{
    monAn.find(function(err, result){
        if(err) throw err;
        res.render('admin/list_food',  { layout:'../admin/layout.hbs', result });
      })      
}

exports.adminDetailFood=(req, res)=>{
    var ma = req.params.id;
    monAn.findOne({ma_mon : ma}, function(err, result){
      if(err) throw err;
      res.render('admin/detail_food',  { layout:'../admin/layout.hbs',result});
    })
}

var loaiMonAn = require('../model/LoaiMonAn');

exports.adminUpdateFood=(req, res)=>{
    var ma = req.params.id;
    monAn.findOne({ma_mon :ma}, function(err, result){
      if(err) throw err;
      loaiMonAn.find(function(err, kq)
    {
        if(err) throw err;
        res.render('admin/update_food', {layout:'../admin/layout.hbs', result, csrfToken:req.csrfToken() });
    })
     
    })

}
exports.adminInsertFood = (req, res)=>{
  loaiMonAn.find(function(err, result){
    if(err) throw err;
    res.render('admin/insert_food',  { layout:'../admin/layout.hbs', result, csrfToken:req.csrfToken() } );
  })
  
}
exports.adminInsertFoodPost = (req, res)=>{
  req.checkBody('ma', 'Chưa nhập mã!').notEmpty();
  req.checkBody('ten', 'Nhập tên món ăn !').notEmpty();
  req.checkBody('gia', 'Gía của món ăn không hợp lệ!').min(10000);
  var errors = req.getValidationResult()
  if (errors) {
    res.render('admin/insert_food', { flash: { type: 'alert-danger', messages: errors },layout:'../admin/layout.hbs',csrfToken:req.csrfToken()});
  }
  else {
  var ma = req.body.ma;
    var ten = req.body.ten.trim();
    var ndct = req.body.ndct;
    var ndtt = req.body.ndtt;
    var gia = req.body.gia;
    var gkmai = req.body.giakmai;
    var loaiMonAn = req.body.loai.trim();
    var hinh = "../images/" +req.file.filename;
    //var ncn = req.body.ngaycn;
    var dvtinh = req.body.dvt;
    var kmai = req.body.khuyenmai;
  var loaiMoi = new monAn({
  ma_mon:ma,
  ten_mon:ten,
  ma_loai:loaiMonAn,
  noi_dung_tom_tat:ndtt,
 noi_dung_chi_tiet: ndct,
 don_gia: gia,
 don_gia_khuyen_mai:gkmai,
 khuyen_mai:kmai,
 //ngay_cap_nhat:ncn,
 don_vi_tinh:dvtinh,
 hinh:hinh
  })
  
  monAn.findOneAndUpdate(
      { ma_mon: ma },
      loaiMoi,
   // return new doc if one is upserted
   { upsert: true, new: true, runValidators: true}, 
   function(err, doc)
   {
      if(err)
      {
        res.render('admin/insert_food', { flash: { type: 'alert-danger', messages: [ { msg: 'Mã đã tồn tại!' }] },layout:'../admin/layout.hbs',csrfToken:req.csrfToken()});
      }
      else
      {
        res.render('admin/insert_food', { flash: { type: 'alert-success', messages: [ { msg: 'Thành công!' }]}, layout:'../admin/layout.hbs',csrfToken:req.csrfToken()});
      }
   }
  )
}
}
exports.adminPostUpdate=(req, res)=>{
  var errors = req.validationErrors();
	if (errors) {
		var file = '../images/' + req.file.filename;
		var fs = require('fs');
		fs.unlink(file, function(e){
			if(e) throw e;
		 });
		}else
{
    var ma = req.body.ma;
    var ten = req.body.ten.trim();
    var ndct = req.body.ndct;
    var ndtt = req.body.ndtt;
    var gia = req.body.gia;
    var gkmai = req.body.giakmai;
    var loaiMonAn = req.body.loai.trim();
    var hinh = "../images/" +req.file.filename;
    //var ncn = req.body.ngaycn;
    monAn.findOneAndUpdate({ma_mon: ma}, {$set:{ten_mon:ten,noi_dung_tom_tat:ndtt, noi_dung_chi_tiet:ndct, don_gia:gia, don_gia_khuyen_mai:gkmai,
      ma_loai:loaiMonAn, hinh:hinh}}, {new: true}, function(err, result){
      if(err) throw err;
      else{
        console.log(result);
        res.render('admin/update_food', {layout:'../admin/layout.hbs', result, csrfToken:req.csrfToken() });// s laij choo nay
      }
      
    })
}
}
var Handlebars=require('handlebars')
Handlebars.registerHelper('pagination', function(currentPage, totalPage, size, options) {
	var startPage, endPage, context;
  
	if (arguments.length === 3) {
	  options = size;
	  size = 5;
	}
  
	startPage = currentPage - Math.floor(size / 2);
	endPage = currentPage + Math.floor(size / 2);
  
	if (startPage <= 0) {
	  endPage -= (startPage - 1);
	  startPage = 1;
	}
  
	if (endPage > totalPage) {
	  endPage = totalPage;
	  if (endPage - size + 1 > 0) {
		startPage = endPage - size + 1;
	  } else {
		startPage = 1;
	  }
	}
  
	context = {
	  startFromFirstPage: false,
	  pages: [],
	  endAtLastPage: false,
	};
	if (startPage === 1) {
	  context.startFromFirstPage = true;
	}
	for (var i = startPage; i <= endPage; i++) {
	  context.pages.push({
		page: i,
		isCurrent: i === currentPage,
	  });
	}
	if (endPage === totalPage) {
	  context.endAtLastPage = true;
	}
  
	return options.fn(context);
  });
  var HandlebarsIntl = require('handlebars-intl');
  HandlebarsIntl.registerWith(Handlebars);
//thử------------------------------------------------
// Handlebars.registerHelper("formatDate", function(datetime, format) {

//   // Use UI.registerHelper..
//   Handlebars.registerHelper("formatDate", function(datetime, format) {
//     if (moment) {
//       // can use other formats like 'lll' too
//       format = DateFormats[format] || format;
//       return moment(datetime).format(format);
//     }
//     else {
//       return datetime;
//     }
//   })
// });
// var DateFormats = {
//   short: "DD MMMM - YYYY",
//   long: "dddd DD.MM.YYYY HH:mm"
// };