const stripe = require('stripe')('sk_test_BQokikJOvBiI2HlWgH4olfQ2');
const dollarsToCents = require('dollars-to-cents')




const createPaymentIntent = async  ({body:{amount}} , res)=>{


     try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: dollarsToCents(amount),
            currency: 'usd',
            payment_method_types : ['card']
        });
        return  res.status(200).send( paymentIntent)

    } catch(err){
        res.status(500).send(err)
    }


}

module.exports = {

    createPaymentIntent
}
