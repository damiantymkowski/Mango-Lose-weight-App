<?php
if(isset($_POST['save-bmi'])){
    session_start();
    require 'dbh.inc.php';
    $userid = mysqli_query ($conn, "SELECT idUsers FROM users WHERE idUsers ='".$_SESSION['emailUsers']."'");
    $row=mysqli_fetch_array($userid);

    $height = $_POST['Height'];
    $weight = $_POST['Weight'];
    $dt = date('Y-m-d H:i:s');
    $bmiresult = $weight / ($height * $height)*10000;
    $sql = "INSERT INTO usersbmi (bmiresult, iduser, date) VALUES (?,?,?)";

    $stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($stmt,$sql);
    mysqli_stmt_bind_param($stmt, "sss", $bmiresult, $row['idUsers'], $dt);
    mysqli_stmt_execute($stmt);

    exit();
    mysqli_stmt_close($stmt);
    mysqli_close($conn);
}else{
    header("Location: ../site.php");
    exit();
}
    