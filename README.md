# 05_thirsty_33826046

A Node.js and Express.js web application that serves as a drinks website.  
This project demonstrates dynamic content rendering with EJS templates, modular route handling, and user interaction through forms such as registration and search.

## Features Used

- Dynamic page rendering using EJS templates  
- Route handling for user registration and product search  
- Static assets served from the `public` directory  
- Displays shop information such as categories (Beer, Wine, Soft Drinks, Hot Drinks)  
- Input validation for form fields (email address verification)  
- Modular and scalable folder structure for maintainability  

## Technologies Used

- **Node.js** — JavaScript runtime environment  
- **Express.js** — Web application framework for Node.js  
- **EJS (Embedded JavaScript)** — Template engine for rendering dynamic HTML  
- **HTML / CSS / JavaScript** — Core front-end technologies  
- **npm** — Package manager for dependencies  

## Project Structure
```bash
/05_thirsty_33826046
│
├── index.js              # Main server entry point
├── routes/               # Folder containing route definitions
│   └── main.js           # Main route handler for pages
│
├── views/                # EJS templates for dynamic content
│   ├── register.ejs      # User registration form
│   ├── search.ejs        # Search form for products
│   ├── search_result.ejs # Displays search results
│   └── layout.ejs        # Common layout template (if used)
│
├── public/               # Folder for static assets (CSS, images, JS)
│   └── style.css
│
├── package.json          # Project metadata and dependencies
├── package-lock.json
└── .gitignore

## Installation & Setup

## Clone or extract this repository:
```bash
git clone https://github.com/JohnO30/05_thirsty_33826046.git
cd 05_thirsty_33826046
 ```

# Install dependencies:
```bash
npm install
```
# Start the server:
```bash
node index.js
