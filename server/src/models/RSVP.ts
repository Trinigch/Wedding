import { Sequelize, DataTypes, Model, Optional } from 'sequelize';


interface RSVPAttributes {
  id: number;
  name: string;
  email: string;
  wedding: boolean;
  iguazu:  boolean;
  fitzRoy:  boolean;
}


interface RSVPCreationAttributes extends Optional<RSVPAttributes, 'id'> {}

export class RSVP extends Model <RSVPAttributes,  RSVPCreationAttributes>implements RSVPAttributes{
    public id!: number;
    public name!: string;
    public email!: string;
    public wedding!: boolean;
    public iguazu!:  boolean;
    public  fitzRoy!:  boolean;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}
// ✅ Esta función inicializa el modelo usando Sequelize
export function RSVPFactory(sequelize: Sequelize): typeof RSVP {
  RSVP.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      wedding: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      iguazu: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      fitzRoy: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'RSVP',
      tableName: 'rsvps',
      timestamps: true,
    }
  );

  return RSVP;
}