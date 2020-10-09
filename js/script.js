let obraId = []
let dataSeleccionada = []
let porcentajes = []
let misDiv
let categoria = document.title.toLowerCase()

for (let i = 0; i < data.length; i++) {
  if (data[i].category == categoria) {
    obraId.push(data[i].object_id);
    dataSeleccionada.push(data[i]);
    porcentajes.push(data[i])
  }
}

let estado = {
  'data': dataSeleccionada,
  'pagina': 1,
  'filas': 16,
  'window': 5,
}

function pagination(miData, pagina, filas) {
  let trimStart = (pagina - 1) * filas
  let trimEnd = trimStart + filas

  let trimData = miData.slice(trimStart, trimEnd)
  let paginas = Math.ceil(miData.length / filas)

  return {
    'data': trimData,
    'paginas': paginas
  }
}

function crearDivs() {
  let miData = pagination(dataSeleccionada, estado.pagina, estado.filas)

  for (let i = 0; i < miData.data.length; i++) {
    misDiv = document.createElement('div')
    misDiv.setAttribute('class', 'child2')
    misDiv.setAttribute('onclick', `hola(${miData.data[i].object_id})`)
    misDiv.innerHTML += miData.data[i].title + ' '
    document.querySelector('.parent2').appendChild(misDiv)
  }

  botonesPaginas(miData.paginas)
}

crearDivs()

function hola(i) {
  document.querySelector('.parent2').style.marginTop = '10%';
  window.scrollTo(0, 0);
  axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${i}`)
    .then(function(response) {
      let title = response.data.title
      let credit = response.data.creditLine
      let miImagen = document.querySelector(".miImagen")
      let miInfo = document.querySelector('.miInfo')

      miInfo.style.opacity = 1;
      miImagen.src = response.data.primaryImageSmall
      document.getElementById("tituloObra").innerHTML = title;
      document.getElementById("desc").innerHTML = credit;
    })
}

function botonesPaginas(paginas){
  let contenedor = document.querySelector('.paginas')
  contenedor.innerHTML = ''

  let maxLeft = (estado.pagina - Math.floor(estado.window/2))
  let maxRight = (estado.pagina + Math.floor(estado.window/2))

  if(maxLeft < 1){
    maxLeft = 1
    maxRight = estado.window
  }

  if(maxRight > paginas){
    maxLeft = paginas - (estado.window - 1)
    maxRight = paginas

    if(maxLeft < 1){
      maxLeft = 1
    }
  }

  for(let pagina = maxLeft;pagina <= maxRight;pagina++){
    contenedor.innerHTML += `<button type="button" value="${pagina}" class="miPagina">${pagina}</button>`
  }

  if(estado.pagina != 1){
    contenedor.innerHTML = `<button type="button" value="${1}" class="miPagina">&#171; First</button>` + contenedor.innerHTML
  }

  if(estado.pagina != paginas){
    contenedor.innerHTML += `<button type="button" value="${paginas}" class="miPagina">&#187; Last</button>`
  }

  let botones = document.querySelectorAll('.miPagina')

  for(let i = 0;i < botones.length;i++){
    botones[i].addEventListener('click',function(e){
      document.querySelector('.parent2').innerHTML = ''
      estado.pagina = Number(e.target.value)
      crearDivs()
    })
  }
}
