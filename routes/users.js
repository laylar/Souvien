const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');

/*userRouters*/
const userRouter = express.Router();
userRouter.use(bodyParser.json());

/* GET a list of users*/
/* Should be admin only */
userRouter.get('/', (req, res, next) => {
    User.find()
    .then(users => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(users);
    })
    .catch(err => next(err));
});

/*User account Stuff*/
/*to-do:
-check for user account already made,
-actually add new user,
-set up authentication*/
userRouter.post('/signup', (req, res) => {
  res.end(`Will add the user: ${req.body.name} with description: ${req.body.description}`);
});

userRouter.post('/login', (req, res) => {
  res.end('User has logged in (kind of).');
})

userRouter.get('/logout', (req, res, next) => {
  console.log('User has logged out (kind of).');
  res.redirect('/');
})

/*This might be only useful for getting to a user's entries
Users should not be able to see another user's id.*/
userRouter.get('/:userId', (req, res) => {
  res.end(`Will send details of user ${req.params.userId} to you`);
});

/*GET User's Entries*/
userRouter.get('/:userId/entries', (req, res, next) => {
        res.end(`Will send you all the entries that belong to user ${userId}`);
    })
    .post((req, res) => {
        res.end(`Will add the entry: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /entries');
    })
    /*make sure delete all entries has a verification step!*/
    .delete((req, res) => {
        res.end('Deleting all entries');
    });

userRouter.get('/:userId/entries/:entryId', (req, res) => {
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