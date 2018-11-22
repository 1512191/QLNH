var passport = require("passport");
var Customer = require("../model/KhachHang");
var LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Customer.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "userName",
      passwordField: "passWord",
      passReqToCallback: true
    },
    (req, userName, passWord, done) => {
      req
        .checkBody("userName", "Tài khoản không hợp lệ")
        .notEmpty()
        .isLength({ min: 6 });
      req
        .checkBody("passWord", "Mật khẩu không hợp lệ")
        .notEmpty()
        .isLength({ min: 8 });
      req
        .checkBody("passWord2", "Nhập lại mật khẩu k đúng")
        .equals(req.body.passWord);

      var errors = req.validationErrors();
      if (errors) {
        var messages = [];
        errors.forEach(error => {
          messages.push(error.msg);
        });
        return done(null, false, req.flash("error", messages));
      }
      Customer.findOne({ userName: userName }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, false, { message: "tài khoản đc sử dụng !" });
        }
        var newCus = new Customer();
        newCus.userName = userName;
        newCus.passWord = newCus.encryptPassWord(passWord);
        newCus.ten_khach_hang = 'ádad'
        newCus.save((err, result) => {
          if (err) {
            return done(err);
          }
          return done(null, newCus);
        });
      });
    }
  )
);

passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "userName",
      passwordField: "passWord",
      passReqToCallback: true
    },
    (req, userName, passWord, done) => {
        req
          .checkBody("userName", "Tài khoản không hợp lệ")
          .notEmpty()
          .isLength({ min: 6 });
        req
          .checkBody("passWord", "Mật khẩu không hợp lệ")
          .notEmpty()
          .isLength({ min: 8 });  
        var errors = req.validationErrors();
        if (errors) {
          var messages = [];
          errors.forEach(error => {
            messages.push(error.msg);
          });
          return done(null, false, req.flash("error", messages));
        }
        
        Customer.findOne({ userName: userName }, (err, user) => {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, { message: "Tài khoản k tồn tại !" });
          }
         
          if(!user.decryptPassWord(passWord)){
              return done(null,false,{message:'Sai mật khẩu'});
          }
          return done(null, user);
        });    
      }
  )
);
