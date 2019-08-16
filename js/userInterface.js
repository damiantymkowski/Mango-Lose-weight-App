const userInterfaceBox = document.querySelector(".uiBox");
const calculatorBMIbtn = document.querySelector(".calculatorBMIbtn");
const calculatorBMIbox = document.querySelector(".calculatorBMI");
const backToInterfaceBtn = document.querySelector("#backToInterface");

calculatorBMIbtn.onclick = () => {
    userInterfaceBox.style.display = "none";
    calculatorBMIbox.style.display = "flex";
}

backToInterfaceBtn.onclick = () => {
    location.href = "site.php"; 
}