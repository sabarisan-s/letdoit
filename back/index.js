const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", require("./routers/todo"));

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Database Connected ");
    })
    .catch((e) => {
        console.log("Not Connected Database", e.message);
    });

const port = 8000 || process.env.PORT;
app.listen(port, (e) => {
    if (e) throw e.message;
    console.log("Server Running");
});
