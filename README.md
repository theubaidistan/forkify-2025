# 🍴 Forkify

Forkify is a modern, amazing web app built for searching, viewing, and bookmarking recipes. Originally created as a learning project by Jonas Schmedtmann, it’s a great showcase for clean UI design, API integration, and JavaScript architectural patterns.

---

## 🚀 Demo

🔗 Live Demo: [https://forkify-2025.vercel.app](https://forkify-2025.vercel.app)

---

## ✨ Features

- 🔎 **Search Recipes**: Enter ingredient or recipe keywords and fetch results in real time.  
- 📖 **Recipe Details**: View ingredients, publisher info, preparation time, and servings.  
- 📌 **Bookmarks**: Save favorite recipes for quick access later (stored in `localStorage`).  
- 📱 **Responsive Design**: Optimized for all devices — mobile, tablet, and desktop.  
- ⚡ **Clean Code**: Modular JavaScript architecture with SCSS for maintainable styles.

---

## 📱 Responsive Design Details

Forkify adapts seamlessly to different screen sizes using **CSS Grid, Flexbox, and media queries**:

- **Mobile (≤ 600px)**:  
  - Single-column layout  
  - Compact recipe cards  
  - Navigation collapses into hamburger menu  

- **Tablet (601px–1024px)**:  
  - Two-column layout for list and recipe view  
  - Optimized font sizes and spacing  

- **Desktop (≥ 1025px)**:  
  - Three-column layout: search, list, recipe details  
  - Full-size images and expanded recipe details  
  - Persistent sidebar for bookmarks  

**Techniques used:**  
- SCSS variables for breakpoints (`$bp-small`, `$bp-medium`, `$bp-large`)  
- Fluid typography using `rem` and `%` scaling  
- Flexbox and CSS Grid for dynamic content arrangement  

---

## 🛠 Tech Stack

- **HTML5** — semantic structure  
- **SCSS** — maintainable, modular styling  
- **JavaScript (ES6+)** — modern features and modules  
- **Parcel** — bundling and asset optimization  
- **Forkify API** — external recipes API  

---

## ⚡ Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/forkify-2025.git
cd forkify-2025

# 2. Install dependencies
npm install

# 3. Run local server (development)
npm run start

# 4. Build for production
npm run build
