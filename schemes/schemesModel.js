const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  add,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function add(schemeData) {
  return db("schemes")
    .insert(schemeData, "id")
    .then((response) => {
      return findById(response[0]);
    });
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
