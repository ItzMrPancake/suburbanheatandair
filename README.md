# Suburban Heating & Air Conditioning Co. (Dallas, TX)

Modern website for **Suburban Heating & Air Conditioning Co** ([www.suburbanheatandair.com](https://www.suburbanheatandair.com)), serving the greater Dallas area since 1967. Carrier® Factory Authorized Dealer, State HVAC License TACLA17853E, BBB A+ Accredited.

---

## 🚀 How to Deploy on GitHub

This project is fully configured for deployment on **GitHub Pages**, **Vercel**, **Netlify**, or any static web host.

### Option 1: Automatic Deployment with GitHub Pages (Recommended)

1. **Push your code to a new GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Suburban Heating & Air Conditioning website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub.
   - Click **Settings** → **Pages** (under "Code and automation" in the left sidebar).
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
   - That's it! The included `.github/workflows/deploy.yml` workflow will automatically run and publish your site to:
     `https://<your-username>.github.io/<your-repo-name>/`

---

### Option 2: Manual Deploy via NPM

If you prefer deploying directly from your local terminal using `gh-pages`:

```bash
npm install
npm run deploy
```

This will run `vite build` and push the compiled `dist/` directory directly to the `gh-pages` branch on GitHub.

---

### 🌐 Custom Domain Setup (`www.suburbanheatandair.com`)

If you want to attach your custom domain:
1. In your GitHub repository, go to **Settings** → **Pages**.
2. Under **Custom domain**, enter `www.suburbanheatandair.com`.
3. Check the **Enforce HTTPS** box.
4. Add the appropriate CNAME / A records in your DNS provider (e.g. GoDaddy, Namecheap, Cloudflare).

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start local dev server (port 3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📋 Features Included
- **Dallas Territory Map**: Interactive SVG boundary map with live dispatch zones and Peachtree St. headquarters pin.
- **Carrier® Authorized Showcase**: High-efficiency heating, cooling, heat pumps, geothermal, and commercial rooftop units.
- **In-House Sheet Metal Shop**: Highlighting 16+ year lead fabricator on Peachtree St.
- **Verified Customer Reviews**: Authentic reviews from Dallas families since 1974 with category filters and review submission form.
- **Dallas Heat Load Calculator**: Estimates system tonnage and 10-year utility savings based on home square footage.
- **Biannual Service Agreement**: 9-point maintenance inspection checklist for spring and fall.
- **24/7 Live Emergency Line**: Direct click-to-call dialing to `(214) 381-1127`.
