const addProductBtn = document.getElementsByClassName("foodDiary__addProductBtn"); 
const template = document.getElementById("foodTemplate").content;
let table = document.querySelector(".userInterfaceBox__table");
let rows = table.getElementsByTagName("tr");
const caloriesNumber = document.getElementById("foodDiary__caloriesResult--number");

addProductBtn.onclick = () =>{
    postDiaryData();
}

const postDiaryData = () =>{
    const productname = document.getElementById("productname").value;
    const calories = document.getElementById("calories").value;

    const formDataDiary = new FormData();
    formDataDiary.append('product', productname);
    formDataDiary.append('calories', calories);

    fetch("includes/fooddiary.inc.php", {
        method: "POST",
        body: formDataDiary
    })
    .then(response=>{
      console.log('Success:', JSON.stringify("true"));
      location.reload();
    });
}

let formatDate = (dateString) => {
    var date = new Date(dateString),
      dd = date.getDate(),
      mm = date.getMonth() + 1,
      yyyy = date.getFullYear();
      hh = date.getHours();
      min = date.getMinutes();
    mm = mm < 10 ? '0' + mm : mm;
    return dd + '-' + mm +'-' + yyyy + ' ' + hh + ':' + min;
  }

let calories = 0;

fetch("includes/foodlist.inc.php")
.then(res=>res.json())
.then(res=>{
      for(let i=0; i<res.length; i++){
        template.querySelector('.foodDate').textContent = formatDate(res[i]["0"]);
        template.querySelector('.foodCalories').textContent = res[i]["1"];
        template.querySelector('.foodName').textContent = res[i]["2"];

        let tbody = document.querySelector("tbody");
        let clone = document.importNode(template, true);
        let td = clone.querySelectorAll("td");
        tbody.appendChild(clone);
        calories += parseInt(res[i]["1"],10);
        caloriesNumber.textContent = calories;
   if(i%2==0)
     rows[i].className = "white";
   else
     rows[i].className = "gray";
      }

  })

