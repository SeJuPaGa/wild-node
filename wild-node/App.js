require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const name = process.env.MY_NAME || "sebastien";
  const city = process.env.MY_CITY || "lille";
  const language = process.env.MY_LANGUAGE || "javascript";

  res.send(`I am ${sebastien},wilder in ${lille}, and I love ${javascript}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
