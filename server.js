require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connect = require("./config");
const router = require("./routes");
const cors = require("cors");
connect();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "App is running good",
    time: new Date().toLocaleString(),
  });
});

app.listen(port, () => console.log("Server is running at port", port));
