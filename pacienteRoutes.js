const express = require('express');
const pacienteController =  require('../controller/pacienteController');

const router = express.Router();

router.post('/pacientes', pacienteController.criarPacientes);
router.get('/pacientes', pacienteController.listarPacientes);

module.exports = router;
