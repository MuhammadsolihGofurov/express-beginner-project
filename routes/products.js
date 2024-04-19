import { Router } from "express";
const router = Router();

router.get("/products", (req, res) => {
  res.render("products", { title: "All Products", isActive: true });
});

router.get("/products/add", (req, res) => {
  res.render("products/add", { title: "Product Add", isActive: true });
});

export default router;
