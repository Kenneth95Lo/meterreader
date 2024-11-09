import { Sequelize, DataTypes, Model as SequelizeModel } from 'sequelize';
import DbConfig from '../config/db-config';

const sequelize = new Sequelize(DbConfig)

class MeterReadingModel extends SequelizeModel {}

MeterReadingModel.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nmi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false
    },
    consumption: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'MeterReading',
    tableName: 'meter_readings',
    timestamps: false
});

export { MeterReadingModel }