import { NextApiResponse, NextApiRequest } from "next";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {apiVersion: '2020-08-27'})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const { method } = req

    if (method === 'POST') {
        try {
            await stripe.customers.list({
                email: req.body.email
            })
            .then( async ({data}) => {
                if (data.length > 0) {
                    res.send({message: 'usuário já criado'})
                } else {
                    const customer = await stripe.customers.create({
                        email: req.body.email,
                        name: req.body.name
                    })
                    res.send({message: customer})
                }
            })
        } catch (error) {
            res.send({ error })
        }
    }
}