const db = require('../model')

const addTodo = async (req, res) => {
    // const { todo } = req.body;
    const todo = req.body.todo
    // const result = await db.Todo.create({todo})
    const result = await db.Todo.create({todo:todo})
    res.json(result)
}

module.exports = {addTodo}