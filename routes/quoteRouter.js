const express = require('express');
const bodyParser = require('body-parser');

const quoteRouter = express.Router();

quoteRouter.use(bodyParser.json());

quoteRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the quotes to you');
    })
    .post((req, res) => {
        res.end(`Will add the quote: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /quotes');
    })
    .delete((req, res) => {
        res.end('Deleting all quotes');
    });

quoteRouter.route('/:quoteId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of quote ${req.params.quoteId} to you`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /quotes/${req.params.quoteId}`);
    })
    .put((req, res) => {
        res.write(`Updating the quote: ${req.params.quoteId}\n`);
        res.end(`Will update the quote: ${req.body.name}
        with description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting quote: ${req.params.quoteId}`);
    });

module.exports = quoteRouter;