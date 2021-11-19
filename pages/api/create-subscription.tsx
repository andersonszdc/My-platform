import { NextApiResponse, NextApiRequest } from "next";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {apiVersion: '2020-08-27'})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req
    const { customerId, priceId } = req.body

    if (method === 'POST') {
        try {
            const { latest_invoice } = await stripe.subscriptions.create({
                customer: customerId,
                items: [{
                    price: priceId,
                }],
                payment_behavior: 'default_incomplete',
                expand: ['latest_invoice.payment_intent']
            })
            
            res.send({ latest_invoice })

        } catch (error) {
            res.send({ error })
        }
    }
}