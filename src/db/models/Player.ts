import { AllowNull, BelongsToMany, Column, HasMany, Model, Table, Unique } from "sequelize-typescript";
import Server from "./Server";
import PlayerServerStatus from "./PlayerServerStatus";
import Stream from "./Stream";
import Race from "./Race";
import RaceResult from "./RaceResult";

@Table
export default class Player extends Model {

    @Unique
    @Column
    serverId: string;

    @AllowNull(false)
    @Unique
    @Column
    playerDiscordId: string;

    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Column
    discriminator: string;

    @AllowNull(false)
    @Column
    mention: string;

    @BelongsToMany(() => Server, () => PlayerServerStatus)
    servers: Array<Server & { PlayerServerStatus: PlayerServerStatus }>;

    @HasMany(() => PlayerServerStatus)
    serverStatuses: PlayerServerStatus[];

    @HasMany(() => Stream, { onDelete: "SET NULL" })
    streams: Stream[];

    @HasMany(() => Race, { onDelete: "SET NULL" })
    createdRaces: Race[];

    @BelongsToMany(() => Race, { through: () => RaceResult, onDelete: "SET NULL" })
    results: Array<Race & { RaceResult: RaceResult }>;
}