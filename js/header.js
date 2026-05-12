fetch('/header.html')
    .then(resposta => resposta.text())
    .then(html => {
        document.body.insertAdjacentHTML('afterbegin', html)
        
        // agora o header existe, então o input também!
        const input = document.querySelector('.txt_pesquisa')
        input.addEventListener('keydown', function(evento) {
            if(evento.key === 'Enter') {
                const texto = input.value.trim()
                if(texto) {
                    window.location.href = `/paginas/busca.html?q=${texto}`
                }
            }
        })
    })