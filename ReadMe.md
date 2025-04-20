# TechnoFy - Full Stack Application

Welcome to the TechnoFy project! This repository contains both the **Frontend** and **Backend** for the application. Follow the instructions below to set up and run the project.

---

## **Project Overview**
TechnoFy is a [briefly explain what the project does, e.g., "platform for educational content and interactive learning"]. It is built using the following technologies:
- **Frontend**: React.js
- **Backend**: Laravel (PHP)
- **Database**: MySQL

---


---

## **Requirements**
To run this project locally, you'll need:
- **Node.js** (v16+)
- **npm** (v8+) or **yarn**
- **PHP** (v8.0+)
- **Composer**
- **MySQL**

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/Hidaya01/Technofy

cd your-repo

Backend Setup
Navigate to the backend folder:

bash
cd backend
Install PHP dependencies:

bash
composer install
Set up the .env file:

Copy .env.example to .env:

bash
cp .env.example .env

Update the database credentials in the .env file:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password

Generate the application key:

bash
php artisan key:generate
Run database migrations:

bash
php artisan migrate

Start the Laravel server:

bash
php artisan serve
The backend will be available at http://127.0.0.1:8000.

3. Frontend Setup
Navigate to the frontend folder:

bash
cd ../frontend
Install Node.js dependencies:

bash
npm install
Start the Vite development server:

bash
npm run dev
The frontend will be available at http://localhost:5173 (or another port if 5173 is in use).