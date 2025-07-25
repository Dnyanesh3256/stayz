# StayZ - Vacation Rental Platform

A full-stack vacation rental platform with property listings, filters, and reviews, built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**.

---

## 🚀 Live Demo

👉 [View Live Project](https://stayz-lriy.onrender.com)

---

## 🚀 Features

- User authentication (signup/login)
- Create, view, edit, and delete property listings
- **Cloudinary image upload** for listings
- **MongoDB Atlas** cloud database
- Tax calculation toggle
- Review and rating system
- Map integration for property locations
- Fully responsive design

---

## 🛠 Tech Stack

### Backend
- **Node.js** | **Express.js**
- **MongoDB Atlas** (Cloud Database)
- **Mongoose** ODM
- **Passport.js** Authentication

### Frontend
- **EJS** Templating
- **Bootstrap 5** + Custom CSS
- **Mapbox GL JS** (Interactive Maps)
- **Font Awesome** Icons

### Services
- **Cloudinary** (Image Storage & CDN)
- **MongoDB Atlas** (Database Hosting)

---

## 🌐 Key Routes

| Method | Route                  | Description                     |
|--------|------------------------|---------------------------------|
| GET    | /                      | Homepage with all listings      |
| GET    | /listings/new          | Show new listing form           |
| POST   | /listings              | Create new listing              |
| GET    | /listings/:id          | Show single listing             |
| GET    | /listings/:id/edit     | Show edit form                  |
| PUT    | /listings/:id          | Update listing                  |
| DELETE | /listings/:id          | Delete listing                  |
| POST   | /listings/:id/reviews  | Add review to listing           |
| GET    | /signup                | Show signup form                |
| POST   | /signup                | Create new user                 |
| GET    | /login                 | Show login form                 |
| POST   | /login                 | User login                      |

---

## 🖼 UI Components

- **Interactive Filter Bar** (always scrollable)
- **Listing Cards** with hover effects
- **Tax Toggle Switch** (mobile-optimized)
- **Review System** with star ratings
- **Responsive Navbar** and footer

---
