const Dish = require("../models/dishModel");

const createDish =  async (req, res) => {
 
    try {
        const dish = await Dish.create(req.body);
        return res.status(201).json({"dish": dish})

    } catch (error) {
        res.send(error);
        
    }
}

const getDishes = async (req, res) => {
    try {
        const dishes = await Dish.find();
        res.json(dishes);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }

}

const getDish = async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.dishId);
        res.json(dish);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
        console.log(res.statusCode);
    }
}

const updateDish = async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.dishId);
        dish.name = req.body.name;
        dish.price = req.body.price;
        const updateDish = await dish.save();
        res.json(updateDish);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
        console.log(res.statusCode);
    }
}

const deleteDish =  async (req, res) => {
    try {
        const deleteDish = await Dish.findByIdAndDelete(req.params.dishId);
        res.send("Dish deleted....");
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = { createDish, getDishes, getDish, updateDish, deleteDish }