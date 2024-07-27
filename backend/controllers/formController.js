// const Data = require("../models/dataModel.js");
import Data from "../models/dataModel.js";

const form = async (req, res) => {
    try {
        const newData = new Data(req.body);
        await newData.save();
        res.status(201).send(newData);
    } catch (err) {
        res.status(400).send(err);
    }
};
const list = async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).send(err);
    }
};
export { form, list };
