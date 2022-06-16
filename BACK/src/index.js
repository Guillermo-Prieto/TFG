const express= require('express');
const app = express();  
const mysql =   require('mysql2');


const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'tfgdatabase',
});


app.get('/', (req, res)=>{
    let sql = "INSERT INTO Injertos (validez, edad, sexo, imc, hta, dm, dlp, apm, apq, ecografia, got, gpt, ggt, na, bbt, acvhc, acvhbc, dosisna, aminas) VALUES (0,63,'Masculino',24.49,  False, False, False, False, False, 'normal',15, 18, 43, 138, 0.4, False, False, 0.0, False);"
    db.query(sql, (err, resut)=>{
        if (err) throw err;
        res.send(resut);
    })
    
});

app.listen(8000,()=>{
    console.log('listening on http://localhost:8000');
});