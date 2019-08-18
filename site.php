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
    <section class="userInterfaceBox uiBox">
        <div class="foodIcons">
    <div class="foodIcons--ketchup"></div><div class="foodIcons__text"><p class="foodIcons__text--bold">Dziennik żywieniowy</p><p>Zapisz swój jadłospis</p></div>
    <div class="foodIcons--hamburger"></div><div class="foodIcons__text calculatorBMIbtn"><p class="foodIcons__text--bold"><a href="http://localhost/mango/site.php#calculator">Kalkulator BMI</p><p>Oblicz swój wskaźnik BMI</p></a></div>
    <div class="foodIcons--sandwich"></div><div class="foodIcons__text"><p class="foodIcons__text--bold">Statystyki</p><p>Zobacz swoje postępy</p></div>
    <div class="foodIcons--cola"></div><div class="foodIcons__text"><p class="foodIcons__text--bold">Czego nie jeść?</p><p>Rzuć te przyzwyczajenia </p></div>
        </div>
    </section> 

    <section class="calculatorBMI" id="something">
    <p class="calculatorBMI__text">Oznaczanie wskaźnika masy ciała ma znaczenie w ocenie zagrożenia chorobami związanymi z nadwagą i otyłością, np. cukrzycą, chorobą niedokrwienną serca, miażdżycą. 
    <p class="calculatorBMI__text">Podwyższona wartość BMI związana jest ze zwiększonym ryzykiem wystąpienia takich chorób.</p></p>
    <form action="includes/bmi.inc.php" method="post" class="calculatorBMI__form">
    <input class="calculatorBMI__input" id="bmiHeight" placeholder="Wzrost" name="Height" required/>
    <input class="calculatorBMI__input" id="bmiWeight" placeholder="Waga" name="Weight" required/>
    <p class="calculatorBMI__text" id="bmiResult">Wynik</p>
    <button class="calculatorBMI__button calculatorBMI__bmiResultbtn" id="calcBmi" name="save-bmi">Oblicz</button>
    </form>
    <button class="calculatorBMI__button" id="backToInterface">Wróć</button>
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
    <script src="js/userInterface.js"></script>
    <script src="js/bmiCalculator.js"></script>
    </body>
</html>