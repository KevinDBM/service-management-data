import { Schema, model, ObjectId } from 'mongoose';

export interface ICode {
  _id?: ObjectId;
  owner: number;
  code: string;
}

const schema = new Schema<ICode>({
  owner: { type: Number, required: true },
  code: { type: String, required: true }
});

export const Code = model<ICode>('Code', schema);
