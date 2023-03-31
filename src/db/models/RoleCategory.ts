import { AllowNull, BelongsTo, Column, ForeignKey, HasMany, Model, Table, Unique } from "sequelize-typescript";
import Server from "./Server";
import Role from "./Role";

@Table
export default class RoleCategory extends Model {

    @Unique('cat_name_unique')
    @AllowNull(false)
    @ForeignKey(() => Server)
    @Column
    serverId: number;

    @BelongsTo(() => Server, { onDelete: "CASCADE" })
    server: Server;

    @AllowNull(false)
    @Column
    categoryDiscordId: string;

    @Unique('cat_name_unique')
    @AllowNull(false)
    @Column
    name: string;

    @HasMany(() => Role)
    roles: Role[];
}