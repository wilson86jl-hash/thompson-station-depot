'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../components/CartContext';

function formatPrice(cents) {
  return (cents / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

export default function CartPage() {
  const { items, removeItem, updateQty, subtotal } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Something went wrong starting checkout.');
        setLoading(false);
      }
    } catch (e) {
      setError('Could not reach checkout. Try again in a moment.');
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-20 text-center">
        <h1 className="font-stencil uppercase text-3xl text-ink mb-3">
          Your cart is empty
        </h1>
        <p className="text-ink/60 font-body mb-8">
          Nothing tagged for pickup yet.
        </p>
        <Link
          href="/shop"
          className="bg-rust hover:bg-rust/90 text-manila font-stencil uppercase tracking-wide px-7 py-3 rounded-sm transition-colors inline-block"
        >
          Browse Inventory
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-5 py-12">
      <h1 className="font-stencil uppercase text-4xl text-ink mb-8">
        Your Cart
      </h1>

      <div className="divide-y divide-black/10 border-y border-black/10">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 py-5">
            <div className="w-20 h-20 border border-black/10 bg-manilaDark shrink-0 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-body font-semibold text-ink truncate">
                {item.name}
              </p>
              <p className="font-mono text-xs text-ink/40">{item.sku}</p>
              <p className="font-stencil text-rust mt-1">
                {formatPrice(item.price)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) => updateQty(item.id, parseInt(e.target.value, 10) || 1)}
                className="w-14 border border-black/20 rounded-sm px-2 py-1 font-mono text-sm text-center"
                aria-label={`Quantity for ${item.name}`}
              />
              <button
                onClick={() => removeItem(item.id)}
                className="font-mono text-xs text-ink/40 hover:text-rust underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-6 mb-8">
        <span className="font-body text-ink/60">Subtotal</span>
        <span className="font-stencil text-2xl text-ink">
          {formatPrice(subtotal)}
        </span>
      </div>

      {error && (
        <p className="text-rust font-body text-sm mb-4">{error}</p>
      )}

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-brass hover:bg-brassLight disabled:opacity-60 text-iron font-stencil uppercase tracking-wide px-7 py-4 rounded-sm transition-colors"
      >
        {loading ? 'Starting checkout…' : 'Checkout with Stripe'}
      </button>
      <p className="font-mono text-xs text-ink/40 mt-4 text-center">
        Shipping and tax, if applicable, are calculated at checkout.
      </p>
    </div>
  );
}
