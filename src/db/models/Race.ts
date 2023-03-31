import { AllowNull, BelongsTo, BelongsToMany, Column, DataType, Default, ForeignKey, Model, Table, Unique } from "sequelize-typescript";
import Player from "./Player";
import RaceResult from "./RaceResult";
import Server from "./Server";

export const enum RACE_TYPE { LIVE, ASYNC, PRIVATE_ASYNC }
export const enum LIVE_RACE_STATUS { OPEN, ONGOING, FINISHED }
export const enum ASYNC_RACE_STATUS { OPEN, CLOSED, PURGED }
export const enum PRIVATE_ASYNC_RACE_STATUS { OPEN, FINISHED }

@Table
export default class Race extends Model {

    @ForeignKey(() => Server)
    serverId: number;

    @BelongsTo(() => Server)
    server: Server;

    @AllowNull(false)
    @Column
    name: string;

    @Column
    label: string;

    @ForeignKey(() => Player)
    creatorId: number;

    @BelongsTo(() => Player)
    creator: Player;

    @Column
    startDate: Date;

    @Column
    endDate: Date;

    @AllowNull(false)
    @Default(false)
    @Column
    ranked: boolean;

    @AllowNull(false)
    @Default(0)
    @Column
    status: number;

    @Column(DataType.TEXT)
    preset: string;

    @Column
    seedHash: string;

    @Column
    seedCode: string;

    @Column
    seedUrl: string;

    @AllowNull(false)
    @Unique
    @Column
    raceChannelId: string;

    @Column
    resultsChannelId: string;

    @Column
    resultsMessageId: string;

    @Column
    spoilersChannelId: string;

    @Column
    roleId: string;

    @BelongsToMany(() => Player, () => RaceResult)
    results: Array<Player & { RaceResult: RaceResult }>;
}