import { Router } from "express";
import multer from "multer";

// Conta
import { criarConta } from "./useCases/contas/criarConta";
import { getContaData } from "./useCases/contas/getContaData";

// Conta de vendedores
import { criarVendedor } from "./useCases/contas/vendedor/criarVendedor";
import { getVendedorData } from "./useCases/contas/vendedor/getVendedorData";

// Categoria de produtos
import { criarCategoria } from "./useCases/categorias/criarCategoria";
import { getCategorias } from "./useCases/categorias/getCategorias";

// Produtos
import { criarProduto } from "./useCases/produtos/criarProduto";
import { getProdutos } from "./useCases/produtos/getProdutos";

// Pedidos
import { criarPedido } from "./useCases/pedidos/criarPedido";
import { getPedidos } from "./useCases/pedidos/getPedidos";

// Chat/mensagens
import { newMessage } from "./useCases/chat/newMessage";
import { getMessages } from "./useCases/chat/getMessages";

export const router = Router();

const uploadCategorias = multer({
  storage: multer.diskStorage({
    destination(req, file, callback){
      callback(null, "./uploads/categorias");
    },
    filename(req, file, callback){
      callback(null, `${req.body.nome}`);
    },
  })
});

const uploadProdutos = multer({
  storage: multer.diskStorage({
    destination(req, file, callback){
      callback(null, "./uploads/produtos");
    },
    filename(req, file, callback){
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  })
});

//Criar usuário
router.post("/users", criarConta);

//Recuperar dados do usuários
router.get("/users", getContaData);

//Criar vendedor
router.post("/vendedores", criarVendedor);

//Recuperar dados do vendedor
router.get("/vendedores", getVendedorData);

//Criar categoria de produtos
router.post("/categorias", uploadCategorias.single("image"), criarCategoria);

//Usar pelos produtos futuramente
//listar categoria de produtos
router.get("/categorias", getCategorias);

//Editar categoria
router.put("/categorias", uploadCategorias.single("image"), (req, res)=>{res.send("OK");});


//Criar produto
router.post("/produtos", uploadProdutos.single("image"), criarProduto);

//Recuperar dados do produto
router.get("/produtos", getProdutos);

//Editar dados do produto
router.put("/produtos", uploadProdutos.single("image"), (req, res)=>{res.send("OK");});

//Criar pedido
router.post("/pedidos", criarPedido);

//Recuperar pedido
router.get("/pedidos", getPedidos);

//Editar dados do pedido
router.put("/pedidos", (req, res)=>{res.send("OK");});


//Criar mensagens de usuários
router.post("/mensagens", newMessage);

//Recuperar mensagens de usuários
router.get("/mensagens", getMessages);
// //Indicar novas mensagens
// router.get("/mensagens", (req, res)=> {
// res.send("OK");
// });
