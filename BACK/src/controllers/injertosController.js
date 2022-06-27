const controller = {};
const { getConnection } = require('../database')
const request = require('request');
const { response } = require('express');

//mostrar todos los injertos con sus valoraciones
controller.getInjertos = async (req, res) => {
    try {
       
          var connection = await getConnection();
          const result = await connection.query('SELECT id, edad, sexo, imc, hta, dm, dlp, apm, apq, got, gpt, ggt, na,bbt, acvhc, acvhbc, dosisna, aminas, ecografia_1, ecografia_2, ecografia_3,validez,acierto,probabilidad FROM injertos i LEFT OUTER JOIN valoraciones v ON  v.id_injerto = i.id');
          res.json(result);
        
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};




//ver solo un injerto
controller.getInjerto = async (req, res) => {
  try {
      const { id } = req.params;
      const connection = await getConnection();
      const result = await connection.query('SELECT id, edad, sexo, imc, hta, dm, dlp, apm, apq, got, gpt, ggt, na,bbt, acvhc, acvhbc, dosisna, aminas, ecografia_1, ecografia_2, ecografia_3,validez,acierto,probabilidad FROM injertos i LEFT OUTER JOIN valoraciones v ON  v.id_injerto = i.id where id = ?', id);
      res.json(result);
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
};



//crear un injerto
  controller.addInjerto = async (req, res)  => {
    try {
      var edad = req.body.edad;
      if(req.body.sexo == null){
        res.status(400).json({ message: "No pueden ser nulos los campos" });
      }
      else{
      if(req.body.sexo == 'masculino'){
        var sexo = 1;
      }
      else{
        var sexo = 0;
      }}
      var imc = req.body.imc;
      var hta = req.body.hta;
      var dm = req.body.dm;
      var dlp = req.body.dlp;
      var apm = req.body.apm; 
      var apq = req.body.apq; //el boton devolvera true o false
      if(req.body.ecografia == null){
        res.status(400).json({ message: "No pueden ser nulos los campos" });
      }
      else{
        if(req.body.ecografia == 'normal'){
          var ecografia_1 = 1;
          var ecografia_2 = 0;
          var ecografia_3 = 0;
        }
        else if(req.body.ecografia == 'patologica'){
          var ecografia_1 = 0;
          var ecografia_2 = 1;
          var ecografia_3 = 0;
        }
        else{
          var ecografia_1 = 0;
          var ecografia_2 = 0;
          var ecografia_3 = 1;
        }
      }
      
      
      var got = req.body.got;
      var gpt = req.body.gpt;
      var ggt = req.body.ggt;
      var na    = req.body.na;
      var bbt = req.body.bbt;
      var acvhc = req.body.acvhc; 
      var acvhbc = req.body.acvhbc;
      if(req.body.dosisna == null) {
        var dosisna = 0.0;
      }
      else{
        dosisna = req.body.dosisna;
      }
      var aminas = req.body.aminas;
      console.log("se ha procesado el cuerpo")
      
      if (edad == null || imc == null || got == null || gpt == null || ggt == null || na == null || bbt == null)  {
        res.status(400).json({ message: "No pueden ser nulos los campos" });
      }
      
      
      else{
        console.log("ha pasado la validacion")
        
        var fecha = new Date();
        const newInjerto = {
          edad, sexo, imc, hta, dm, dlp, apm, apq, got, gpt, ggt, na,bbt, acvhc, acvhbc, dosisna, aminas, ecografia_1, ecografia_2, ecografia_3, fecha
      };
      console.log("esperando conexion")
      const connection = await getConnection();
      var respuesta = await connection.query('INSERT INTO injertos set ?', [newInjerto]);
      console.log("Injerto insertado");
      res.sendStatus(204);
    // Accedemos la primera row insertada 
      /*var buscandoID = await connection.query('SELECT id FROM injertos where id = (SELECT MAX(id) FROM injertos)');
      var id = buscandoID[0].id;
      console.log(String(id))
      var ruta =  "/injertos/" + String(id);
      res.redirect(ruta);*/
      }
    } catch (error) {
    res.status(500);
    
    }  

};



//editar un injerto
controller.editInjerto = async (req, res)  => {
  try {
    var id = req.params.id;
    var edad = req.body.edad;
    if(req.body.sexo == null){
      res.status(400).json({ message: "No pueden ser nulos los campos" });
    }
    else{
    if(req.body.sexo == 'masculino'){
      var sexo = 1;
    }
    else{
      var sexo = 0;
    }}
    var imc = req.body.imc;
    var hta = req.body.hta;
    var dm = req.body.dm;
    var dlp = req.body.dlp;
    var apm = req.body.apm; 
    var apq = req.body.apq; //el boton devolvera true o false
    if(req.body.ecografia == null){
      res.status(400).json({ message: "No pueden ser nulos los campos" });
    }
    else{
      if(req.body.ecografia == 'normal'){
        var ecografia_1 = 1;
        var ecografia_2 = 0;
        var ecografia_3 = 0;
      }
      else if(req.body.ecografia == 'patologica'){
        var ecografia_1 = 0;
        var ecografia_2 = 1;
        var ecografia_3 = 0;
      }
      else{
        var ecografia_1 = 0;
        var ecografia_2 = 0;
        var ecografia_3 = 1;
      }
    }
    
    
    var got = req.body.got;
    var gpt = req.body.gpt;
    var ggt = req.body.ggt;
    var na    = req.body.na;
    var bbt = req.body.bbt;
    var acvhc = req.body.acvhc; 
    var acvhbc = req.body.acvhbc;
    if(req.body.dosisna == null) {
      var dosisna = 0.0;
    }
    else{
      dosisna = req.body.dosisna;
    }
    var aminas = req.body.aminas;
    console.log("se ha procesado el cuerpo")
    
    if (edad == null || imc == null || got == null || gpt == null || ggt == null || na == null || bbt == null)  {
      res.status(400).json({ message: "No pueden ser nulos los campos" });
    }
    
    
    else{
      console.log("ha pasado la validacion")
      
      var fecha = new Date();
      const newInjerto = {
        edad, sexo, imc, hta, dm, dlp, apm, apq, got, gpt, ggt, na,bbt, acvhc, acvhbc, dosisna, aminas, ecografia_1, ecografia_2, ecografia_3
    };
    console.log("esperando conexion")
    const connection = await getConnection();
    await connection.query('UPDATE injertos set ? WHERE id = ?', [newInjerto, id]);
    console.log("Injerto modificado");
    res.sendStatus(204);
  // Accedemos la primera row insertada 
    //var ruta =  "/injertos/" + String(id);
    //res.redirect(ruta);
    }
  } catch (error) {
  res.status(500);
  
  }  

};

  
//devolver la predicción y crear valoracion

controller.prediccion = async (req, res) => {
  try{

  const connection = await getConnection();
  var injerto = await connection.query('SELECT * FROM injertos WHERE id = ?', [req.params.id]);    
  var edad = injerto[0].edad;
  var sexo = injerto[0].sexo;
  var imc = injerto[0].imc;
  var hta = injerto[0].hta;
  var dm = injerto[0].dm;
  var dlp = injerto[0].dlp
  var apm = injerto[0].apm; 
  var apq = injerto[0].apq; //el boton devolvera true o false
  var ecografia_1 = injerto[0].ecografia_1;
  var ecografia_2 = injerto[0].ecografia_2; 
  var ecografia_3 = injerto[0].ecografia_3;
  var got = injerto[0].got;
  var gpt = injerto[0].gpt;
  var ggt = injerto[0].ggt;
  var na    = injerto[0].na;
  var bbt = injerto[0].bbt;
  var acvhc = injerto[0].acvhc; 
  var acvhbc = injerto[0].acvhbc;
  var dosisna = injerto[0].dosisna;
  var aminas = injerto[0].aminas;

  var params = `edad=${edad}&sexo=${sexo}&imc=${imc}&hta=${hta}&dm=${dm}&dlp=${dlp}&apm=${apm}&apq=${apq}&got=${got}&gpt=${gpt}&ggt=${ggt}&na=${na}&bbt=${bbt}&acvhc=${acvhc}&acvhbc=${acvhbc}&dosisna=${dosisna}&aminas=${aminas}&ecografia_1=${ecografia_1}&ecografia_2=${ecografia_2}&ecografia_3=${ecografia_3}`;
            
            request(
              {
                method: "GET",
                uri: `http://localhost:8080/predict?${params}`,
                json: true,
              },
              async (error, response) => {
                if (error) {
                  throw error;
                }
                var solucion = response.body;
                if(solucion['clasificacion'] == 'No valido'){
                  var clasificacion = 1
                }
                else{
                  var clasificacion = 0;
                }
                
                var probabilidad = solucion['probabilidad'];
                const connection = await getConnection();
                var resultado = await connection.query("INSERT INTO valoraciones (validez, probabilidad, id_injerto) VALUES (?,?,?);",
                [clasificacion, probabilidad, req.params.id]);    
                res.json(solucion);
                
                
                
              });
              
            } catch (error) {
              res.status(500);
              
              }  

        };


     



module.exports = controller;