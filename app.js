import express from "express";
import path, { dirname } from "path";
import { engine, create } from "express-handlebars";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ROUTES
import AuthRoutes from "./routes/auth.js";
import ProductsRoutes from "./routes/products.js";

// DOTENV
import * as dotenv from "dotenv";
dotenv.config();
// DOTENV

const app = express();

const hbs = create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");

// middleware
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(AuthRoutes);
app.use(ProductsRoutes);

app.get("/", (req, res) => {
  res.render("home", { title: "Express Project", isActive: true });
});

// mongoose connect
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB: ", error);
  });

app.listen(1010);
