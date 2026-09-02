'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../../components/CartContext';

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-5 py-24 text-center">
      <span className="stamp text-denim">Order Confirmed</span>
      <h1 className="font-stencil uppercase text-4xl text-ink mt-6 mb-4">
        Thanks — it&apos;s yours.
      </h1>
      <p className="text-ink/60 font-body mb-10">
        We&apos;ve got your order. You&apos;ll get a confirmation by email,
        and we&apos;ll reach out with pickup or shipping details shortly.
      </p>
      <Link
        href="/shop"
        className="bg-rust hover:bg-rust/90 text-manila font-stencil uppercase tracking-wide px-7 py-3 rounded-sm transition-colors inline-block"
      >
        Keep Browsing
      </Link>
    </div>
  );
}
