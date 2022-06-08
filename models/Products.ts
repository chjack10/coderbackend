import { Error, Product, StoredProduct } from '../interfaces';

class Products {
  productList: StoredProduct[];

  constructor() {
    this.productList = [];
  }

  public add = (product: Product): StoredProduct => {
    const id: number =
      this.productList.length === 0
        ? 1
        : Math.max(
            ...this.productList.map((product: StoredProduct) => product.id)
          ) + 1;

    this.productList.push({ id, ...product });

    return this.productList[this.productList.length - 1];
  };

  public getById = (id: number): StoredProduct | Error => {
    const product = this.productList.find((product) => product.id === id);

    if (product) return product;
    else return { error: 'producto no encontrado' };
  };

  public getAll(): StoredProduct[] {
    return this.productList;
  }

  public deleteById(id: number): void {
    this.productList = this.productList.filter((product) => product.id !== id);
  }

  public update(id: number, newData: Product): void {
    this.productList = this.productList.map((product: StoredProduct) =>
      product.id === id ? { ...product, ...newData } : product
    );
  }
}

export default new Products();
