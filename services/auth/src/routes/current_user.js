"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUserRouter = void 0;
var express_1 = __importDefault(require("express"));
// import { currentUser, requireAuth } from "@doitsimple/shared";
var middleware_1 = require("@airbnb/middleware");
var router = express_1.default.Router();
exports.currentUserRouter = router;
router.get("/api/users/currentuser", middleware_1.currentUser, middleware_1.requireAuth, function (req, res) {
    res.send({ currentUser: req.currentUser || null });
});
