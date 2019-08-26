<?php

    session_start();
    require 'dbh.inc.php';

    mysqli_query($conn, "DELETE FROM usersbmi WHERE iduser ='".$_SESSION['emailUsers']."'");

