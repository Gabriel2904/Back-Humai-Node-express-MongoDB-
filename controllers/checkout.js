// SDK de Mercado Pago
const { response } = require("express");
const mercadopago = require("mercadopago");
const bodyParser = require("body-parser")

// Agrega credenciales
mercadopago.configure({
  access_token:
    "TEST-5048789742988019-020711-b7622f7a362bf837d6a09d99e7b3e58a-355491658",
});
const createPreference = async (req, res) => {
  // Crea un objeto de preferencia
  
  let preference = {
      items: [
        {
          title:req.body.title,
          unit_price: parseInt(req.body.price),
          quantity: 1,
        }
      ]
    };
    
    mercadopago.preferences.create(preference)
    .then(function(response){
    
      res.redirect(response.body.init_point);
     
    }).catch(function(error){
      console.log(error);
    });
  };
module.exports = { createPreference };
