// const express = require("express");
// const pages = require("./routes/pages")
// const path = require("path");
import express from "express";
import pages from "./routes/pages.js";
import path, { dirname } from 'path';
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("home");
});
// Routes
app.use("/pages", pages);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
