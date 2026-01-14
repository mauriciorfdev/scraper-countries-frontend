# Scraper Countries - Frontend

## About

Full-stack web application for data collection and visualization.

The frontend allows users to trigger data collection, clear stored data, and visualize the results in a table.

Built with React + Vite and React Bootstrap, this project served as a TypeScript learning exercise.

## Architecture

- **Frontend (React + Vite)**: Web interface using TypeScript and React Bootstrap for UI Components.

- Backend (ExpressJS): REST API for CRUD operations.

- Scraping Service (Puppeteer): Automated process executed by the backend to collect data from a specific website.

## Demo

### 🔗 [See the project deployed on Vercel](https://scraper-countries-frontend.vercel.app/)

![demo](/src/assets/demo/demo.gif)

## Usage

1. Clone the repo
2. Install NPM packages: `npm install`
3. Set up `.env` file: `VITE_API_URL = your_string`
4. Run the server: `npm run dev`
