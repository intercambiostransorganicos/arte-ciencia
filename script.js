let obra = data[Math.floor(Math.random() * data.length)];
let obraId = obra.object_id;
let categoriaCiencia, porcentajes;

for(let i = 0;i < data2.length;i++){
  if(obraId == data2[i].object_id){
    categoriaCiencia = data2[i].category;
  }
}

axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${obraId}`)
.then(function (response) {
  //handle success
  console.log(obra.description)
  document.getElementById("titulo").innerHTML = categoriaCiencia;
  let body = document.querySelector("body")
  body.style.background = "url(" + response.data.primaryImageSmall + ") no-repeat"
})
