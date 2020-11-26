const { Schema, model } = require('mongoose');

todoSchema = new Schema({
  todo: string,
  trim: true,
  user: { type: Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: true,
});

const Todo = model('Todo', todoSchema);

module.exports = Todo;