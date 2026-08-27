import { notFound } from 'next/navigation';
import products, { getProductById } from '../../../data/products';
import ProductActions from '../../../components/ProductActions';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }) {
  const product = getProductById(params.slug);
  if (!product) return {};
  return { title: `${product.name} — Thompson Station Depot` };
}

function formatPrice(cents) {
  return (cents / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

export default function ProductPage({ params }) {
  const product = getProductById(params.slug);
  if (!product) notFound();

  return (
    <div className="max-w-5xl mx-auto px-5 py-12 grid md:grid-cols-2 gap-10">
      <div className="border border-black/10 overflow-hidden bg-manilaDark">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover aspect-[4/3]"
        />
      </div>

      <div>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-denim">
          {product.category} &middot; {product.sku}
        </span>
        <h1 className="font-stencil uppercase text-3xl md:text-4xl mt-2 text-ink">
          {product.name}
        </h1>
        <p className="font-stencil text-3xl text-rust mt-4">
          {formatPrice(product.price)}
        </p>

        <div className="mt-4">
          <span className="stamp text-denim text-xs">{product.condition}</span>
        </div>

        <p className="font-body text-ink/70 mt-6 leading-relaxed">
          {product.description}
        </p>

        <hr className="perf-divider my-8" />

        <ProductActions product={product} />

        <p className="font-mono text-xs text-ink/40 mt-6">
          All items sold as-is. In-store pickup available in Thompson Station, TN, or we&apos;ll quote shipping at checkout.
        </p>
      </div>
    </div>
  );
}
