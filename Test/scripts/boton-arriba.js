function irArriba(pxPantalla){
    window.addEventListener("scroll",() =>{
        var scroll=document.documentElement.scrollTop;
        var botonArriba=document.getElementById("scroll-arriba");
        if(scroll>pxPantalla){
            botonArriba.style.opacity=1;//en vez de 1 puede ser tambien 100%
        } else{
            botonArriba.style.opacity=0;
        }
    })
}

irArriba(400);