<div align="center">

![Forkify Banner](https://img-c.udemycdn.com/course/480x270/851712_fc61_6.jpg)

# 🍴 Forkify 2025

### Search over 1,000,000 recipes — bookmark favorites, adjust servings & upload your own.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Parcel](https://img.shields.io/badge/Parcel-B07B4B?style=for-the-badge&logo=parcel&logoColor=white)](https://parceljs.org/)
[![Forkify API](https://img.shields.io/badge/Forkify%20API-FF6B6B?style=for-the-badge&logo=fastapi&logoColor=white)](https://forkify-api.herokuapp.com/v2)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://forkify-2025.vercel.app/)

**[🚀 Live Demo](https://forkify-2025.vercel.app/)**

</div>

---

## 📖 About

**Forkify** is a vanilla JavaScript recipe application built with a clean MVC architecture. It connects to the [Forkify API](https://forkify-api.herokuapp.com/v2) to let users search through over **1,000,000 recipes**, adjust servings dynamically, bookmark favourites, and even upload their own custom recipes — all without a single framework.

---

## ✨ Features

- 🔍 **Search** — Query over 1,000,000 recipes from the Forkify API
- 📄 **Pagination** — Browse results 10 at a time
- 🍽️ **Serving Adjuster** — Ingredient quantities scale automatically with servings
- 🔖 **Bookmarks** — Save favourite recipes, persisted via `localStorage`
- ➕ **Upload Recipes** — Add your own recipes directly through the UI
- 📱 **Responsive Design** — Clean layout that works across screen sizes

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 · Sass (SCSS) |
| Logic | JavaScript (ES2022, Modules) |
| Bundler | Parcel v2 |
| Data | Forkify REST API v2 |
| Hosting | Vercel |

---

## 🏗️ Architecture

The project follows the **MVC (Model-View-Controller)** pattern:

```
src/
├── js/
│   ├── model.js          # State & business logic
│   ├── controller.js     # Connects model ↔ views
│   └── views/
│       ├── recipeView.js
│       ├── searchView.js
│       ├── resultsView.js
│       ├── bookmarksView.js
│       ├── paginationView.js
│       └── addRecipeView.js
└── sass/
    └── main.scss
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 16
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/theubaidistan/forkify-2025.git
cd forkify-2025

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

Open [http://localhost:1234](http://localhost:1234) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder, ready to deploy.

---

## 🌐 Deployment

This project is deployed on **Vercel**. Every push to `main` triggers an automatic deployment.

🔗 **Live URL:** [https://forkify-2025.vercel.app/](https://forkify-2025.vercel.app/)

---

## 📡 API Reference

Powered by the **Forkify API v2**.

| Endpoint | Description |
|----------|-------------|
| `GET /api/v2/recipes?search={query}` | Search recipes by keyword |
| `GET /api/v2/recipes/{id}` | Get full recipe details |
| `POST /api/v2/recipes` | Upload a custom recipe (requires API key) |

Base URL: `https://forkify-api.herokuapp.com`

---

## 📜 License & Credits

Recipe data and original project concept by [Jonas Schmedtmann](https://twitter.com/jonasschmedtman).  
> Use for learning or your portfolio. Do not use to teach. Do not claim as your own.

---

<div align="center">
Made with ❤️ by <a href="https://github.com/theubaidistan">theubaidistan</a>
</div>
