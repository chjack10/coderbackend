import { Message } from '../interfaces';
import { NewMessage } from '../interfaces/NewMessage';
import { sqliteDB as db } from '../DB/connection';
import { DataTypes } from 'sequelize';

class Chat {
  constructor() {
    this.createTable();
  }

  public async createTable() {
    const chat = db.define(
      'chat',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        message: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        time: {
          type: DataTypes.STRING,
        },
        dateString: {
          type: DataTypes.STRING,
        },
      },
      {
        timestamps: false,
      }
    );

    await chat.sync();
  }

  public addMessage = async ({ email, message }: NewMessage): Promise<void> => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    const dateString = date.toLocaleDateString('es-ES');

    await db.models.chat.create({
      email,
      message,
      time,
      dateString,
    });
  };

  public async getAllMessages(): Promise<Message[]> {
    const messages = await db.models.chat.findAll();

    return messages.map((message: any) => ({
      email: message.email,
      message: message.message,
      time: message.time,
      dateString: message.dateString,
    }));
  }
}

export default new Chat();
