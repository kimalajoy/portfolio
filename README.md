# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Node.js.

## Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI** - Clean design with smooth animations and transitions
- **Full-Stack** - React frontend with Node.js backend
- **TypeScript** - Type-safe development for better code quality
- **Contact Form** - Working contact form with backend validation
- **Fast Loading** - Built with Vite for optimal performance

## Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS, Vite
- **Backend:** Node.js, Express, TypeScript
- **Styling:** Tailwind CSS with custom animations
- **Development:** Concurrent development servers

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development servers**
   ```bash
   npm run dev
   ```

   This starts both frontend (http://localhost:5173) and backend (http://localhost:3001) servers.

## Available Scripts

- `npm run dev` - Start both frontend and backend development servers
- `npm run build` - Build both frontend and backend for production
- `npm start` - Start the production server
- `npm run dev:frontend` - Start only the frontend development server
- `npm run dev:backend` - Start only the backend development server

## Project Structure

```
portfolio/
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── types/         # TypeScript types
│   │   ├── App.tsx        # Main app component
│   │   └── main.tsx       # Entry point
│   └── package.json
├── backend/               # Express backend
│   ├── src/
│   │   └── index.ts       # Server entry point
│   └── package.json
└── package.json           # Root package.json
```

## Customization

To personalize this portfolio for yourself:

1. **Update personal information:**
   - Replace "Your Name" with your actual name
   - Update email addresses and social media links
   - Modify the about section content

2. **Update skills:**
   - Edit the skills array in `frontend/src/components/Skills.tsx`
   - Add or remove skills and adjust proficiency levels

3. **Add your projects:**
   - Update the projects array in `frontend/src/components/Projects.tsx`
   - Replace with your actual projects, GitHub links, and live demos

4. **Customize styling:**
   - Modify colors in `tailwind.config.js`
   - Update the color scheme throughout components
   - Add custom animations or modify existing ones

## API Endpoints

The backend provides the following endpoints:

- `GET /api/health` - Health check
- `POST /api/contact` - Submit contact form

## Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend: `npm run build:frontend`
2. Deploy the `frontend/dist` folder

### Backend (Railway/Render/Heroku)
1. Build the backend: `npm run build:backend`
2. Deploy with start command: `npm run start:backend`

### Full-Stack (Railway/Render)
1. Build both: `npm run build`
2. Start with: `npm start`

## Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=3001
NODE_ENV=production
```

## License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ using React, TypeScript, and Node.js