const express = require('express');
const userRouter = express.Router();

userRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('get not supported');
    })
    .post((req, res) => {
        res.end(`Will add the user: ${req.body.username} with password: ${req.body.password}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /users');
    })
    .delete((req, res) => {
        res.end('Delete not supported');
    });

userRouter.route('/:username')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of the user: ${req.params.username} to you`);
    })
    .put((req, res) => {
        res.end(`Will update the user: ${req.params.username} with the username: ${req.body.username} and the password: ${req.body.password}`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /users/${req.params.username}`);
    })
    .delete((req, res) => {
        res.end(`Deleting user: ${req.params.username}`);
    })

module.exports = userRouter;
