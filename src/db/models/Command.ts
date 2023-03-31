import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table, Unique } from "sequelize-typescript";
import Server from "./Server";

@Table
export default class Command extends Model {

    @Unique('command_name_unique')
    @AllowNull(false)
    @ForeignKey(() => Server)
    @Column
    serverId: number;

    @BelongsTo(() => Server, { onDelete: "CASCADE" })
    server: Server;

    @Unique('command_id_unique')
    @Column
    commandDiscordId: string;

    @Unique('command_name_unique')
    @AllowNull(false)
    @Column
    name: string;

    @Column(DataType.TEXT)
    text: string;
}