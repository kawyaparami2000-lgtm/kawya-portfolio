# Vercel Deployment Checklist & Guide

This document provides a step-by-step plain English checklist for deploying Kawya Bogoda's personal portfolio website to [Vercel](https://vercel.com).

---

## 1. Import GitHub Repository into Vercel

1. Log in to your [Vercel Account](https://vercel.com).
2. Click **Add New...** -> **Project**.
3. Connect your GitHub account if you haven't already.
4. Select the repository: `kawyaparami2000-lgtm/kawya-portfolio`.
5. Click **Import**.

---

## 2. Configure Framework Preset & Build Settings

Vercel automatically detects Next.js applications:

- **Framework Preset**: `Next.js` (default)
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)

---

## 3. Configure Environment Variables

Before clicking **Deploy**, add the following required environment variables under the **Environment Variables** section:

| Environment Variable | Value Example | Description |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | `re_123456789...` | API key generated from your [Resend Dashboard](https://resend.com/api-keys). |
| `CONTACT_TO_EMAIL` | `kawyaparami2000@gmail.com` | Email address where form inquiries will be sent. |
| `NEXT_PUBLIC_SITE_URL` | `https://kawya-portfolio.vercel.app` | Production site URL (used for canonical SEO tags & OpenGraph metadata). |

---

## 4. Initial Deployment & Environment Variable Updates

1. Click **Deploy**. Vercel will build the project and assign a production URL (e.g. `https://kawya-portfolio.vercel.app`).
2. **Important Note on Environment Variables**: If you update or add environment variables later in **Project Settings -> Environment Variables**, Vercel does not automatically update existing live builds. You must trigger a redeployment for the new variables to take effect:
   - Go to the **Deployments** tab.
   - Click the **...** menu next to the latest production deployment.
   - Select **Redeploy** (ensure "Use existing Build Cache" is unchecked if changing build-time variables).

---

## 5. Connecting a Custom Domain (Optional)

If you own a custom domain (e.g., `kawyabogoda.com`):

1. In your Vercel project dashboard, navigate to **Settings** -> **Domains**.
2. Type your domain name and click **Add**.
3. Vercel will provide DNS record instructions:
   - For root domains (`kawyabogoda.com`), add an **A Record** pointing `@` to `76.76.21.21`.
   - For subdomains (`www.kawyabogoda.com`), add a **CNAME Record** pointing `www` to `cname.vercel-dns.com`.
4. Once DNS propagates, Vercel will automatically provision a free SSL/TLS certificate.
5. Remember to update `NEXT_PUBLIC_SITE_URL` in Vercel environment variables to your new custom domain URL and redeploy!

---

## 6. Verifying the Live Contact Form

After deployment, test the contact form on your live production site:

1. Visit your live site URL in your browser.
2. Scroll to the **Contact** section.
3. Fill out the form fields with a valid test name, email address, and message.
4. Click **Send Message**.
5. Verify that:
   - The UI displays the green success message: *"Your message has been delivered! I will get back to you soon."*
   - You receive the notification email in your `CONTACT_TO_EMAIL` inbox.
   - The delivery log appears in your [Resend Dashboard Overview](https://resend.com/emails).
