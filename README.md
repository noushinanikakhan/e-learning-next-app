# 🌊 Ocean Academy – Modern E-Learning Platform

*A full-stack e-learning platform built entirely with Next.js 16 API Routes*

**Live Demo:** [https://e-learning-next-app.vercel.app](https://e-learning-next-app.vercel.app)  
**GitHub:** https://github.com/noushinanikakhan/e-learning-next-app

---

## 🎯 Project Overview

Ocean Academy is a **full-stack application built entirely with Next.js 16**, using the built-in API Routes for backend functionality. No separate Express server needed - everything runs on the Next.js runtime with MongoDB for data persistence.

### ✨ Architecture Highlights
- 🚀 **Full-Stack Next.js** - No separate backend server
- 📡 **API Routes** - Built-in backend functionality
- 🗄️ **MongoDB** - Direct database connectivity
- 🔐 **NextAuth.js** - Built-in authentication
- ⚡ **Single Deployment** - Everything deploys to Vercel

---

## 🚀 Main Features

### 🏠 Landing Page Experience
| Section | Description | Technology |
|---------|-------------|------------|
| **Hero Section** | Dynamic banner with optimized images | Next.js Image |
| **Featured Courses** | Server-side rendered course grid | App Router |
| **Testimonials** | Interactive student reviews | React 19 |
| **Categories** | Responsive category filters | Tailwind CSS |
| **Statistics** | Animated success metrics | CSS Animations |

### 👤 Advanced Authentication
- **NextAuth.js**: Google OAuth + Credentials provider
- **MongoDB Adapter**: Persistent sessions
- **Middleware Protection**: Route-based authentication
- **Secure API Routes**: Protected backend endpoints

### 📚 Course Management System
| Feature | Description | Tech Used |
|---------|-------------|-----------|
| **API Routes** | Full CRUD operations | Next.js API |
| **Dynamic Routing** | Course details with `[id]` | App Router |
| **Image Optimization** | Automatic WebP/AVIF conversion | Next.js Image |
| **Real-time Search** | Client-side filtering | React 19 State |

---

## 🛠️ Technology Stack

### Full-Stack Next.js
- **Framework**: Next.js 16.0.4 (App Router + API Routes)
- **React**: React 19.2.0
- **Compiler**: React Compiler (Babel Plugin)
- **Styling**: Tailwind CSS 3.4 + DaisyUI
- **Authentication**: NextAuth.js with MongoDB Adapter
- **Database**: MongoDB 5.8
- **Deployment**: Vercel (full-stack)

### No Separate Backend Needed!
- ✅ **API Routes** handle all backend logic
- ✅ **Database** connects directly from API routes
- ✅ **Authentication** handled by NextAuth.js
- ✅ **File Upload** possible via API routes
- ✅ **Everything** deploys together to Vercel

---

## 📦 Dependencies (Actual)

### Core Dependencies
```json
{
  "next": "16.0.4",
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "mongodb": "5.8.1",
  "@next-auth/mongodb-adapter": "1.1.3"
}
```

### Development & Styling
```json
{
  "tailwindcss": "3.4.18",
  "daisyui": "5.5.5",
  "babel-plugin-react-compiler": "1.0.0",
  "eslint": "9.x",
  "autoprefixer": "10.4.22",
  "postcss": "8.5.6"
}
```

## 🚀 Quick Start Guide
### Prerequisites
- Node.js 18.17 or later
- MongoDB database (Atlas recommended)
- Google Cloud Console account (for OAuth)

### Installation & Setup
1. Clone and Install
```bash
git clone https://github.com/your-username/e-learning-next-app.git
cd e-learning-next-app
npm install
```

### 2. Environment Configuration
Create .env.local:
```env
# Next.js 16 & Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-nextauth-key

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret

# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ocean-academy
```

3. Start Development Server
```bash
npm run dev
```

4. Access Application
Open http://localhost:3000

## 🗂️ Project Structure (Next.js 16 Full-Stack)
```text
e-learning-next-app/
├── app/                    # Next.js 16 App Router (Frontend)
│   ├── api/               # ✅ BACKEND: API Routes
│   │   ├── auth/          # Authentication API
│   │   │   └── [...nextauth]/
│   │   ├── courses/       # Courses CRUD API
│   │   │   └── route.js   # GET, POST, DELETE
│   │   └── register/      # User registration API
│   ├── (auth)/            # Authentication pages
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/       # Protected admin routes
│   │   ├── add/
│   │   └── manage/
│   ├── courses/           # Course catalog
│   ├── details/[id]/      # Dynamic course pages
│   └── layout.tsx         # Root layout
├── components/            # React components
├── lib/                   # Utilities
│   ├── auth.ts           # NextAuth config
│   ├── mongodb.ts        # Database connection
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── types/               # TypeScript types
```

## 🛣️ API Routes Summary 
### Authentication API
Endpoint	Methods	Description
/api/auth/[...nextauth]	GET, POST	NextAuth.js handlers (Google + Credentials)
/api/auth/session	GET	Get current user session
/api/auth/csrf	GET	CSRF token for forms

### Courses API (Full CRUD)
Endpoint	Methods	Description
/api/courses	GET	Fetch all courses
/api/courses	POST	Create new course
/api/courses	DELETE	Delete course (with ?id=)
Future: /api/courses/[id]	PUT, PATCH	Update course

### User Management API

Endpoint	Methods	Description
/api/register	POST	User registration

## 🔧 API Route Examples
### Courses API (/app/api/courses/route.js)

## 🚀 Deployment on Vercel
### Single Command Deployment
Everything deploys together:
# Build and deploy full-stack application
vercel --prod

### Vercel Configuration
-Build Command: next build

-Output Directory: .next

-Framework Preset: Next.js

### Environment Variables in Vercel
Set these in your Vercel project settings:
```env
NEXTAUTH_URL=https://your-app.vercel.app
NEXTAUTH_SECRET=your-production-secret
MONGODB_URI=your-production-mongodb-uri
GOOGLE_CLIENT_ID=your-production-client-id
GOOGLE_CLIENT_SECRET=your-production-client-secret
```

## ⚡ Benefits of Next.js API Routes
### ✅ Simplified Architecture
-No separate server to maintain
-Single codebase for frontend + backend
-Unified deployment process

### ✅ Automatic Optimization
-API routes are serverless functions
-Automatic scaling on Vercel
-Built-in middleware support

### ✅ Full-Stack Features
-Database connections from API routes
-File uploads with proper handling
-Authentication with NextAuth.js
-Real-time capabilities with WebSockets

## 🔄 Frontend-Backend Communication
### Fetching Courses (Frontend)
```javascript
// In your React components
const fetchCourses = async () => {
  const response = await fetch('/api/courses');
  const courses = await response.json();
  return courses;
};
```

### Creating Courses (Frontend)
```javascript
const createCourse = async (courseData) => {
  const response = await fetch('/api/courses', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(courseData)
  });
  return await response.json();
};
```

## 🛠️ Development Workflow
### Local Development
```json
npm run dev
# Frontend: http://localhost:3000
# API Routes: http://localhost:3000/api/courses
```

## Production Build
```bash
npm run build
npm start
```

## API Testing
Test your API routes directly:
```bash
# Test courses API
curl http://localhost:3000/api/courses

# Test with authentication
curl -H "Authorization: Bearer {token}" http://localhost:3000/api/courses
```

## 📈 Performance & Scalability
- **Serverless API Routes:** Auto-scaling on Vercel

- **Edge Runtime:** Optional for faster responses

- **Database Connection Pooling:** Efficient MongoDB connections

- **CDN Caching:** Automatic for static assets

## 🔧 Troubleshooting
Common API Route Issues
1. **Database Connection:** Ensure MONGODB_URI is correct

2. **CORS:** Handled automatically by Next.js

3. **Environment Variables:** Must be set in Vercel

4. **Cold Starts:** Normal for serverless functions

### MongoDB Connection
```javascript
// Always use the connection pattern from lib/mongodb.js
import clientPromise from '@/lib/mongodb';

export async function GET() {
  const client = await clientPromise;
  const db = client.db('ocean-academy');
  // ... your database operations
}
```

## 🎯 Key Advantages of Your Architecture
1. 🚀 **No Backend Complexity** - Everything in Next.js

2. 💰 **Cost Effective** - Single deployment, serverless

3. ⚡ **Fast Development** - Frontend and backend together

4. 🔒 **Secure** - Built-in Next.js security features

5. 📈 **Scalable** - Vercel handles scaling automatically

## 🤝 Contributing
We welcome contributions to enhance the API routes and frontend features!

###  Development Setup
1. Fork the repository

2. Create feature branch

3. Test API routes with npm run dev

4. Submit pull request

*Built with ⚡ Next.js 16 API Routes - Full-Stack Made Simple!*






