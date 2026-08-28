export default function Footer() {
  return (
    <footer className="bg-iron-grain border-t border-black/40 mt-24">
      <div className="max-w-6xl mx-auto px-5 py-12 grid gap-8 sm:grid-cols-3 text-manila/70 font-body text-sm">
        <div>
          <div className="font-stencil text-manila text-lg uppercase tracking-wide mb-2">
            Thompson Station Depot
          </div>
          <p>
            Good goods, fair prices. We buy what&apos;s worth buying and sell it
            straight — furniture, equipment, tools, and finds worth a second
            life.
          </p>
        </div>
        <div>
          <div className="font-mono text-brass text-xs uppercase tracking-[0.2em] mb-3">
            Visit
          </div>
          <p>Thompson Station, TN</p>
          <p>Open Tue–Sat, 9am–5pm</p>
        </div>
        <div>
          <div className="font-mono text-brass text-xs uppercase tracking-[0.2em] mb-3">
            Depot
          </div>
          <ul className="space-y-1">
            <li><a href="/shop" className="hover:text-brassLight transition-colors">Shop inventory</a></li>
            <li><a href="/sell" className="hover:text-brassLight transition-colors">Sell to us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/30 py-4 text-center text-xs text-manila/40 font-mono">
        © {new Date().getFullYear()} Thompson Station Depot. All items sold as-is.
      </div>
    </footer>
  );
}
