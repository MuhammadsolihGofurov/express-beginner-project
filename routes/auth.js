import { Router } from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import Toastify from "toastify-js";

const router = Router();

// register
router.get("/auth/register", (req, res) => {
  res.render("auth/register", { title: "Register" });
});
router.post("/auth/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
  };
  const user = await User.create(userData);
  

  res.redirect("/");
  // res.redirect("toasts/success", { message: "User registered successfully!" });

});

// login routes
router.get("/auth/login", (req, res) => {
  res.render("auth/login", { title: "Login" });
});

router.post("/auth/login", async (req, res) => {
  const existUser = await User.findOne({ email: req.body.email });
  if (!existUser) {
    console.log("User not found");

    return;
  }

  const isPasswordEqual = await bcrypt.compare(
    req.body.password,
    existUser.password
  );

  if (!isPasswordEqual) {
    console.log("Password is wrong");
    return;
  }
  console.log(existUser);
  res.redirect("/");
});

export default router;
