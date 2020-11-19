var titulo = document.querySelector('#introducao')
let img = document.querySelector('#imgEspaco')
let p = document.querySelector('#descricao')
let autor = document.querySelector('strong')
let data = document.querySelector('em')

let page = new XMLHttpRequest();
page.open('get', 'https://api.nasa.gov/planetary/apod?api_key=RePNBEbZAXStHWbC5hSkENfzpZ0Wk6xUoTCr387K&date=2020-11-18', false)

page.addEventListener('load', function(){

    let dados = JSON.parse(this.responseText)
   
    titulo.innerHTML = 'Espaço cideral'
    img.src = dados.url;
    p.innerHTML = dados.explanation;
    autor.innerHTML = 'By '+ dados.copyright
    data.innerHTML = 'Date ' + dados.date

   
})
page.send()