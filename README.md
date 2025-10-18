# Docker Full-Stack Application

A simple full-stack application with React frontend and Node.js backend, containerized with Docker and orchestrated with Docker Compose.

## 🏗️ Architecture

- **Frontend**: React application served with Nginx
- **Backend**: Node.js/Express API server
- **Containerization**: Docker with multi-stage builds
- **Orchestration**: Docker Compose

## 🚀 Quick Start

### Prerequisites

- Docker
- Docker Compose

### Running the Application

1. Clone the repository:
```bash
git clone <repository-url>
cd docker
```

2. Build and start the services:
```bash
docker-compose up --build
```

3. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### API Endpoints

- `GET /` - API information
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `GET /health` - Health check

## 🛠️ Development

### Backend Development

```bash
cd backend
npm install
npm start
```

### Frontend Development

```bash
cd frontend
npm install
npm start
```

## 🐳 Docker Commands

### Build and run with Docker Compose

```bash
# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild specific service
docker-compose up --build backend
```

### Individual Docker Commands

```bash
# Build backend image
docker build -t docker-backend ./backend

# Build frontend image
docker build -t docker-frontend ./frontend

# Run backend container
docker run -p 5000:5000 docker-backend

# Run frontend container
docker run -p 3000:80 docker-frontend
```

## 📁 Project Structure

```
docker/
├── backend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── nginx.conf
│   ├── package.json
│   ├── public/
│   └── src/
├── docker-compose.yml
└── README.md
```

## 🔧 Configuration

### Environment Variables

- `REACT_APP_API_URL`: Backend API URL (default: http://localhost:5000)
- `NODE_ENV`: Node environment (production)
- `PORT`: Backend port (5000)

### Health Checks

Both services include health checks:
- Backend: `GET /health`
- Frontend: Nginx health check

## 📸 Screenshots

See the screenshots below showing the application running with Docker Compose:

![Docker Compose Running](screenshots/docker-compose-running.png)
![Application Frontend](screenshots/frontend-application.png)
![Backend API](screenshots/backend-api.png)

## 🚀 Features

- ✅ React frontend with modern UI
- ✅ Node.js/Express backend API
- ✅ Docker containerization
- ✅ Docker Compose orchestration
- ✅ Health checks
- ✅ Production-ready configuration
- ✅ Nginx for frontend serving
- ✅ CORS enabled for API
- ✅ Responsive design

## 📝 License

MIT License
