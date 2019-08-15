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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
       
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
        <div class="foodIcons">
    <div class="foodIcons--ketchup"></div><div class="foodIcons__text"><p class="foodIcons__text--bold">Dziennik żywieniowy</p><p>Zapisz swój jadłospis</p></div>
    <div class="foodIcons--hamburger"></div><div class="foodIcons__text"><p class="foodIcons__text--bold">Kalkulator BMI</p><p>Oblicz swój wskaźnik BMI</p></div>
    <div class="foodIcons--sandwich"></div><div class="foodIcons__text"><p class="foodIcons__text--bold">Statystyki</p><p>Zobacz swoje postępy</p></div>
    <div class="foodIcons--cola"></div><div class="foodIcons__text"><p class="foodIcons__text--bold">Czego nie jeść?</p><p>Rzuć te przyzwyczajenia </p></div>
        </div>
    </section>

    <!-- <form action="includes/logout.inc.php" method="post">
    <button class="loginBox__button" style="width: 100%" name="logout-submit">wyloguj</button></br>
    </form>-->

<?php 
if(!isset($_SESSION['emailUsers'])){
    header("Location: ../mango/index.php");
    die();
}
?>
    


    <script src="js/loginbox.js"></script>
    </body>
</html>