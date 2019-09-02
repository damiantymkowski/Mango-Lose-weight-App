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

function getDataFromJsonUI(){
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
        function postBmiData(){

            let connectionPostBmiData = new XMLHttpRequest();
            let url = "includes/bmi.inc.php";
            let height = document.getElementById("bmiHeight").value;
            let weight = document.getElementById("bmiWeight").value;
            let vars = "height="+height+"&weight="+weight;

            connectionPostBmiData.open("POST", url, true);
            connectionPostBmiData.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            connectionPostBmiData.onreadystatechange = function() {
                console.log(connectionPostBmiData);
            
                if(connectionPostBmiData.readyState == 4 && connectionPostBmiData.status == 200) {
                    let jsonResponseBMI = JSON.parse(connectionPostBmiData.responseText);
                   if(jsonResponseBMI.Success == "true"){
                       modalBoxBMI.style.display = "block";
                       modalBoxBMItext.textContent = "Sukces!";
                       modalBoxBMIsmalltext.textContent = "Twoje BMI wynosi: "+Math.round(jsonResponseBMI.BMI*100)/100+" Dodano wynik do bazy danych. "
                   }else{
                    modalBoxBMI.style.display = "block";
                    modalBoxBMItext.textContent = "Błąd!";
                    modalBoxBMIsmalltext.textContent = "Wpisano błędne dane"
                   }
                }
            }
            connectionPostBmiData.send(vars);
            }
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