const express = require("express");
const fs = require("fs");

const app = express();

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

function save() {
  fs.writeFileSync("data.json", JSON.stringify(data));
}

app.get("/", (req, res) => res.json(data));

app.listen(8080, () => {
  console.log("클라우드 메모장 서버");
});
