const contain = document.querySelector(".container");
const thumbs = document.querySelectorAll(".thumb");
const jumbo = document.querySelector(".jumbo");
    contain.addEventListener("click", function(e) {
        if(e.target.className == "thumb"){
            jumbo.src = e.target.src;
            jumbo.classList.add("olo");

            setTimeout(function() {
                jumbo.classList.toggle("olo");
            }, 500)
            thumbs.forEach(function(ia) {
                if(ia.classList.contains("active")){
                    ia.classList.remove("active");
                }
            })
           
            e.target.classList.add("active");

        }
    })