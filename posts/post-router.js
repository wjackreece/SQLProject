const express = require("express");

// database access using knex
const db = require("../data/db-config.js");

const router = express.Router();

// db helper start
const Posts = {
  getAll() {},
  getById(id) {},
  create(post) {},
  update(id, post) {},
  delete(id) {},
};
// db helper end

router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
