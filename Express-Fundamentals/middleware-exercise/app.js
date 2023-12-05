const express = require("express");
const itemsRouter = require('./itemsRouters');
const ExpressError = require("./expressError");


const app = express();
app.use(express.json());

app.use('/items', itemsRouter);

app.use(function(req, res, next) {
    return new ExpressError("Item Not found", 404)
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    return res.json({
        error: err.message,
    });
});

module.exports = app 