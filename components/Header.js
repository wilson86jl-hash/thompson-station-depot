'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';

const NAV_LINKS = [
  { href: '/shop', label: 'Shop' },
  { href: '/sell', label: 'Sell to Us' },
];

function CartLink({ count, compact = false }) {
  return (
    <Link
      href="/cart"
      className={`relative flex items-center gap-2 shrink-0 border border-brass text-manila font-body text-xs sm:text-sm uppercase tracking-wider hover:text-brassLight hover:border-brassLight transition ${
        compact ? 'px-3 py-2' : 'px-4 py-2'
      }`}
    >
      <span>Cart</span>
      {count > 0 && (
        <span className="font-mono text-[10px] leading-none bg-rust text-manila rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  );
}

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-iron-grain border-b border-brass/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 h-16 flex items-center justify-between gap-3">

        <Link
          href="/"
          className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 shrink-0 leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="font-stencil text-manila text-lg sm:text-2xl tracking-wide whitespace-nowrap">
            Thompson Station
          </span>
          <span className="font-mono text-brass text-[10px] sm:text-xs uppercase tracking-[0.3em] mt-1 sm:mt-0">
            Depot
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-body text-sm uppercase tracking-wider text-manila">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brassLight transition"
            >
              {link.label}
            </Link>
          ))}
          <CartLink count={count} />
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <CartLink count={count} compact />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex flex-col items-center justify-center gap-[5px] w-10 h-10 shrink-0 border border-brass/50"
          >
            <span className={`block h-px w-5 bg-manila transition duration-200 ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`block h-px w-5 bg-manila transition duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-5 bg-manila transition duration-200 ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-iron-grain border-t border-brass/30">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-4 font-body text-sm uppercase tracking-wider text-manila border-b border-brass/15 hover:text-brassLight transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
