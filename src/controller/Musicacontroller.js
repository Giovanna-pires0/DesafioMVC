const MusicaModel = require('../models/MusicaModel');

const MusicaController = {
    // GET - Listar todas as músicas
    listarTodos: (req, res) => {
        try {
            const musicas = MusicaModel.listarTodos();
            res.status(200).json({
                sucesso: true,
                dados: musicas,
                total: musicas.length,
                mensagem: '🎵 Músicas de Yellowstone listadas com sucesso'
            });
        } catch (error) {
            res.status(500).json({
                sucesso: false,
                dados: null,
                mensagem: 'Erro ao listar músicas: ' + error.message
            });
        }
    },

    // GET - Listar música por ID
    buscarPorId: (req, res) => {
        try {
            const { id } = req.params;
            const musica = MusicaModel.buscarPorId(id);

            if (!musica) {
                return res.status(404).json({
                    sucesso: false,
                    dados: null,
                    mensagem: 'Música não encontrada'
                });
            }

            res.status(200).json({
                sucesso: true,
                dados: musica,
                mensagem: 'Música encontrada com sucesso'
            });
        } catch (error) {
            res.status(500).json({
                sucesso: false,
                dados: null,
                mensagem: 'Erro ao buscar música: ' + error.message
            });
        }
    },

    // GET - Listar músicas por nome
    buscarPorNome: (req, res) => {
        try {
            const { nome } = req.query;

            if (!nome) {
                return res.status(400).json({
                    sucesso: false,
                    dados: null,
                    mensagem: 'Parâmetro "nome" é obrigatório'
                });
            }

            const musicas = MusicaModel.buscarPorNome(nome);

            res.status(200).json({
                sucesso: true,
                dados: musicas,
                total: musicas.length,
                mensagem: musicas.length > 0 ? 'Músicas encontradas' : 'Nenhuma música encontrada'
            });
        } catch (error) {
            res.status(500).json({
                sucesso: false,
                dados: null,
                mensagem: 'Erro ao buscar músicas: ' + error.message
            });
        }
    },

    // POST - Incluir nova música
    incluir: (req, res) => {
        try {
            const { nome, artista, link } = req.body;

            if (!nome || !artista || !link) {
                return res.status(400).json({
                    sucesso: false,
                    dados: null,
                    mensagem: 'Campos obrigatórios: nome, artista, link'
                });
            }

            const novaMusica = MusicaModel.incluir({ nome, artista, link });

            res.status(201).json({
                sucesso: true,
                dados: novaMusica,
                mensagem: 'Música incluída com sucesso'
            });
        } catch (error) {
            res.status(500).json({
                sucesso: false,
                dados: null,
                mensagem: 'Erro ao incluir música: ' + error.message
            });
        }
    },

    // PUT - Alterar música por ID
    alterar: (req, res) => {
        try {
            const { id } = req.params;
            const { nome, artista, link } = req.body;

            if (!nome || !artista || !link) {
                return res.status(400).json({
                    sucesso: false,
                    dados: null,
                    mensagem: 'Todos os campos são obrigatórios: nome, artista, link'
                });
            }

            const musicaAlterada = MusicaModel.alterar(id, { nome, artista, link });

            if (!musicaAlterada) {
                return res.status(404).json({
                    sucesso: false,
                    dados: null,
                    mensagem: 'Música não encontrada'
                });
            }

            res.status(200).json({
                sucesso: true,
                dados: musicaAlterada,
                mensagem: 'Música alterada com sucesso'
            });
        } catch (error) {
            res.status(500).json({
                sucesso: false,
                dados: null,
                mensagem: 'Erro ao alterar música: ' + error.message
            });
        }
    },

    // DELETE - Remover música por ID
    remover: (req, res) => {
        try {
            const { id } = req.params;
            const removido = MusicaModel.remover(id);

            if (!removido) {
                return res.status(404).json({
                    sucesso: false,
                    dados: null,
                    mensagem: 'Música não encontrada'
                });
            }

            res.status(200).json({
                sucesso: true,
                dados: null,
                mensagem: 'Música removida com sucesso'
            });
        } catch (error) {
            res.status(500).json({
                sucesso: false,
                dados: null,
                mensagem: 'Erro ao remover música: ' + error.message
            });
        }
    }
};
module.exports = MusicaController;