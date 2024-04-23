import express from "express";

const router = express.Router();

router.get("/about", (req, res) => {
  res.render("about");
});

export default router;
