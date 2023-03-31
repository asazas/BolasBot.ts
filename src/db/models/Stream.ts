import { AllowNull, BelongsTo, Column, Default, ForeignKey, Model, Table, Unique } from "sequelize-typescript";
import Player from "./Player";
import Server from "./Server";

@Table
export default class Stream extends Model {

    @Unique('stream_unique')
    @AllowNull(false)
    @ForeignKey(() => Server)
    @Column
    serverId: number;

    @BelongsTo(() => Server, { onDelete: "CASCADE" })
    server: Server;

    @ForeignKey(() => Player)
    @Column
    playerId: number;

    @BelongsTo(() => Player)
    player: Player;

    @Unique('stream_unique')
    @AllowNull(false)
    @Column
    twitchUser: string;

    @AllowNull(false)
    @Default(false)
    @Column
    live: boolean;
}