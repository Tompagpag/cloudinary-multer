import * as dotenv from "dotenv";
dotenv.config();
import { multerUploads } from "./multer.js";
import express from "express";
const app = express();

app.post("/upload", multerUploads, (req, res) => {
  console.log("req.body :", req.body);
});


app.listen(3001);
