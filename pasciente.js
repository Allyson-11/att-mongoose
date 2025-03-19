const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    nome: {type: string, required: true},
    cpf: {type: string, required: true},
    dataNascimento: {type: Date, required: true},
    telefone: {type: string, required: true},
    email: {type: string, required: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('paciente', pacienteSchema);
