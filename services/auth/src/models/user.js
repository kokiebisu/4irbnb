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
exports.buildUser = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const password_1 = require("../services/password");
const userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    toJSON: {
        transform(_, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        },
    },
});
/**
 * A pre-hook that gets called every time the save method is
 * being called. It hashes the newly built User document. When only
 * the email changes, it will not enter into the if condition.
 */
userSchema.pre("save", function (done) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.isModified("password")) {
            const hashed = yield password_1.Password.toHash(this.get("password"));
            this.set("password", hashed);
        }
        done();
    });
});
userSchema.statics.build = (attributes) => {
    return new User(attributes);
};
const User = mongoose_1.default.model("User", userSchema);
exports.User = User;
const buildUser = (attributes) => {
    return new User(attributes);
};
exports.buildUser = buildUser;
//# sourceMappingURL=user.js.map