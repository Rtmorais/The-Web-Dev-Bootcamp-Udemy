const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose
  .connect('mongodb://localhost:27017/farmStand')
  .then(() => {
    console.log('MONGO CONNECTION OPEN')
  })
  .catch(err => {
    console.log('SOMETHING WENT WRONG WITH MONGO', err)
  })

const seedProducts = [
  {
    name: 'Fairy Eggplany',
    price: 1.0,
    category: 'Vegetable'
  },
  {
    name: 'Organic Goddess Melon',
    price: 4.99,
    category: 'Fruit'
  },
  {
    name: 'Organic Mini Seedless Watermelon',
    price: 3.99,
    category: 'Fruit'
  },
  {
    name: 'Organic Celery',
    price: 1.5,
    category: 'Vegetable'
  },
  {
    name: 'Chocolate Whole Milk',
    price: 2.69,
    category: 'Dairy'
  }
]

Product.insertMany(seedProducts)
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log(e)
  })

/* const p = new Product({
  name: 'Ruby Grapefruit',
  price: 1.99,
  category: 'fruit'
})
p.save()
  .then(p => {
    console.log(p)
  })
  .catch(e => {
    console.log(e)
  })
 */
