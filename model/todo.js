const { Schema, model } = require('mongoose');

todoSchema = new Schema({
  todo: string,
  trim: true,
}, {
  timestamps: true,
});

todoSchema.static({
  findTodo: function (todo) {
    try {
      return this.find({ todo })
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  },
});

const Todo = model('Todo', todoSchema);

module.exports = Todo;