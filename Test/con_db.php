<?php
    // Establece la zona horaria de Lima
    date_default_timezone_set('America/Lima');

    // Datos para la conexión
    $servidor="localhost";
    $usuario="root";
    $clave="";
    $basedatos="bd_42170";

    // Cadena de conexión / Ejecutar la conexión 
    $conexion = mysqli_connect($servidor,$usuario,$clave,$basedatos);

    // Evaluar si la conexión tuvo exito
    // if($conexion==true) {
    //     echo 'Conexión realizada con éxito';
    // } else {
    //      echo 'Ocurrió un error de conexión a la base de dato';
    // }
?>