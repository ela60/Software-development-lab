const express = require('express');
const Dish = require('../models/dishModel');
const { createDish, getDishes, getDish, deleteDish, updateDish } = require('../controllers/dishController');
const dishRouter = express.Router();


dishRouter.post('/', createDish);
dishRouter.get('/', getDishes);
dishRouter.get(('/:dishId'), getDish);
dishRouter.delete(('/:dishId'), deleteDish);
dishRouter.put('/:dishId', updateDish);


module.exports = dishRouter;

