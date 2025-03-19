const Paciente = require('../models/paciente');

const criarPaciente = async (dados) => {
    try {
        const paciente =  new paciente(dados);
        await paciente.save();
        return paciente;
    } catch (error) {
    throw new Error('Erro ao criar paciente: '
        + error.message);
     }
    };
