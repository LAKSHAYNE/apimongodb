const express = require("express");
const mongoose = require("mongoose");
const insertStu = require("./routes/studentRoute");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
mongoose.connect(
  "mongodb+srv://" +
    "lakshayne" +
    ":" +
    "tyrell" +
    "@cluster0.siopf.mongodb.net/" +
    "masterji" +
    "?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
app.get("/", (req, res) => res.send("helooooo"));
app.use("/api/student", insertStu);
app.listen(3000, () => {
  console.log("listening on port 3000");
});
