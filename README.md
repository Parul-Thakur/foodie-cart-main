# 🍔 Foodie Cart

**Foodie Cart** is a full-featured food ordering app built with **Next.js**, featuring beautiful UI with **shadcn/ui**, data from **Hygraph CMS**, Clerk-based auth, and PayPal integration.

---

## 🚀 Features

- 🍽 Browse restaurants by category: Pizza, Indian, Burgers, BBQ, etc.
- 📋 Menus with rich descriptions, prices, and categories
- 🛒 Add items to cart and pay via **PayPal**
- ⭐ Leave reviews & ratings
- 🔐 Secure auth with **Clerk**
- 📧 Email support via **Resend**

---

## 🧪 Tech Stack

| Tech              | Purpose                          |
|-------------------|----------------------------------|
| **Next.js 14**     | React-based fullstack framework |
| **Tailwind CSS**   | Utility-first styling           |
| **shadcn/ui**      | UI components (built on Radix)  |
| **Hygraph (GraphCMS)** | Headless CMS for restaurant & menu data |
| **Clerk**          | Authentication                  |
| **Resend**         | Email sending                   |
| **PayPal SDK**     | Payments                        |
| **Sonner**         | Toast notifications             |

---

## 📦 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/foodie-cart.git
cd foodie-cart

2. Install Dependencies
npm install
# or
yarn install
3. Add Environment Variables
Create a .env.local file:

env

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
HYGRAPH_API_URL=https://your-hygraph-endpoint
RESEND_API_KEY=your_resend_api_key
PAYPAL_CLIENT_ID=your_paypal_client_id
GOOGLE_API_KEY=your_google_key (if using Gemini/GPT)
⚠️ This file is sensitive and should not be committed to Git.

4. Run Dev Server

npm run dev
Open http://localhost:3000

🧪 Scripts
Script	Description
npm run dev	Starts local dev server
npm run build	Builds app for production
npm start	Starts production server
npm run lint	Runs ESLint

🚀 Deployment (Vercel)
Push your code to GitHub

Go to vercel.com

Import the GitHub repo

Add all required environment variables in the Vercel project settings

Click Deploy

✅ Done!

📸 Screenshots
Coming soon...

🧠 Credits
UI built with shadcn/ui

CMS powered by Hygraph

Auth via Clerk

Emails via Resend

📝 License
MIT — use it freely!

---
