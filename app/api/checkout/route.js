import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getProductById } from '../../../data/products';

export async function POST(request) {
  try {
    const { items } = await request.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty.' }, { status: 400 });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe is not configured on this server yet.' },
        { status: 500 }
      );
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    // Re-derive price/name from our own product data rather than trusting
    // the client, so nobody can tamper with prices in the browser.
    const line_items = items.map((cartItem) => {
      const product = getProductById(cartItem.id);
      if (!product) {
        throw new Error(`Unknown product: ${cartItem.id}`);
      }
      return {
        quantity: cartItem.qty,
        price_data: {
          currency: 'usd',
          unit_amount: product.price,
          product_data: {
            name: product.name,
            metadata: { sku: product.sku },
          },
        },
      };
    });

    const origin = request.headers.get('origin');

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      phone_number_collection: { enabled: true },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Checkout error:', err);
    return NextResponse.json(
      { error: 'Could not start checkout. Please try again.' },
      { status: 500 }
    );
  }
}
