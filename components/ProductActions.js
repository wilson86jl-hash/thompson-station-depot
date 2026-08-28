'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from './CartContext';

export default function ProductActions({ product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  function handleBuyNow() {
    addItem(product, 1);
    router.push('/cart');
  }

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={handleBuyNow}
        className="bg-rust hover:bg-rust/90 text-manila font-stencil uppercase tracking-wide px-7 py-3 rounded-sm transition-colors"
      >
        Buy Now
      </button>
      <button
        onClick={handleAddToCart}
        className="border border-ink/30 hover:border-rust hover:text-rust font-stencil uppercase tracking-wide px-7 py-3 rounded-sm transition-colors"
      >
        {added ? 'Added ✓' : 'Add to Cart'}
      </button>
    </div>
  );
}
