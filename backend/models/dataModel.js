// const mongoose = require("mongoose");
import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    latitude: String,
    longtitude: String,
    city: String,
    image: String,
    status: String,
});

export default mongoose.model("Data", dataSchema);
// module.exports = mongoose.model("Data", dataSchema);
