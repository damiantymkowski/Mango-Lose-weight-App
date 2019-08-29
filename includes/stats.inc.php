<?php
session_start();
 require 'dbh.inc.php';

 $sql = "SELECT bmiresult, date FROM usersbmi WHERE iduser ='".$_SESSION['emailUsers']."'";

 $result = mysqli_query($conn, $sql);

 if(mysqli_num_rows($result)>0){
        echo json_encode(mysqli_fetch_all($result));
 }
