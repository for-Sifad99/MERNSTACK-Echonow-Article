# 📰 EchoNow — Modern News Aggregator
EchoNow is a dynamic and modern newspaper web application that revolutionizes the way users consume news. From trending articles to premium content, subscription models, and admin controls — this full-stack app has everything to serve a real-world news platform experience.

---

## 📂 Project Structure  

| Part | Description | Repository | Live Demo |
|------|-------------|-------------|-----------|
| **Frontend (Client)** | React app for users | [Client Repo](https://github.com/for-Sifad99/Echonow-client) | [Live Site](https://echonow.netlify.app/) |
| **Backend (Server)** | Node.js + Express API server | [Server Repo](https://github.com/for-Sifad99/Echonow-server) | [Server Live](https://echonow-server.vercel.app/) |

---

## 🚀 Technologies  

### Frontend  
- React with Vite
- Firebase Authentication
- Tailwind CSS + Material UI
- Stripe (Payment Integration)
- TanStack Query (React Query)
- GSAP (Animations)
- React Slick (Carousels)
- Recharts (Data Visualization)

### Backend  
- Node.js + Express.js
- MongoDB (Mongoose)
- Firebase Authentication
- Stripe (Payment Integration)
- ImgBB (Image Uploads)

---

## 📝 Key Features  

### Frontend Features
- Fully responsive across Mobile, Tablet, and Desktop
- Real-time protected routes using Firebase authentication token
- Role-based dashboard with different admin/user functionalities
- Article submission with filter, search, approval & premium tagging
- Premium users enjoy exclusive features and unlimited posting
- Uses `react-query` (TanStack) for all GET data fetching
- Environment variables secure Firebase & MongoDB secrets
- Smooth UI/UX with private & public routes
- Pagination support on `All Articles` page
- Carousel slider for trending articles on homepage
- Dark/Light theme toggle functionality
- Social login with Google

### Backend Features
- User Authentication & Authorization using JWT and Firebase
- Role-Based Access Control – supports Normal Users, Premium Users, and Admins
- JWT Protected Routes to secure article posting, profile, subscription, and admin access
- Dynamic Article Filtering via publisher, tag, and search query
- Article Approval Workflow – only admin-approved articles become public
- Premium Article Restriction – only subscribed users can view premium content
- Post Limiting for Normal Users – only one article allowed unless subscribed
- Auto Subscription Expiry based on selected time (1 min, 5 days, 10 days)
- View Count Tracking for trending article calculation
- Admin Panel API with publisher management, pie charts, user stats, and moderation tools
- Pagination Support for All Users and All Articles (admin dashboard)

---

## 🔑 API Highlights (Server)  

### User APIs
- Create/update user with premium subscription management
- Get user by email
- Get all users with premium count (admin only)
- Make user admin (admin only)
- Get user role by email

### Article APIs
- Create new article (with post limiting for normal users)
- Get approved articles with search, filter, and pagination
- Get user's own articles
- Get premium articles (premium users only)
- Get all articles for admin dashboard
- Get single article by ID
- Update view count
- Get special/hot/trending articles
- Update article (admin only)
- Delete article (admin only)

### Publisher APIs
- Get publisher stats with article counts
- Get all publishers (admin only)
- Add new publisher (admin only)
- Get publishers with articles

### Payment API
- Create Stripe payment intent for subscription

*(See server repo for full endpoint documentation.)*

---

## 🔍 Explore More  

This README gives an overview of the full project.  
To explore each part more deeply, check out the individual repositories. 

Each repository contains its own detailed README with setup instructions, technologies used, and full documentation.