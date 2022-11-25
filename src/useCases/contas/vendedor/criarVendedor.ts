import { Request, Response } from "express";

import { Vendedor } from "../../../models/Contas/Vendedor";

export async function criarVendedor(req: Request, res:Response) {
  try{
    const {nomeEmpresa, telefone, idUser} = req.body;

    const vendedorAccountData = await Vendedor.create({nomeEmpresa, telefone, idUser});
    res.json(vendedorAccountData);
  } catch (error){
    console.log(error);
    res.sendStatus(500);
  }
}
