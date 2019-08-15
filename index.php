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
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </head>
    <body>

    
    <nav class="navigation"> 
            <div class="logo">MANGO</div>
    <ul class="menu"> 
        <li>kontakt</li>
        <li>o nas</li>
    </ul>
    </nav>

<img src="/img/food_ketchup_icon.png"/>

<?php 
if(isset($_SESSION['emailUsers'])){
    header("Location: ../mango/site.php");
    die();
}else{
    echo'<section class="loginBox">
    <h2 class="loginBox__title">Witaj w Mango</h2>
    <p class="loginBox__description">
     Mango pozwoli Ci zrzucić zbędne kilogramy!</br>
     Dostosuj swój plan żywieniowy, śledź swoje</br>
     postępy w rzucaniu wagi i wiele więcej
    </p> 
    <form action="includes/signup.inc.php" method="post" class="signupBox">
    <input class="loginBox__input" placeholder="e-mail" id="emailInput" type="text" name="email" required></input>
    <input class="loginBox__input" placeholder="hasło" id="passwordInput" type="password" name="password" required></input>
    <button class="loginBox__button" id="registerButton" name="signup-submit">załóż konto</button></br>
    <button class="loginBox__button alreadyHaveAccountSubmit" id="haveAccountButton">mam już konto</button></br>
    <input type="checkbox" class="loginBox__checkbox" name="consent" id="consent" required></input><label for="consent" class="loginBox__acceptRights">Akceptuje warunki korzystania z serwisu oraz politykę prywatności</label>
 </form>
 <form action="includes/login.inc.php" method="post" class="signIn">
    <input class="loginBox__input" placeholder="e-mail" id="emailInput" type="text" name="email" required></input>
    <input class="loginBox__input" placeholder="hasło" id="passwordInput" type="password" name="password" required></input>
    <button class="loginBox__button" id="registerButton" name="login-submit">zaloguj się</button></br>
      </form>
 </section>
 <div class="modal">

 <p class="modal__text">Wpisano błędne hasło</p>
</div>
'
 ; 
}
?>
    


    <script src="js/loginbox.js"></script>
    </body>
</html>