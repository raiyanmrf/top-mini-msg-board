import express from "express";
import { messages } from "../index.js";

export const newRouter = express.Router();

newRouter.get("/", (req, res) => {
  res.render("new");
});
newRouter.post("/", (req, res) => {
  const { user, message } = req.body;
  messages.push({ user, text: message, added: new Date().toDateString() });
  res.redirect("/");
});
