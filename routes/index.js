var express = require('express');
var router = express.Router();
var passport= require('passport')
var monAn = require('../model/MonAn');
var loaiMonAn = require('../model/LoaiMonAn');
var path = require('path');
var multer = require('multer')
var foodcController = require('../controller/foodcontroller');
var typefoodController = require('../controller/typefood.js');
var cartController = require('../controller/cartcontroller.js')
var customerController = require('../controller/customerController');
var accountController = require("../controller/accountcontroller");
var billController  =require("../controller/list_bill");
router.use(multer({dest: 'public/images/'}).single('hinh')); //Beware, you need to match .single() with whatever name="" of your file upload field in html
//app.use(csrf({cookie: true})); //So here follows csurf, _after_ multer
var csrf = require('csurf');
//var csfProtect = csrf();
//router.use(csfProtect);
var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', foodcController.loadListFood);

router.get('/single/:id', foodcController.foodDetail);
//Các thao tác admin
router.get('/admin/SignIn', accountController.adminSignIn);
router.get('/admin',foodcController.adminMainPage);
//Các thao tác thức ăn
router.get('/admin/list_food', foodcController.adminListFood);

router.get('/admin/detail_food/:id',foodcController.adminDetailFood);
router.get('/admin/update_food/:id', foodcController.adminUpdateFood);
router.post('/admin/update_food/:id', foodcController.adminPostUpdate);
router.get('/admin/insert_food', foodcController.adminInsertFood);
router.post('/admin/insert_food', foodcController.adminInsertFoodPost);
//Các thao tác laoij thức ăn
router.get('/admin/list_type_food', typefoodController.adminListTypeFood);

router.get('/admin/update_type_food/:id',typefoodController.adminUpdateTypeFood);

router.post('/admin/update_type_food/:id', typefoodController.adminPostUpdate);
router.get('/admin/insert_type_food',typefoodController.adminInsertTypeFood);
router.post('/admin/insert_type_food/', typefoodController.adminInsertPost);
router.get('/admin/delete_type_food/:id', typefoodController.adminDelete);
//Các thao tác liên quan tới hóa đơn
router.get('/admin/list_bill', billController.adminListBill);
router.get('/admin/delete_bill/:id', billController.adminDeleteBill);
//Các thao tác liên quan tới tài khoản
router.get('/admin/list_account',accountController.adminListAccount);
router.get('/admin/update_account/:id', accountController.adminUpdateAccount);
router.post('/admin/update_account/:id', accountController.adminUpdatePost);
router.get('/admin/delete_account/:id', accountController.adminDelete);
router.get('/admin/insert_account', accountController.adminInsert);
router.post('/admin/insert_account', accountController.adminInsertPost);
  //Các thao tác khách hàng
router.get('/admin/list_customer', customerController.adminListCustomer);
router.get('/admin/update_customer/:id', customerController.adminUpdateCustomer);
router.post('/admin/update_customer/:id', customerController.adminUpdatePost);
router.get('/admin/delete_customer/:id', customerController.adminDeleteCustomer);
router.get('/admin/detail_customer/:id', customerController.adminDetailCustomer);
router.get('/customer/signup', isNotLoggedIn,  customerController.SignUp);
router.post('/customer/signup',passport.authenticate('local.signup',{
   successRedirect:'/customer/signin',
   failureRedirect:'/customer/signup',
   failureFlash:true
}));
router.get('/thu/:page', foodcController.FoodPage);

router.get('/customer/profile', customerController.Profile )

router.get('/customer/signin', isNotLoggedIn,customerController.SignIn)
router.post('/customer/signin',passport.authenticate('local.signin',{ 
    successRedirect : '/',failureRedirect:'/customer/signin',   failureFlash:true  }),
  
);

router.get('/customer/signout', isLoggedIn,function(req,res,next){
  req.logout();
  res.redirect('/');
});

router.get('/add-to-cart/:id',customerController.AddToCart);


router.get('/cartview', cartController.cartView)

router.get('/checkout',cartController.checkOut)

router.post('/checkout', cartController.postCheckOut)


//   router.get('/admin/detail_food/:id', function(req, res){
//     var ma = req.params.id;
//     monAn.aggregate([rs

//       {$lookup:{ from: 'loaiMonAn', localField:'ma_loai', 
//         foreignField:'_id',as:'myCustomResut'}},
// ]).exec((err, result)=>{
//       if (err) {
//           console.log("error" ,err)
//       }
//       if (result) {
//           console.log(result);
//       }
// });
//   })



module.exports = router;

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  console.log("adsadada");
  res.redirect('/')
}
function isNotLoggedIn(req, res, next){
  if(!req.isAuthenticated()){
    return next();
  }
  res.redirect('/')
}
