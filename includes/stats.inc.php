<?php
 require 'dbh.inc.php';

 $sql = "SELECT bmiresult, date FROM usersbmi WHERE iduser ='".$_SESSION['emailUsers']."'";

 $result = mysqli_query($conn, $sql);

 if(mysqli_num_rows($result)>0){
    echo "<table><tr><th>BMI</th><th>Data</th></tr>";
    while($row = mysqli_fetch_assoc($result)){
        echo "<tr><td>".$row["bmiresult"]."</td><td>".$row["date"]."</td></tr>";
        json_encode($row);
    }
    echo "</table>";
 }else{
     echo "Nothing";
 }
