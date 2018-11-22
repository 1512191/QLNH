var bill = require('../model/HoaDon');
var detail_bill = require('../model/ChiTietHoaDon');
exports.adminListBill=(req, res)=>{
    bill.find(function(err, result){
        if(err) throw err;
        res.render('admin/list_bill',  { layout:'../admin/layout.hbs', result });
      })      
}
exports.adminDetail=(req, res)=>{

}
exports.adminUpdate=(req, res)=>{
    var ma = req.params.id;
    bill.findOne({ma :ma}, function(err, result){
      if(err) throw err;
      res.render('admin/update_bill', {layout:'../admin/layout.hbs', result, csrfToken:req.csrfToken() });  
     
    })
}
exports.adminDeleteBill=(req, res)=>{
    var ma = req.params.id;
    bill.deleteOne({_idmahd : ma}, function(err, result){
        if(err) throw err;
        else console.log("Xoa thanh cong!");
     
    })
    bill.find(function(err, result){
        if(err) throw err;
        res.render('admin/list_bill',  { layout:'../admin/layout.hbs', result });
      })

}