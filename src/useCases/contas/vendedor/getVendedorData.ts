import { Request, Response } from "express";

import { Vendedor } from "../../../models/Contas/Vendedor";

export async function getVendedorData(req: Request, res:Response) {
  const vendedorAccountData = await Vendedor.find();
  res.json(vendedorAccountData);
}
