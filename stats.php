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
    <table>
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