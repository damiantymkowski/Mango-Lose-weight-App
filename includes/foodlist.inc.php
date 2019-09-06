<?php

session_start();
require 'dbh.inc.php';

$checkresult = "SELECT date, calories, product FROM fooddiary WHERE iduser ='".$_SESSION['emailUsers']."'";

$check = mysqli_query($conn, $checkresult);

if(mysqli_num_rows($check)>0){
       echo json_encode(mysqli_fetch_all($check));
}