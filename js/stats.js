var req = new XMLHttpRequest();
req.open('GET', 'includes/stats.inc.php', true); 
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200)
      JSON.parse(this.responseText);
     else
      dump("Błąd podczas ładowania strony\n");
  }
};
req.send(null);