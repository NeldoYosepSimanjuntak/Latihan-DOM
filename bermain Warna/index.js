const heading = document.createElement("h1");
const textHeading = document.createTextNode("bermain Warna");
heading.appendChild(textHeading);
const tombolWarna = document.querySelector("button");
document.body.insertBefore(heading,tombolWarna);

tombolWarna.addEventListener("click", function() {
    document.body.classList.toggle("iadong");
});

//menambah tombol

const tWarna = document.createElement("button");
tWarna.setAttribute("type","button");
const namaTombol = document.createTextNode("Acak Warna");
tWarna.appendChild(namaTombol);
tombolWarna.after(tWarna);

tWarna.addEventListener("click", function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');



sMerah.addEventListener("input", function() {
    const r = sMerah.value;
    const g = sHijau.value;
    //console.log(sMerah.value);
    document.body.style.backgroundColor = "rgb("+ r +","+ g +",100)";
});

sHijau.addEventListener("input", function() {
    const r = sMerah.value;
    const g = sHijau.value;
    //console.log(sMerah.value);
    document.body.style.backgroundColor = "rgb("+ r +","+ g +",0)";
});

sBiru.addEventListener("input", function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    //console.log(sMerah.value);
    document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
});






