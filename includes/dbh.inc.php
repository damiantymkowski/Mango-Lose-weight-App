<?php

$servername = "remotemysql.com";
$dBUsername = "Yny4lyYMoh";
$dBPassword = "V45O7eZO12";
$dBName = "Yny4lyYMoh";

$conn = mysqli_connect($servername, $dBUsername, $dBPassword, $dBName);

if(!$conn){
    die("Connection failed: ".mysqli_connect_error());
}