import { model, Schema } from "mongoose";

export const Vendedor = model("Vendedor", new Schema({
  nomeEmpresa:{
    type: String,
    required: true,
  },

  telefone:{
    type: String,
    required: false,
  },

  idUser:{
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
}));
