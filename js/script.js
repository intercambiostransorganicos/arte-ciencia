let obraId = []
let porcentajes = []
let misDiv
let categoria = document.title.toLowerCase()

for (let i = 0; i < data2.length; i++) {
  if (data2[i].category == categoria) {
    obraId.push(data2[i].object_id);
    porcentajes.push(data2[i])
    misDiv = document.createElement('div')
    misDiv.setAttribute('class', 'child2')
    misDiv.setAttribute('onclick', `hola(${data2[i].object_id})`)
    misDiv.innerHTML += data2[i].object_id + ' '
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
