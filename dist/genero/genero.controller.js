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
exports.GeneroController = void 0;
const common_1 = require("@nestjs/common");
const create_gender_dto_1 = require("./dto/create-gender.dto");
const genero_service_1 = require("./genero.service");
let GeneroController = class GeneroController {
    constructor(generoService) {
        this.generoService = generoService;
    }
    create(genderDto) {
        return this.generoService.create(genderDto);
    }
    findAll() {
        return this.generoService.findAll();
    }
    findOne(id) {
        return this.generoService.findOne(id);
    }
    deleteOne(id) {
        return this.generoService.remove(id);
    }
    updateProduct(id, changeDto) {
        return this.generoService.update(id, changeDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gender_dto_1.CreateGenderDto]),
    __metadata("design:returntype", void 0)
], GeneroController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GeneroController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GeneroController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GeneroController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_gender_dto_1.CreateGenderDto]),
    __metadata("design:returntype", void 0)
], GeneroController.prototype, "updateProduct", null);
GeneroController = __decorate([
    (0, common_1.Controller)("genero"),
    __metadata("design:paramtypes", [genero_service_1.GeneroService])
], GeneroController);
exports.GeneroController = GeneroController;
//# sourceMappingURL=genero.controller.js.map