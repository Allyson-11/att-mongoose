const pacienteService = require('../services/pacienteservice');

const criarPaciente= async(req, res) =>{
    try {
        const{ nome,cpf, dataNascimento, telefone, email} = req.body;
        
        if (!nome || !cpf || !dataNascimento || !telefone || !email) {
            return res.status(400).json({
                message: 'todos os campos são obrigatorios.'
            });
        }
        const paciente = await pacienteService.criarPaciente(req.body);
        res.status(201).json({ message: 'paciente cadastrado com sucesso'});

    } catch (error) {
        res.status(400).json({ error: error.message});
    }
};

const listarPacientes = async (req, res) =>{
    try {
        const paciente = await pacienteService.listarPacientes();
        res.json(paciente);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

module.exports = {criarPaciente, listarPacientes };
