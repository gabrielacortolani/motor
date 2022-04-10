const { Model, DataTypes } = require('sequelize');

class Pecas extends Model {
    static init(sequelize) {
        super.init({
            pec_nome: DataTypes.STRING,
            pec_fabricante: DataTypes.STRING,
            pec_descricao: DataTypes.STRING,
            pec_datafab: DataTypes.INTEGER,
            motor_id: DataTypes.INTEGER,
            
        },{
            sequelize,
            tableName: 'pecas',
        });

        return this;       
    }
    
    static associate(models) {
        this.belongsTo(models.Motor, {foreignKey: "motor_id", as: "motor"})
    }
}

module.exports = Pecas