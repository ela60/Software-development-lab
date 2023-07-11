const express = require('express');
// const Promo = require('../models/promoModel');
const { createpromo, getpromoes, getpromo, updatepromo, deletepromo} = require('../controllers/promocontoller');
const promoRouter = express.Router();


promoRouter.post('/', createpromo);
promoRouter.get('/', getpromoes);
promoRouter.get(('/:promoId'), getpromo);
promoRouter.delete(('/:promoId'), deletepromo);
promoRouter.put('/:promoId', updatepromo);



module.exports = promoRouter;