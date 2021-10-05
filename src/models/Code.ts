import { Schema, model } from 'mongoose';

export interface ICode {
  owner: number;
  code: string;
}

const schema = new Schema<ICode>({
  owner: { type: Number, required: true },
  code: { type: String, required: true }
});

export const Code = model<ICode>('Code', schema);
