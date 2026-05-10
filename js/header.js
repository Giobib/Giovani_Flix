fetch('/header.html')
    .then(resposta => resposta.text())
    .then(html => {
        document.body.insertAdjacentHTML('afterbegin', html)
    })