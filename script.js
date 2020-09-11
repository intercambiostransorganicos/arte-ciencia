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
      title = response.data.title
      credit = response.data.creditLine

      let miImagen = document.querySelector(".miImagen")
      let porcentajesDiv = document.querySelector('.porcentajes')
      let miInfo = document.querySelector('.miInfo')

      miInfo.style.opacity = 1;
      porcentajesDiv.style.opacity = 1;
      miImagen.src = response.data.primaryImageSmall
      document.getElementById("tituloObra").innerHTML = title;
      document.getElementById("desc").innerHTML = credit;
      for (let i = 0; i < data2.length; i++) {
        if (data2[i].object_id == obra) {
          document.querySelector('.logic').innerHTML = ('Logic: ' + data2[i].logic)
          document.querySelector('.mathematics').innerHTML = ('Mathematics: ' + data2[i].mathematics)
          document.querySelector('.statistics').innerHTML = ('Statistics: ' + data2[i].statistics)
          document.querySelector('.physics').innerHTML = ('Physics: ' + data2[i].physics)
          document.querySelector('.chemistry').innerHTML = ('Chemistry: ' + data2[i].chemistry)
          document.querySelector('.geology').innerHTML = ('Geology: ' + data2[i].geology)
          document.querySelector('.astronomy').innerHTML = ('Astronomy: ' + data2[i].astronomy)
          document.querySelector('.biology').innerHTML = ('Biology: ' + data2[i].biology)
          document.querySelector('.sociology').innerHTML = ('Sociology: ' + data2[i].sociology)
          document.querySelector('.economics').innerHTML = ('Economics: ' + data2[i].economics)
          document.querySelector('.engineering').innerHTML = ('Engineering: ' + data2[i].engineering)
          document.querySelector('.medicine').innerHTML = ('Medicine: ' + data2[i].medicine)
        }
      }
    })
}
