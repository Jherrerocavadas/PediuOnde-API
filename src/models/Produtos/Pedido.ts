import { model, Schema } from "mongoose";

export const Pedido = model("Pedido", new Schema({
  cliente:{
    type: String,
    required: true,
  },

  produtos:{
    required: true,
    type: [{
      produto:{
        type: Schema.Types.ObjectID,
        required: true,
        ref: "Produto"
      },
      quantidade:{
        type: Number,
        required: true,
      }
    }],

  },

  tipoPagamento:{
    type: String,
    enum: ["Crédito", "Débito", "Dinheiro", "Pix"],
    required: true,
  },

  cpfCliente:{
    type: Number,
    required: false,
  },

  status:{
    type: String,
    enum: ["Processando", "Pago", "Produzindo", "Concluído"],
    required: true,
  },

  dataEntrega:{
    type: Date,
    required: true,
  },

  isEncomenda:{
    type: Bool,
    required: true,
  },
}));
