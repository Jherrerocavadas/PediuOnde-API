import { Request, Response } from "express";

import { User } from "../../models/Contas/User";

export async function criarConta(req: Request, res:Response) {
  try{
    const {nome, email, cpf, senha} = req.body;

    const accountData = await User.create({nome, email, cpf, senha});
    res.json(accountData);
  } catch (error){
    console.log(error);
    res.sendStatus(500);
  }
}
