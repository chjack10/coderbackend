import { sqliteDB } from './connection';
import { DataTypes } from 'sequelize';

export default () => {
  const chat = sqliteDB.define(
    'chat',
    {
      email: {
        type: DataTypes.STRING,
      },
      message: {
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

  let synchedChat: any;

  chat.sync().then(() => {
    synchedChat = chat;
  });

  return synchedChat;
};
