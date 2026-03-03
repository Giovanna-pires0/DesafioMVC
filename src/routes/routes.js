const express = require('express');
const router = express.Router();
const MusicaController = require('../controller/Musicacontroller');

// Rotas
router.get('/', MusicaController.listarTodos);            
router.get('/busca', MusicaController.buscarPorNome);       
router.get('/:id', MusicaController.buscarPorId);           
router.post('/', MusicaController.incluir);                 
router.put('/:id', MusicaController.alterar);              
router.delete('/:id', MusicaController.remover);            

module.exports = router;