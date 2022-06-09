import { Error, Product, StoredProduct } from '../interfaces';
// import { mariaDB as db } from '../DB/connection';
import { DataTypes, fn } from 'sequelize';

class Products {
  productList: StoredProduct[];

  constructor() {
    this.productList = [];
    this.createTable();
  }

  public async createTable() {
    // const product = db.define(
    //   'product',
    //   {
    //     id: {
    //       type: DataTypes.INTEGER,
    //       primaryKey: true,
    //       autoIncrement: true,
    //     },
    //     title: {
    //       type: DataTypes.STRING,
    //     },
    //     price: {
    //       type: DataTypes.FLOAT,
    //     },
    //     thumbnail: {
    //       type: DataTypes.STRING,
    //     },
    //   },
    //   {
    //     timestamps: false,
    //   }
    // );
    // await product.sync();
  }

  public add = async (product: StoredProduct): Promise<void> => {
    // await db.models.product.create({
    //   title: product.title,
    //   price: product.price,
    //   thumbnail: product.thumbnail,
    // });
  };

  public async getAll(): Promise<StoredProduct[]> {
    return this.productList;

    // const products = await db.models.product.findAll();

    // return products.map((product: any) => ({
    //   title: product.title,
    //   price: product.price,
    //   thumbnail: product.thumbnail,
    //   id: product.id,
    // }));
  }
}

export default new Products();
