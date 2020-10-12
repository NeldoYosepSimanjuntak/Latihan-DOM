const ini = document.querySelector("h1");
ini.innerHTML="ini manipulasi dengan javascript";
//mengambil nilai attribute
// artinya: tolong carikan attribute id pada element ini
ini.getAttribute("id");

const ini1 = document.getElementById('a');
ini1.innerHTML = `<p> ini coba 1</p>
                    <a href="instagram.com">Uji coba </a>
                    <p class="p2"> ini coba 2</p>
                    
                    <p class="p3 oks"> ini Paragraf 3`;

const judul = document.getElementsByTagName("h2")[0];
//menambahkan sebuah attribute
//arti nya : menambahkan
//nilai attribute name : "neldo"
judul.setAttribute("name", "neldo"); 

// menambah sebuah kelas

const tambahKelas = document.querySelector(".p2");
tambahKelas.classList.add("label");

// menghapus sebuah kelas
const hapus = document.querySelector(".p3");
hapus.classList.remove("oks");

// mengecek apakah sebuah element mempunyai sebuah kelas
//kalo sudah ada maka akan di hilangkan
//kalo belum ada maka di tambahkan

const fungsiToggle = document.getElementById("a");
const a = fungsiToggle.getElementsByTagName("p")[0];
a.classList.toggle("label");


const uji = document.querySelector("section#b");
uji.classList.add('satu');
uji.classList.add('dua');
uji.classList.add('tiga');
uji.classList.add('empat');

//melihat/mengecek sebuah kelas






// manipulation Node

//cara ke satu

const paragrafBaru = document.createElement("p");
const textBaru = document.createTextNode("ini di buat dengan manipulasi Node di javascript");
// simpan ke dalam sebuah paragraf
paragrafBaru.appendChild(textBaru);
// simpan ke dalam section

const masuk = document.querySelector("#a");
masuk.appendChild(paragrafBaru);

// cara ke dua 
// menggunakan innerText

const contoh2 = document.createElement("p");
const tempat = document.getElementById("a");
contoh2.innerText = `ini cara ke dua `;
tempat.appendChild(contoh2);


const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("ini list baru");
liBaru.appendChild(textLiBaru);

const ul = document.querySelector("section#b ul");
const ulLi = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru,ulLi);


// menghapus
const sectionA = document.querySelector("section#a");
const hapusLink = sectionA.getElementsByTagName("a")[0];
sectionA.removeChild(hapusLink);

// replace
//langkah 1 input dulu parent nya
const replaceLink = document.querySelector("section#c");
//langkah 2 : pilih yang mau di eksekusi
const replace = replaceLink.getElementsByTagName('p')[1];
//langkah 3: membuat element baru
const baru = document.createElement("h2");
//langkah 4: isi nya
const textBaruBanget = document.createTextNode("ini baru banget");
//satukan 
baru.appendChild(textBaruBanget);
//replaceChild(element baru, element lama)
replaceLink.replaceChild(baru, replace);

//hasil yang sudah kita kerjakan
baru.style.backgroundColor= "lightblue";
liBaru.style.backgroundColor= "lightblue";
ini1.style.backgroundColor= "lightblue";


