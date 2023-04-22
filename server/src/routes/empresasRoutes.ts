import {Router } from 'express';

import { empresasController } from '../controllers/empresasController';

class EmpresasRoutes {

  public router: Router = Router();

  constructor () {
    this.config();
  }

  config(): void {
    this.router.get('/', empresasController.list);
    this.router.get('/:id', empresasController.getOne);
    this.router.post('/', empresasController.create);
    this.router.delete('/:id', empresasController.delete);
    this.router.put('/:id', empresasController.update);
  }

}

const empresasRoutes = new EmpresasRoutes();
export default empresasRoutes.router;