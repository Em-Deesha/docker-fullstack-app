# 🐳 Docker Full-Stack Application

A complete full-stack application with React frontend and Node.js backend, containerized with Docker and orchestrated with Docker Compose.

## 🏗️ Architecture

- **Frontend**: React application served with Nginx
- **Backend**: Node.js/Express API server
- **Containerization**: Docker with multi-stage builds
- **Orchestration**: Docker Compose
- **Repository**: [https://github.com/Em-Deesha/docker-fullstack-app](https://github.com/Em-Deesha/docker-fullstack-app)

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

## 📸 Application Status

The application has been successfully tested and is running with Docker Compose:

```
=== Docker Compose Status ===
NAME              IMAGE             COMMAND                  SERVICE    CREATED              STATUS                             PORTS
docker-backend    docker-backend    "docker-entrypoint.s…"   backend    About a minute ago   Up 50 seconds (healthy)            0.0.0.0:5000->5000/tcp, [::]:5000->5000/tcp
docker-frontend   docker-frontend   "/docker-entrypoint.…"   frontend   22 seconds ago       Up 21 seconds (health: starting)   0.0.0.0:3000->80/tcp, [::]:3000->80/tcp

=== Backend API Test ===
[{"id":1,"name":"John Doe","email":"john@example.com"},{"id":2,"name":"Jane Smith","email":"jane@example.com"},{"id":3,"name":"Bob Johnson","email":"bob@example.com"}]

=== Frontend Test ===
HTTP/1.1 200 OK
Server: nginx/1.29.2
Date: Sat, 18 Oct 2025 07:21:27 GMT
Content-Type: text/html
Content-Length: 516
Last-Modified: Sat, 18 Oct 2025 07:16:31 GMT
Connection: keep-alive
ETag: "68f33ecf-204"
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Accept-Ranges: bytes
```

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
