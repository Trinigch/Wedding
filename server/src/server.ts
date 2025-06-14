
import cors from 'cors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import sequelize from './config/connection.js'; // Import the initialized Sequelize instance
import routes from './routes/index.js';  // Import the routes for handling different endpoints

const forceDatabaseRefresh = false;  // Flag to control whether to force a database refresh on server start
const app = express();  // Create an Express application
const PORT = process.env.PORT || 3001;  // Define the port for the server to listen on


// ESModules workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//Middleware 
app.use(cors({
  origin: 'http://localhost:3000'
}));
// Serves static files from the client's dist folder, typically for a built React application
//app.use(express.static('../client/dist'));

app.use(express.json());  // Middleware to parse JSON request bodies
app.use(routes);  // Use the imported routes for handling API endpoints



// Serve static files from client/dist
const clientDistPath = path.resolve(__dirname, '../client/dist');
app.use(express.static(clientDistPath));
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

// Start server
// Sync the Sequelize models with the database
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {  // Start the server and listen on the defined port
    console.log(`Server is listening on port ${PORT}`);  // Log a message when the server starts
  });
});
