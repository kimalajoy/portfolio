# Kimala Cochran — Portfolio

A full-stack portfolio website built with React 19, TypeScript, and PocketBase.

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS v4
- **Backend:** PocketBase (SQLite, REST API, admin dashboard)
- **Fonts:** Plus Jakarta Sans, Manrope (Google Fonts)
- **Deployment:** PocketHost (frontend served as PocketBase static files)

## Project Structure

```
portfolio/
├── frontend/              # React TypeScript frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   └── MovieDatabase.tsx
│   │   ├── styles.css     # Design system & custom CSS
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── tailwind.config.js
│   └── package.json
├── pocketbase/
│   ├── pocketbase.exe     # PocketBase binary
│   └── pb_data/           # Database and uploads (auto-created)
├── pb_public/             # Built frontend files (served by PocketBase)
└── package.json
```

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/kimalajoy/portfolio
   cd portfolio
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend && npm install
   ```

3. **Start PocketBase** (Terminal 1)
   ```bash
   cd pocketbase && ./pocketbase.exe serve --dev
   ```

4. **Start the frontend** (Terminal 2)
   ```bash
   npm run dev
   ```

   - Frontend: http://localhost:5173
   - PocketBase admin: http://127.0.0.1:8090/_/

## Available Scripts

From the root directory:

- `npm run dev` — Start the frontend development server
- `npm run build` — Build frontend and copy output to `pb_public/`
- `npm start` — Start PocketBase in production mode

From `frontend/`:

- `npm run dev` — Start Vite dev server
- `npm run build` — TypeScript check + Vite build + copy to `pb_public/`
- `npm run preview` — Preview the production build locally

## PocketBase Setup

On first run, visit http://127.0.0.1:8090/_/ to create an admin account, then create a `contacts` collection with the following fields:

| Field   | Type  | Required |
|---------|-------|----------|
| name    | text  | yes      |
| email   | email | yes      |
| message | text  | yes      |

Set collection rules:
- **Create:** `""` (public — anyone can submit)
- **List / View / Update / Delete:** `null` (admin only)

## Deployment

The frontend is built into `pb_public/` and served directly by PocketBase as static files, so there is only one thing to deploy.

1. Run `npm run build` from the `frontend/` directory
2. Upload the entire contents of `pb_public/` to your PocketHost instance via the Static Files section of the dashboard
3. PocketBase handles both the API and serving the frontend

## Contact Form

The contact form submits to the PocketBase `contacts` collection. It includes:
- Client-side rate limiting (30 second cooldown between submissions)
- Honeypot field for basic bot detection
- Message length validation (10–2000 characters)
