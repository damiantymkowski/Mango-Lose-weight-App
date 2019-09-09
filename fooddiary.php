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
    
    <div class="foodDiary">
    <table cellspacing="0" class="userInterfaceBox__table">
                <thead>
                    <tr> 
                         <th>Data</th>
                         <th>Produkt</th>
                         <th>Kalorie</th>
                    </tr>
                </thead>
                <tbody id="foodList">
                    <template id="foodTemplate">
                     <tr> 
                           <td class="foodDate"></td>
                           <td class="foodName"></td>
                           <td class="foodCalories"></td>    
                     </tr>
                    </template>
                </tbody>
                </table>
                <div class="foodDiary__caloriesResult">
                <p>Liczba kalorii:</p><p id="foodDiary__caloriesResult--number"></p>
                </div>
                <input type="text" class="foodDiary__input" placeholder="Nazwa produktu" id="productname"/>
                <input type="text" class="foodDiary__input" placeholder="Kaloryczność" id="calories"/><button class="foodDiary__addProductBtn">Dodaj</button>
    </div>

    </section>  

<?php 
if(!isset($_SESSION['emailUsers'])){
    header("Location: ../mango/index.php");
    die();
}
?>
  <script src="js/fooddiary.js"></script>
    </body>
</html>