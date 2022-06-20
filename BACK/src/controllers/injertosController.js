const controller = {};
const db = require('../database');
const request = require('request');
const { response } = require('express');

//mostrar todos los injertos con sus valoraciones
controller.getInjertos = (req, res) => {
     db.query('SELECT id, edad, sexo, imc, hta, dm, dlp, apm, apq, got, gpt, ggt, na,bbt, acvhc, acvhbc, dosisna, aminas, ecografia_1, ecografia_2, ecografia_3,validez,acierto,probabilidad FROM injertos i LEFT OUTER JOIN valoraciones v ON  v.id_injerto = i.id;', (err, rows, fields) => {
     if (err) {
      res.json(err);
     }
     //esto habria que cambiarlo por lo de abajo
     else{
        res.json(rows); //devuelve los injertos en formato json
     }
     //aqui habra que vincularlo con la vista correspondiente donde se listen los injertos
     /*res.render('nombre de la vista', {
        data: customers
     });*/
    });
  }

//crear un injerto
   controller.addInjerto =  (req, res) => {
    var edad = req.body.edad;
    if(req.body.sexo == 'masculino'){
      var sexo = 1;
    }
    else{
      var sexo = 0;
    }
    var imc = req.body.imc;
    var hta = req.body.hta;
    var dm = req.body.dm;
    var dlp = req.body.dlp;
    var apm = req.body.apm; 
    var apq = req.body.apq; //el boton devolvera true o false
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
    console.log(req.body);
    var fecha = new Date();
    db.query(
      "INSERT INTO injertos (edad, sexo, imc, hta, dm, dlp, apm, apq, got, gpt, ggt, na,bbt, acvhc, acvhbc, dosisna, aminas, ecografia_1, ecografia_2, ecografia_3, fecha) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) RETURNING id",
      [edad, sexo, imc, hta, dm, dlp, apm, apq, got, gpt, ggt, na,bbt, acvhc, acvhbc, dosisna, aminas, ecografia_1, ecografia_2, ecografia_3, fecha],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
            console.log("Injerto insertado");
            const { id } = result.rows[0];
            var ruta =  "/injertos/" + str(id);
            res.redirect(ruta);
        }
      }
    );   

  };

  //ver solo un injerto
  controller.getInjerto = (req, res) => {
    console.log(req.params);
    
    
      db.query('SELECT id, edad, sexo, imc, hta, dm, dlp, apm, apq, got, gpt, ggt, na,bbt, acvhc, acvhbc, dosisna, aminas, ecografia_1, ecografia_2, ecografia_3,validez,acierto,probabilidad FROM injertos i LEFT OUTER JOIN valoraciones v ON  v.id_injerto = i.id where id = ?;', [req.params.id], (err, injerto) => {
        if (err) {
            res.json(err);
           }
           else{
              res.json(injerto); //devuelve el injerto en formato json
           }
      });
    
  };


  //borrar un injerto
  controller.deleteInjerto = (req, res) => {
    console.log(req.params);
      db.query('DELETE FROM injertos WHERE id = ?', [req.params.id], (err, injerto) => {
        if (err) {
            console.log(err);
           }
           else{
            console.log("Se ha eliminado correctamente");
            res.redirect('/injertos');

           }
      });
    
      
  };


//editar un injerto
controller.editInjerto =  (req, res) => {
  var id = req.params.id;
  var edad = req.body.edad;
  if(req.body.sexo == 'masculino'){
    var sexo = 1;
  }
  else{
    var sexo = 0;
  }
  var imc = req.body.imc;
  var hta = req.body.hta;
  var dm = req.body.dm;
  var dlp = req.body.dlp;
  var apm = req.body.apm; 
  var apq = req.body.apq; //el boton devolvera true o false
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
  console.log(req.body);

  db.query(
    "UPDATE injertos SET edad=?, sexo=?, imc=?, hta=?, dm=?, dlp=?, apm=?, apq=?, got=?, gpt=?, ggt=?, na=?,bbt=?, acvhc=?, acvhbc=?, dosisna=?, aminas=?, ecografia_1=?, ecografia_2=?, ecografia_3=?) WHERE id=?",
    [edad, sexo, imc, hta, dm, dlp, apm, apq, got, gpt, ggt, na,bbt, acvhc, acvhbc, dosisna, aminas, ecografia_1, ecografia_2, ecografia_3,id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
          console.log("Injerto modificado");
          var ruta =  "/injertos/" + st(id);
          res.redirect(ruta);
      }
    }
  );   

};


//devolver la predicción y crear valoracion

controller.prediccion = (req, res) => {
  
  db.query('SELECT * FROM injertos WHERE id = ?', [req.params.id], (err, injerto) => {
    if (err) {
        res.json(err);
       }
       else{
        
          var edad = injerto[0]['edad'];
          var sexo = injerto[0]['sexo'];
          var imc = injerto[0]['imc'];
          var hta = injerto[0]['hta'];
          var dm = injerto[0]['dm'];
          var dlp = injerto[0]['dlp'];
          var apm = injerto[0]['apm']; 
          var apq = injerto[0]['apq']; //el boton devolvera true o false
          var ecografia_1 = injerto[0]['ecografia_1'];
          var ecografia_2 = injerto[0]['ecografia_2']; 
          var ecografia_3 = injerto[0]['ecografia_3'];
          var got = injerto[0]['got'];
          var gpt = injerto[0]['gpt'];
          var ggt = injerto[0]['ggt'];
          var na    = injerto[0]['na'];
          var bbt = injerto[0]['bbt'];
          var acvhc = injerto[0]['acvhc']; 
          var acvhbc = injerto[0]['acvhbc'];
          var dosisna = injerto[0]['dosisna'];
          var aminas = injerto[0]['aminas'];

          var params = `edad=${edad}&sexo=${sexo}&imc=${imc}&hta=${hta}&dm=${dm}&dlp=${dlp}&apm=${apm}&apq=${apq}&got=${got}&gpt=${gpt}&ggt=${ggt}&na=${na}&bbt=${bbt}&acvhc=${acvhc}&acvhbc=${acvhbc}&dosisna=${dosisna}&aminas=${aminas}&ecografia_1=${ecografia_1}&ecografia_2=${ecografia_2}&ecografia_3=${ecografia_3}`;
            
            request(
              {
                method: "GET",
                uri: `http://localhost:8080/predict?${params}`,
                json: true,
              },
              (error, response) => {
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
                db.query(
                  "INSERT INTO valoraciones (validez, probabilidad, id_injerto) VALUES (?,?,?);",
                  [clasificacion, probabilidad, req.params.id],
                  (err, result) => {
                    if (err) {
                      console.log(err);
                    } else {
                        console.log("Valoración guardada");
                        
                    }
                  }
                );   

                res.send(solucion);
                
                
                
              });
              
          };
          
          
          
       });
  };




module.exports = controller;