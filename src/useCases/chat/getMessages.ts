import { Request, Response } from "express";

import { Mensagem } from "../../models/Chat/Mensagem";

export async function getMessages(req: Request, res:Response) {
  const messageData = await Mensagem.find();
  res.json(messageData);
}
