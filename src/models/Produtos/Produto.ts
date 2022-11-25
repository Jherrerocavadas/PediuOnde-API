import { model, Schema } from "mongoose";

export const Produto = model("Produto", new Schema({
  vendedor:{
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Vendedor"
  },

  nome:{
    type: String,
    required: true,
  },

  descricao:{
    type: String,
    required: false,
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
    required: false,
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
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Categoria"
  },

  aceitaEncomenda:{
    type: Boolean,
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
