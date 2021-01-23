"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinRouter = void 0;
const express_1 = __importDefault(require("express"));
// import { BadRequestError } from "@doitsimple/shared";
const error_1 = require("@airbnb/error");
const user_1 = require("../models/user");
const password_1 = require("../services/password");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
exports.signinRouter = router;
router.post("/api/users/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const existingUser = yield user_1.User.findOne({ email });
    if (!existingUser) {
        throw new error_1.BadRequestError("Invalid credentials");
    }
    const passwordMatch = yield password_1.Password.compare(existingUser.password, password);
    if (!passwordMatch) {
        throw new error_1.BadRequestError("Password didn't match");
    }
    const userJwt = jsonwebtoken_1.default.sign({ id: existingUser.id, email: existingUser.email }, process.env.JWT_KEY);
    req.session = {
        jwt: userJwt,
    };
    res.status(200).send(existingUser);
}));
//# sourceMappingURL=signin.js.map