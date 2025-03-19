const express = require('express');

const router = express.Router();

const pacienteRoutes = require('./src/routes/pacienteRoutes');

mongoose.connect("mongodb+srv://Kraugel11:<db_Kraugel11>@cluster0.czu1w.mongodb.net/", {
    serverSelectionTimeoutMS: 300000,
}
)
.then(() => console.log("conectado ao MongoDB com sucesso!"))
.cath((err) => console.error("erro ao conectar ao mongoDB", err));


app.get('/health', (req, res) => {
    res.status(200).json({ status: 200, mensage: 'servidor ativo!'});
});

app.use('/api', pacienteRoutes);

const PORT = 300000;
app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`);
});


module.exports = router;
