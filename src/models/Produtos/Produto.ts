import { model, Schema } from "mongoose";

export const Produto = model("Produto", new Schema({
  vendedor:{
    type: String,
    required: true,
  },

  nome:{
    type: String,
    required: true,
  },

  descricao:{
    type: String,
    required: true,
  },

  imagePath:{
    type: String,
    required: true,
  },

  preco:{
    type: Number,
    required: true,
  },

  ingredientes:{
    required: true,
    type: [{
      nome:{
        type: String,
        required: true,
      },
      quantidade:{
        type: Number,
        required: false,
        default: 1,
      },
      unidadeMedida:{
        type: String,
        required: true,
      }
    }],

  },

  categoria:{
    type: Schema.Types.ObjectID,
    required: true,
    ref: "Categoria"
  },

  aceitaEncomenda:{
    type: Bool,
    required: true,
  },

  variacoesProduto:{
    required: false,
    type: [{
      nome:{
        type: String,
        required: true,
      },
      valores:{
        required: true,
        type:[{
          valor:{
            type:String,
            required: true,
          },
        }]
      },
    }],
  },

}));
