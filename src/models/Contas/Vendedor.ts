import { model, Schema } from "mongoose";

export const Vendedor = model("Vendedor", new Schema({
  nomeEmpresa:{
    type: String,
    required: true,
  },

  telefone:{
    type: Number,
    required: false,
  },

  idUser:{
    type: Schema.Types.ObjectID,
    required: true
    ref: "User"
  },
}));
