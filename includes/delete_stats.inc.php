<?php

    session_start();
    require 'dbh.inc.php';

    $deleteBMI = mysqli_query($conn, "DELETE FROM usersbmi WHERE iduser ='".$_SESSION['emailUsers']."'");

    if($deleteBMI!==FALSE)
    {
        echo(403);
    }else{
        echo(401);
    }