const addProductBtn = document.getElementById("foodDiary__addProductBtn");
const template = document.getElementById("foodTemplate").content;
let table = document.querySelector(".userInterfaceBox__table");
let rows = table.getElementsByTagName("tr");

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
  
   if(i%2==0)
     rows[i].className = "white";
   else
     rows[i].className = "gray";
      }

  })