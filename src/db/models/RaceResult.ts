import { AllowNull, Column, Default, ForeignKey, Model, Table } from "sequelize-typescript";
import Player from "./Player";
import Race from "./Race";

export const enum LIVE_RESULT_STATUS { JOINED, READY, FINISHED, FORFEITED }
export const enum ASYNC_RESULT_STATUS { FINISHED, FORFEITED, UNPLAYED }
export const enum PRIVATE_ASYNC_RESULT_STATUS {
    INVITED_UNPLAYED, UNINVITED_UNPLAYED, INVITED_FINISHED,
    UNINVITED_FINISHED, INVITED_FORFEITED, UNINVITED_FORFEITED
}

@Table
export default class RaceResult extends Model {

    @ForeignKey(() => Race)
    @Column
    raceId: number;

    @ForeignKey(() => Player)
    @Column
    playerId: number;

    @AllowNull(false)
    @Default(0)
    @Column
    status: number;

    @Column
    time: number;

    @Column
    collectionRate: number;
}