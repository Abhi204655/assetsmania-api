const express = require("express");
const bodyParser = require("body-parser");
const { getAllImageLinks } = require("./controller");

const app = express();
app.use(bodyParser.json({ urlencoded: true }));

app.post("/api/get_images", getAllImageLinks);

app.use("*", (req, res) => {
  res.status(400).json({ msg: "Not Found" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`running on port ${PORT}`));