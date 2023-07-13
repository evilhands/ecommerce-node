import express from "express";
import dotenv from "dotenv";
import productsRouter from "./src/routes/products";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("Hello World1!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
