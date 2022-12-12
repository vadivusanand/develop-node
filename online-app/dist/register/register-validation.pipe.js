"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_reg_user_dto_1 = require("./dto/create-reg-user.dto");
let RegValidationPipe = class RegValidationPipe {
    async transform(value, metadata) {
        console.log('Reading data from registration validation pipe');
        const loginObj = (0, class_transformer_1.plainToInstance)(create_reg_user_dto_1.CreateRegUserDto, value);
        let errors = await (0, class_validator_1.validate)(loginObj);
        if (errors.length > 0) {
            errors.forEach(err => {
                return err.constraints;
            });
            throw new common_1.NotAcceptableException(errors);
        }
        else {
            return value;
        }
    }
};
RegValidationPipe = __decorate([
    (0, common_1.Injectable)()
], RegValidationPipe);
exports.RegValidationPipe = RegValidationPipe;
//# sourceMappingURL=register-validation.pipe.js.map