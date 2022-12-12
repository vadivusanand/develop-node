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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.idSeq = 0;
        this.users = [];
    }
    create(createUserDto) {
        this.users.push(Object.assign(Object.assign({}, createUserDto), { id: createUserDto.id, title: createUserDto.title, rating: createUserDto.rating }));
        return this.users.at(-1);
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        return this.users.find((user) => user.id === id);
    }
    update(id, updateUserDto) {
        const i = this.users.findIndex((user) => user.id == id);
        if (i === -1)
            return null;
        this.users[i] = Object.assign(Object.assign({}, this.users[i]), updateUserDto);
        return this.users[i];
    }
    remove(id) {
        const i = this.users.findIndex((user) => user.id == id);
        if (i === -1)
            return null;
        const user = this.users[i];
        this.users.splice(i, 1);
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map