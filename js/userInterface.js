const userInterfaceBox = document.querySelector(".uiBox");
const calculatorBMIbtn = document.querySelector(".calculatorBMIbtn");
const calculatorBMIbox = document.querySelector(".calculatorBMI");




function getDataFromJsonUI(){
    fetch("https://my-json-server.typicode.com/damiantymkowski/Mango/calculatorbmi")
    .then(function(response){
        return response.json();
    })
    .then(function(result){
        output = result[0].html;
        if(window.location.hash)
        {
            userInterfaceBox.innerHTML = output;
            const backToInterfaceBtn = document.querySelector("#backToInterface");
            backToInterfaceBtn.onclick = () => {
                location.href = "site.php"; 
            }
        }else{
            console.log("test");
        }
    });
} 

calculatorBMIbtn.addEventListener('click', getDataFromJsonUI);
window.onload = getDataFromJsonUI;

window.addEventListener('popstate', function(event) {



    if (r == true) {
       
        history.back();
     
      // window.location = document.referrer 
    } else {
      
        history.pushState(null, null, window.location.pathname);
    }

    history.pushState(null, null, window.location.pathname);

}, false);



