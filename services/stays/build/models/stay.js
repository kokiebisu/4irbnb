"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stay = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var staySchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
}, {
    toJSON: {
        transform: function (_, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    },
});
staySchema.statics.build = function (attributes) {
    return new Stay(attributes);
};
var Stay = mongoose_1.default.model('Stay', staySchema);
exports.Stay = Stay;
