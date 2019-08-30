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

var req = new XMLHttpRequest();
req.open('GET', 'includes/stats.inc.php', true); 
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200){
      let obj = JSON.parse(this.responseText);

      for(let i=0; i<obj.length; i++){
        template.querySelector('.userBMI').textContent = Math.round(obj[i]["0"]*100)/100;
        template.querySelector('.measurementDate').textContent = formatDate(obj[i]["1"]);
        let tbody = document.querySelector("tbody");
        let clone = document.importNode(template, true);
        let td = clone.querySelectorAll("td");
        tbody.appendChild(clone);
  
   if(i%2==0)
     rows[i].className = "white";
     else
     rows[i].className = "gray";
      }
      
     }
     else
      dump("Błąd podczas ładowania strony\n");
  }
};
req.send(null);

const deleteButtonStats = document.querySelector(".bmiDeleteAllStats");

deleteButtonStats.onclick = () =>{
  deleteBMIstats();
}

const deleteBMIstats = () =>{
  let deleteRequest = new XMLHttpRequest();
  deleteRequest.open('POST', 'includes/delete_stats.inc.php',true);
  deleteRequest.onreadystatechange = function (aEvt) {
    if (deleteRequest.readyState == 4) {
      if(deleteRequest.status == 200){
        let obj = JSON.parse(deleteRequest.responseText);
        if(obj.Error == 303)
        {
          alert("Nie ma nic do usuniecia!");
        }else if(obj.Success == "true"){
          alert("Sukces");
          window.location.reload(true);
        }
       }
      }
    };
    deleteRequest.send(null);
  }

 