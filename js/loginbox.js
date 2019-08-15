const modalBox = document.querySelector(".modal");
const modalBoxErrorInfo = document.querySelector(".modal__text");
const closeModalBox = document.querySelector(".modal-close");


document.addEventListener("DOMContentLoaded", function() {

const haveAccountSubmit = document.querySelector(".alreadyHaveAccountSubmit");
haveAccountSubmit.onclick = () =>{
    document.querySelector(".signupBox").style.display = "none";
    document.querySelector(".signIn").style.display = "block";
    }

  let errorInfoHeader = location.search;
    if(errorInfoHeader.includes("?error=wrongpwd"))
    {
      modalBox.style.animation = "fadein 1s";
      modalBox.style.display = "block";
    }else if(errorInfoHeader.includes("?error=nouser"))
    {
      modalBox.style.animation = "fadein 1s";
      modalBox.style.display = "block";
      modalBoxErrorInfo.textContent = "Nie ma takiego Użytkownika w bazie danych";
    }else if(errorInfoHeader.includes("?error=emailtaken"))
    {
      modalBox.style.animation = "fadein 1s";
      modalBox.style.display = "block";
      modalBoxErrorInfo.textContent = "Taki Użytkownik istnieje już w bazie danych!";
    }else if(errorInfoHeader.includes("?error=invalidemail"))
    {
      modalBox.style.animation = "fadein 1s";
      modalBox.style.display = "block";
      modalBoxErrorInfo.textContent = "Nieprawidłowy adres e-mail";
    }

    closeModalBox.onclick = () =>{
      modalBox.classList.remove("is-active");
    }

});

window.onclick = function(event)
{
    if(event.target == modalBox){
        modalBox.style.display="none";
    }
}