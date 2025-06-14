# Wedding App
A full‑stack RSVP application for wedding guests, built with React, Express, and PostgreSQL. Guests can confirm attendance to the ceremony and optional trips (Iguazú Falls and Fitz Roy), and view who’s coming.

Technologies
Front‑end: React, Vite, React Router, JSX, React Hooks, styled‑components

Back‑end: Node.js, Express, Sequelize ORM

Database: PostgreSQL

Deployment: Netlify (front‑end), Render or Heroku (API), Heroku Postgres

Installation
Clone the repository and install dependencies for both client and server:

bash
Copiar
Editar
# Clone the repo
git clone git@github.com:Trinigch/Wedding.git

# Front‑end
cd WeddingApp
npm install

# Back‑end
cd ../server
npm install
Create a .env file in the server/ directory with these variables:

env
Copiar
Editar
DATABASE_URL=postgres://<USER>:<PASSWORD>@<HOST>:<PORT>/<DB_NAME>
VITE_GOOGLE_MAPS_API_KEY=<YOUR_GOOGLE_MAPS_API_KEY>
Usage
Development
bash
Copiar
Editar
# In one terminal, start the front‑end
cd WeddingApp
npm run dev

# In another terminal, start the API server
cd server
npm run dev
Production
bash
Copiar
Editar
# Build front‑end
cd WeddingApp
npm run build

# Start back‑end
cd server
npm start
Links
GitHub Repository: https://github.com/Trinigch/Wedding

Front‑end Live Demo: https://stunning-flan-6d41aa.netlify.app

API Endpoint: https://your-api-url.onrender.com

Credits
Developer: Trinidad Peterson — GitHub: Trinigch

License
This project is licensed under the MIT License. See the full text in the LICENSE file.
