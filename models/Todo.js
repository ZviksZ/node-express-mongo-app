const {Schema, model} = require('mongoose')

const shema = new Schema({
   title: {
      type: String, 
      required: true
   },
   completed: {
      type: Boolean, 
      default: false
   }
})

module.exports = model('Todo', shema)