function object1(){
  var obj1 = {"nome" : "paolo", "cognome" : "rossi", "età" : 30};
  for (var log in obj1){
    console.log(obj1[log]);
  }
}

function object2(){
  var obj2 = [
    {"nome" : "paolo", "cognome" : "rossi", "età" : 30},
    {"nome" : "luigi", "cognome" : "bianchi", "età" : 30},
    { "nome" : "luca", "cognome" : "verdi", "età" : 30},
    {"nome" : "marco", "cognome" : "cantarini", "età" : 30}
  ]
  obj2 = insertStudent(obj2);
  for(var i = 0; i < obj2.length; i ++){
    console.log(obj2[i].nome,obj2[i].cognome,obj2[i].età);
  }

}

function insertStudent(arr){
  var dati = {};
  dati.nome  = prompt("dammi un nome");
  dati.cognome = prompt("dammi un cognome");
  dati.età = prompt("dammi un età");
  arr.push(dati);
  return arr;

}
object2();
