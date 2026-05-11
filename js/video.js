//BANCO DE DADOS

const videos = {
    feijoada: {
        titulo: "Feijoada deliciosa - Paola Carosela #67",
        autor: "José",
        data: "04/04/26",
        tumb: "/imagens/card/tumb_feijoada.jpg",
        canal: "/imagens/card/canal_feijoada.jpg",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sed, voluptatibus error praesentium quo molestiae alias voluptate culpa harum dolores impedit repellat temporibus, doloremque a ea facere optio enim odit.",
        video: "/arquivos_videos/feijoada.mp4"
    },

    arcane: {
        titulo: "Avaliando o episodio 7 de arcane, segunda temporada",
        autor: "Vih",
        data: "06/07/26",
        tumb: "/imagens/card/tumb_arcane.jpg",
        canal: "/imagens/card/canal_arcane.jpg",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sed, voluptatibus error praesentium quo molestiae alias voluptate culpa harum dolores impedit repellat temporibus, doloremque a ea facere optio enim odit.",
        video: "/arquivos_videos/arcane.mp4"
    },    

    hollow: {
        titulo: "Como derrotar o Cavaleiro vazio no Hollow Knight",
        autor: "Cavaleiro",
        data: "29/10/25",
        tumb: "/imagens/card/tumb_hollow.jpg",
        canal: "/imagens/card/canal_hollow.png",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sed, voluptatibus error praesentium quo molestiae alias voluptate culpa harum dolores impedit repellat temporibus, doloremque a ea facere optio enim odit.",
        video: "/arquivos_videos/hollow.mp4"
    },    

    marvel: {
        titulo: "Novos Vingadores - Canal Gaveta",
        autor: "DC comics",
        data: "09/11/26",
        tumb: "/imagens/card/tumb_marvel.jpg",
        canal: "/imagens/card/canal_marvel.png",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sed, voluptatibus error praesentium quo molestiae alias voluptate culpa harum dolores impedit repellat temporibus, doloremque a ea facere optio enim odit.",
        video: "/arquivos_videos/marvel.mp4"
    },    

    ordem_paranormal: {
        titulo: "AVISO: nova temporada de ordem paranormal",
        autor: "Cellbit",
        data: "16/06/26",
        tumb: "/imagens/card/tumb_ordem_paranormal.jpg",
        canal: "/imagens/card/canal_ordem_paranormal.jpg",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sed, voluptatibus error praesentium quo molestiae alias voluptate culpa harum dolores impedit repellat temporibus, doloremque a ea facere optio enim odit.",
        video: "/arquivos_videos/ordem_paranormal.mp4"
    },    

    silksong: {
        titulo: "Nova SpeedRun Silksong, recorde mundial 4 minutos",
        autor: "Hornet",
        data: "10/10/26",
        tumb: "/imagens/card/tumb_silksong.jpg",
        canal: "/imagens/card/canal_silksong.jpg",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sed, voluptatibus error praesentium quo molestiae alias voluptate culpa harum dolores impedit repellat temporibus, doloremque a ea facere optio enim odit.",
        video: "/arquivos_videos/silksong.mp4"
    },

    celia:{
        titulo: "Célia dia das mães",
        autor: "célia",
        data: "10/05/26",
        tumb: "/imagens/card/tumb_celia.jpeg",
        canal: "/imagens/card/canal_celia.jpeg",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sed, voluptatibus error praesentium quo molestiae alias voluptate culpa harum dolores impedit repellat temporibus, doloremque a ea facere optio enim odit.",
        video: "/arquivos_videos/celia.mp4"
    },
}

// 1. pegar o id da URL
const parametros = new URLSearchParams(window.location.search)
const id = parametros.get('id')

// 2. buscar os dados
const dadosDoVideo = videos[id]

// 3. só executa na página de vídeo
if(dadosDoVideo) {
    document.querySelector('#titulo_video').innerHTML = dadosDoVideo.titulo
    document.querySelector('#autor_video').innerHTML = dadosDoVideo.autor
    document.querySelector('#aba_video').innerHTML = dadosDoVideo.titulo
    document.querySelector('#data_video').innerHTML = dadosDoVideo.data
    document.querySelector('#canal_video').src = dadosDoVideo.canal
    document.querySelector('#descricao_video').innerHTML = dadosDoVideo.descricao

    // carregar video
    const player = document.querySelector('#player_video')
    player.poster = dadosDoVideo.tumb
    document.querySelector('#scr_video').src = dadosDoVideo.video
    player.load()

    // sidebar
    const chaves = Object.keys(videos)
    const chavesDisponiveis = chaves.filter(chave => chave !== id)
    chavesDisponiveis.sort(() => Math.random() - 0.5)
    const videosSidebar = chavesDisponiveis.slice(0, 5)

    const sidebar = document.querySelector('.side_bar')
    sidebar.innerHTML = ''
    videosSidebar.forEach(chave => {
        const v = videos[chave]
        sidebar.innerHTML += `
            <article class="item_video">
                <a href="/paginas/video.html?id=${chave}">
                    <img src="${v.tumb}" alt="${v.titulo}">
                </a>
                <span>${v.titulo}</span>
            </article>
        `
    })
}

// 4. só executa no index
const grid = document.querySelector('.grid')
if(grid) {
    Object.keys(videos).forEach(chave => {
        const v = videos[chave]
        grid.innerHTML += `
            <article class="card">
                <a href="/paginas/video.html?id=${chave}">
                    <img src="${v.tumb}" alt="${v.titulo}">
                </a>
                <h2>${v.titulo}</h2>
                <p>${v.descricao}</p>
                <div class="autor">
                    <img src="${v.canal}" alt="canal">
                    <div class="info">
                        <span>Postado por ${v.autor}</span>
                        <small>Data de postagem: ${v.data}</small>
                    </div>
                </div>
            </article>
        `
    })
}