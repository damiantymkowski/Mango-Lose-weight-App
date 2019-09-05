const addProductBtn = document.getElementById("foodDiary__addProductBtn");

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