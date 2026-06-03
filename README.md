<div align="center">

![Forkify Banner](https://img-c.udemycdn.com/course/480x270/851712_fc61_6.jpg)

# 🍴 Forkify 2025

### Search over 1,000,000 recipes — bookmark your favorites & upload your own.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Parcel](https://img.shields.io/badge/Parcel-B17E61?style=for-the-badge&logo=parcel&logoColor=white)](https://parceljs.org/)
[![Forkify API](https://img.shields.io/badge/Forkify_API-FF6B35?style=for-the-badge&logo=fastapi&logoColor=white)](https://forkify-api.herokuapp.com/v2)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://forkify-2025.vercel.app/)

**[🚀 Live Demo](https://forkify-2025.vercel.app/)**

</div>

---

## 📖 About

**Forkify** is a modern JavaScript recipe application built without any UI frameworks. It connects to the Forkify API to let users search through over **1,000,000 recipes**, adjust servings, bookmark favorites, and even upload their own custom recipes.

Built as part of Jonas Schmedtmann's JavaScript course, this project demonstrates real-world patterns like **MVC architecture**, **ES6 modules**, **async/await**, and **publisher-subscriber design**.

---

## ✨ Features

- 🔍 **Search** — Query over 1,000,000 recipes from the Forkify API
- 📄 **Pagination** — Browse results page by page
- 🍽️ **Servings Adjuster** — Dynamically recalculate ingredient quantities
- 🔖 **Bookmarks** — Save your favorite recipes (persisted via `localStorage`)
- ⬆️ **Upload Recipes** — Add your own custom recipes to the API
- 📱 **Responsive Design** — Works seamlessly across devices

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Markup & semantic structure |
| **CSS3 / Sass** | Styling, layout, and responsive design |
| **JavaScript (ES6+)** | Core application logic & DOM manipulation |
| **Parcel** | Module bundler & dev server |
| **Forkify API v2** | Recipe data source |
| **Vercel** | Deployment & hosting |

---

## 🏗️ Architecture

The app follows a clean **MVC (Model-View-Controller)** pattern:

```
src/
├── js/
│   ├── controller.js       # App entry point — coordinates model & views
│   ├── model.js            # State management & API calls
│   └── views/
│       ├── recipeView.js   # Recipe detail rendering
│       ├── searchView.js   # Search input handling
│       ├── resultsView.js  # Search results list
│       ├── bookmarksView.js# Bookmarks dropdown
│       ├── paginationView.js # Page navigation
│       └── addRecipeView.js  # Upload recipe modal
├── sass/
│   └── main.scss           # Global styles
└── index.html
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v16+`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/theubaidistan/forkify-2025.git

# Navigate into the project
cd forkify-2025

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the development server
npm start
```

Open [http://localhost:1234](http://localhost:1234) in your browser.

### Building for Production

```bash
npm run build
```

Output is generated in the `dist/` folder.

---

## 🌐 API Reference

This project uses the **[Forkify API v2](https://forkify-api.herokuapp.com/v2)**.

| Endpoint | Method | Description |
|---|---|---|
| `/api/v2/recipes?search={query}` | `GET` | Search recipes by keyword |
| `/api/v2/recipes/{id}` | `GET` | Get a recipe by ID |
| `/api/v2/recipes` | `POST` | Upload a new recipe (requires API key) |

> **Note:** An API key is required to upload recipes. Get yours at [forkify-api.herokuapp.com](https://forkify-api.herokuapp.com/v2).

---

## 📦 Deployment

This app is deployed on **Vercel**. Any push to the `main` branch triggers an automatic deployment.

🔗 **Live URL:** [https://forkify-2025.vercel.app/](https://forkify-2025.vercel.app/)

---

## 🙏 Credits

- Recipe data powered by **[Forkify API](https://forkify-api.herokuapp.com/v2)**
- Original project design by **[Jonas Schmedtmann](https://twitter.com/jonasschmedtman)**

---

<div align="center">

Made with ❤️ by **[theubaidistan](https://github.com/theubaidistan)**

</div>
