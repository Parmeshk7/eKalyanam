const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

app.use(express.json())
app.use(cookieParser());

//Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const prasad = require("./routes/prasadRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1/", order);
app.use("/api/v1/", prasad);


// Middleware for Errors
app.use(errorMiddleware);

module.exports = app