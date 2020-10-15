const contain = document.querySelectorAll(".close");
const ok = document.querySelectorAll(".card");
contain.forEach(function(card) {
    card.addEventListener("click", function(e) {
        e.target.parentElement.style.display = "none";
        e.stopPropagation();
    })
});

const a = document.querySelectorAll(".card");
a.forEach(function(card){
    card.addEventListener("click", function(e) {
        alert("hello ");
    })
});