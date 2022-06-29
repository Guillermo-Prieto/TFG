module.exports = {
    isLoggedIn (req, res, next) {
        if(req.session.user != null){
            next();
        }
        else{
            res.json({ message: "Usuario no loggeado" });
        }
    
}
/*auth (req, res, next) {
        try{
            const token = req.cookies.jwt;
            const verifyUser = jwt.verify(token, 'secret'
        }
    }*/
    


    /*isLoggedIn (req, res, next) {
        const bearerHeader = req.headers['authorization'];
        console.log(bearerHeader);

        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(" ");
            const bearerToken = bearer[1];
            req.token = bearerToken;
            next();
        } else {
            res.sendStatus(403);
        }
            
}*/


};