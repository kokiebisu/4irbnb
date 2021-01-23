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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
const helper_1 = require("../../test/helper");
describe('api/users/currentuser GET', () => {
    it('responds with id of the current user', () => __awaiter(void 0, void 0, void 0, function* () {
        const cookie = yield helper_1.signup();
        const response = yield supertest_1.default(app_1.default)
            .get('/api/users/currentuser')
            .set('Cookie', cookie)
            .send();
        expect(response.body.currentUser.id).toBeDefined();
    }));
    it('responds with proper email of the current user', () => __awaiter(void 0, void 0, void 0, function* () {
        const cookie = yield helper_1.signup();
        const response = yield supertest_1.default(app_1.default)
            .get('/api/users/currentuser')
            .set('Cookie', cookie)
            .send();
        expect(response.body.currentUser.email).toEqual(helper_1.user.email);
    }));
    it('responds with undefined if not authenticated', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(app_1.default).get('/api/users/currentuser').send();
        expect(response.body.currentUser).toBeUndefined();
    }));
});
//# sourceMappingURL=current_user.test.js.map