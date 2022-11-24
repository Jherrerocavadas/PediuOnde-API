import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017")
.then(() => {

  const api = express();
  const port = 3001;

  api.listen(port, () =>{
    console.log(`Servidor da API PediuOnde? Online em http://localhost:${port}`)
  }
);})
.catch(() => console.log("deu doidera"));
