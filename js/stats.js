const template = document.getElementById("statTemplate").content;
let table = document.querySelector(".userInterfaceBox__table");
let rows = table.getElementsByTagName("tr");

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

fetch("includes/stats.inc.php")
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

const deleteButtonStats = document.querySelector(".bmiDeleteAllStats");

deleteButtonStats.onclick = () =>{
  deleteBMIstats();
}

const deleteBMIstats = () =>{
fetch("includes/delete_stats.inc.php", {
  method: "post",
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
})
.then(response=>response.json())
.then(response=>{
  console.log(response);
if(response.Error==303)
alert("Nie ma nic do usuniecia!");
else if(response.SUccess=="true")
window.location.reload(true);
})
};






        /*let obj = JSON.parse(deleteRequest.responseText);
        if(obj.Error == 303)
        {
          alert("Nie ma nic do usuniecia!");
        }else if(obj.Success == "true"){
          alert("Sukces");
          window.location.reload(true);*/

  

 