import express from "express";
import Email from "../controllers/emailController.js";
// const Email = require("../controllers/emailController.js");
// const Form = require("../controllers/formController.js");

import { form, list } from "../controllers/formController.js";

const router = express.Router();

router.post("/submit", form);
router.get("/list", list);
router.post("/send-email", Email);

export default router;
