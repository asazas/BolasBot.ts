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
let Command = class Command extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Unique)('command_name_unique'),
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.ForeignKey)(() => Server_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Command.prototype, "serverId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Server_1.default, { onDelete: "CASCADE" }),
    __metadata("design:type", Server_1.default)
], Command.prototype, "server", void 0);
__decorate([
    (0, sequelize_typescript_1.Unique)('command_id_unique'),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Command.prototype, "commandDiscordId", void 0);
__decorate([
    (0, sequelize_typescript_1.Unique)('command_name_unique'),
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Command.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], Command.prototype, "text", void 0);
Command = __decorate([
    sequelize_typescript_1.Table
], Command);
exports.default = Command;
//# sourceMappingURL=Command.js.map