# Server Commands Reference

## Starting the Development Servers

### Option 1: Start Both Servers (Separate Terminals)

**Terminal 1 - Frontend (Vite):**
```bash
cd frontend
npm run dev
```
- Runs on: http://localhost:5173/

**Terminal 2 - Backend (PocketBase):**
```bash
./pocketbase.exe serve --dev
```
- API: http://127.0.0.1:8090/api/
- Admin Dashboard: http://127.0.0.1:8090/_/

### Option 2: Start in Background (via Claude Code)
```bash
cd frontend && npm run dev
```
```bash
./pocketbase.exe serve --dev
```

## Stopping the Servers

### Method 1: Ctrl+C in Terminal
If running in visible terminals, press `Ctrl+C` to stop each server.

### Method 2: Kill by Process ID
**Find processes:**
```bash
netstat -ano | findstr :5173   # Frontend
netstat -ano | findstr :8090   # Backend
```

**Kill by PID:**
```bash
taskkill //F //PID <process_id>
```

### Method 3: Kill All Node/PocketBase Processes
**Kill all Node.js processes (stops Vite):**
```bash
taskkill //F //IM node.exe
```

**Kill PocketBase:**
```bash
taskkill //F //IM pocketbase.exe
```

## Building for Production

**Build frontend and copy to pb_public:**
```bash
cd frontend
npm run build
```

This will:
1. Clean the `pb_public` directory
2. Compile TypeScript
3. Build with Vite
4. Copy build files to `pb_public/`

## Quick Reference

| Task | Command |
|------|---------|
| Start Frontend | `cd frontend && npm run dev` |
| Start Backend | `./pocketbase.exe serve --dev` |
| Stop All Servers | `taskkill //F //IM node.exe && taskkill //F //IM pocketbase.exe` |
| Build Production | `cd frontend && npm run build` |
| Frontend URL | http://localhost:5173/ |
| PocketBase API | http://127.0.0.1:8090/api/ |
| PocketBase Admin | http://127.0.0.1:8090/_/ |
