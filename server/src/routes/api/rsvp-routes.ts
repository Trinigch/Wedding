import express from 'express';
import type { Request, Response} from 'express';
import { Rsvp } from '../../models/index.js';



const router = express.Router();

// GET /feedback - Get all feedback
router.get('/', async (_req: Request, res: Response) => {
  try {
    const rsvps = await  Rsvp .findAll();
    res.status(200).json(rsvps);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }

});


router.post('/', async (req: Request, res: Response) => {
  const { name, email, wedding, iguazu, fitzRoy } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required.' });
  }

 // Convertir strings "true"/"false" a booleanos reales
  const toBool = (val: string | boolean | null) => val === true || val === "true";

  try {
    const newRSVP = await Rsvp.create({
      name,
      email,
      wedding: toBool(wedding),
      iguazu: toBool(iguazu),
      fitzRoy: toBool(fitzRoy)
    });

    return res.status(201).json(newRSVP);
  } catch (error) {
    console.error('Error creating RSVP:', error);
    return res.status(500).json({ error: 'Failed to create RSVP.' });
  }
});


export { router as rsvpRouter };