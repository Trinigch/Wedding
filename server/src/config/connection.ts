import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();  // Load environment variables from a .env file into process.env

const useDB = process.env.USE_DATABASE === 'true';
let sequelize: Sequelize | null = null;

if (useDB) {
const isProduction = process.env.NODE_ENV === 'production';

console.log('Running in', isProduction ? 'PRODUCTION' : 'DEVELOPMENT', 'mode');
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
//console.log('VITE_POSITIONSTACK_API_KEY:', process.env.VITE_POSITIONSTACK_API_KEY);

console.log('VITE_GOOGLE_MAPS_API_KEY:', process.env.VITE_GOOGLE_MAPS_API_KEY);


// Initialize a Sequelize instance to connect to the PostgreSQL database.
// If DB_URL is provided in the environment variables, use it directly.
// Otherwise, use individual environment variables for database name, user, and password.

sequelize = isProduction && process.env.DB_URL
  ? new Sequelize(process.env.DB_URL, {
      dialect: 'postgres',
      protocol: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false // Para Render u otros que requieren SSL
        },
      },
    })
  : new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
     console.log("✅ DB connection initialized");
} else {
  console.log("🛑 DB connection skipped (USE_DATABASE is false)");
}
export const closeDB = async () => {
  if (useDB && sequelize) {
    try {
      await sequelize.close();
      console.log("📴 Database connection closed.");
    } catch (error) {
      console.error("❌ Error closing the database connection:", error);
    }
  }
};


export default sequelize;
