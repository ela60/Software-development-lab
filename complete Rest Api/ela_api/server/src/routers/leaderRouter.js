const express = require('express');
const Leader = require('../models/leaderModel');
const { createleader, getleaderes, getleader, updateleader, deleteleader  } = require('../controllers/leaderController');
const leaderRouter = express.Router();


leaderRouter.post('/', createleader);
leaderRouter.get('/', getleaderes);
leaderRouter.get(('/:leaderId'), getleader);
leaderRouter.delete(('/:leaderId'), deleteleader);
leaderRouter.put('/:leaderId', updateleader);

module.exports = leaderRouter;


   