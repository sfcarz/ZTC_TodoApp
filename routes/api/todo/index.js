const router = require('express').Router()
const { addTodo } = require('../../../controller/toDoController');
const authorizationMiddleware = require('../../../middlewares/authorizationMiddleware');

router.post('/', authorizationMiddleware, addTodo);

module.exports = router