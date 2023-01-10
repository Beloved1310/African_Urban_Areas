import express from 'express';
import { asyncErrorhandling } from '../middleware/async';
import { listUrbanAfrican } from '../controller/listUrbanAfricanAreas';
import { getParticularUrbanArea } from '../controller/getParticularArea';

const router = express.Router();

router.get('/areas', asyncErrorhandling(listUrbanAfrican));
router.get('/particular/:name', asyncErrorhandling(getParticularUrbanArea));



export default router;