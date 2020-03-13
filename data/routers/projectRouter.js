const express = require("express");
const Projects = require("../helpers/projectModel");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.get()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

router.post("/", (req, res) => {
  Projects.insert(req.body)
    .then((response) => {
      res
        .status(201)
        .json({ ...response, ...req.body, message: "Project was created." });
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

router.put("/:id", (req, res) => {
  Projects.update(req.params.id, req.body)
    .then((response) => {
      res.status(200).json({ ...response, message: "Project was updated." });
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

router.delete("/:id", (req, res) => {
  Projects.remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Project was deleted." });
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

router.get("/:id", (req, res) => {
  Projects.getProjectActions(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

module.exports = router;
