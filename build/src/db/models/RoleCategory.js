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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Server_1 = __importDefault(require("./Server"));
const Role_1 = __importDefault(require("./Role"));
let RoleCategory = class RoleCategory extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Unique)('cat_name_unique'),
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.ForeignKey)(() => Server_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], RoleCategory.prototype, "serverId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Server_1.default, { onDelete: "CASCADE" }),
    __metadata("design:type", Server_1.default)
], RoleCategory.prototype, "server", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], RoleCategory.prototype, "categoryDiscordId", void 0);
__decorate([
    (0, sequelize_typescript_1.Unique)('cat_name_unique'),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], RoleCategory.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Role_1.default),
    __metadata("design:type", Array)
], RoleCategory.prototype, "roles", void 0);
RoleCategory = __decorate([
    sequelize_typescript_1.Table
], RoleCategory);
exports.default = RoleCategory;
//# sourceMappingURL=RoleCategory.js.map