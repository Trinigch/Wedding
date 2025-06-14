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
const clientDistPath = path.resolve(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

// Captura todas las rutas que no sean de API y devuelve index.html
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

// Iniciar el servidor
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});