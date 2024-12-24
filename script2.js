let name1 = sessionStorage.getItem("name");
let birthdate = sessionStorage.getItem("birthdate");
let fe_male = sessionStorage.getItem("fe_male");

let ocenka = sessionStorage.getItem("ocenka");
let ocenka1 = sessionStorage.getItem("ocenka1");

if(!name1 || !birthdate || !fe_male){
    window.location.href = "reg.html"
}else{
    document.getElementById("name").innerText = name1;
    document.getElementById("birthdate").innerText = birthdate;
    document.getElementById("fe_male").innerText = fe_male;
    document.getElementById("ocenka").innerText = ocenka;
    document.getElementById("ocenka1").innerHTML = ocenka1;
}


function clearDate(){
    sessionStorage.removeItem("name"); //localStorage || sessionStorage
    sessionStorage.removeItem("birthdate"); //localStorage || sessionStorage
    sessionStorage.removeItem("fe_male"); //localStorage || sessionStorage

    window.location.href = "reg.html"
}

function clearOcenka(){
    sessionStorage.removeItem("ocenka"); //localStorage || sessionStorage
    sessionStorage.removeItem("ocenka1"); //localStorage || sessionStorage

    window.location.href = "test.html"
}

document.getElementById("logout").addEventListener('click', clearDate);
document.getElementById("logout1").addEventListener('click', clearOcenka);

