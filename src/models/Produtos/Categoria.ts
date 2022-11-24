import { model, Schema } from "mongoose";

export const Categoria = model("Categoria", new Schema({
  nome:{
    type: String,
    required: true,
  },

  imagePath:{
    type: String,
    required: true,
  },
}));
