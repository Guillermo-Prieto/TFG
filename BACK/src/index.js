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


/*const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'tfgdatabase',
});


app.get('/', (req, res)=>{
    let sql = "INSERT INTO Injertos (validez, edad, sexo, imc, hta, dm, dlp, apm, apq, ecografia, got, gpt, ggt, na, bbt, acvhc, acvhbc, dosisna, aminas) VALUES (63,'Masculino',24.49,  False, False, False, False, False, 'normal',15, 18, 43, 138, 0.4, False, False, 0.0, False);"
    db.query(sql, (err, resut)=>{
        if (err) throw err;
        res.send("Esta es la página de inicio donde podrás loggearte");
    
    
});*/

app.listen(app.get('port'),()=>{
    console.log('listening on http://localhost:8000');
});