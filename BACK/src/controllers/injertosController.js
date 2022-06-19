const controller = {};
const db = require('../database');

//mostrar todos los injertos
controller.getInjertos = (req, res) => {
     db.query('SELECT * FROM injertos', (err, injertos) => {
     if (err) {
      res.json(err);
     }
     //esto habria que cambiarlo por lo de abajo
     else{
        res.send(injertos); //devuelve los injertos en formato json
     }
     //aqui habra que vincularlo con la vista correspondiente donde se listen los injertos
     /*res.render('nombre de la vista', {
        data: customers
     });*/
    });
  }

//crear un injerto
   controller.addInjerto =  (req, res) => {
    const edad = req.body.edad;
    if(req.body.sexo == 'masculino'){
      var sexo = 1;
    }
    else{
      var sexo = 0;
    }
    const imc = req.body.imc;
    const hta = req.body.hta;
    const dm = req.body.dm;
    const dlp = req.body.dlp;
    const apm = req.body.apm; 
    const apq = req.body.apq; //el boton devolvera true o false
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
    const got = req.body.got;
    const gpt = req.body.gpt;
    const ggt = req.body.ggt;
    const na    = req.body.na;
    const bbt = req.body.bbt;
    const acvhc = req.body.acvhc; 
    const acvhbc = req.body.acvhbc;
    if(req.body.dosisna == null) {
      var dosisna = 0.0;
    }
    else{
      dosisna = req.body.dosisna;
    }
    const aminas = req.body.aminas;
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
    
    
      db.query('SELECT * FROM injertos WHERE id = ?', [req.params.id], (err, injerto) => {
        if (err) {
            res.json(err);
           }
           else{
              res.send(injerto); //devuelve el injerto en formato json
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
  const id = req.params.id;
  const edad = req.body.edad;
  if(req.body.sexo == 'masculino'){
    var sexo = 1;
  }
  else{
    var sexo = 0;
  }
  const imc = req.body.imc;
  const hta = req.body.hta;
  const dm = req.body.dm;
  const dlp = req.body.dlp;
  const apm = req.body.apm; 
  const apq = req.body.apq; //el boton devolvera true o false
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
  const got = req.body.got;
  const gpt = req.body.gpt;
  const ggt = req.body.ggt;
  const na    = req.body.na;
  const bbt = req.body.bbt;
  const acvhc = req.body.acvhc; 
  const acvhbc = req.body.acvhbc;
  if(req.body.dosisna == null) {
    var dosisna = 0.0;
  }
  else{
    dosisna = req.body.dosisna;
  }
  const aminas = req.body.aminas;
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








module.exports = controller;