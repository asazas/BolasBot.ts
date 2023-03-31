import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import RoleCategory from "./RoleCategory";

@Table({
    indexes: [
        { unique: true, fields: ['categoryId', 'name'] },
        { unique: true, fields: ['categoryId', 'emojiDiscordId'] },
        { unique: true, fields: ['categoryId', 'emojiName'] },
    ]
})
export default class Role extends Model {

    @AllowNull(false)
    @ForeignKey(() => RoleCategory)
    @Column
    categoryId: number;

    @BelongsTo(() => RoleCategory, { onDelete: "CASCADE" })
    category: RoleCategory;

    @Column
    name: string;

    @AllowNull(false)
    @Column
    roleDiscordId: string;

    @AllowNull(false)
    @Column(DataType.TEXT)
    description: string;

    @AllowNull(false)
    @Column
    emojiDiscordId: string;

    @AllowNull(false)
    @Column
    emojiName: string;
}