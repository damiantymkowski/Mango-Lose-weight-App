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
            postStuff();
        }
        function postStuff(){
            var hr = new XMLHttpRequest();
            var url = "includes/bmi.inc.php";
            var height = document.getElementById("bmiHeight").value;
            var weight = document.getElementById("bmiWeight").value;
            var vars = "height="+height+"&weight="+weight;
            hr.open("POST", url, true);
            hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            hr.onreadystatechange = function() {
                console.log(hr);
            
                if(hr.readyState == 4 && hr.status == 200) {
                    var return_data = hr.responseText;
                    document.getElementById("status").innerHTML = return_data;
                }
            }
            // Send the data to PHP now... and wait for response to update the status div
            hr.send(vars); // Actually execute the request
            document.getElementById("status").innerHTML = "processing...";
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

