let obraId = []
let porcentajes = []
let misDiv
let categoria = document.title.toLowerCase()

for (let i = 0; i < data.length; i++) {
  if (data[i].category == categoria) {
    obraId.push(data[i].object_id);
    porcentajes.push(data[i])
    misDiv = document.createElement('div')
    misDiv.setAttribute('class', 'child2')
    misDiv.setAttribute('loading', 'lazy')
    misDiv.setAttribute('onclick', `hola(${data[i].object_id})`)
    misDiv.innerHTML += data[i].title + ' '
    document.querySelector('.parent2').appendChild(misDiv)
  }
}

function hola(i) {
  document.querySelector('.parent2').style.marginTop = '10%';
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
