const leader = require("../models/leaderModel");

const createleader =  async (req, res) => {
    console.log("leader")
    const data = new leader(req.body)
    try {

        const leader = await data.save()
        console.log("print ",leader)
        return res.status(201).json({"leader": leader})

    } catch (error) {
        res.send(error);
        
    }
}

const getleaderes = async (req, res) => {
    try {
        const leader = await Leader.find();
        res.json(leader);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }

}

const getleader = async (req, res) => {
    try {
        const leaders = await leader.findById(req.params.leaderId);
        res.json(leader);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
        console.log(res.statusCode);
    }
}

const updateleader = async (req, res) => {
    try {
        const lead = await  leader.findById(req.params.leaderId);
        lead.name = req.body.name;
        lead.price = req.body.price;
        const updateleader = await lead.save();
        res.json(updateleader);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
        console.log(res.statusCode);
    }
}

const deleteleader =  async (req, res) => {
    try {
        const deleteleader = await leader.findByIdAndDelete(req.params.leaderId);
        res.send("leader deleted....");
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = { createleader, getleaderes, getleader, updateleader, deleteleader }