import fs from 'fs';
import { Error, Product, StoredProduct } from '../interfaces';

class Contenedor {
  filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  private readonly writeFile = async (data: Array<Product>): Promise<void> => {
    try {
      await fs.promises.writeFile(this.filePath, JSON.stringify(data));
    } catch (err: any) {
      console.log('Method writeFile: ', err);
    }
  };

  private readonly readFile = async (): Promise<StoredProduct[]> => {
    try {
      return (await fs.promises.readFile(this.filePath, 'utf8'))
        ? JSON.parse(await fs.promises.readFile(this.filePath, 'utf8'))
        : ([] as StoredProduct[]);
    } catch (err: any) {
      // if said file does not exist, create it
      if (err.errno === -2) {
        try {
          await fs.promises.writeFile(this.filePath, JSON.stringify([]));
          return [] as StoredProduct[];
        } catch (err: any) {
          console.error('Could not create file in such directory. ', err);
        }
      } else {
        console.log('Method readFile: ', err);
      }
      return [] as StoredProduct[];
    }
  };

  public async save(product: Product): Promise<number | void> {
    try {
      const fileData: StoredProduct[] = await this.readFile();
      const id: number =
        fileData.length === 0
          ? 1
          : Math.max(...fileData.map((object: StoredProduct) => object.id)) + 1;

      fileData.push({ ...product, id });
      await this.writeFile(fileData);

      return id;
    } catch (err: any) {
      console.log('Method save: ', err);
    }
  }

  public async getById(id: number): Promise<StoredProduct | Error> {
    try {
      const fileData: StoredProduct[] = await this.readFile();

      return (
        fileData.find((object: StoredProduct) => object.id === id) ?? {
          error: 'producto no encontrado',
        }
      );
    } catch (err: any) {
      console.log('Method getById: ', err);
    }
    return { error: 'fetch item method failed' };
  }

  public async getAll(): Promise<StoredProduct[]> {
    return await this.readFile();
  }

  public async deleteById(id: number): Promise<void> {
    try {
      const fileData: StoredProduct[] = await this.readFile();
      const newFileData: StoredProduct[] = fileData.filter(
        (object: StoredProduct) => object.id !== id
      );

      await this.writeFile(newFileData);
    } catch (err: any) {
      console.log('Method deleteById: ', err);
    }
  }

  public async deleteAll(): Promise<void> {
    try {
      await this.writeFile([]);
    } catch (err: any) {
      console.log('Method deleteAll: ', err);
    }
  }

  public async update(id: number, product: Product): Promise<void | Error> {
    try {
      const fileData: StoredProduct[] = await this.readFile();
      const newFileData: StoredProduct[] = fileData.map(
        (object: StoredProduct) =>
          object.id === id ? { ...object, ...product } : object
      );

      await this.writeFile(newFileData);
    } catch (err: any) {
      console.log('Method update: ', err);
    }
  }
}

export default new Contenedor('./data/productos.txt');
