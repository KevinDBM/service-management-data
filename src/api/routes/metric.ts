import express from 'express';
const router = express.Router();
import { getMetrics } from '../controllers/metric';

router.get('/metrics/:owner', getMetrics);

export default router;
