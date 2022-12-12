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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const register_service_1 = require("../register/register.service");
let LoginService = class LoginService {
    constructor() {
        this.idSeq = 0;
        this.tasks = [];
        console.log(create_user_dto_1.CreateUserDto);
    }
    getAllTasks() {
        console.log('service', this.tasks);
        return [...this.tasks];
    }
    createTask(createTaskDto) {
        const { username, password } = createTaskDto;
        const task = {
            username,
            password,
        };
        this.tasks.push(task);
        return task;
    }
};
__decorate([
    (0, common_1.Inject)(register_service_1.RegisterService),
    __metadata("design:type", register_service_1.RegisterService)
], LoginService.prototype, "registerService", void 0);
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map