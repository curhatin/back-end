require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const users = require("./api/accounts")
const tags = require("./api/tags")

const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use("/users",users)
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
