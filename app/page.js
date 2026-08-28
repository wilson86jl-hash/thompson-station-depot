import Link from 'next/link';
import products, { getCategories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const categories = getCategories();
  const featured = products.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="bg-iron-grain relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 py-24 md:py-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="stamp text-brassLight">Est. Depot</span>
          </div>
          <h1 className="font-stencil uppercase text-manila leading-[0.95] text-5xl md:text-7xl tracking-tight max-w-3xl">
            Good goods.
            <br />
            <span className="text-brassLight">Fair prices.</span>
          </h1>
          <p className="mt-6 max-w-xl text-manila/70 text-lg font-body">
            We buy furniture, equipment, and tools worth a second life — and
            sell them straight, at a fair price, out of Thompson Station.
            If it&apos;s worth having, it&apos;s worth stocking.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="bg-brass hover:bg-brassLight text-iron font-stencil uppercase tracking-wide px-7 py-3 rounded-sm transition-colors"
            >
              Browse Inventory
            </Link>
            <Link
              href="/sell"
              className="border border-manila/40 hover:border-brassLight hover:text-brassLight text-manila font-stencil uppercase tracking-wide px-7 py-3 rounded-sm transition-colors"
            >
              Sell to Us
            </Link>
          </div>
        </div>
      </section>

      {/* Category rail */}
      <section className="max-w-6xl mx-auto px-5 py-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-denim">
            Departments
          </span>
          <hr className="perf-divider flex-1" />
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/shop?category=${encodeURIComponent(cat)}`}
              className="font-body text-sm border border-ink/20 hover:border-rust hover:text-rust px-4 py-2 rounded-sm transition-colors bg-white/40"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured inventory */}
      <section className="max-w-6xl mx-auto px-5 py-8 pb-20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-denim">
              Fresh in
            </span>
            <hr className="perf-divider flex-1 hidden md:block" />
          </div>
          <Link
            href="/shop"
            className="font-body text-sm text-rust hover:underline whitespace-nowrap"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
