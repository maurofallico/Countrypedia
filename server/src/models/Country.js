const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Country', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        code: {
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        flag: {
            type: DataTypes.STRING,
            allowNull: false
        },
        continent: {
            type: DataTypes.STRING,
            allowNull: false
        },
        capital: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subregion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        area: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        population: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false
    })
}