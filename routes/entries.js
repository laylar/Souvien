const express = require("express");
const bodyParser = require("body-parser");
const Entry = require("../models/entry");
const cors = require("./cors");

const entriesRouter = express.Router();

entriesRouter.use(bodyParser.json());

entriesRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => {
    Entry.find()
      .then((entries) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(entries);
      })
      .catch((err) => next(err));
  })
  .post(cors.corsWithOptions, (req, res, next) => {
    Entry.create(req.body)
      .then((entry) => {
        console.log("Entry added: ", entry);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(entry);
      })
      .catch((err) => next(err));
    //  })
    //   .put(cors.corsWithOptions, (req, res) => {
    //     res.statusCode = 403;
    //     res.end("PUT operation not supported on /entries");
    //   })
    //   .delete(cors.corsWithOptions, (req, res) => {
    //     Entry.deleteMany()
    //       .then((response) => {
    //         res.statusCode = 200;
    //         res.setHeader("Content-Type", "application/json");
    //         res.json(response);
    //       })
    //       .catch((err) => next(err));
  });

entriesRouter
  .route("/:entryId")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => {
    Entry.findById(req.params.entryId)
      .then((entry) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(entry);
      })
      .catch((err) => next(err));
    //   })
    //   .post(cors.corsWithOptions, (req, res) => {
    //     res.statusCode = 403;
    //     res.end(`POST operation not supported on /entries/${req.params.entryId}`);
    //   })
    //   .put(cors.corsWithOptions, (req, res, next) => {
    //     Entry.findByIdAndUpdate(
    //       req.params.entryId,
    //       {
    //         $set: req.body,
    //       },
    //       { new: true }
    //     )
    //       .then((response) => {
    //         res.statusCode = 200;
    //         res.setHeader("Content-Type", "application/json");
    //         res.json(response);
    //       })
    //       .catch((err) => next(err));
    //   })
    //   .delete(cors.corsWithOptions, (req, res) => {
    //     res.statusCode = 403;
    //     res.end(`DELETE operation not supported on /entries/${req.params.entryId}`);
  });

module.exports = entriesRouter;
