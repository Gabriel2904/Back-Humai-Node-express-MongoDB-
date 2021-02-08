// SDK de Mercado Pago
const mercadopago = require("mercadopago");

// Agrega credenciales
mercadopago.configure({
  access_token:
    "TEST-5048789742988019-020711-b7622f7a362bf837d6a09d99e7b3e58a-355491658",
});
/*const createPreference = async (req, res) => {
  try {
    let preference = {
      items: [
        {
          title: "Mi producto",
          quantity: 1,
          unit_price: 75.76,
        },
      ],
    };

    mercadopago.preferences.create(preference).then(function (response) {
      res.redirect(response.body.init_point);
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

});*/

// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: "Mi producto",
      unit_price: 100,
      quantity: 1,
    },
  ],
};

mercadopago.preferences
  .create(preference)
  .then(function (response) {
    // Este valor reemplazará el string "<%= global.id %>" en tu HTML
    console.log(response.body);
  })
  .catch(function (error) {
    console.log(error);
  });

module.exports = {};
