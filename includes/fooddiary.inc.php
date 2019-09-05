<?php

session_start();
require 'dbh.inc.php';

$userid = mysqli_query ($conn, "SELECT idUsers FROM users WHERE idUsers ='".$_SESSION['emailUsers']."'");
$row = mysqli_fetch_array($userid);

$calories = $_POST['calories'];
$product = $_POST['product'];

$dt = date('d-m-Y');

$sql = "INSERT INTO fooddiary (calories, product, date, iduser) VALUES (?,?,?,?)";

$stmt = mysqli_stmt_init($conn);
mysqli_stmt_prepare($stmt,$sql);
mysqli_stmt_bind_param($stmt, "ssss", $calories, $product, $dt, $row['idUsers']);
mysqli_stmt_execute($stmt);

exit();
mysqli_stmt_close($stmt);
mysqli_close($conn);
