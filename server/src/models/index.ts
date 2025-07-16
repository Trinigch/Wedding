import sequelize from '../config/connection.js';
import { RSVPFactory, RSVP } from './RSVP.js';

let Rsvp: typeof RSVP | null = null;

if (sequelize) {
  Rsvp = RSVPFactory(sequelize);
} else {
  console.log("🛑 Base de datos desactivada, modelo RSVP no inicializado");
}

export { Rsvp };
