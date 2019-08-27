<?php

    session_start();
    require 'dbh.inc.php';

    $deleteBMI = mysqli_query($conn, "DELETE FROM usersbmi WHERE iduser ='".$_SESSION['emailUsers']."'");

    if($deleteBMI!==FALSE)
    {
        header("Location: ../index.php#calculatorBMI?delete=success");
            exit();
    }else{
        header("Location: ../index.php#calculatorBMI?error=noresults");
        exit();
    }