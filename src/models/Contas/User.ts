import { model, Schema } from "mongoose";

export const User = model("User", new Schema({
  nome:{
    type: String,
    required: true,
  },

  email:{
    type: String,
    required: true,
  },

  cpf:{
    type: Number,
    required: true,
  },
  senha:{
    type: String,
    required: true,
  },
}));
