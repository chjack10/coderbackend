import { Request, Response } from 'express';
import Products from '../models/Contenedor';

export const getProducts = async(_req: Request, res: Response) => {
  const products = await Products.getAll();

  res.json(products);
};

export const getProduct = async(req: Request, res: Response) => {
  const { id } = req.params;
  const body = await Products.getById(Number(id));

  res.json(body);
};

export const postProduct = async(req: Request, res: Response) => {
  const product = req.body;

  const storedProduct =  await Products.save(product);
  res.json(storedProduct);
};

export const putProduct = async(req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  await Products.update(Number(id), body);

  res.json({
    msg: `producto ${id} actualizado`,
  });
};

export const deleteProduct = async(req: Request, res: Response) => {
  const { id } = req.params;
  await Products.deleteById(Number(id));

  res.json({
    msg: `producto ${id} eliminado`,
  });
};
