const userInterfaceBox = document.querySelector(".uiBox");
const calculatorBMIbtn = document.querySelector(".calculatorBMIbtn");
const calculatorBMIbox = document.querySelector(".calculatorBMI");
const modalBoxBMI = document.querySelector(".modalBox");
const modalBoxBMItext = document.querySelector(".modalBox__text");
const modalBoxBMIsmalltext = document.querySelector(".modalBox__smalltext");

let check = userInterfaceBox.innerHTML;
calculatorBMIbtn.onclick = () => {
    window.location.hash = "calculatorBMI";
}

const getDataFromJsonUI = () => {
    fetch("https://my-json-server.typicode.com/damiantymkowski/Mango/db")
    .then(function(response){
        return response.json();
    })
    .then(function(result){
        if(window.location.hash=='#calculatorBMI')
        {
        userInterfaceBox.innerHTML = result.calculatorbmi[0].html;
        const calcBmiBtn = document.querySelector("#calcBmi");
        const bmiResultBox = document.querySelector("#bmiResult");
        
        calcBmiBtn.onclick = () => {
            postBmiData();
        }

        const postBmiData = () =>{
            let height = document.getElementById("bmiHeight").value;
            let weight = document.getElementById("bmiWeight").value;
            
            let formData = new FormData();
            formData.append('weight', weight);
            formData.append('height', height);
            fetch("includes/bmi.inc.php", {
                method: "POST",
                body: formData
                })
            .then(response=>response.json())
            .then(response=>{
                   if(response.Success == "true"){
                       modalBoxBMI.style.display = "block";
                       modalBoxBMItext.textContent = "Sukces!";
                       modalBoxBMIsmalltext.textContent = "Twoje BMI wynosi: "+Math.round(response.BMI*100)/100+" Dodano wynik do bazy danych. "
                   }else{
                    modalBoxBMI.style.display = "block";
                    modalBoxBMItext.textContent = "Błąd!";
                    modalBoxBMIsmalltext.textContent = "Wpisano błędne dane"
                   }
                });
            };
            
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

window.onclick = function(event){
    if(event.target == modalBoxBMI){
        modalBoxBMI.style.display = "none";
    }
}

fetch("http://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&appid=fb02e8250c0b25415442b1591d535c2b")
.then(responseWeather=>responseWeather.json())
.then(responseWeather=>{
const temperature = document.getElementById("weather__temperature");
temperature.textContent = Math.round(responseWeather["main"].temp-273.15);
});