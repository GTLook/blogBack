const express = require('express')
const router = express.Router()
const dataController = require('../controllers/data')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.get('/', dataController.getAll)
router.post('/', dataController.createPost)
router.delete('/:id', dataController.deletePost)

module.exports = router
