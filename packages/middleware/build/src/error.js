"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var error_1 = require("@airbnb/error");
var errorHandler = function (err, req, res, next) {
    if (err instanceof error_1.CustomError) {
        return res.status(err.statusCode).json({ errors: err.serializeErrors() });
    }
    res.status(400).send({
        errors: [{ message: "Something went wrong" }],
    });
};
exports.errorHandler = errorHandler;
