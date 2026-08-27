'use client';

import { useState } from 'react';

// Update this to your real inbox — the form builds a pre-filled email to it.
const DEPOT_EMAIL = 'sell@thompsonstationdepot.com';

export default function SellPage() {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    item: '',
    description: '',
    askingPrice: '',
  });
  const [sent, setSent] = useState(false);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Sell to the Depot: ${form.item || 'Item'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nContact: ${form.contact}\nItem: ${form.item}\nAsking price: ${form.askingPrice}\n\nDescription:\n${form.description}`
    );
    window.location.href = `mailto:${DEPOT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="max-w-xl mx-auto px-5 py-16">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-denim">
        Consignment Intake
      </span>
      <h1 className="font-stencil uppercase text-4xl text-ink mt-2 mb-3">
        Sell to Us
      </h1>
      <p className="text-ink/60 font-body mb-10">
        Furniture, equipment, tools — if it&apos;s worth a fair price,
        we&apos;re interested. Tell us what you&apos;ve got and we&apos;ll
        follow up.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-mono text-xs uppercase tracking-wide text-ink/60 mb-1">
            Your name
          </label>
          <input
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className="w-full border border-ink/20 rounded-sm px-3 py-2 bg-white font-body"
          />
        </div>
        <div>
          <label className="block font-mono text-xs uppercase tracking-wide text-ink/60 mb-1">
            Email or phone
          </label>
          <input
            required
            value={form.contact}
            onChange={(e) => update('contact', e.target.value)}
            className="w-full border border-ink/20 rounded-sm px-3 py-2 bg-white font-body"
          />
        </div>
        <div>
          <label className="block font-mono text-xs uppercase tracking-wide text-ink/60 mb-1">
            Item
          </label>
          <input
            required
            value={form.item}
            onChange={(e) => update('item', e.target.value)}
            placeholder="e.g. Oak dining table"
            className="w-full border border-ink/20 rounded-sm px-3 py-2 bg-white font-body"
          />
        </div>
        <div>
          <label className="block font-mono text-xs uppercase tracking-wide text-ink/60 mb-1">
            Asking price (optional)
          </label>
          <input
            value={form.askingPrice}
            onChange={(e) => update('askingPrice', e.target.value)}
            placeholder="$"
            className="w-full border border-ink/20 rounded-sm px-3 py-2 bg-white font-body"
          />
        </div>
        <div>
          <label className="block font-mono text-xs uppercase tracking-wide text-ink/60 mb-1">
            Condition &amp; description
          </label>
          <textarea
            required
            rows={4}
            value={form.description}
            onChange={(e) => update('description', e.target.value)}
            className="w-full border border-ink/20 rounded-sm px-3 py-2 bg-white font-body"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-rust hover:bg-rust/90 text-manila font-stencil uppercase tracking-wide px-7 py-3 rounded-sm transition-colors"
        >
          Send to the Depot
        </button>

        {sent && (
          <p className="font-body text-sm text-denim text-center">
            Opening your email app to send this along — thanks!
          </p>
        )}
      </form>
    </div>
  );
}
