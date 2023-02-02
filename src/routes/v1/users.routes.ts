import { Router } from 'express';
import { addUsers, deleteUsers, findAll,getByID, getUrls, updateUsers } from '@controllers/users.controller';
const router = Router();

/*
.ENV
HOST=localhost
PORT=3003
VERSION=v1
*/
/*enpoints para usuarios: localhost:3001/api/v1/users/ */
router.get('/urls', getUrls);
router.get('/all', findAll)
router.get('/byId/:id', getByID);
router.post('/new', addUsers);
router.put('/update/:id',updateUsers);
router.delete('/delete/:id', deleteUsers);

export default router;