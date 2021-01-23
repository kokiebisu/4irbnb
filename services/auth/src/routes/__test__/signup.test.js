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
describe('/api/users/signup POST', () => {
    it('returns a status of 201 on success', () => __awaiter(void 0, void 0, void 0, function* () {
        return supertest_1.default(app_1.default).post('/api/users/signup').send(helper_1.user).expect(201);
    }));
    it('prohibits request with missing email', () => {
        return supertest_1.default(app_1.default)
            .post('/api/users/signup')
            .send({
            email: '',
            password: helper_1.user.password,
        })
            .expect(400);
    });
    it('prohibits request with missing password', () => {
        return supertest_1.default(app_1.default)
            .post('/api/users/signup')
            .send({
            email: helper_1.user.email,
            password: '',
        })
            .expect(400);
    });
    it('prohibits usage of duplicate emails', () => __awaiter(void 0, void 0, void 0, function* () {
        yield supertest_1.default(app_1.default).post('/api/users/signup').send(helper_1.user);
        return supertest_1.default(app_1.default).post('/api/users/signup').send(helper_1.user).expect(400);
    }));
    it('includes cookie inside the header when signup was successful', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(app_1.default).post('/api/users/signup').send(helper_1.user);
        expect(response.get('Set-Cookie')).toBeDefined();
    }));
});
//# sourceMappingURL=signup.test.js.map