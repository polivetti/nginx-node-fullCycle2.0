const exp = require("express");
const peopleController = require("./controllers/people");

const routes = exp.Router();

routes.use(exp.json());


routes.get("/", peopleController.list);


module.exports = routes;
