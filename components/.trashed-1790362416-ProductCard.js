import Link from 'next/link';

function formatPrice(cents) {
  return (cents / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="depot-tag block p-4 pl-6 pb-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
    >
      <div className="aspect-[4/3] w-full overflow-hidden mb-3 border border-black/10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-body font-semibold text-ink leading-snug">
          {product.name}
        </h3>
      </div>
      <p className="font-mono text-xs text-ink/50 mt-1">{product.sku}</p>
      <div className="flex items-center justify-between mt-3">
        <span className="font-stencil text-lg text-rust">
          {formatPrice(product.price)}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wide text-denim border border-denim/40 px-2 py-0.5 rounded-sm">
          {product.category}
        </span>
      </div>
    </Link>
  );
}
