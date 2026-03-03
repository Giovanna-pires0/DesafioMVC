// Array com apenas 3 músicas de Yellowstone
let musicas = [
    {
        id: 1,
        nome: "Tennessee Whiskey",
        artista: "Chris Stapleton",
        link: "https://open.spotify.com/intl-pt/track/3fWjU2RBW3Dbrd64NzjF5d?si=4ffcbd6d59cf4e91"
    },
    {
        id: 2,
        nome: "On the River",
        artista: "Whiskey Myers",
        link: "https://open.spotify.com/intl-pt/track/2VRiZsy8NhcKjAKgQCD6gC?si=46da03b4cc1c4482"
    },
    {
        id: 3,
        nome: "Sunrise",
        artista: "Ryan Bingham",
        link: "https://open.spotify.com/intl-pt/track/1A8wTUWHmIGHGKSzjCQACh?si=1eef205a0acf4b12"
    }
];

let proximoId = 4;

const MusicaModel = {
    // Listar todas as músicas
    listarTodos: () => {
        return musicas;
    },

    // Buscar música por ID
    buscarPorId: (id) => {
        return musicas.find(musica => musica.id === parseInt(id));
    },

    // Buscar músicas por nome
    buscarPorNome: (nome) => {
        return musicas.filter(musica => 
            musica.nome.toLowerCase().includes(nome.toLowerCase())
        );
    },

    // Incluir nova música
    incluir: (dadosMusica) => {
        const novaMusica = {
            id: proximoId++,
            nome: dadosMusica.nome,
            artista: dadosMusica.artista,
            link: dadosMusica.link
        };
        musicas.push(novaMusica);
        return novaMusica;
    },

    // Alterar música por ID
    alterar: (id, dadosAtualizados) => {
        const index = musicas.findIndex(musica => musica.id === parseInt(id));
        
        if (index === -1) {
            return null;
        }

        musicas[index] = {
            id: parseInt(id),
            nome: dadosAtualizados.nome,
            artista: dadosAtualizados.artista,
            link: dadosAtualizados.link
        };

        return musicas[index];
    },

    // Remover música por ID
    remover: (id) => {
        const index = musicas.findIndex(musica => musica.id === parseInt(id));
        
        if (index === -1) {
            return false;
        }

        musicas.splice(index, 1);
        return true;
    }
};

module.exports = MusicaModel;