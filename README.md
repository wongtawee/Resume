# 🎨 Personal Portfolio Web App

A modern, full-stack portfolio website built with React 19, Tailwind CSS, Node.js, Express, and MongoDB.

## ✨ Features

- 🏠 **Home Page** - Introduction with profile image and social links
- 📄 **Resume Page** - Education, work experience, and skills
- 💼 **Work Page** - Portfolio projects showcase
- 📧 **Contact Page** - Contact information and social media links
- 🎨 **Modern UI** - Built with Tailwind CSS and React Icons
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Fast Performance** - Powered by Vite and React 19
- 🔒 **Secure API** - Express with Helmet, CORS, and Rate Limiting

## 🛠️ Tech Stack

### Frontend

- **React 19.0** - Latest React version
- **Vite 6.0** - Next generation frontend tooling
- **React Router 7.0** - Client-side routing
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React Icons 5.3** - Popular icon library
- **Axios 1.7** - HTTP client

### Backend

- **Node.js** - JavaScript runtime
- **Express 5.0** - Web framework
- **Mongoose 8.8** - MongoDB ODM
- **Express Validator** - Request validation
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Compression** - Response compression

### Database

- **MongoDB** - NoSQL database

## 📦 Installation

### Prerequisites

- Node.js 20.x or higher
- MongoDB (local or MongoDB Atlas)
- Git

### Clone Repository

```bash
git clone <your-repo-url>
cd resume
```

### Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Environment Variables

#### Backend (.env)

Create `backend/.env` file:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development

# For MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio
```

#### Frontend (.env)

Create `frontend/.env` file:

```env
VITE_API_URL=http://localhost:5000
```

## 🚀 Running the Application

### Development Mode

#### Run Both Frontend and Backend

```bash
npm run dev
```

#### Run Frontend Only

```bash
npm run dev:frontend
```

#### Run Backend Only

```bash
npm run dev:backend
```

### Production Build

#### Build Frontend

```bash
npm run build
```

#### Start Backend

```bash
cd backend
npm start
```

## 📡 API Endpoints

### Profile

- `GET /api/profile` - Get profile data
- `POST /api/profile` - Create profile
- `PUT /api/profile/:id` - Update profile

### Works

- `GET /api/works` - Get all works
- `GET /api/works?featured=true` - Get featured works
- `GET /api/works/:id` - Get single work
- `POST /api/works` - Create work
- `PUT /api/works/:id` - Update work
- `DELETE /api/works/:id` - Delete work

### Health Check

- `GET /health` - Server health check

## 📁 Project Structure

```
resume/
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── public/             # Static assets
│   └── package.json
│
├── backend/                 # Express backend
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── server.js           # Entry point
│   └── package.json
│
└── package.json            # Root package.json
```

## 🎯 Development Workflow

1. **Start MongoDB** (if using local)

   ```bash
   mongod
   ```

2. **Run Development Servers**

   ```bash
   npm run dev
   ```

3. **Access Application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000
   - API Docs: http://localhost:5000

## 🧪 Testing

```bash
# Run all tests
npm test

# Run backend tests
npm run test:backend

# Run frontend tests
npm run test:frontend
```

## 📝 TODO

- [ ] Add authentication for admin panel
- [ ] Implement image upload functionality
- [ ] Add contact form with email service
- [ ] Add blog section
- [ ] Implement dark mode
- [ ] Add animations and transitions
- [ ] SEO optimization
- [ ] Performance optimization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

Your Name

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- React Team for React 19
- Tailwind CSS Team
- MongoDB Team
- All open source contributors

---

Made with ❤️ and ☕
