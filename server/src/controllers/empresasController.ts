import {Request, Response} from 'express';

import pool from '../database';

class EmpresasController {

  public async list (req: Request, res: Response) {
    const empresas = await pool.promise().query('SELECT * FROM empresas');
    res.json(empresas[0])
  } 
    
  public async getOne (req: Request, res: Response) {
    const { id } = req.params;
    const empresas = await pool.promise().query('SELECT * FROM empresas WHERE id = ?', [id]);
    if(empresas.length > 0) {
      return res.json(empresas[0]);
    } 
    res.status(404).json({text: 'La empresa no existe'});
  }

  public async create (req: Request, res: Response) {
    await pool.promise().query('INSERT INTO empresas set ?', [req.body]);
    res.json({message: 'Empresa guardada'});
  }

  public async update (req: Request, res: Response) {
    const { id } = req.params;
    await pool.promise().query('UPDATE empresas set ? WHERE id = ?', [req.body, id]);
    res.json({message: 'La empresa a sido actualizada'})
  }

  public async delete (req: Request, res: Response) {
    const { id } = req.params;
    await pool.promise().query('DELETE FROM empresas WHERE id = ?', [id]);
    res.json({message: 'Empresa eliminada'})
  }
}

export const empresasController = new EmpresasController();