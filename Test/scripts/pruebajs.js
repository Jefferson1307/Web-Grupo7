// comentario que imprime
        // alert("Hola Mundo")

        // imprime una caja de texto
        // var nombre=prompt("Ingrese su Nombre:");
        // alert("Hola "+nombre+", eres tremendo putito");
var nombre="Jefri Rochambrun";
var sueldo=3500;
var estadocivil="s";//c, s, v, d
var masculino=true;
let femenino=false;

var contenido=document.getElementById("datos");
contenido.innerHTML="<h1>Hola, mi nombre es "+nombre+", tengo un sueldo de "+sueldo+" de estado civil "+estadocivil+" y de género "+masculino+"</h1>";
contenido.innerHTML+="Estado civil es: "+estadocivil

//uso de template string
contenido.innerHTML+=`
    <h1>Hola a todos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <p>Mi estado civil es ${estadocivil}<br>
    Mi sueldo es: ${sueldo}
    </p>
`;
//Uso de condicionales
if(masculino==true){
    contenido.innerHTML+="Sexo: Masculino<br>"
}
else{
    contenido.innerHTML+="Sexo: Femenino<br>"
}

if(estadocivil=="s"){
    contenido.innerHTML+="Estado Civil: Soltero"
}
else if(estadocivil=="c"){
    contenido.innerHTML+="Estado Civil: Casado"
}
else if(estadocivil=="v"){
    contenido.innerHTML+="Estado Civil: Viudo"
}
else{
    contenido.innerHTML+="Estado Civil: Divorciado"
}
var alumnos = ["Luis", "Rosa", "Ana", "Jose"];

var nroitem=alumnos.length;

alumnos[alumnos.length]="Rosa maría";
alumnos[alumnos.length]="Alberto";
alumnos[alumnos.length]="Angie";

alumnos.push("Jorge","Susana","Estrella");

var alumnos2=["Julio","Veronica"];
alumnos=alumnos.concat(alumnos2);

console.log(alumnos);