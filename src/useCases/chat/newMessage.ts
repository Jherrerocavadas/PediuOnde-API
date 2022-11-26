import { Request, Response } from "express";

import { Mensagem } from "../../models/Chat/Mensagem";

export async function newMessage(req: Request, res:Response) {
  try{
    const {remetente, destinatario, conteudo, horario} = req.body;
    console.log(horario);
    const messageData = await Mensagem.create({
      remetente,
      destinatario,
      conteudo,
      horario: horario? new Date(horario) : undefined
    });
    res.json(messageData);
  } catch (error){
    console.log(error);
    res.sendStatus(500);
  }
}
