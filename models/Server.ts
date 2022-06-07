import express, { Application } from 'express';
import cors from 'cors';
import productRoutes from '../routes/product';
import cartRoutes from '../routes/cart';
import defaultRoutes from '../routes/default';
import auth from '../middlewares/auth';

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    products: '/api/productos',
    cart: '/api/carrito',
    default: '*',
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT ?? '8080';
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    );
    this.app.use(auth);
  }

  routes() {
    this.app.use(this.apiPaths.products, productRoutes);
    this.app.use(this.apiPaths.cart, cartRoutes);

    this.app.use(this.apiPaths.default, defaultRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running on port', this.port);
    });
  }
}

export default new Server();
