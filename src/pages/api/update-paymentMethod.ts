import { NextApiResponse, NextApiRequest } from "next";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {apiVersion: '2020-08-27'})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req

    if (method === 'POST') {
        try {
            const customer = await stripe.customers.retrieve(req.body.stripeId)
            const paymentMethod = await stripe.paymentMethods.retrieve(req.body.pm)
            res.send({ paymentMethod })
        } catch (error) {
            res.send({ error })
        }
    }
}