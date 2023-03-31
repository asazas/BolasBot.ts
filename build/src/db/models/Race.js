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
const RaceResult_1 = __importDefault(require("./RaceResult"));
const Server_1 = __importDefault(require("./Server"));
let Race = class Race extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Server_1.default),
    __metadata("design:type", Number)
], Race.prototype, "serverId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Server_1.default),
    __metadata("design:type", Server_1.default)
], Race.prototype, "server", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Race.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Race.prototype, "label", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Player_1.default),
    __metadata("design:type", Number)
], Race.prototype, "creatorId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Player_1.default),
    __metadata("design:type", Player_1.default)
], Race.prototype, "creator", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Race.prototype, "startDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Race.prototype, "endDate", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Default)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Race.prototype, "ranked", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Default)(0),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Race.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], Race.prototype, "preset", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Race.prototype, "seedHash", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Race.prototype, "seedCode", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Race.prototype, "seedUrl", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Race.prototype, "raceChannelId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Race.prototype, "resultsChannelId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Race.prototype, "resultsMessageId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Race.prototype, "spoilersChannelId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Race.prototype, "roleId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Player_1.default, () => RaceResult_1.default),
    __metadata("design:type", Array)
], Race.prototype, "results", void 0);
Race = __decorate([
    sequelize_typescript_1.Table
], Race);
exports.default = Race;
//# sourceMappingURL=Race.js.map