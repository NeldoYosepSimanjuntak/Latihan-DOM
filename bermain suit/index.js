
const tombol = document.querySelector("button");
tombol.addEventListener('click', function() {
    let inputData = document.getElementById("input").value;
    let pKomputer = "";
    let hasil = '';
    let komputer = Math.random();
    // console.log(komputer);
    if(komputer <= 0.34){
        pKomputer = "gunting";
    } else if(komputer >= 0.34 && komputer <= 0.68 ){
        pKomputer = "batu";
    } else{
        pKomputer = "kertas";
    }

    if(inputData == pKomputer){
        hasil = "Seri";
    } else if(inputData == "batu"){
        hasil = (pKomputer == "gunting") ? "Menang" : "kalah";
    } else if(inputData == "gunting"){
        hasil = (pKomputer == "kertas") ? "Menang" : "Kalah";
    } else if(inputData == "kertas"){
        hasil = (pKomputer == "batu") ? "Menang" : "kalah";
    }else {
        hasil = "Player salah masukin suit... !!";
    }

    alert(`Kamu memilih : ${inputData} 
 dan komputer memilih : ${pKomputer} maka hasil nya adalah Player:
 ${hasil}`);
});

