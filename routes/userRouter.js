const express = require('express');
const bodyParser = require('body-parser');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the users to you');
    })
    .post((req, res) => {
        res.end(`Will add the user: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /users');
    })
    .delete((req, res) => {
        res.end('Deleting all users');
    });

//still not sure about how I want this router to work. I want to have user info, as well as user settings...
//but for now, it is a router just like the other two.
userRouter.route('/:userId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of user ${req.params.userId} to you`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /users/${req.params.userId}`);
    })
    .put((req, res) => {
        res.write(`Updating the user: ${req.params.userId}\n`);
        res.end(`Will update the user: ${req.body.name}
        with description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting user: ${req.params.userId}`);
    });