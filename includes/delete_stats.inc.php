<?php

    session_start();
    require 'dbh.inc.php';

    $checkrows = mysqli_query($conn, "SELECT * FROM usersbmi WHERE iduser ='".$_SESSION['emailUsers']."'");
    
    if(mysqli_num_rows($checkrows)>0)
    {
        mysqli_query($conn, "DELETE FROM usersbmi WHERE iduser ='".$_SESSION['emailUsers']."'");
        echo json_encode(array("Success"=>"true"));
    }else{
        echo json_encode(array("Error"=>303));
    }