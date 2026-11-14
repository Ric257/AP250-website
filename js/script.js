document.getElementById('home').addEventListener('click', ()=>{
    showHome()
})
document.getElementById('sf-button').addEventListener('click', ()=>{
    showSf()  
})
document.getElementById('md-button').addEventListener('click', ()=>{
    showMd()
})
document.getElementById('xt-button').addEventListener('click', ()=>{
    showXt()
})
showHome();


function showHome(){
    let rutaArchivo = "views/home.html"

    fetch(rutaArchivo)
    .then(response => response.text())
    .then(data => {
    document.getElementById("contents").innerHTML = data
    showNumbers();
})
}

function showSf(){
    let rutaArchivo = "../views/SoundFonts.html"

    fetch(rutaArchivo)
    .then(response => response.text())
    .then(data => {
    document.getElementById("contents").innerHTML = data 
})
}
function showMd(){
    let rutaArchivo = "../views/MIDIs.html"

    fetch(rutaArchivo)
    .then(response => response.text())
    .then(data => {
    document.getElementById("contents").innerHTML = data 
})
}

function showXt(){
    let rutaArchivo = "../views/Specs.html"

    fetch(rutaArchivo)
    .then(response => response.text())
    .then(data => {
    document.getElementById("contents").innerHTML = data
})
}

function showNumbers(){
    document.getElementById('year').textContent = new Date().getFullYear();
    var actualYear = new Date().getFullYear();
    var age = 19;
    var actualDay = new Date().getDay();
    var actualDate = new Date().getDate();
    var actualMonth = new Date().getUTCMonth() + 1;
    if (actualMonth == 5 && actualDate == 14){
        age = actualYear - 2007;
    }
    
    document.getElementById("age").innerHTML = age;
    document.getElementById("time").innerHTML = time;

}
