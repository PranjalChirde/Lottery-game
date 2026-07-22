# 🎰 Lottery Game

<div align="center">

![Lottery Game Banner](https://img.shields.io/badge/🎰-Lottery%20Game-blueviolet?style=for-the-badge&labelColor=1a1a2e&color=6c63ff)

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20Now-brightgreen?style=for-the-badge)](https://pranjalchirde.github.io/Lottery-game/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=20232a)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=1a1a2e)](https://vitejs.dev/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222?style=for-the-badge&logo=github&logoColor=white)](https://pranjalchirde.github.io/Lottery-game/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

A fun and interactive **Lottery Game** built with **React + Vite**. Generate random tickets and try your luck — if your numbers add up to **15**, you WIN! 🎉

[🌐 **Play Live →**](https://pranjalchirde.github.io/Lottery-game/)

</div>

---

## ✨ Features

- 🎲 **Random Ticket Generation** — Each ticket has 3 random numbers (0–9)
- 🏆 **Win Detection** — Instantly know if you've won (sum = 15)
- ⚡ **Fast & Lightweight** — Built with Vite for blazing fast performance
- 📱 **Responsive Design** — Works on all screen sizes
- 🔁 **One-Click Retry** — Generate a new ticket instantly

---

## 🌐 Live Demo

> 🚀 The app is deployed on **GitHub Pages** and is publicly accessible.

**👉 [https://pranjalchirde.github.io/Lottery-game/](https://pranjalchirde.github.io/Lottery-game/)**

---

## 🎮 How To Play

1. Open the [Live Demo](https://pranjalchirde.github.io/Lottery-game/)
2. Your **ticket** shows 3 random numbers
3. If the **sum of all 3 numbers equals 15** → 🎉 **You WIN!**
4. Click **"Generate New Ticket"** to try again
5. Keep trying until you hit the jackpot!

> **Example:** `[5, 6, 4]` → 5 + 6 + 4 = **15** → 🎊 **Winner!**

---

## 🚀 Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/PranjalChirde/Lottery-game.git

# Navigate into the project
cd Lottery-game

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🗂️ Project Structure

```
lotery-app/
├── public/
├── src/
│   ├── App.jsx          # 🏠 Root component — defines the win condition (sum = 15)
│   ├── lotery.jsx       # 🎰 Main game logic & state management
│   ├── ticket.jsx       # 🎫 Ticket display component
│   ├── ticketNum.jsx    # 🔢 Single number cell component
│   ├── support.js       # 🛠️ Helper functions (genNumber, sum)
│   └── style.css        # 🎨 Styles & layout
├── index.html
├── vite.config.js       # ⚙️ Vite config (base path for GitHub Pages)
└── package.json
```

---

## 🛠️ Built With

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19.x | UI Framework |
| [Vite](https://vitejs.dev/) | 8.x | Build Tool & Dev Server |
| [gh-pages](https://www.npmjs.com/package/gh-pages) | 6.x | GitHub Pages Deployment |

---

## 📦 Deployment

This project is deployed to **GitHub Pages** using the `gh-pages` package.

```bash
# Build & deploy to GitHub Pages
npm run deploy
```

This runs `vite build` and then pushes the `dist/` folder to the `gh-pages` branch automatically.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs via [Issues](https://github.com/PranjalChirde/Lottery-game/issues)
- 🌟 Star the repo if you found it useful!
- 🍴 Fork and submit a Pull Request

---

## 👨‍💻 Author

**Pranjal Chirde**

[![GitHub](https://img.shields.io/badge/GitHub-PranjalChirde-181717?style=flat-square&logo=github)](https://github.com/PranjalChirde)

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute it.

---

<div align="center">

Made with ❤️ using React + Vite

⭐ **Star this repo** if you liked it!

</div>
