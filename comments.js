// create web server
// create comments array
// create routes for comments
// create routes for comments/:id
// create routes for comments/:id/edit
// create routes for comments/:id/delete
// create routes for comments/:id/update
// create routes for comments/new
// create routes for comments/create
// create routes for comments/show

// Path: comments.js
// create web server
var express = require('express');
var router = express.Router();

// create comments array
var comments = [
    { id: 1, body: 'hello', postId: 1 },
    { id: 2, body: 'world', postId: 1 },
    { id: 3, body: 'hello', postId: 2 },
    { id: 4, body: 'world', postId: 2 },
]

// create routes for comments
router.get('/', (req, res) => {
    res.json(comments);
})

// create routes for comments/:id
router.get('/:id', (req, res) => {
    var comment = comments.find(comment => comment.id == req.params.id);
    res.json(comment);
})

// create routes for comments/:id/edit
router.get('/:id/edit', (req, res) => {
    var comment = comments.find(comment => comment.id == req.params.id);
    res.json(comment);
})

// create routes for comments/:id/delete
router.get('/:id/delete', (req, res) => {
    var comment = comments.find(comment => comment.id == req.params.id);
    res.json(comment);
})

// create routes for comments/:id/update
router.get('/:id/update', (req, res) => {
    var comment = comments.find(comment => comment.id == req.params.id);
    res.json(comment);
})

// create routes for comments/new
router.get('/new', (req, res) => {
    res.json({ id: null, body: '' });
})

// create routes for comments/create
router.post('/create', (req, res) => {
    var comment = { id: comments.length + 1, body: req.body.body, postId: req.body.postId };
    comments.push(comment);
    res.json(comment);
})

// create routes for comments/show
router.get('/show', (req, res) => {
    res.json(comments);
})

module.exports = router;