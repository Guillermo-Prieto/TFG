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
    const sexo = req.body.sexo;  
    const imc = req.body.imc;
    const hta = req.body.hta;
    const dm = req.body.dm;
    const dlp = req.body.dlp;
    const apm = req.body.apm; 
    const apq = req.body.apq; //el boton devolvera true o false
    const ecografia = req.body.ecografia; 
    const got = req.body.got;
    const gpt = req.body.gpt;
    const ggt = req.body.ggt;
    const na    = req.body.na;
    const bbt = req.body.bbt;
    const acvhc = req.body.acvhc; 
    const acvhbc = req.body.acvhbc;
    const dosisna = req.body.dosisna;
    const aminas = req.body.aminas;
    console.log(req.body);
  
    db.query(
      "INSERT INTO injertos (edad, sexo, imc, hta, dm, dlp, apm, apq, ecografia, got, gpt, ggt, na,bbt, acvhc, acvhbc, dosisna, aminas) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) RETURNING id",
      [edad, sexo, imc, hta, dm, dlp, apm, apq, ecografia, got, gpt, ggt, na,bbt, acvhc, acvhbc, dosisna, aminas],
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











module.exports = controller;