const MercadoPago = require("mercadopago");

class SubscriptionService {
  constructor() {
    MercadoPago.configure({
      access_token:
        "TEST-5048789742988019-020711-b7622f7a362bf837d6a09d99e7b3e58a-355491658",
    });
  }

  async getSubscriptionLink() {
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
        //en este ejemplo es 1 vez al mes
        transaction_amount: 100,
        //precio de la suscripción
        currency_id: "ARS",
        //moneda a cobrar
      },
    };

    try {
      const mp = await MercadoPago.preapproval.create(preference);
      //usamos el sdk de mercado pago

      const linkCheckout = mp && mp.response && mp.response.init_point;
      //obtenemos el link

      return linkCheckout;
      //le devolvemos el link al controller
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}

module.exports = SubscriptionService;
