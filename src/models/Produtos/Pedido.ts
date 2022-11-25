import { model, Schema } from "mongoose";

export const Pedido = model("Pedido", new Schema({
  cliente:{
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  produtos:{
    required: true,
    type: [{
      produto:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Produto",
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
    type: String,
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
    type: Boolean,
    required: true,
  },
  valorTotal:{
    type: Number,
    required: true,
  }
}));
