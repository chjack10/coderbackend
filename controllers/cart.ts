import { Request, Response } from 'express';
import Cart from '../models/Cart';

export const createCart = async (_req: Request, res: Response) => {
  const cartId = await Cart.createNew();

  if (typeof cartId !== 'number') {
    return res.status(500).json({
      error: -1,
      msg: 'Error creating cart',
    });
  }
  res.json(cartId);
};

export const addToCartById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const products = req.body;

  const cart = await Cart.addProductsById(Number(id), products);

  if (cart instanceof Error) {
    return res.status(500).json({
      error: -1,
      msg: cart.message,
    });
  }

  res.json(cart);
};

export const emptyCartById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const cart = await Cart.deleteById(Number(id));

  if (cart instanceof Error) {
    return res.status(500).json({
      error: -1,
      msg: cart.message,
    });
  }

  res.json(cart);
};

export const deleteProductByCartId = async (req: Request, res: Response) => {
  const { id, id_prod } = req.params;

  const cart = await Cart.deleteItemById(Number(id), Number(id_prod));

  if (cart instanceof Error) {
    return res.status(500).json({
      error: -1,
      msg: cart.message,
    });
  }

  res.json(cart);
};

export const getProductsByCartId = async (req: Request, res: Response) => {
  const { id } = req.params;

  const cart = await Cart.getItemsById(Number(id));
  if (cart instanceof Error) {
    return res.status(500).json({
      error: -1,
      msg: cart.message,
    });
  }

  res.json(cart);
};
