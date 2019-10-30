const express = require("express");

const routes = express.Router();

const ClientController = require("./controllers/ClientController");

routes.get("/clients", ClientController.index);
routes.get("/clients/:id", ClientController.show);
routes.put("/clients/:id", ClientController.update);
routes.post("/clients", ClientController.add);
routes.delete("/clients/:id", ClientController.delete);



module.exports = routes;