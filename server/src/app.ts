import express from "express";
import mongoose from "mongoose";

import { pageRouter } from "./routes";

console.log(process.env.DB_URL);

const PORT = 3001;
const app = express();
mongoose
  .connect(process.env.DB_URL as string)
  .then(() => console.log("connected mongodb"));

app.use(express.json());
app.use("/page", pageRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("Server listening on port :", PORT);
});
