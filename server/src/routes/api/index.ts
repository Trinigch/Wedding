import { tipRouter } from './tip-routes.js';
import { feedbackRouter } from './feedback-routes.js';

import { rsvpRouter } from './rsvp-routes.js';

import express from 'express';
const router = express.Router();

router.use('/tips', tipRouter);
router.use('/feedback', feedbackRouter);
router.use('/rsvp', rsvpRouter);
export default router;
