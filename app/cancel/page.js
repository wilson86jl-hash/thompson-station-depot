import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-24 text-center">
      <span className="stamp text-rust">Checkout Cancelled</span>
      <h1 className="font-stencil uppercase text-4xl text-ink mt-6 mb-4">
        No charge made.
      </h1>
      <p className="text-ink/60 font-body mb-10">
        Your cart is still saved. Head back whenever you&apos;re ready.
      </p>
      <Link
        href="/cart"
        className="bg-brass hover:bg-brassLight text-iron font-stencil uppercase tracking-wide px-7 py-3 rounded-sm transition-colors inline-block"
      >
        Return to Cart
      </Link>
    </div>
  );
}
