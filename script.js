let obra;
let obraId = [];
let categoriaCiencia;
let porcentajes = [];
let title;
let credit;
let misBotones = document.querySelector('.child')


function hola(i) {
  categoriaCiencia = i;
  for (let i = 0; i < data2.length; i++) {
    if (data2[i].category == categoriaCiencia) {
      obraId.push(data2[i].object_id);
      porcentajes.push(data2[i])
    }
  }

  obra = obraId[Math.floor(Math.random() * obraId.length)];
  buscar()
}


function buscar() {

  axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${obra}`)
    .then(function(response) {
      console.log(response);
      title = response.data.title
      credit = response.data.creditLine

      let miImagen = document.querySelector(".miImagen")
      let misPorcentajes = document.querySelector('#porcentajes')
      let miInfo = document.querySelector('.miInfo')

      miInfo.style.opacity = 1;
      miImagen.style.background = "url(" + response.data.primaryImageSmall + ") no-repeat"
      document.getElementById("tituloObra").innerHTML = title;
      document.getElementById("desc").innerHTML = credit;
      for (let i = 0; i < data2.length; i++) {
        if (data2[i].object_id == obra) {
          misPorcentajes.innerHTML = "" 
          misPorcentajes.innerHTML += ('Logic: ' + data2[i].logic + '<br>')
          misPorcentajes.innerHTML += ('Mathematics: ' + data2[i].mathematics + '<br>')
          misPorcentajes.innerHTML += ('Statistics: ' + data2[i].statistics + '<br>')
          misPorcentajes.innerHTML += ('Physics: ' + data2[i].physics + '<br>')
          misPorcentajes.innerHTML += ('Chemistry: ' + data2[i].chemistry + '<br>')
          misPorcentajes.innerHTML += ('Geology: ' + data2[i].geology + '<br>')
          misPorcentajes.innerHTML += ('Astronomy: ' + data2[i].astronomy + '<br>')
          misPorcentajes.innerHTML += ('Biology: ' + data2[i].biology + '<br>')
          misPorcentajes.innerHTML += ('Sociology: ' + data2[i].sociology + '<br>')
          misPorcentajes.innerHTML += ('Economics: ' + data2[i].economics + '<br>')
          misPorcentajes.innerHTML += ('Engineering: ' + data2[i].engineering + '<br>')
          misPorcentajes.innerHTML += ('Medicine: ' + data2[i].medicine + '<br>')
        }
      }
    })
}
