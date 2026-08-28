import Link from 'next/link';
import products, { getCategories } from '../../data/products';
import ProductCard from '../../components/ProductCard';

export const metadata = {
  title: 'Shop Inventory — Thompson Station Depot',
};

export default function ShopPage({ searchParams }) {
  const categories = getCategories();
  const activeCategory = searchParams?.category;

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <div className="max-w-6xl mx-auto px-5 py-12">
      <div className="mb-8">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-denim">
          The Floor
        </span>
        <h1 className="font-stencil uppercase text-4xl mt-2 text-ink">
          Current Inventory
        </h1>
        <p className="text-ink/60 font-body mt-2">
          {filtered.length} item{filtered.length === 1 ? '' : 's'}
          {activeCategory ? ` in ${activeCategory}` : ' in the depot'}.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        <Link
          href="/shop"
          className={`font-body text-sm px-4 py-2 rounded-sm border transition-colors ${
            !activeCategory
              ? 'bg-ink text-manila border-ink'
              : 'border-ink/20 hover:border-rust hover:text-rust'
          }`}
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/shop?category=${encodeURIComponent(cat)}`}
            className={`font-body text-sm px-4 py-2 rounded-sm border transition-colors ${
              activeCategory === cat
                ? 'bg-ink text-manila border-ink'
                : 'border-ink/20 hover:border-rust hover:text-rust'
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-ink/60 font-body">
          Nothing in this department right now — check back soon, we turn
          inventory fast.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
