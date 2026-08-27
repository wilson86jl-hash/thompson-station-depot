'use client';

import Link from 'next/link';
import { useCart } from './CartContext';

export default function Header() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-iron-grain border-b border-black/40">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-stencil text-manila text-2xl tracking-wide uppercase group-hover:text-brassLight transition-colors">
            Thompson Station
          </span>
          <span className="font-mono text-brass text-xs uppercase tracking-[0.3em]">
            Depot
          </span>
        </Link>

        <nav className="flex items-center gap-6 font-body text-sm uppercase tracking-wide text-manila/80">
          <Link href="/shop" className="hover:text-brassLight transition-colors">
            Shop
          </Link>
          <Link href="/sell" className="hover:text-brassLight transition-colors">
            Sell to Us
          </Link>
          <Link
            href="/cart"
            className="relative flex items-center gap-2 border border-brass/60 px-3 py-1.5 rounded-sm hover:bg-brass/10 transition-colors"
          >
            <span>Cart</span>
            {count > 0 && (
              <span className="font-mono text-xs bg-rust text-manila rounded-full w-5 h-5 flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
