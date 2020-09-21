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
    misDiv.setAttribute('onclick', `hola(${data[i].object_id})`)
    misDiv.innerHTML += data[i].title + ' '
    document.querySelector('.parent2').appendChild(misDiv)
  }
}

function hola(i) {
  document.querySelector('.parent2').style.marginTop = '10%';
  window.scrollTo(0, 0);
  axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${i}`)
    .then(function(response) {
      console.log(response.data.title);
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

function mostrarMas(){
  let otros = document.querySelectorAll('.child2')

  for(let i = 0;i < otros.length;i++){
    otros[i].style.opacity = 1;
  }
  
  let mas = document.querySelector('.fa-plus')
  mas.parentNode.removeChild(mas);
}
