const h1 = document.createElement("h1");
h1.innerText = "Latihan main Warna";
document.body.appendChild(h1);

const tombol = document.querySelector("button");
tombol.addEventListener("click", function() {
    document.body.classList.toggle("ini");
});

const bikinTombol = document.createElement("button");
const textTombol = document.createTextNode("acak Warna");
bikinTombol.setAttribute("type", "button");
bikinTombol.setAttribute("min","1");
bikinTombol.setAttribute("max","255");
bikinTombol.appendChild(textTombol);
tombol.after(bikinTombol);

bikinTombol.addEventListener('click', function() {
   const r = Math.round(Math.random() * 255 + 1);
   const g = Math.round(Math.random() * 255 + 1);
   const b = Math.round(Math.random() * 255 + 1);
//    console.log(r);
   
    document.body.style.backgroundColor= 'rgb('+ r +', '+ g +', '+ b +')';
});

const inputMerah= document.querySelector("input[name=sMerah]");
const inputHijau = document.querySelector("input[name=sHijau]");
const inputBiru = document.querySelector("input[name=sBiru]");

inputMerah.addEventListener('input', function() {
    const r = inputMerah.value;
    document.body.style.backgroundColor = 'rgb('+ r +', 100 , 100)';
})

inputHijau.addEventListener('input', function() {
    const r = inputMerah.value;
    const g = inputHijau.value;

    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', 100)';
});

inputBiru.addEventListener('input', function() {
    const r = inputMerah.value;
    const g = inputHijau.value;
    const b = inputBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});