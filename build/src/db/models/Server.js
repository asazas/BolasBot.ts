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
const Player_1 = __importDefault(require("./Player"));
const PlayerServerStatus_1 = __importDefault(require("./PlayerServerStatus"));
const Stream_1 = __importDefault(require("./Stream"));
const Command_1 = __importDefault(require("./Command"));
const RoleCategory_1 = __importDefault(require("./RoleCategory"));
const Race_1 = __importDefault(require("./Race"));
let Server = class Server extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Server.prototype, "serverDiscordId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Server.prototype, "asyncSubmitCategory", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Server.prototype, "raceHistoryChannel", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Server.prototype, "playerScoreChannel", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Server.prototype, "streamAlertsChannel", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Server.prototype, "streamAlertsRole", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Server.prototype, "reactionRolesChannel", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Player_1.default, () => PlayerServerStatus_1.default),
    __metadata("design:type", Array)
], Server.prototype, "players", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => PlayerServerStatus_1.default),
    __metadata("design:type", Array)
], Server.prototype, "playerStatuses", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Stream_1.default),
    __metadata("design:type", Array)
], Server.prototype, "streams", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Command_1.default),
    __metadata("design:type", Array)
], Server.prototype, "commands", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => RoleCategory_1.default),
    __metadata("design:type", Array)
], Server.prototype, "roleCategories", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Race_1.default, { onDelete: "SET NULL" }),
    __metadata("design:type", Array)
], Server.prototype, "races", void 0);
Server = __decorate([
    sequelize_typescript_1.Table
], Server);
exports.default = Server;
//# sourceMappingURL=Server.js.map