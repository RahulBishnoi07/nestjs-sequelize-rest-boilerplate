import { Model, Table } from "sequelize-typescript";

@Table({ underscored: true })
export class User extends Model{}
