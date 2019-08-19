const userInterfaceBox = document.querySelector(".uiBox");
const calculatorBMIbtn = document.querySelector(".calculatorBMIbtn");
const calculatorBMIbox = document.querySelector(".calculatorBMI");
let check = userInterfaceBox.innerHTML;

window.addEventListener('popstate', function (e) {
    this.alert(history.state);
    });
    

calculatorBMIbtn.addEventListener('click', getDataFromJsonUI);


function getDataFromJsonUI(){
    fetch("https://my-json-server.typicode.com/damiantymkowski/Mango/calculatorbmi")
    .then(function(response){
        return response.json();
    })
    .then(function(result){
        output = result[0].html;
        userInterfaceBox.innerHTML = output;
           history.pushState('test', 'cos', 'test.html');
           
    });
} 
