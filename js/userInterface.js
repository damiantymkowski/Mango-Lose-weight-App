const userInterfaceBox = document.querySelector(".uiBox");
const calculatorBMIbtn = document.querySelector(".calculatorBMIbtn");
const calculatorBMIbox = document.querySelector(".calculatorBMI");
let check = userInterfaceBox.innerHTML;
calculatorBMIbtn.onclick = () => {
    window.location.hash = "calculatorBMI";
}
function getDataFromJsonUI(){
    fetch("https://my-json-server.typicode.com/damiantymkowski/Mango/db")
    .then(function(response){
        return response.json();
    })
    .then(function(result){
        if(window.location.hash=='#calculatorBMI')
        {
        userInterfaceBox.innerHTML = result.calculatorbmi[0].html;
        }else{
        userInterfaceBox.innerHTML = result.defaultInterface[0].html;
        }
      
    });
}

if(!window.location.hash=='')
{
    userInterfaceBox.innerHTML = "";
    getDataFromJsonUI();
}

window.addEventListener("hashchange", getDataFromJsonUI, false);

