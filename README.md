# Thompson Station Depot

A storefront for buying and reselling furniture, equipment, and tools —
built with Next.js and Stripe Checkout.

## What's included

- Home page, full shop with category filters, product detail pages
- Cart (saved in the browser) and Stripe Checkout for payment
- A "Sell to Us" intake form for people offering items to the depot
- Inventory lives in one plain file: `data/products.js`

## 1. Add your inventory

Open `data/products.js`. Each item is one object in the list — copy an
existing one and edit the fields. `price` is in **cents** (4500 = $45.00).

Add real photos to `public/products/` (jpg or png, roughly 4:3 works
best) and point each product's `image` field at the filename, e.g.
`/products/oak-table.jpg`. The site ships with simple placeholder
graphics so it works before you add real photos.

## 2. Get your Stripe key

1. Log into [dashboard.stripe.com](https://dashboard.stripe.com)
2. Go to **Developers > API keys**
3. Copy the **Secret key** (starts with `sk_test_` while testing, `sk_live_` when you're ready to take real payments)

You'll add this as an environment variable — never put it directly in the code.

## 3. Push this to GitHub

From this folder:

```bash
git init
git add .
git commit -m "Initial site"
```

Then create a new repository on [github.com/new](https://github.com/new)
and follow the "push an existing repository" instructions it gives you,
something like:

```bash
git remote add origin https://github.com/YOUR_USERNAME/thompson-station-depot.git
git branch -M main
git push -u origin main
```

## 4. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo you just pushed
2. Before the first deploy, add an environment variable:
   - Name: `STRIPE_SECRET_KEY`
   - Value: the secret key from step 2
3. Click **Deploy**

Every future `git push` to `main` will auto-deploy.

## 5. Test a purchase

While `STRIPE_SECRET_KEY` is a `sk_test_...` key, use Stripe's test card
`4242 4242 4242 4242`, any future expiry date, any CVC. Nothing is
actually charged. Switch to your `sk_live_...` key in Vercel's
environment variables when you're ready to accept real payments.

## Running locally

```bash
npm install
cp .env.local.example .env.local   # then paste in your Stripe test key
npm run dev
```

Visit http://localhost:3000

## Updating the site later

- **Add/remove/reprice items:** edit `data/products.js`, commit, push — Vercel redeploys automatically.
- **Change the "Sell to Us" inbox:** edit `DEPOT_EMAIL` near the top of `app/sell/page.js`.
- **Change colors/fonts:** see `tailwind.config.js` and `app/globals.css`.
