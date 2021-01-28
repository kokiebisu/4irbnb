"use strict";
// const { allItems } = require("./all");
// const { anywhereItems } = require("./anywhere");
// const { categoryItems } = require("./category");
// const { footerItems } = require("./footer");
// const { hosts } = require("./hosts");
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// module.exports = { allItems, anywhereItems, categoryItems, footerItems, hosts };
__exportStar(require("./src/all"), exports);
__exportStar(require("./src/anywhere"), exports);
__exportStar(require("./src/category"), exports);
__exportStar(require("./src/footer"), exports);
__exportStar(require("./src/hosts"), exports);
__exportStar(require("./src/destination"), exports);
