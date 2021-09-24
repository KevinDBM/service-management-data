import express from 'express';
const router = express.Router();
import { exampleController } from '../controllers/example';

router.get('/examples', exampleController);

export default router;
