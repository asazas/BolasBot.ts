import { AllowNull, Column, Default, ForeignKey, Model, Table } from "sequelize-typescript";
import Player from "./Player";
import Server from "./Server";

@Table
export default class ServerPlayer extends Model {

    @ForeignKey(() => Server)
    @Column
    serverId: number;

    @ForeignKey(() => Player)
    @Column
    playerId: number;

    @AllowNull(false)
    @Default(1500)
    @Column
    score: number;

    @AllowNull(false)
    @Default(0)
    @Column
    races: number;

    @AllowNull(false)
    @Default(false)
    @Column
    banned: boolean;
}