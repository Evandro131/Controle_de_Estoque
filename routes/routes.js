const express = require("express")
const ProductController = require("../controllers/ProductController")
const PessoaController = require("../controllers/PessoaController")
const PedidoController = require("../controllers/PedidoController")
const {autenticado,admin,acessarProprioRecurso} = require("../security/authorization")

const routes = express.Router()

//página inicial
routes.get("/",(req,res)=>{
    res.status(200).render("pages/index")
})

//rotas de produtos
routes.get("/produtos/novo",admin,ProductController.getRegisterPage)
routes.get("/produtos/:produtoId/update",admin,ProductController.getUpdatePage)

routes.get("/produtos",autenticado,ProductController.getAll)
routes.get("/produtos/:produtoId",autenticado,ProductController.getById)
routes.post("/produtos",admin,ProductController.create)
routes.put("/produtos/:produtoId",admin,ProductController.update)
routes.delete("/produtos/:produtoId",admin,ProductController.delete)

//rotas de pedidos
routes.get("/pedidos/:pessoaId/:pedidoId/update",acessarProprioRecurso,PedidoController.getUpdatePage)

routes.get("/pedidos",admin,PedidoController.getAllPedidos)
routes.get("/pedidos/:pessoaId",acessarProprioRecurso,PedidoController.getAll)
routes.get("/pedidos/:pessoaId/:pedidoId",acessarProprioRecurso, PedidoController.getById)
routes.post("/pedidos/:pessoaId",acessarProprioRecurso,PedidoController.create)
routes.put("/pedidos/:pessoaId/:pedidoId",acessarProprioRecurso,PedidoController.update)
routes.delete("/pedidos/:pessoaId/:pedidoId",acessarProprioRecurso,PedidoController.delete)

//rotas de pessoas
routes.get("/form-login",PessoaController.getLoginPage)
routes.post("/logar",PessoaController.logar)
routes.get("/logout",PessoaController.logout)
routes.get("/pessoas/novo",PessoaController.getRegisterPage)
routes.get("/pessoas/:pessoaId/update",acessarProprioRecurso,PessoaController.getUpdatePage)

routes.get("/pessoas",admin,PessoaController.getAll)
routes.get("/pessoas/:pessoaId",acessarProprioRecurso,PessoaController.getById)
routes.post("/pessoas",PessoaController.create)
routes.put("/pessoas/:pessoaId",acessarProprioRecurso,PessoaController.update)
routes.delete("/pessoas/:pessoaId",admin,PessoaController.delete)

module.exports = routes