//langkah 1 (DOM Selection)

const uji = document.querySelector(".card");
const tombol = document.querySelector(".close");
tombol.addEventListener("click", function() {
    uji.style.display = "none";
});

//langkah 2 (DOM Transversal)

const ujiBanyak = document.querySelectorAll(".card");
const silang = document.querySelectorAll(".close");
for(let i = 0; i <= silang.length; i++){
    silang[i].addEventListener("click", function() {
        silang[i].parentElement.style.display ="none";
    });
};

//langkah ke 3

const coba = document.querySelectorAll(".card");
const hilang = document.querySelectorAll(".close");

for(let a = 0; a <= hilang.length; a++){
    hilang[a].addEventListener("click", function(e) {
        e.target.parentElement.style.display = "none";
    });
}