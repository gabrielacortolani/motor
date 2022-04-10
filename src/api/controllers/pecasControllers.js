const Motor = require('../models/motorModels.js')
const Pecas = require('../models/pecasModels.js');

module.exports = {

    async indexAll(req, res) {
        const pecas = await Pecas.findAll({

    })
        return res.json(pecas)
    },

    async index(req, res){
        const  { pecas_id } = req.params
        console.log('Parametro pecas esperado ' + pecas_id)
        const pecas = await Pecas.findByPk(pecas_id, {
            include: { association: 'motor'}
        })

        return res.json(pecas)

    },

    async store(req, res) {
        const { motor_id } = req.params
        const { pec_nome, pec_fabricante, pec_descricao, pec_datafab} = req.body
        console.log('Parametro Motor esperado: ' + motor_id)
        console.log('Dados: ' + req.body)
        const motor = await Motor.findByPk(motor_id) 

        if(!motor) {
            return res.status(400).json({error: 'Motor não encontrado!'})
        }
        const pecas = await Pecas.create({
            pec_nome,
            pec_fabricante,
            pec_descricao,
            pec_datafab,
            motor_id: motor_id,
        });

        return res.json(pecas);
    },

    async update(req, res) {
        const { pecas_id } = req.params
        const { pec_nome, pec_fabricante, pec_descricao,pec_datafab } = req.body

        await Pecas.update({
            pec_nome, pec_fabricante, pec_descricao,pec_datafab 
        }, {
            where: { id: pecas_id }
        });

        return res.status(200).send({
            status: 1,
            message: "Peças atualizada com sucesso!"
        })
    },

    async delete (req, res) {
        const { pecas_id } = req.params
        // validar Motor
        const pecas = await Pecas.findByPk(pecas_id)
        
        if(!pecas) {
            return res.status(400).json({error: "Peças não encontrada"})
        }
        else {
            console.log("Peças encontrada!")
        }

        await Pecas.destroy({
            where: {
                id: pecas_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Peças deletada com sucesso!",
            dependente: pecas
        })
    }

};

