# 🎰 Lottery Game

A simple lottery game built with **React + Vite**. Click a button to generate a random ticket — if the numbers add up to 15, you win!

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎮 How It Works

- A ticket has **3 random numbers** (0–9)
- If their **sum equals 15**, you win 🎉
- Click **"Generate New Ticket"** to try again

## 🗂️ Project Structure

```
src/
├── App.jsx        # Root component, defines win condition
├── lotery.jsx     # Main game logic & state
├── ticket.jsx     # Displays the ticket
├── ticketNum.jsx  # Renders a single number
├── support.js     # Helper functions (genNumber, sum)
└── style.css      # Styles
```

## 🛠️ Built With

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
