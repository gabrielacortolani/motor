const { Model, DataTypes } = require('sequelize')

class Motor extends Model {
    static init(sequelize) {
        super.init({
            motor_nome: DataTypes.STRING,
            motor_fabricante: DataTypes.STRING,
            motor_potencia: DataTypes.STRING,
            motor_cilindrada: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'motor',
        });
        return this;
    }

    static associate(models) {
        this.hasMany(models.Pecas, {foreignKey: "motor_id", as: 'pecas' })
    }
}
 
module.exports = Motor
