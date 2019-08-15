<?php
if(isset($_POST['signup-submit'])){

    require 'dbh.inc.php';

    $email = $_POST['email'];
    $password = $_POST['password'];

    if(empty($email)||empty($password)){
        header("Location: ../index.php?error=emptyfields&email=".$email);
        exit();
    }else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        header("Location: ../index.php?error=invalidemail");
        exit();
    }else{
        $sql = "SELECT emailUsers FROM users Where emailUsers=?";
        $stmt = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt,$sql)){
            header("Location: ../index.php?error=sqlerror");
            exit();
        }else{
            mysqli_stmt_bind_param($stmt, "s", $email);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            $resultCheck = mysqli_stmt_num_rows($stmt);
            if($resultCheck > 0){
                header("Location: ../index.php?error=emailtaken");
                exit();
            }else{
                $sql = "INSERT INTO users (emailUsers, pwdUsers) VALUES (?,?)";
                $stmt = mysqli_stmt_init($conn);
                if(!mysqli_stmt_prepare($stmt,$sql)){
                    header("Location: ../index.php?error=sqlerror");
                    exit();
                }else{
                    $hashedPwd = password_hash($password, PASSWORD_DEFAULT);
                    mysqli_stmt_bind_param($stmt, "ss", $email, $hashedPwd);
                    mysqli_stmt_execute($stmt);
                    header("Location: ../index.php?signup=success");
                    exit();
                }
            }

        }

    }
    mysqli_stmt_close($stmt);
    mysqli_close($conn);

}else{
    header("Location: ../index.php");
    exit();
}