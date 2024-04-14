const express = require('express');
const documentRouter = express.Router();

documentRouter.route('/')
    .all((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('sorry, no requests to /documents');
    })

documentRouter.route('/:user')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .post((req, res) => {
        res.end(`posting document: ${req.body.title} by ${req.params.user}`)
    })
    .get((req, res) => {
        res.end(`GET not supported for /documents/${req.params.user}`);
    })
    .put((req, res) => {
        res.end(`updating all documents associated with the late ${req.params.user} to ${req.body.user}`);
    })
    .delete((req, res) => {
        res.end(`Deleting all documents assciated with user: ${req.params.user}`);
    })

documentRouter.route('/:user/:documentId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of the document: ${req.params.documentId} by ${req.params.user} to you`);
    })
    .put((req, res) => {
        res.write(`Updating the document: ${req.params.documentId}\n`);
        res.end(`Will update the document: ${req.body.title} with the content: ${req.body.content}`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /documents/${req.params.user}/${req.params.documentId}`);
    })
    .delete((req, res) => {
        res.end(`Deleting document: ${req.params.documentId}`);
    })

module.exports = documentRouter;
