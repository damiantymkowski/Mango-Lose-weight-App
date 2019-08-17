<?php
if(isset($_POST['save-bmi'])){
    session_start();
    require 'dbh.inc.php';
    $userid = mysqli_query ($conn, "SELECT idUsers FROM users WHERE idUsers ='".$_SESSION['emailUsers']."'");
    $row=mysqli_fetch_array($userid);
    $bmiresult = 3;
    $dt = date('Y-m-d H:i:s');

    $sql = "INSERT INTO usersbmi (bmiresult, iduser, date) VALUES (?,?,?)";
    $stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($stmt,$sql);
    mysqli_stmt_bind_param($stmt, "sss", $bmiresult, $row['idUsers'], $dt);
    mysqli_stmt_execute($stmt);
    header("Location: ../index.php?success");
    exit();
    mysqli_stmt_close($stmt);
    mysqli_close($conn);
}else{
    header("Location: ../index.php");
    exit();
}
    