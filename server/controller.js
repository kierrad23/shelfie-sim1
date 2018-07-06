const get = (req, res, next) => {
  const db = req.app.get("db");
  db.get_inventory().then(products => res.status(200).send(products));
};

const create = (req, res, next) => {
  const db = req.app.get("db");
  db.create_product([req.body.name, req.body.price, req.body.image]).then(
    products => {
      res.status(200).send(products);
      console.log(req.body.image);
    }
  );
};

const deleter = (req, res, next) => {
  const db = req.app.get("db");
  db.delete_product([req.params.i]).then(products => {
    console.log(products);
    res.status(200).send(products);
  });
};
const update = (req, res, next) => {
  const db = req.app.get("db");
  db.update_product([
    req.params.i,
    req.body.name,
    req.body.price,
    req.body.img
  ]).then(products => {
    res.status(200).send(products);
  });
};

module.exports = {
  get,
  create,
  deleter,
  update
};
