const contain = document.querySelector('.container');
contain.addEventListener("click", function(e) {
    if(e.target.className == 'close' ){
        e.target.parentElement.style.display ="none";
        e.preventDefault();
    }
})