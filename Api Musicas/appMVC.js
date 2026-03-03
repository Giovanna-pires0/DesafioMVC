const express = require('express');
const app = express();
const PORT = 3000;
// Middleware para JSON
app.use(express.json());
// Importar as rotas
const MusicasRoutes = require('../src/routes/routes');
// Registrar rotas com prefixo /musicas
// Todas as rotas do arquivo MusicasRoutes.js
// ficarão disponíveis em /Musicas/...
app.use('/musicas', MusicasRoutes);

app.listen(PORT, () => {
console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
console.log(`📦 API MVC implementada com sucesso!`);
});
