import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectMongoDB from "./db/connectMongoDB.js";
import dataRoute from "./routes/dataRoute.js";
// const dataRoute = require("./routes/dataRoute.js");

dotenv.config();
console.log("MongoDB URI:", process.env.MONGO_URI); // Add this line to check the URI

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", dataRoute);

app.listen(port, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${port}`);
    connectMongoDB();
    console.log("MongoDB URI:", process.env.MONGO_URI);
});
