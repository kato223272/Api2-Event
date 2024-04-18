import { DataType, Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "VendedorRespuesta",
    timestamps: false,
})
class Vendedor extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true
    })
    public id_Vendedor!:number;
}
export default Vendedor;
