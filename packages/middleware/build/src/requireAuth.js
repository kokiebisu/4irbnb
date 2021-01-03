"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
var error_1 = require("@airbnb/error");
var requireAuth = function (req, res, next) {
    if (!req.currentUser) {
        throw new error_1.NotAuthorizedError();
    }
    next();
};
exports.requireAuth = requireAuth;
