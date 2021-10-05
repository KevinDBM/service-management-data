import express from 'express';
const router = express.Router();
import { addCodeController } from '../controllers/code';
import { addCodeSchema } from '../midlewares/schemas/addCode';
import { validateSchema } from '../midlewares/validateSchema';

router.post('/codes', [validateSchema(addCodeSchema)], addCodeController);

export default router;
