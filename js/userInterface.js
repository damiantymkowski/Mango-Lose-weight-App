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
                    let errorHandlerBMIsave = JSON.parse(connectionPostBmiData.responseText);
                   if(errorHandlerBMIsave.Success == "true"){
                       alert("Sukces!");
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

