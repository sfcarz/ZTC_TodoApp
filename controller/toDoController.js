const db = require('../model')

module.exports = {
    addTodo: async (req, res) => {
        console.log('In the Controller', req.user);

        const todo = req.body.todo
        // const userId = req.body.userId
        const result = await db.Todo.create({ todo: todo, user: req.user._id })
        res.send(result)
    }
}