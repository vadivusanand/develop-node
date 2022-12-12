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
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
let MovieService = class MovieService {
    constructor() {
        this.idSeq = 0;
        this.users = [];
        this.users.push({ title: "chellam", id: 24, rating: 4.1 });
        this.users.push({ title: "Hulk", id: 41, rating: 4.7 });
        this.users.push({ title: "She Hulk", id: 71, rating: 3.7 });
        this.users.push({ title: "Hawkeye", id: 127, rating: 4.4 });
        this.users.push({ title: "Hello", id: 127, rating: 4.4 });
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
MovieService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map