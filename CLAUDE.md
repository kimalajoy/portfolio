# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a full-stack portfolio website built for a mid-level software developer. The project showcases modern web development practices with a clean, responsive design.

## Technology Stack

**Frontend:**
- React 18 with TypeScript
- Vite for build tooling and development server
- Tailwind CSS for styling
- Responsive design with mobile-first approach

**Backend:**
- PocketBase (open-source backend in 1 file)
- SQLite database with real-time subscriptions
- Built-in authentication and file storage
- Admin dashboard at http://127.0.0.1:8090/_/
- RESTful API endpoints with JavaScript SDK

## Architecture

```
portfolio/
├── frontend/          # React TypeScript frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   └── ...
│   ├── package.json
│   └── ...
├── pocketbase/        # PocketBase backend
│   ├── pocketbase.exe     # PocketBase executable
│   ├── pb_data/           # Database and uploads (auto-created)
│   └── setup.js           # Collection setup script
└── package.json       # Root package.json with scripts
```

## Development Commands

**Start development servers:**
```bash
# Terminal 1 - Start PocketBase backend
cd pocketbase
./pocketbase.exe serve --dev

# Terminal 2 - Start frontend
cd frontend
npm run dev
```

**Individual commands:**
```bash
npm run dev:frontend  # Frontend only (port 5173)
cd pocketbase && ./pocketbase.exe serve --dev  # PocketBase (port 8090)
```

**Build for production:**
```bash
cd frontend && npm run build
```

**PocketBase admin interface:**
- Visit http://127.0.0.1:8090/_/ to access admin dashboard
- Create admin account on first visit
- Manage collections, users, and data

## PocketBase API

**PocketBase API (port 8090):**
- `GET /api/collections` - List all collections
- `POST /api/collections/contacts/records` - Create contact form submission
- `GET /api/collections/contacts/records` - List contact records (admin only)
- `GET /api/health` - Health check endpoint

**Collections:**
- `contacts` - Contact form submissions with fields: name, email, message

**Authentication:**
- Admin panel: http://127.0.0.1:8090/_/
- JavaScript SDK handles authentication automatically
- Contact form is public (no auth required for creating records)

## Frontend Components

**Main sections:**
- `Header` - Navigation with smooth scrolling
- `Hero` - Landing section with call-to-action
- `About` - Personal information and statistics
- `Skills` - Technical skills organized by category
- `Projects` - Featured projects with links
- `Contact` - Contact form with PocketBase integration
- `Footer` - Social links and copyright

## Styling

The project uses Tailwind CSS with:
- Custom scrollbar styling
- Smooth scroll behavior
- Custom animations (fadeInUp)
- Responsive breakpoints (mobile-first)
- Color scheme focused on blue tones

## Customization

**To personalize the portfolio:**
1. Update personal information in components (name, email, links)
2. Modify the skills array in `Skills.tsx`
3. Update projects data in `Projects.tsx`
4. Replace placeholder contact information
5. Update social media links in `Contact.tsx` and `Footer.tsx`

## Setup Instructions

**First-time PocketBase setup:**
1. Navigate to the pocketbase directory
2. Run `./pocketbase.exe serve --dev`
3. Visit http://127.0.0.1:8090/_/ in your browser
4. Create an admin account
5. Create a "contacts" collection with fields:
   - name (text, required)
   - email (email, required)
   - message (text, required)
6. Set collection rules:
   - Create rule: `""` (public - anyone can create)
   - List/View/Update/Delete rules: `null` (admin only)

**Environment:**
- PocketBase runs on port 8090
- Frontend runs on port 5173
- No additional environment variables needed