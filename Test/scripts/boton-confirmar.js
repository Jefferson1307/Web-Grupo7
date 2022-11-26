var formulario = document.getElementById("formulario_confirmar");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var nota = document.getElementById("nota");//con esto leo el id del parrafo nota
var detalle = document.getElementById("uwu");
// var css_of_before = window.getComputedStyle(nota, ':before');


// c1.addEventListener('click', function() {
//     if(c1.checked) {
//         nota.innerText = 'El elemento está marcado';
//     } else {
//         nota.innerText = 'Ahora está desmarcado';
//     }
// });




formulario.addEventListener("submit", e=> {
    e.preventDefault();
    if(c1.checked || c2.checked || c3.checked || c4.checked || c5.checked || c6.checked) {
        nota.innerText = 'Usted es un alma libre con ganas de volar, vuele con nosotros';
        nota.style.cssText = "background-color:#42e905;list-style:none;padding: 10px;max-width: 50%;border-radius: 35px;box-shadow: 10px 10px 4px 1px rgba(98, 103, 180, 0.20);padding: 10px;font-size: 1.4em;";
        detalle.style.cssText = 'content:"";width: 0;height: 0;position: absolute;margin: -30px 0 0 40px;border-bottom: 20px solid #42e905;border-right: 18px solid transparent;border-left: 18px solid transparent;';    
    } else {
        nota.innerText = 'No deje pasar esta oportunidad';
        nota.style.cssText = "background-color:#d01a49;list-style:none;padding: 10px;max-width: 50%;border-radius: 35px;box-shadow: 10px 10px 4px 1px rgba(98, 103, 180, 0.20);padding: 10px;font-size: 1.4em;";
        detalle.style.cssText = 'content:"";width: 0;height: 0;position: absolute;margin: -30px 0 0 40px;border-bottom: 20px solid #d01a49;border-right: 18px solid transparent;border-left: 18px solid transparent;';    
    }
});
