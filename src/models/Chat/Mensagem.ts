import { model, Schema } from "mongoose";

export const Mensagem = model("Mensagem", new Schema({
  remetente:{
    type: String,
    required: true,
  },

  destinatario:{
    type: String,
    required: true,
  },

  conteudo:{
    type: String,
    required: true,
  },

  horario:{
    type: Date,
    default: Date.now,
  }
}));
