var KH = require('../model/KhachHang');
var Cart = require('../model/GioHang');
var MonAn = require('../model/MonAn');

module.exports.SignUp=(req,res)=>{
    var messages=req.flash('error');
    res.render('customer/signup',{csrfToken: req.csrfToken(), messages:messages, hasError:messages.length>0});
}

module.exports.SignUpPost= (req,res)=>{
   
}
module.exports.Profile=(req,res)=>{
    var messages=req.flash('error');
    if(req.isAuthenticated()){
      //  var _kh = KH.findById()
        res.render('customer/profile',{user:req.user,csrfToken: req.csrfToken(), messages:messages, hasError:messages.length>0});
    }
    else {
        res.render('customer/signin',{csrfToken: req.csrfToken(), messages:messages, hasError:messages.length>0});
    }
}

module.exports.SignIn= (req,res)=>{
    var messages=req.flash('error');
    res.render('customer/signin',{csrfToken: req.csrfToken(), messages:messages, hasError:messages.length>0});

}

module.exports.AddToCart = (req,res,next)=>{
    var messages=req.flash('error');
    var productId= req.params.id;
    console.log(productId);
    var cart =  new Cart(req.session.cart? req.session.cart:{item:{}});
    MonAn.findById(productId,(err,product)=>{
        if(err){
            return res.redirect('/');
        }
        cart.addItem(product,productId);
        req.session.cart=cart;
        console.log(req.session.cart);
        var sl = req.session.cart.totalQty.toString();
        res.status(200).send(sl);
       // res.redirect('/');
    });
}
exports.adminListCustomer=(req, res)=>{
    KH.find(function(err, result){
        if(err) throw err;
        res.render('admin/list_customer',  { layout:'../admin/layout.hbs', result });
      })  
}
exports.adminDetailCustomer=(req, res)=>{
    var ma= req.params.id;
    KH.findOne({ma_khach_hang : ma}, function(err, result){
        if(err) throw err;
        res.render('admin/detail_customer',  { layout:'../admin/layout.hbs',result});
      })
}
exports.adminUpdateCustomer=(req, res)=>{
    var ma = req.params.id;
    KH.findOne({ma_khach_hang :ma}, function(err, result){
      if(err) throw err;
      res.render('admin/update_customer', {layout:'../admin/layout.hbs', result, csrfToken:req.csrfToken() });  
     
    })
}
exports.adminUpdatePost=(req, res)=>{
    var ma= req.params.id;
    var trangThai=req.body.trangThai.trim();

    KH.findOneAndUpdate({ma_khach_hang: ma}, {$set:{trangThai:trangThai}}, {new: true}, function(err, result){
      if(err) throw err;
      else{
        console.log(result);
        res.render('admin/update_customer', {layout:'../admin/layout.hbs', result, csrfToken:req.csrfToken() });// s laij choo nay
      }
      
    })
}
exports.adminDeleteCustomer=(req, res)=>{
    var ma = req.params.id;
    KH.deleteOne({ma : ma}, function(err, result){
        if(err) throw err;
        else console.log("Xoa thanh cong!");
     
    })
    KH.find(function(err, result){
        if(err) throw err;
        res.render('admin/list_customer',  { layout:'../admin/layout.hbs', result });
      })
}
var Handlebars=require('handlebars');
Handlebars.registerHelper("MauDong", function(currentValue){
    if(currentValue =='VIP'){
        return "alert-danger"
    }else{
       return "alert-success"
    }
 })
 Handlebars.registerHelper ("setChecked", function (value, currentValue) {
    if ( value == currentValue ) {
       return "checked";
    } else {
       return "";
    }
 });
 
Handlebars.registerHelper("Mau", function(currentValue){
    if(currentValue =='VIP'){
        return "btn btn-danger"
    }else{
       return "btn btn-primary"
    }
    
})