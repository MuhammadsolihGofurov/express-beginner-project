const express = require("express");
const pages = require("./routes/pages")
const path = require("path");
const app = express();
const port = 3000;


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("home");
});
// Routes
app.use('/pages', pages)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
