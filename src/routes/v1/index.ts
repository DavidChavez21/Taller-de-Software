import { Router } from 'express';
import empresas from './empresas.routes';
import users from './users.routes';

const router = Router();

router.use('/users', users);
router.use('/empresas', empresas);

export default router;