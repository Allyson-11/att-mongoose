const mongoose = require('mongoose')
nect('mongodb+srv://Kraugel11:<Kraugel#11>@cluster0.czu1w.mongodb.net/', {
    userNewUrlParser: true,
    userUnifiedTopology: true
})
.then(() =>{
    console.log('conexão xom mongoDB estabelecidacom sucesso!');
})
.catch((err) => {
    console.error('Erro ao conectar com mongoDB:', err);
});

const pacienteSchema = new mongoose.Schema({
    nome: { type: String, required: true}, 
    cpf: {type: String, required: true, unique: true},
    dataDeNascimento: {type: Date, required: true},
    email: {type: String, required: true},
    telefone: {type: String, required: true}
});
const paciente = mongoose.model('paciente', pacienteSchema);
async function salvarPaciente(dadosPaciente) {
    try {
        const paciente = new Paciente(dadosPaciente);
        await paciente.save();
        console.log('Paciente salvo com sucesso!', paciente);
    } catch(err){
        console.error('Erro ao salvar Paciente', err);
    }
}
const dadosPaciente = {
    nome: 'juninho',
    cpf: '526.981.637-56',
    dataDeNascimento: new Date ('25/09/2003'),
    email: 'junhinhogamer@gmail.com',
    telefone: '(81) 9747-947'
};

salvarPaciente(dadosPaciente);
