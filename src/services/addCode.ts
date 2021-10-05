import { Code, ICode } from '../models/Code';

export const addCode = async (infoCode: ICode) => {
  try {
    const newCode = new Code(infoCode);

    await newCode.save();

    return newCode;
  } catch (error) {
    throw error;
  }
};
