
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
  }
  //operadores de comparacion
    //= asignacion
    //== comparacion
    //=== estrictamente comparado
    // > , >= , < , <=
function send_form(){
    let name = document.getElementById("name").value;
    let lastn_ame = document.getElementById("last_name").value;
    if(name.length == 0 && last_name ==0){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
          if(name.length ==0){
            document.getElementById("name").style.border = "2px solid red"
          }else{
            document.getElementById("name").style.border = "2px solid green"
          }
          if(Last_name.length ==0){
            document.getElementById("name").style.border = "2px solid red"
          }else{
            document.getElementById("name").style.border = "2px solid green"
          }
          
    }else{
document.getElementById("print").innerText = name+" "+last_name;
    }
}
