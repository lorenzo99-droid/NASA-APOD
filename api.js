var titulo = document.querySelector('#introducao')
let img = document.querySelector('#imgEspaco')
let p = document.querySelector('#descricao')
let autor = document.querySelector('strong')
let data = document.querySelector('em')

var valorData = document.querySelector('#inputData').value
var botaoDia = document.querySelector('#buscarFoto')
var dataFoto = new Date();
var escolherDia = dataFoto.getDay()

let page = new XMLHttpRequest();                                                                          //ano,mês e dia
page.open('get', `https://api.nasa.gov/planetary/apod?api_key=RePNBEbZAXStHWbC5hSkENfzpZ0Wk6xUoTCr387K&date=${valorData}`, false)

page.addEventListener('load', function(){

    var dados = JSON.parse(this.responseText)
   
    titulo.innerHTML = 'Espace travel'
    img.src = dados.url;
    p.innerHTML = dados.explanation;
    autor.innerHTML = 'By '+ dados.copyright
    data.innerHTML = 'Date ' + dados.date
})


page.send()

botaoDia.addEventListener('click', function()
{

            var dataImg = valorData.value
            img.src = dados.url;
            console.log('eu funciono')

})
