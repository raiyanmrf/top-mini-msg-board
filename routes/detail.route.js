import express from "express";
import { messages } from "../index.js";

export const detailRouter = express.Router();

detailRouter.get("/:user", (req, res) => {
  const { user } = req.params;
  res.render("detail", {
    messages: messages.filter((item) => item.user == user),
  });
});
