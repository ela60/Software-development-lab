const promo = require("../models/promoSchema");

const createpromo =  async (req, res) => {
 
    const data = new promo(req.body)
    try {

        const promo = await data.save()
        console.log("print ",promo)
        return res.status(201).json({"promo": promo})

    } catch (error) {
        res.send(error);
        
    }
}

const getpromoes = async (req, res) => {
    try {
        const promoes = await promo.find();
        res.json(promoes);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }

}

const getpromo = async (req, res) => {
    try {
        const promo = await promo.findById(req.params.promoId);
        res.json(promo);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
        console.log(res.statusCode);
    }
}

const updatepromo = async (req, res) => {
    try {
        const pro = await promo.findById(req.params.promoId);
        pro.name = req.body.name;
        pro.price = req.body.price;
        const updatepromo = await pro.save();
        res.json(updatepromo);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
        console.log(res.statusCode);
    }
}

const deletepromo =  async (req, res) => {
    try {
        const deletepromo = await promo.findByIdAndDelete(req.params.promoId);
        res.send("promo deleted....");
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = { createpromo, getpromoes, getpromo, updatepromo, deletepromo }