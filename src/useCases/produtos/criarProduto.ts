import { Request, Response } from "express";

import { Produto } from "../../models/Produtos/Produto";

export async function criarProduto(req: Request, res:Response) {
  try{
    // tem que usar o multer pra poder ler os form-datas
    const imagePath = req.file?.filename;
    const {vendedor, nome, descricao, preco, ingredientes,
      categoria, aceitaEncomenda, variacoesProduto} = req.body;
      //Arrays estão com problema


      // ingredientes exemplo -> '[{"nome":"Pão","quantidade":1,"unidadeMedida":"un"},{"nome":"Batata","quantidade":1,"unidadeMedida":"kg"}]'
      // variacoesProduto exemplo -> '[{"nome":"Cobertura","valores":[{"valor":"cheddar"}]}]'


    const produtoData = await Produto.create({
      vendedor,
      nome,
      descricao,
      imagePath,
      preco: Number(preco),
      ingredientes: JSON.parse(ingredientes),
      categoria,
      aceitaEncomenda:Boolean(aceitaEncomenda),
      variacoesProduto: JSON.parse(variacoesProduto)
    });

    res.json(produtoData);
  } catch (error){
    console.log(error);
    res.sendStatus(500);
  }
}
