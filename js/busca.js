// RESULTADOS DA BUSCA
const parametros = new URLSearchParams(window.location.search)
const q = parametros.get('q')

const resultado = document.querySelector('#resultado')

if(q && resultado) {
    const tituloBusca = document.querySelector('#titulo_busca')
    tituloBusca.innerHTML = `Resultados para: "${q}"`
    tituloBusca.classList.add('resultado_pesquisa')

    // pequeno delay para o fade in funcionar
    setTimeout(() => {
        tituloBusca.classList.add('visivel')
    }, 50)

    // depois de 5 segundos, fade out
    setTimeout(() => {
        tituloBusca.classList.remove('visivel')
        tituloBusca.classList.add('escondido')
    }, 5000)

    const resultados = Object.keys(videos).filter(chave => {
        return videos[chave].titulo.toLowerCase().includes(q.toLowerCase())
    })

    if(resultados.length === 0) {
        resultado.innerHTML = '<p class="sem_resultado">Nenhum vídeo encontrado.</p>'
        const semResultado = document.querySelector('.sem_resultado')
        
        setTimeout(() => {
            semResultado.classList.add('visivel')
        }, 50)

        setTimeout(() => {
            semResultado.classList.remove('visivel')
            semResultado.classList.add('escondido')
        }, 5000)
    }

    else {
        resultados.forEach(chave => {
            const v = videos[chave]
            resultado.innerHTML += `
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
}