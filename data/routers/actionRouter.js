const express = require("express");
const Actions = require("../helpers/actionModel");

const router = express.Router();

router.get("/", (req, res) => {
  Actions.get()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

router.post("/", (req, res) => {
  Actions.insert(req.body)
    .then((response) => {
      res
        .status(201)
        .json({ ...response, ...req.body, message: "Action was created." });
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

router.put("/:id", (req, res) => {
  Actions.update(req.params.id, req.body)
    .then((response) => {
      res.status(200).json({ ...response, message: "Action was updated." });
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

router.delete("/:id", (req, res) => {
  Actions.remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Action was deleted." });
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

module.exports = router;
