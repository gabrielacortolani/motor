const Motor = require('../models/motorModels.js');
const Pecas = require('../models/pecasModels.js');

module.exports = {
    async indexAll(req, res) {
        const motor = await Motor.findAll();
        return res.json(motor)
    },

    async index(req,res) {
        const { motor_id } = req.params
        console.log('Parametro motor esperado' + motor_id)
        const motor = await Motor.findByPk(motor_id, {
            include: { association: 'pecas'}
        })
        
        return res.json(motor);
    },

    async store(req, res) {
        const {motor_nome, motor_fabricante, motor_potencia, motor_cilindrada} = req.body
    
        const motor = await Motor.create({
            motor_nome,
            motor_fabricante,
            motor_potencia,
            motor_cilindrada
        });
        return res.status(200).send({
            status: 1,
            message: 'Motor cadastrado com sucesso!!!',
            motor
        })
    },

    async update(req,res) {
        const {motor_nome, motor_fabricante, motor_potencia, motor_cilindrada} = req.body
        const {motor_id} = req.params;
        const motor = await Motor.update({
            motor_nome, motor_fabricante, motor_potencia, motor_cilindrada
        }, {
            where: { id: motor_id }
        });
        return res.status(200).send({
            status: 1,
            message: "Motor atualizado com sucesso!"
        })
    },

    async delete(req, res) {
        const {motor_id} = req.params

        const motor = await Motor.findByPk(motor_id)
        if(!motor) {
            return res.status(400).json({error: "Motor não encontrado"})
        }
        else {
            console.log("Motor encontrado!")
        }

        await Motor.destroy({
            where: {
                id: motor_id
            }
        })
        return res.status(200).send({
            status: 1,
            message: "Motor excluido com sucesso!"
        })
    }
}

