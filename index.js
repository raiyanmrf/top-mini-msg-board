import express from "express";
import { indexRouter } from "./routes/index.route.js";
import { newRouter } from "./routes/new.route.js";
import { detailRouter } from "./routes/detail.route.js";

export const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toDateString(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toDateString(),
  },
];
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("views", "views");
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/detail", detailRouter);

app.listen(3000, () => {
  console.log(`listening at http://localhost:3000/`);
});
