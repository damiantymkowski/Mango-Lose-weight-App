<?php

    session_start();
    require 'dbh.inc.php';
    $userid = mysqli_query ($conn, "SELECT idUsers FROM users WHERE idUsers ='".$_SESSION['emailUsers']."'");
    $row=mysqli_fetch_array($userid);

    $sql = "DELETE FROM usersbmi WHERE idUsers ='".$_SESSION['emailUsers']."'";

    $stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($stmt,$sql);
    mysqli_stmt_execute($stmt);

    exit();
    mysqli_stmt_close($stmt);
    mysqli_close($conn);
