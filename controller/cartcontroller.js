var monAn = require('../model/MonAn');
var Cart = require('../model/GioHang');



module.exports.addToCart = (req,res)=>{
    var productId = req.params.id;
    var cart = new Cart (req.session.cart ? req.session.cart : {} );
    console.log(cart);
    monAn.findOne({ma_mon : productId},function(err, result){
        if(err) return res.redirect('/');
        cart.addToCart(result,result.id);
        req.session.cart =cart;
        console.log(req.session.cart);
        res.redirect('/');
    });    
}

module.exports.cartView= (req,res)=>{
    if(!req.session.cart){
        return res.render('shop/cartview', {products: null});

    }
    var cart = new Cart(req.session.cart);
    res.render('shop/cartview', {user: req.user,products: cart.returnArr(), totalPrice: cart.totalPrice})
}

module.exports.checkOut=(req,res)=>{
    var messages=req.flash('error');
    var link ='';
    if(req.isAuthenticated()){
        if(!req.session.cart){
            return res.redirect('shop/cartview')
        }
        res.render('shop/checkout', {user: req.user,total :new Cart(req.session.cart).totalPrice, csrfToken: req.csrfToken(), messages:messages, hasError:messages.length>0})
    }
    else {
        res.render('customer/signin',{csrfToken: req.csrfToken(), messages:messages, hasError:messages.length>0})
    }

}

module.exports.postCheckOut=(req,res,next)=>{
    console.log('check out -------> ok')
    req.session.cart = null;
    res.redirect('/')
}