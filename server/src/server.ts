import cors from 'cors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import sequelize from './config/connection.js';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;
const forceDatabaseRefresh = false;

// ESModules workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // puedes cambiar esto por tu frontend en producción
}));
app.use(express.json());

// API routes
app.use(routes);

// Servir archivos estáticos del frontend
// const clientDistPath = path.resolve(__dirname, '../client/dist');
// app.use(express.static(clientDistPath));
const clientDistPath = path.resolve(__dirname, 'client');
app.use(express.static(clientDistPath));
//Captura todas las rutas que no sean de API y devuelve index.html
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});
/************************************************************* */
// Iniciar el servidor
if (sequelize) {
  sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  });
} else {
  // Iniciar el servidor igual, pero sin DB
  app.listen(PORT, () => {
    console.log(`Server is running WITHOUT database on port ${PORT}`);
  });
}
  // "scripts": {
  //   "test": "echo \"Error: no test specified\" && exit 1",
  //   "start": "npm run client:build && npm run server",
  //   "start:dev": "concurrently \"npm run server:dev\" \"wait-on tcp:3001 && npm run client:dev\"",
  //   "server": "cd server && npm start",
  //   "server:dev": "cd server && npm run dev",
  //   "install": "cd server && npm install --include=dev && cd ../client && npm install",
  //   "client:build": "cd client && npm run build",
  //   "client:dev": "cd client && npm run dev",
  //   "build": "npm run client:build && npm run build-server",
  //   "build-server": "cd server && npx tsc",
  //   "seed": "cd server && npm run seed",
  //   "render-build": "npm run install && npm run client:build && npm run build-server"
  // },