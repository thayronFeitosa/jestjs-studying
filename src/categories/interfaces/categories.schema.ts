import * as mongoose from 'mongoose';

export const CategoriesScheme = new mongoose.Schema(
  {
    categories: { type: String, unique: true },
    description: { type: String },
    event: [
      {
        name: { type: String },
        operation: { type: String },
        value: { type: Number },
      },
    ],
    player: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Jogador',
      },
    ],
  },
  { timestamps: true, collection: 'jogadores' },
);
