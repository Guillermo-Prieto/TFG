const express= require('express');
const app = express();  
const morgan = require('morgan');   

//settings
app.set('port', process.env.PORT || 8000);


// importing routes
const injertosRoutes = require('./routes/injertos');
const indexRoutes = require('./routes/index');
const autenticacionRoutes = require('./routes/autenticacion');


//middlewares
app.use(morgan('dev')); //nos informa de las peticiones realizadas
app.use(express.urlencoded({extended: false})); //para aceptar desde los formularios los datos sencillos (false) que den los usuarios
app.use(express.json()); //para aceptar json


//routes 

app.use(indexRoutes);
app.use(injertosRoutes); 
app.use(autenticacionRoutes); 


app.listen(app.get('port'),()=>{
    console.log('listening on http://localhost:8000');
});