# 🏡 Estate Agent Client-side Web Application

A responsive single-page web application built with React.js, inspired by platforms like [rightmove.co.uk](https://www.rightmove.co.uk). This project allows users to search for properties using various filters and manage a favorites list—all without a backend server.

## 📌 Features

- 🔍 **Search Properties by Criteria:**
  - Type (house, flat, any)
  - Price range
  - Number of bedrooms
  - Date added
  - Postcode area (e.g., NW1, BR1)
- 📄 **Responsive Form with React UI Widgets**
- 🖼️ **Search Results Display:**
  - Includes image, short description, and price
- 🏠 **Property Detail Pages:**
  - Large images + thumbnails
  - Long description, floor plan, Google map using React Tabs
- ❤️ **Favorites List (Local Storage):**
  - Add/remove using drag-and-drop or button
  - Clear all favorites
- 📱 **Fully Responsive Design:**
  - Grid/Flex layout and media queries for desktop/tablet/mobile views
- 🔐 **Security Measures:**
  - Basic client-side protections (CSP, HTML encoding, React JSX safety)

## 📁 Project Structure

estate-agent-spa/
├── public/
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── Footer.js
│ │ ├── HomeHero.js
│ │ ├── Navbar.js
│ │ ├── custom.js
│ │ └── styles.css
│ │
│ ├── data/
│ │ └── properties.json # Contains all property data
│ │
│ ├── Pages/ # Page-level components
│ │ ├── Home.js
│ │ ├── Saveditems.js
│ │ └── SearchPage.js
│ │
│ ├── property/ # Individual property detail components
│ │ ├── Property1.js
│ │ ├── Property2.js
│ │ ├── ...
│ │ └── Property7.js
│ │
│ ├── App.js # Main app router
│ ├── App.css
│ ├── App.test.js
│ └── index.css

## 🚀 Getting Started

Prerequisites
Node.js (v16 or higher recommended)

npm or yarn

Installation
git clone https://github.com/senuri222/estate-agent-spa.git
cd estate-agent-spa
npm install
npm start
Open http://localhost:3000 to view it in your browser.

## 🧪 Usage Guide

Enter search criteria in the form.
Browse results that match your criteria.
Click on a property to view details.
Add properties to your favorites list using drag or the favorite button.
Manage your favorites from the sidebar or results page.

## 📦 Built With

React.js
React Tabs
CSS Flexbox/Grid + Media Queries
Local Storage API

## 📚 Learning Outcomes Demonstrated

Client-side form handling with React
Data filtering logic using JSON
Responsive UI design
State management and local storage
Basic client-side security practices

## 🎓 Module Details

University of Westminster
5COSC026W – Advanced Client-side Web Development
Coursework Weighting: 60%
Academic Year: 2024/25
Instructor: Ebad Majeed

## 📜 License

This project is for academic use only. Do not redistribute without permission.
