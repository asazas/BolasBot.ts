import { BelongsToMany, Column, HasMany, Model, Table, Unique } from "sequelize-typescript";
import Player from "./Player";
import ServerPlayer from "./ServerPlayer";
import Stream from "./Stream";
import Command from "./Command";
import RoleCategory from "./RoleCategory";
import Race from "./Race";

@Table
export default class Server extends Model {

    @Unique
    @Column
    serverDiscordId: string;

    @Column
    asyncSubmitCategory: string;

    @Column
    raceHistoryChannel: string;

    @Column
    playerScoreChannel: string;

    @Column
    streamAlertsChannel: string;

    @Column
    streamAlertsRole: string;

    @Column
    reactionRolesChannel: string;

    @BelongsToMany(() => Player, () => ServerPlayer)
    players: Array<Player & { ServerPlayer: ServerPlayer }>;

    @HasMany(() => Stream)
    streams: Stream[];

    @HasMany(() => Command)
    commands: Command[];

    @HasMany(() => RoleCategory)
    roleCategories: RoleCategory[];

    @HasMany(() => Race, { onDelete: "SET NULL" })
    races: Race[];
}