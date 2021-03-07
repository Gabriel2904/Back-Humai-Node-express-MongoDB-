// SDK de Mercado Pago
const mercadopago = require("mercadopago");

// Agrega credenciales
mercadopago.configure({
  access_token:
    "TEST-5048789742988019-020711-b7622f7a362bf837d6a09d99e7b3e58a-355491658",
});

const merPa = async (req, res) => {
  try {
    mercadopago({ req });
    let preference = {
      items: [
        {
          title: "Mi producto",
          unit_price: 2500,
          quantity: 1,
        },
      ],
    };

    const response = await mercadopago.preferences.create(preference);
    return res.redirect(response.body.init_point);
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

module.exports = { merPa };
