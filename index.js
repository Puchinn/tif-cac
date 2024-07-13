import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("hello");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el Puerto 3000");
});
