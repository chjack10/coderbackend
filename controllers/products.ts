import { Request, Response } from 'express';
import Products from '../models/Products';

// export const getProducts = (_req: Request, res: Response) => {
//   // const products = Products.getAll();
//   // res.render('products', {
//   //   products,
//   // });
//   // res.json(body);
// }; 

export const getProducts = (req: Request, res: Response) => {
  const products = Products.getAll();
  res.render('home', { products });
};

export const getProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const body = Products.getById(Number(id));

  res.json(body);
};

export const postProduct = (req: Request, res: Response) => {
  const product = req.body;
  Products.add(product);

  res.render('home');
  // const storedProduct = Products.add(product);
  // res.json(storedProduct);
};

export const putProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  Products.update(Number(id), body);

  res.json({
    msg: `producto ${id} actualizado`,
  });
};

export const deleteProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  Products.deleteById(Number(id));

  res.json({
    msg: `producto ${id} eliminado`,
  });
};
