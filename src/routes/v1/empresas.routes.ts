import { Router } from 'express';
import { addEmpresa, deleteEmpresa, findAll,getByID, getUrls, updateEmpresa } from '@controllers/empresas.controller';
const router = Router();

/*
.ENV: 
- HOST=localhost
- PORT=3003
- VERSION=v1
*/
/*enpoints para empresas: localhost:3001/api/v1/empresas/ */

router.get('/urls', getUrls);
router.get('/all', findAll)
router.get('/byId/:id', getByID);
router.post('/new', addEmpresa);
router.put('/update/:id',updateEmpresa);
router.delete('/delete/:id', deleteEmpresa);

export default router;