const express = require('express')
const router = express.Router();
const postsController = require('../controllers/postsController.js')
// index
router.get('/', postsController.index);
// show
router.get('/:id', postsController.show);
// store
router.post('/', postsController.store);
// destroy
router.delete('/:id', postsController.delete);
//update
router.put('/:id', postsController.update);
module.exports = router;