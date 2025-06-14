import sequelize from '../config/connection.js';
import { RSVPFactory } from './RSVP.js'; // Import the RSVP model factory function
import { FeedbackFactory } from './feedback.js';  // Import the Feedback model factory function
import { TipFactory } from './tips.js';           // Import the Tip model factory function

// Inicializa el modelo de resvf usando una funcion factory una instancia de Sequelize
const Rsvp = RSVPFactory (sequelize);
// Initialize the Tip model using the factory function and the Sequelize instance.
const Tip = TipFactory(sequelize);
// Initialize the Feedback model using the factory function and the Sequelize instance.
const Feedback = FeedbackFactory(sequelize);

// Export the Sequelize instance and the initialized models for use in other parts of the application.
export { Rsvp , Feedback, Tip };
