const express= require('express');
const app = express();  
const morgan = require('morgan');   
const cors = require('cors');
const cookieParser = require("cookie-parser");
const session = require("express-session");


//settings
app.set('port', process.env.PORT || 8000);


// importing routes
const injertosRoutes = require('./routes/injertos');
const autenticacionRoutes = require('./routes/autenticacion');
const usuariosRoutes = require('./routes/usuarios');


//middlewares
app.use(morgan('dev')); //nos informa de las peticiones realizadas
app.use(express.urlencoded({extended: false})); //para aceptar desde los formularios los datos sencillos (false) que den los usuarios
app.use(express.json()); //para aceptar json
app.use(cors());
app.use(cookieParser());
app.use(
    session({
      key: "userId",
      secret: "injertosSecreto",
      resave: true,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000, //se mantendra la sesion en ms
      },
    })
  );



//routes 


app.use(autenticacionRoutes);
app.use(injertosRoutes);  
app.use(usuariosRoutes); 


app.listen(app.get('port'),()=>{
    console.log('listening on http://localhost:8000');
});