const { request } = require("express");

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
    if(req.session.user[0].rol == 'administrador'){
        next();
    }
    else{
        res.status(400).json({message: "Usuario no es administrador"});
    }
},
isTheSameUserOrAdmin (req, res, next){
    if((req.session.user[0].dni == req.params.dni.toUpperCase()) || (req.session.user[0].rol == "administrador")){
        next();
    }
    else{
        res.status(400).json({message: "No puede acceder a esta información"});
    }
}   



};