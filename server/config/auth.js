module.exports = {
isAuthenticated: function(req ,res, next) {
    console.log();
        if (req.isAuthenticated()) {
            console.log("it worked!")
            return next();
        } else {
        req.flash("error_msg", "Please login to view this page");
        res.send("failed try again");
    }
}
}