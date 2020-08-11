const express = require('express');
const bodyParser = require('body-parser');
const Quote = require('../models/quote');
const cors = require('./cors');

const quotesRouter = express.Router();

quotesRouter.use(bodyParser.json());

quotesRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, (req, res, next) => {
    //.get((req, res, next) => {
        Quote.find()
        .then(quotes => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.json(quotes)
        })
        .catch(err => next(err))
    })
    .post(cors.corsWithOptions, (req, res, next) => {
        Quote.create(req.body)
        .then(quote => {
            console.log('Quote added: ', quote);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.json(promotion);
        })
        .catch(err => next(err));
    })
    .put(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /quotes');
    })
    .delete(cors.corsWithOptions, (req, res, ) => {
        Quote.deleteMany()
        .then(response => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        })
        .catch(err => next(err));
    });

quotesRouter.route('/:quoteId')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, (req, res, next) => {
        Quote.findById(req.params.quoteId)
        .then(quote => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(quote);
        })
        .catch(err => next(err));
    })
    .post(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /quotes/${req.params.quoteId}`);
    })
    .put(cors.corsWithOptions, (req, res, next) => {
        Quote.findByIdAndUpdate(req.params.quoteId, {
            $set: req.body
        }, {new: true})
        .then(response => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        })
        .catch(err => next(err));
    })
    .delete(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end(`DELETE operation not supported on /quotes/${req.params.quoteId}`);
    });

module.exports = quotesRouter;