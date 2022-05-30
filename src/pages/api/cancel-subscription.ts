import { NextApiResponse, NextApiRequest } from "next";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {apiVersion: '2020-08-27'})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const { method } = req

    if (method === 'POST') {
        try {
            await stripe.subscriptions.update(req.body.subId, {
                cancel_at_period_end: true
            })
            res.send({ message: 'Inscrição cancelada!'})
        } catch (error) {
            res.send({ error })
        }
    }
}