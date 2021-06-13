function change(){

    let imagens = [
        'url("img/bg-1.jpg")',
        'url("img/bg-2.jpg")',
        'url("img/bg-3.jpg")',
    ]

    let body =  document.querySelector('body')
    let bg = imagens[Math.floor(Math.random() *
    imagens.length)];
    body.style.backgroundImage = bg;
}

setInterval(change, 2500)