

var getStats = new XMLHttpRequest();
getStats.onload = () => {
    alert(this.responseText);
};
getStats.open("get", "includes/stats.inc.php", true);
getStats.send();