const express = require('express');
const musicaRoutes = require('../src/routes/musicaRoutes');

const app = express();

// Middleware para parse de JSON
app.use(express.json());

// Rotas
app.use('/musicas', musicaRoutes);

// Rota raiz
app.get('/', (req, res) => {
    res.json({
        mensagem: '🎵 API de Músicas - Yellowstone',
        endpoints: {
            listarTodas: 'GET /musicas',
            buscarPorId: 'GET /musicas/:id',
            buscarPorNome: 'GET /musicas/busca?nome=:nome',
            incluir: 'POST /musicas',
            alterar: 'PUT /musicas/:id',
            deletar: 'DELETE /musicas/:id'
        },
        musicas_disponiveis: [
            "Tennessee Whiskey - Chris Stapleton",
            "On the River - Whiskey Myers", 
            "Sunrise - Ryan Bingham"
        ]
    });
});

// Middleware para rotas não encontradas
app.use((req, res) => {
    res.status(404).json({
        sucesso: false,
        dados: null,
        mensagem: 'Rota não encontrada'
    });
});

module.exports = app;