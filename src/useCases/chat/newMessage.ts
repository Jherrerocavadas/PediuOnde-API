import { Request, Response } from "express";

import { Mensagem } from "../../models/Chat/Mensagem";

export async function newMessage(req: Request, res:Response) {
  try{
    const {remetente, destinatario, conteudo, horario} = req.body;

    const messageData = await Mensagem.create({remetente, destinatario, conteudo, horario});
    res.json(messageData);
  } catch (error){
    console.log(error);
    res.sendStatus(500);
  }
}
