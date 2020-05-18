const UserModel = require("../models/user");
module.exports.signupUser = function(req, res) {
	UserModel.create(req.body).then(function(user){
		req.session.user = user;
		res.redirect("home");
    }).catch(err=>{
		console.log('err',err);
		res.render("signup",{ message: 'user already exist' });
	});
};
module.exports.logout = function(req, res) {
	if (req.session.user) {
		req.session.destroy(function() {
			console.log(" logged out.");
		});
		res.redirect('login');
	} else {
		console.log("Nobody is currently logged in!");
		res.redirect('login');
	}
};
module.exports.loginUser = function(req, res) {
	UserModel.findOne({email:req.body.email}).then(user => {
		if(user !== null && user.password === req.body.password){
			req.session.user = user;
			res.redirect("home");
		}else{
			res.render("login",{ message: 'invalid' });
		}
	})
};