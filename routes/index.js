const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");

// ================================= GET =============================================

router.get("/home", function(req, res) {
    if(req.session.user){
        res.render("home");
    }else{
        res.render("login",{ message: '' });
    }
});
router.get("/", function(req, res) {
    res.render("home");
});
router.get("/delivery", function(req,res){
    res.render("delivery");
})
router.get("/oneDay.ejs", function(req,res){
    res.render("oneDay");
})
router.get("/twoDay.ejs", function(req,res){
    res.render("twoDay");
})
router.get("/freeDelivery.ejs", function(req,res){
    res.render("freeDelivery");
})
router.get("/login", function(req, res) {
    res.render("login",{ message: '' });
});
router.get("/signup", function(req, res) {
    res.render("signup",{ message: '' });
});
router.get("/canvas", function(req, res) {
    if(req.session.user){
        res.render("canvas");
    }else{
        res.render("login",{ message: '' });
    }
});
router.get('/logout', mainController.logout);

// ================================= POST =============================================

router.post('/signupUser', mainController.signupUser);
router.post('/loginUser', mainController.loginUser);
module.exports = router;