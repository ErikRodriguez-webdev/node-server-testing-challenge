const express = require("express");

const Schemes = require("./schemesModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  Schemes.find()
    .then((schemes) => {
      res.json(schemes);
    })
    .catch(() => {
      res.status(500).json({ message: "Failed to get schemes" });
    });
});

router.post("/", (req, res) => {
  const schemeData = req.body;

  Schemes.add(schemeData)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch(() => {
      res.status(500).json({ message: "Failed to create new scheme" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Schemes.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete scheme" });
    });
});

module.exports = router;
