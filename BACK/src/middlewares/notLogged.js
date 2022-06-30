module.exports = {
    isNotLoggedIn (req, res, next) {
        if(req.session.user == null){
            next();
        }
        else{
            res.json({ message: "Usuario ya loggeado" });
        }
    
}



};