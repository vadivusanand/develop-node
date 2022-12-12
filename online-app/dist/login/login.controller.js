"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const login_validation_pipe_1 = require("./login-validation.pipe");
const login_exception_filter_1 = require("./login.exception-filter");
const login_service_1 = require("./login.service");
let LoginController = class LoginController {
    constructor(loginService) {
        this.loginService = loginService;
        this.users = [];
    }
    createTask(req, res, createTaskDto) {
        this.loginService.createTask(createTaskDto);
        if (!!createTaskDto) {
            res.render("hello", { username: createTaskDto.username, password: createTaskDto.password });
        }
        return this.loginService.createTask(createTaskDto);
    }
    getAllTasks() {
        return this.loginService.getAllTasks();
    }
    greetUser(username, res) {
        res.render("hello", { username: username });
    }
    getHello() {
        if (this.loginService.getAllTasks().length > 0) {
            console.log('iam in gethello');
            return;
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseFilters)(new login_exception_filter_1.LoginExceptionFilter()),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)(new login_validation_pipe_1.LoginValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Object)
], LoginController.prototype, "createTask", null);
__decorate([
    (0, common_1.Get)('/user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "getAllTasks", null);
__decorate([
    (0, common_1.Get)(":username"),
    (0, common_1.Render)('hello'),
    __param(0, (0, common_1.Param)("username")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "greetUser", null);
__decorate([
    (0, common_1.Get)('/gethello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "getHello", null);
LoginController = __decorate([
    (0, common_1.Controller)('login'),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map