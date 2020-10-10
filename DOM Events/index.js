//cara pertama(tidak disarankan)
const warnaP2 = document.querySelector(".p3");
function ubahWarna (){
    warnaP2.style.backgroundColor = "lightblue";
}

//cara ke 2 menggunakan method

const warnaP3 = document.querySelector(".p2");
warnaP3.onclick = ubahWarnaP2;
function ubahWarnaP2(){
    warnaP3.style.backgroundColor = "lightgreen";
}

//addEventListener

const p1 = document.querySelector("section#b p");
p1.addEventListener('click', function(){
    const parentChild = document.querySelector("section#b ul");
    const createLi = document.createElement("li");
    const textLi = document.createTextNode("ini item baru");
    createLi.appendChild(textLi);
    parentChild.appendChild(createLi);
});

const p5 = document.querySelector("section.d p");
//dengan doubleclick pada mouse
p5.addEventListener('dblclick', function() {
    p5.style.color = 'red';
    p5.style.backgroundColor = 'blue';
});

const p6 = document.querySelector("section.d h1");
//dengan mouseenter pada mouse
p6.addEventListener('mouseenter', function() {
    p6.style.color = 'salmon';
    p6.style.backgroundColor = 'blue';
});


//dengan mouseleave pada mouse
p6.addEventListener('mouseleave', function() {
    p6.style.color = 'black';
    p6.style.backgroundColor = 'white';
});