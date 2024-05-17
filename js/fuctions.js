
//4 formas de impresion
//alert("hola desde un archivo externo");
//console.log("HOLA DESDE LA CONSOLA");
//document.write("hola desde la interfaz");
//Swal.fire({
  // title: "The Internet?",
    //text: "That thing is still around?",
    //icon: "question"
 // });
 //variables y tipos de datos
 const pi = 3.14; //decimal
 const pul = 2.54;
 var name = "Kevin Duvan";//string
 let edad = 18;//entero
 var ver = true;//boolean

 //operadores basicos
 var suma = 5 + 2;
 console.log(suma);
 var var_uno = 10;
 var var_dos = 5;
 console.log(var_uno - var_dos);
 console.log(var_uno * var_dos);
 console.log(var_uno / var_dos);
  console.log("mi edad es " + edad);
  function load_page(){
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        //imageHeight: 1500,
        //imageAlt: "A tall image"
        showConfirmButton: false,
        timer : 2000
      });

      document.getElementById("text").innerText = "el array a calcular es :" + array_num;
      document.getElementById("impresion").value = array_num;
      document.getElementById("name_search").value = nombre_form;

      //let hour_system = "fecha del sistema";
      let hour_system = new Date();

      var mes = hour_system.getMonth();
      var array_meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
      var dia = hour_system.getDay();
      var dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

      console.log("Hoy es " + dias[dia - 1] );
      console.log("Estamos en "+ array_meses[mes]);

      console.log(hour_system.getDate());
      console.log(hour_system.getDay());
      console.log(hour_system.getFullYear());
      console.log(hour_system.getHours());
      console.log(hour_system.getMilliseconds());
      console.log(hour_system.getMinutes());
      console.log(hour_system.getMonth());
      console.log(hour_system.getSeconds());
      console.log(hour_system.getTime());

      console.log("fecha "+hour_system.getDate()+"/"+mes+"/"+hour_system.getFullYear());
      

      document.getElementById("hour_system").value = hour_system;
  }
  //operadores de comparacion
  //= asignacion
  //== comparacion
  //=== estrictamente comparado
  // > , >= , < , <=
function send_form(){
    let name   = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let pass_one = document.getElementById("pass_one").value;
    let pass_two = document.getElementById("pass_two").value;
    if(name.length == 0 || last_name == 0 || pass_one.length == 0 || pass_two.length == 0){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
          });
          //if(name.length ==0){
          //  document.getElementById("name").style.border = "2px solid red"
          //}else{
          //  document.getElementById("name").style.border = "2px solid green"
          //}
          //if(Last_name.length ==0){
          //  document.getElementById("name").style.border = "2px solid red"
          //}else{
          //  document.getElementById("name").style.border = "2px solid green"
          //}
          
    }
    else if(pass_one != pass_two){
      Swal.fire({
        title:"sus contraseñas no son iguales",
        text:"porfavor valide sus credenciales",
        icon:"error"
      });
    }
    else{
      document.getElementById("print").innerText = name+" "+last_name;
      console.log(isNan(name));
    }
}
//arrays
var array_semana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
var array_gral = [1,2,2.5,"abc","soy kevin"];
var array_num = [1,2,3,4,5,6,7,8,9];

var array_multi= [
   {name:"kevin",age:32,color:"verde"},
   {name:"anyi",age:33,color:"rosa"},
   {name:"celeste",age:3,color:"rosa"},
   {name:"antonella",age:2,color:"blanco"},
];

console.log(array_semana);
console.log(array_gral);
console.log(array_num);
console.log(array_multi);

function action(){
  //alert(array_num);
  Swal.fire(""+array_num);
  console.log(array_num);
  console.log(array_num.length);
  var result = 0;
  for(let i=0;i<array_num.length;i++){
    result = result+array_num[i];
  }
  document.getElementById("result").innerHTML = "<strong>el resultado es : "+ result+"<strong>";
  document.getElementById("result").style.color = "blue";
  var total = 0;
for(var j = 0;j<array_multi.length;j++){
  console.log(array_multi[j].age);
  total = array_multi[j].age + total;
}
//alert(total);
  var w = 0;
  while(w<array_multi.length){
  total_dos = array_multi[w].age + total_dos;
  w++;
  }
  alert(total_2);
}
var array_numerico = [1,2,3,4,5,6,7,8,9];
function eliminar(){
  let array_deleted = array_numerico.pop();
  console.log(array_numerico);
  document.getElementById("impresion").value = array_numerico;
}
function agregar(){
  let num = document.getElementById("num").value;

  if(isNan(num) == true){
    Swal.fire("solo se aceptan numeros");
  }else{
    let array_add = array_numerico.push(num);
    console.log(array_numerico);
    document.getElementById("impresion").value = array_numerico;
  }
}
function reves(){
  document.getElementById("impresion").value = array_numerico.reverse();
}
function borrarprim(){
  let array_firstdelete = array_numerico.shift();
  document.getElementById("impresion").value = array_numerico;
}

function agregarprim(){
  let num = document.getElementById("num").value;
  let array_firstadd = array_numerico.unshift(num);
  document.getElementById("impresion").value = array_numerico;
}

var nombre_form = "KEVIN DUVAN BERMUDEZ";
function search(){
  let nombre_buscar = document.getElementById("name_search").value;
  alert(nombre_buscar);
//  Swal.fire({
//    title: nombre_buscar.toLowerCase(),
//    text: "hay un espacio vacio",
//    icon: "error"
//  });
//Swal.fire(nombre_buscar.charAt(0));
let word = nombre_buscar.split(" ");
Swal.fire(word+"");
let word_com =word.join(" ");
console.log(word_com);
}


