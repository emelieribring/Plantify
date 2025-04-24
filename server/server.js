import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Stripe from 'stripe'

dotenv.config()

const app = express()
const port = 4242

app.use(cors())
app.use(express.json())

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
})

app.post('/create-checkout-session', async (req, res) => {
  const items = req.body.items

  const line_items = items.map((item) => ({
    price_data: {
      currency: 'sek',
      product_data: {
        name: item.name,
        images: [item.image],
      },
      unit_amount: item.price * 100, // kr → öre
    },
    quantity: 1,
  }))

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/checkout',
    })

    res.send({ url: session.url })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(port, () => {
  console.log(`Servern körs på http://localhost:${port}`)
})
