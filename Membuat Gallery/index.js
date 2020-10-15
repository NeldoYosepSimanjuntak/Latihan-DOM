const thumb = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbAktif = document.querySelectorAll(".thumb");


thumb.addEventListener("click", function(e) {
   if(e.target.className == 'thumb'){
       jumbo.src = e.target.src;
       jumbo.classList.add('fade');

       setTimeout(function() {
            jumbo.classList.toggle("fade");
       }, 500);

       
       thumbAktif.forEach(function(okay) {
           if(okay.classList.contains("active")){
               okay.classList.remove("active");
           }
       })
       e.target.classList.add('active');
       
       
   }
})

