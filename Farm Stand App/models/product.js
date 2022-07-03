const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    min: 0,
    required: true
  },
  category: {
    type: String,
    enum: ['Fruit', 'Vegetable', 'Dairy']
  }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
