const calcBmiBtn = document.querySelector("#calcBmi");
const bmiResultBox = document.querySelector("#bmiResult");

calcBmiBtn.onclick = () => {
    window.location.hash="#calculatorBMI";
    const bmiHeight = document.querySelector("#bmiHeight").value;
    const bmiWeight = document.querySelector("#bmiWeight").value;

    if(bmiHeight>0 && bmiWeight>0)
    bmiResultBox.textContent = "Twoje BMI wynosi: "+ Math.round(bmiWeight/((bmiHeight/100)*(bmiHeight/100))*100)/100;
    else{
        bmiResultBox.textContent = "Wprowadź prawidłowe wartości!";
    }
}