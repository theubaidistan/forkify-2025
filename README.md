<div align="center">

<img src="https://img-c.udemycdn.com/course/480x270/851712_fc61_6.jpg" alt="Forkify Banner" width="600" style="border-radius: 12px;" />

# 🍴 Forkify 2025

### Search, view, and bookmark over **1,000,000 recipes** — powered by the Forkify API.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Parcel](https://img.shields.io/badge/Parcel-B07219?style=for-the-badge&logo=parcel&logoColor=white)](https://parceljs.org/)
[![Forkify API](https://img.shields.io/badge/Forkify_API-FF6B35?style=for-the-badge&logo=api&logoColor=white)](https://forkify-api.herokuapp.com/v2)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-forkify--2025.vercel.app-brightgreen?style=for-the-badge)](https://forkify-2025.vercel.app/)

</div>

---

## 📖 About

**Forkify 2025** is a modern recipe search and management web application built with vanilla JavaScript, following the **MVC (Model-View-Controller)** architectural pattern. It connects to the Forkify API to give users access to over **1,000,000 recipes**, with features to bookmark favorites and even upload custom recipes.

This project was built as part of [Jonas Schmedtmann's](https://twitter.com/jonasschmedtman) JavaScript course on Udemy.

---

## ✨ Features

- 🔍 **Search** over 1,000,000 recipes via the Forkify API
- 📄 **Pagination** — browse results page by page
- 🧾 **Ingredient scaling** — adjust servings and ingredient quantities dynamically
- 🔖 **Bookmarks** — save your favourite recipes (persisted via `localStorage`)
- ➕ **Upload custom recipes** — add your own recipes through a modal form
- 📱 **Responsive UI** — clean and intuitive layout across devices

---

## 🏗️ Architecture & Flowcharts

This application follows a clean **MVC pattern** with a Publisher-Subscriber model for event handling.

### Flowchart — Part 1
> Search & Render Results

![Flowchart Part 1](https://github.com/theubaidistan/forkify-2025/blob/main/forkify-flowchart-part-1.png?raw=true)

---

### Flowchart — Part 2
> Recipe Loading & Bookmarking

![Flowchart Part 2](https://github.com/theubaidistan/forkify-2025/blob/main/forkify-flowchart-part-2.png?raw=true)

---

### Flowchart — Part 3
> Upload Recipe & Full Application Flow

![Flowchart Part 3](https://github.com/theubaidistan/forkify-2025/blob/main/forkify-flowchart-part-3.png?raw=true)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Markup structure |
| **CSS3 / Sass** | Styling with variables, mixins, and nesting |
| **JavaScript (ES6+)** | Application logic, async/await, modules |
| **Parcel** | Module bundler and dev server |
| **Forkify API v2** | Recipe data source |
| **Vercel** | Deployment and hosting |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/theubaidistan/forkify-2025.git

# Navigate into the project directory
cd forkify-2025

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm start
```

Parcel will start a local dev server at `http://localhost:1234`.

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` folder.

---

## 🌐 Deployment

This project is deployed on **Vercel**.

🔗 **Live URL:** [https://forkify-2025.vercel.app/](https://forkify-2025.vercel.app/)

---

## 📁 Project Structure

```
forkify-2025/
├── src/
│   ├── img/              # Static images & icons
│   ├── js/
│   │   ├── controller.js # MVC Controller
│   │   ├── model.js      # Application state & API calls
│   │   └── views/        # Individual View classes
│   └── sass/             # Sass stylesheets
├── index.html
├── package.json
└── .parcelrc
```

---

## 📜 License & Credits

Recipe data is provided by the [Forkify API](https://forkify-api.herokuapp.com/v2).  
Original course project by [Jonas Schmedtmann](https://twitter.com/jonasschmedtman) — use for learning or your portfolio.

---

<div align="center">

Made with ❤️ by [theubaidistan](https://github.com/theubaidistan)

</div>
