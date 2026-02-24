# How to Host Mentofy on Vercel for Free with a Custom Domain

As requested, here is the exact step-by-step guide to hosting your new Mentofy landing page on Vercel using your personal domain.

## Step 1: Push Your Code to GitHub (Recommended)
While you can deploy directly from your machine using the Vercel CLI, the best practice is to use GitHub so your site auto-updates whenever you change your code.

1. Go to [GitHub](https://github.com/) and create a new repository called `mentofy-landing-page`.
2. Open your terminal in the Mentofy project folder (`c:\Users\kisha\Desktop\Work\Website\Mentofy`).
3. Run these commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Mentofy landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/mentofy-landing-page.git
   git push -u origin main
   ```

## Step 2: Deploy to Vercel
1. Go to [Vercel](https://vercel.com/) and sign up or log in.
2. Click on the **"Add New..."** button and select **"Project"**.
3. Connect your GitHub account and import the `mentofy-landing-page` repository.
4. Vercel will auto-detect that it is a **Vite/React** project. You don't need to change any build settings. 
5. Click **"Deploy"**. Wait about 30-45 seconds for it to build.

## Step 3: Connect Your Personal Domain
Now that your site is online at a `.vercel.app` URL, let's link the domain you purchased:

1. In your Vercel Project dashboard, go to **Settings** -> **Domains**.
2. Type in your personal domain (e.g., `mentofy.com` or `getmomentum.app`) and click **Add**.
3. Vercel will provide you with **DNS Records** (Usually an `A Record` for the root domain `@` pointing to `76.76.21.21` and a `CNAME` for `www` pointing to `cname.vercel-dns.com`).
4. Log into your Domain Registrar (where you bought the domain, like Namecheap, GoDaddy, Google Domains, Hostinger, etc.).
5. Go to your domain's **DNS Settings / Manage DNS**.
6. Add the records that Vercel gave you.
7. Save changes. Within a few minutes (sometimes up to 24 hours depending on the registrar), Vercel will verify the domain, generate a free SSL certificate, and your beautiful Mentofy site will be live!
