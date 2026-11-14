import express from "express";
import { messages } from "../index.js";

export const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});
