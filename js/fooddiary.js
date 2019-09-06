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

fetch("includes/foodlist.inc.php")
.then(res=>res.json())
.then(res=>{
      for(let i=0; i<res.length; i++){
        template.querySelector('.userBMI').textContent = Math.round(res[i]["0"]*100)/100;
        template.querySelector('.measurementDate').textContent = formatDate(res[i]["1"]);
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