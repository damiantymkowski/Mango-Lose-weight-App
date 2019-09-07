<?php 
session_start();
?>
<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Mango - Twój dziennik żywieniowy</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/style.css">
        <link href="//fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"> 
        <script src="https://kit.fontawesome.com/a706ae0628.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js"></script>
    </head>
    <body>

    <nav class="navigation"> 
            <div class="logo">MANGO</div>
    <ul class="menu"> 
        <li>kontakt</li>
        <li>o nas</li>
    </ul>
    </nav>

    <section class="userInterfaceBox">
    <table cellspacing="0" class="userInterfaceBox__table">
                <thead>
                    <tr> 
                         <th>DATA</th>
                         <th>BMI</th>
                    </tr>
                </thead>
                <tbody id="statList">
                    <template id="statTemplate">
                     <tr> 
                           <td class="measurementDate"></td>
                           <td class="userBMI"></td>    
                     </tr>
                    </template>
                </tbody>
                </table>
                <button class="bmiDeleteAllStats">Usuń wszystkie wpisy</button>
                <canvas id="bmiChart" width="100" height="40"></canvas>
    </section>  

<?php 
if(!isset($_SESSION['emailUsers'])){
    header("Location: ../mango/index.php");
    die();
}
?>
        <script src="js/stats.js"></script>
    </body>
</html>