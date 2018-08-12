import { Router } from 'express';
import controller  from './user.controller' 
const router = Router();

router
    .route('/newUser')
    .post(controller.newUser);

module.exports = router;

