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
app.use(cors({
    origin: ["http://localhost:8000"],
    methods: ["GET", "POST"],
    credentials: true,
}));
app.use(cookieParser());
app.use(
    session({
      key: "userId",
      secret: "sinjertosSecreto",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 60 * 60 * 24, //se mantendra la sesion en 24 h
      },
    })
  );



//routes 

app.use(injertosRoutes); 
app.use(autenticacionRoutes); 
app.use(usuariosRoutes); 


app.listen(app.get('port'),()=>{
    console.log('listening on http://localhost:8000');
});