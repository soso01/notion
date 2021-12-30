import express from "express";

import { authRouter, pageRouter } from "@/routes";
import "@/setting";

const PORT = 3001;
const app = express();

app.use(express.json());
app.use("/page", pageRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("Server listening on port :", PORT);
});
