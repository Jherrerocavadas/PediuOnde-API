import express from "express";
import mongoose from "mongoose";

import { router } from "./router";

mongoose.connect("mongodb://localhost:27017")
.then(() => {

  const api = express();
  const port = 3001;
  api.use(express.json());
  api.use(router)

  api.listen(port, () =>{
    console.log(`Servidor da API PediuOnde? Online em http://localhost:${port}`)
  }
);})
.catch(() => console.log("Erro da API: Não foi possível se conectar ao MongoDB"));
