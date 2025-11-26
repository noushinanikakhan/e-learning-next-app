# 🌊 Ocean Academy – E-Learning Platform  
A modern Next.js (App Router) application featuring authentication with NextAuth.js, protected routes, Express.js backend, and responsive UI.

Live Demo: **https://e-learning-next-app.vercel.app**  
Backend API: *(your express server URL if deployed)*  
GitHub Repo: *(your repo link here)*

---

## 📌 Project Overview
Ocean Academy is a simple yet polished e-learning platform built as part of the Next.js assignment.  
It includes:

- A full Landing Page with 7+ sections  
- Authentication (Google + Credentials) using **NextAuth.js**  
- Protected pages (Add Product, Manage Products)  
- A working backend using **Express.js**  
- Responsive and clean UI with TailwindCSS  
- Dynamic routes for item details

---

## 🚀 Features

### ⭐ Landing Page (7 Sections)
- Sticky **Navbar** with Login/Register OR User dropdown  
- **Hero section** with responsive background image  
- **Featured Courses** section  
- **Why Choose Us**  
- **Testimonials**  
- **Popular Categories**  
- **Footer** with links & social icons  

### 🔐 Authentication
- Login & Register pages  
- Google OAuth + Email/Password login  
- Redirects to Home after login  
- Protected routes using NextAuth middleware  

### 📚 Courses (Items)
- **Courses List Page:**  
  - Search bar  
  - 6+ responsive cards  
  - Title, description, image, price, details button  

- **Course Details Page:**  
  - Large banner  
  - Full description  
  - Meta info (price, duration, instructor)  
  - Back button  

---

## 🔒 Protected Routes
### 1️⃣ **Add Product (Protected)**
- Only logged-in users can access  
- Fields:
  - Title
  - Short description
  - Full description
  - Price
  - Duration / Priority
  - Image URL  
- On submit → saves to backend + toast message  

### 2️⃣ **Manage Products (Protected)**
- View all products (table or cards)
- Actions:
  - **View**
  - **Delete**
- Fully responsive layout  

---

## 🧩 Tech Stack
| Feature | Technology |
|---------|------------|
| Frontend | Next.js (App Router) |
| UI | Tailwind CSS |
| Auth | NextAuth.js (Google + Credentials) |
| Backend | Express.js |
| DB (optional) | MongoDB (or your local JSON) |
| Deployment | Vercel |

---

## 📁 Folder Structure (Important for Assignment)
/app
/api
/auth [...nextauth]
/courses
/add-product (protected)
/manage-products (protected)
/courses
/details/[id]
/login
/register
/components
Navbar.jsx
Hero.jsx
FeaturedCourses.jsx
Footer.jsx
/backend
server.js (Express server)



---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone <your-repo-url>
cd e-learning-next-app

2️⃣ Install dependencies
npm install

3️⃣ Environment Variables

Create .env.local:

NEXTAUTH_SECRET=yourSecretKey
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=yourGoogleClientID
GOOGLE_CLIENT_SECRET=yourGoogleClientSecret


Express backend .env (optional):

PORT=5000
MONGO_URI=yourMongoDBURI


4️⃣ Start the Express backend
cd backend
node server.js

5️⃣ Run the Next.js app
npm run dev


App runs on:
👉 http://localhost:3000

🌐 Deployment
Frontend (Next.js)

Deployed on Vercel:

👉 https://e-learning-next-app.vercel.app

Deploy using:

vercel --prod

Backend (Express)

Host on Render / Railway / Vercel Serverless / local.

🧭 Route Summary
Public Routes
Route	Description
/	Landing Page
/courses	Item (Course) list page
/details/[id]	Course details page
/login	Login page
/register	Register page
Protected Routes
Route	Description
/add-product	Add a new course/product
/manage-products	Manage (view/delete) products

Protected using:

export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/add-product", "/manage-products"],
};

🏁 Conclusion

Ocean Academy is a polished, responsive, and well-structured Next.js application demonstrating authentication, protected routes, dynamic pages, backend integration, and clean UI.

Feel free to fork, extend, or customize it!
