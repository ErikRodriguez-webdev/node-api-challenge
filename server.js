const express = require("express");
const projectRouter = require("./data/routers/projectRouter");
const actionRouter = require("./data/routers/actionRouter");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "SERVER IS UP" });
});

//Routers
server.use("/api/projects", projectRouter);

server.use("/api/actions", actionRouter);

module.exports = server;
