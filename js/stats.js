const template = document.getElementById("statTemplate").content;
let table = document.querySelector(".userInterfaceBox__table");
let rows = table.getElementsByTagName("tr");

var req = new XMLHttpRequest();
req.open('GET', 'includes/stats.inc.php', true); 
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200){
      let obj = JSON.parse(this.responseText);

      for(let i=0; i<obj.length; i++){
        template.querySelector('.userBMI').textContent = Math.round(obj[i]["0"]*100)/100;
        template.querySelector('.measurementDate').textContent = obj[i]["1"];
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

