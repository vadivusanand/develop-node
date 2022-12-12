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
exports.RegisterController = void 0;
const common_1 = require("@nestjs/common");
const create_reg_user_dto_1 = require("./dto/create-reg-user.dto");
const register_service_1 = require("./register.service");
const login_service_1 = require("../login/login.service");
const register_validation_pipe_1 = require("./register-validation.pipe");
let RegisterController = class RegisterController {
    constructor(registerService, loginService) {
        this.registerService = registerService;
        this.loginService = loginService;
        this.regusers = [];
    }
    createUser(req, res, createRegUserDto) {
        if (!!createRegUserDto) {
            res.redirect("login");
        }
        console.log(this.loginService.getAllTasks());
        return this.registerService.createRegUser(createRegUserDto);
    }
    getAllUsers() {
        console.log(this.regusers);
        return this.registerService.getAllUsers();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)(new register_validation_pipe_1.RegValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object, create_reg_user_dto_1.CreateRegUserDto]),
    __metadata("design:returntype", Object)
], RegisterController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)('/user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "getAllUsers", null);
RegisterController = __decorate([
    (0, common_1.Controller)('register'),
    __metadata("design:paramtypes", [register_service_1.RegisterService,
        login_service_1.LoginService])
], RegisterController);
exports.RegisterController = RegisterController;
//# sourceMappingURL=register.controller.js.map