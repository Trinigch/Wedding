import { Rsvp } from '../models/index.js';

export const seedTips = async () => {
  await Rsvp.bulkCreate([
  { 
      name: "Trinidad",
      email: "trinigch@gmail.com",
      wedding: true,    // ← booleano
      iguazu: true,     // ← booleano
      fitzRoy: true     // ← booleano
    },
    { 
      name: "Jeremiah",
      email: "jpeterson@gmail.com",
      wedding: true,
      iguazu: true,
      fitzRoy: true
    },
  ]);
};
