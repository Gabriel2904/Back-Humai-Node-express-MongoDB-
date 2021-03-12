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
    const preference = {
      payer_email: "test@gmail.com",
      //email del usuario comprador
      reason: "prueba de subscripción",
      external_reference: "",
      back_url: "https://ihum.ai/",
      //si se completa el pago
      auto_recurring: {
        //objeto para crear la subscripción
        frequency: 1,
        // frecuencia de cobro
        frequency_type: "months",
        //tipo de frecuencia
        //1 vez al mes
        transaction_amount: parseInt(req.body.price),
        //precio de la suscripción
        currency_id: "ARS",
        //moneda a cobrar
      },
    };

    const response = await mercadopago.preapproval.create(preference);
    return res.redirect(response.body.init_point);
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

module.exports = { merPa };
