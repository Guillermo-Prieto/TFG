module.exports = {
    isLoggedIn (req, res, next) {
        if(req.session.user != null){
            next();
        }
        else{
            res.status(400).json({message: "Usuario no loggeado"});
           
        }
    
},
isNotLoggedIn (req, res, next) {
    if(req.session.user == null){
        next();
    }
    else{
        res.status(400).json({message: "Usuario ya loggeado"});
    }
},
isAdmin (req, res, next) {
    if(req.session.user.rol === 'administrador'){
        next();
    }
    else{
        res.status(400).json({message: "Usuario no es administrador"});
    }
}    



};