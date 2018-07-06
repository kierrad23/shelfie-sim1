const express = require("express");
const bp = require("body-parser");
const cors = require("cors");
const ctrl = require("./controller");
const app = express();
const massive = require("massive");
require("dotenv").config();

app.use(bp.json());
app.use(cors());
app.use(express.static("public"));

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.get("/api/inventory", ctrl.get);
app.post("/api/product", ctrl.create);
app.put("/api/product/:i", ctrl.update);
app.delete("/api/product/:i", ctrl.deleter);

const port = 3001;
app.listen(port, () => console.log(port));
