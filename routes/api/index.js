const router = require('express').Router()
const toDoController = require('../../controller/toDoController');

router.post('/addTodo', toDoController.addTodo)

module.exports = router 
