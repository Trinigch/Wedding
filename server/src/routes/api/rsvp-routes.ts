import express from 'express';
import type { Request, Response } from 'express';
import { Rsvp } from '../../models/index.js';

const router = express.Router();

// GET /feedback - Get all feedback
router.get('/', async (_req: Request, res: Response) => {
  if (!Rsvp) {
    res.status(503).json({ error: 'Database not available.' });
    return; //Esto resuelve el error TS7030
  }

  try {
    const rsvps = await Rsvp.findAll();
    res.status(200).json(rsvps);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST / - Create new RSVP
router.post('/', async (req: Request, res: Response) => {
  if (!Rsvp) {
    return res.status(503).json({ error: 'Database not available.' });
  }

  const { name, email, wedding, iguazu, fitzRoy } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required.' });
  }

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