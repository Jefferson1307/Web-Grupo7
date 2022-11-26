<?php
    // Si pasó la validación de javascript y ejecutó el botón 
    // ENVIAR (POST) entonces....
    if($_SERVER["REQUEST_METHOD"]=="POST") {

        // Nos conectamos con la base de datos
        include("con_db.php");

        // Leer los datos del formulario y pasarlos a variables
        $nombre = $_POST["txtnombres"];
        $apellido = $_POST["txtapellidos"];
        $correo = $_POST["txtcorreo"];
        $celular = $_POST["txtcelular"];
        $destino = $_POST["lstdestino"];
        $fecharegistro = date("d/m/Y H:i:s");

        // Crea la consulta SQL de INSERCIÓN
        $consulta="INSERT INTO clientes(nombre,apellido,correo,celular,destino,fecharegistro)
            VALUES ('$nombre','$apellido','$correo','$celular','$destino','$fecharegistro')";

        // Ejecutamos la consulta SQL
        $resultado = mysqli_query($conexion,$consulta);

        // Comparamos el resultado
        if($resultado==true) {
            ?>
            <h3 class="inscrito-ok">¡Registro exitoso! En breve nos comunicaremos con usted</h3>
            <?php
        } else {
            ?>
            <h3 class="error">Ha ocurrido un error al grabar el registro</h3>
            <?php
        }
    }
?>