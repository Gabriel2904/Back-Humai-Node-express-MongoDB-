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
          reason: "Holo",
          title: req.body.title,
          unit_price: parseInt(req.body.price),
          currency_id: "ARS",
          quantity: 1,
          auto_recurring: {
            frequency: "1",
            frequency_type: "months",
            transaction_amount: parseInt(req.body.price),
            currency_id: "ARS",
            repetitions: "12",
            free_trial: {
              frequency_type: "months",
              frequency: "1",
            },
          },
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
