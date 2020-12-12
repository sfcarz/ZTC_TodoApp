const router = require('express').Router()
const addTodo = require('../../controller/toDoController');
const User = require('../../controller/userController');

router.post('/addTodo', addTodo);

router.route('/').post(User);
router.route('/').get(User);
router.route('/:Id').get(User);
router.route('/:Id').patch(User);
router.route('/:Id').delete(User);
// router.get('/user', User);

// router.get('/user', User)
// router.get('/user/:id', User)
// router.post('/user', User)
// router.delete('/user', User)
// router.patch('/user', User)

module.exports = router 
