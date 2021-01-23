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
describe('/api/users/signin POST', () => {
    it('fails when a non existing email is provided', () => __awaiter(void 0, void 0, void 0, function* () {
        return supertest_1.default(app_1.default).post('/api/users/signin').send(helper_1.user).expect(400);
    }));
    it('fails when a wrong password is provided', () => __awaiter(void 0, void 0, void 0, function* () {
        yield supertest_1.default(app_1.default).post('/api/users/signup').send(helper_1.user);
        return supertest_1.default(app_1.default)
            .post('/api/users/signin')
            .send({
            email: helper_1.user.email,
            password: 'wrongpassword',
        })
            .expect(400);
    }));
    it('expected status code of 200 when correct credentials are provided', () => __awaiter(void 0, void 0, void 0, function* () {
        yield supertest_1.default(app_1.default).post('/api/users/signup').send(helper_1.user);
        return supertest_1.default(app_1.default).post('/api/users/signin').send(helper_1.user).expect(200);
    }));
    it('includes cookies in the header when correct credentials are provided', () => __awaiter(void 0, void 0, void 0, function* () {
        yield supertest_1.default(app_1.default).post('/api/users/signup').send(helper_1.user);
        const response = yield supertest_1.default(app_1.default).post('/api/users/signin').send(helper_1.user);
        return expect(response.get('Set-Cookie')).toBeDefined();
    }));
});
//# sourceMappingURL=signin.test.js.map