const express = require('express');
const bodyParser = require('body-parser');

const entryRouter = express.Router();

entryRouter.use(bodyParser.json());

entryRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the entries to you');
    })
    .post((req, res) => {
        res.end(`Will add the entry: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /entries');
    })
    .delete((req, res) => {
        res.end('Deleting all entries');
    });

entryRouter.route('/:entryId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of entry ${req.params.entryId} to you`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /entries/${req.params.entryId}`);
    })
    .put((req, res) => {
        res.write(`Updating the entry: ${req.params.entryId}\n`);
        res.end(`Will update the entry: ${req.body.name}
        with description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting entry: ${req.params.entryId}`);
    });

module.exports = entryRouter;