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
- Node.js with Express
- TypeScript
- CORS enabled for frontend communication
- RESTful API endpoints

## Architecture

```
portfolio/
├── frontend/          # React TypeScript frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── types/         # TypeScript type definitions
│   │   └── ...
│   ├── tailwind.config.js # Tailwind CSS configuration
│   └── package.json
├── backend/           # Node.js Express backend
│   ├── src/
│   │   └── index.ts       # Main server file
│   ├── tsconfig.json      # TypeScript configuration
│   └── package.json
└── package.json       # Root package.json with scripts
```

## Development Commands

**Start development servers (both frontend and backend):**
```bash
npm run dev
```

**Start individual servers:**
```bash
npm run dev:frontend  # Frontend only (port 5173)
npm run dev:backend   # Backend only (port 3001)
```

**Build for production:**
```bash
npm run build
```

**Build individual parts:**
```bash
npm run build:frontend  # Build frontend only
npm run build:backend   # Build backend only
```

**Start production server:**
```bash
npm start  # Starts backend server (serves built frontend)
```

## API Endpoints

**Backend API (port 3001):**
- `GET /api/health` - Health check endpoint
- `POST /api/contact` - Contact form submission

## Frontend Components

**Main sections:**
- `Header` - Navigation with smooth scrolling
- `Hero` - Landing section with call-to-action
- `About` - Personal information and statistics
- `Skills` - Technical skills organized by category
- `Projects` - Featured projects with links
- `Contact` - Contact form with backend integration
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

## Environment Variables

**Backend (.env):**
```
PORT=3001
NODE_ENV=development
```