import { rsvpRouter } from './rsvp-routes.js';

import express from 'express';
const router = express.Router();


router.use('/rsvp', rsvpRouter);
export default router;
