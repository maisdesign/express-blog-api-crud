const express = require('express')
const router = express.Router();
const postsData = require('../data/posts-data.js')
// index
router.get('/', function (req, res) {
    res.json(postsData);
});
// show
router.get('/:id', function (req, res) {
    res.json(postsData.find((posty) => posty.id === parseInt(req.params.id)));
});
// store
router.post('/', function (req, res) {
    res.send('Creazione di un nuovo post');
});
// delete
router.delete('/:id', function (req, res) {
    res.send('Cancellazione del post ' + req.params.id)
});
//update
router.put('/:id', function (req, res) {
    res.send('Aggiorna post ' + req.params.id)
});
module.exports = router;