import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(req: Request) {
  try {
    const { productId, email, title, price } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'], // Palaiko Stripe, Apple Pay, Google Pay, Revolut Pay
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: title,
              description: 'Skaitmeninis AI produktas - momentinis pristatymas',
            },
            unit_amount: Math.round(price * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/shop`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
