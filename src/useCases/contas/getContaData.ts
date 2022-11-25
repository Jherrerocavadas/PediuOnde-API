import { Request, Response } from "express";

import { User } from "../../models/Contas/User";

export async function getContaData(req: Request, res:Response) {
  const accountData = await User.find();
  res.json(accountData);
}
