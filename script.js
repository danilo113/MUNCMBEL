console.log('Hello!');
function abrir_comite(id) {
  alert('oi ' + id);
  var list_of_ids = [1, 2, 3, 4];
  list_of_ids.splice(id-1, 1);
  for (x in list_of_ids) {
    alert(list_of_ids[x]);
  }
}
function criar_novo(comite){
  const label =  document.querySelector('#label')
  var div = document.createElement("div");
  div.className= comited
  label.appendChild(div)
}