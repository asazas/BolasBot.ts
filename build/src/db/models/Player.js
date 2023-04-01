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
const PlayerServerStatus_1 = __importDefault(require("./PlayerServerStatus"));
const Stream_1 = __importDefault(require("./Stream"));
const Race_1 = __importDefault(require("./Race"));
const RaceResult_1 = __importDefault(require("./RaceResult"));
let Player = class Player extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Player.prototype, "serverId", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Player.prototype, "playerDiscordId", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Player.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Player.prototype, "discriminator", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Player.prototype, "mention", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Server_1.default, () => PlayerServerStatus_1.default),
    __metadata("design:type", Array)
], Player.prototype, "servers", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => PlayerServerStatus_1.default),
    __metadata("design:type", Array)
], Player.prototype, "serverStatuses", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Stream_1.default, { onDelete: "SET NULL" }),
    __metadata("design:type", Array)
], Player.prototype, "streams", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Race_1.default, { onDelete: "SET NULL" }),
    __metadata("design:type", Array)
], Player.prototype, "createdRaces", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Race_1.default, { through: () => RaceResult_1.default, onDelete: "SET NULL" }),
    __metadata("design:type", Array)
], Player.prototype, "results", void 0);
Player = __decorate([
    sequelize_typescript_1.Table
], Player);
exports.default = Player;
//# sourceMappingURL=Player.js.map