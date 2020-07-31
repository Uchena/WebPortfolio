let button = document.getElementById("nav-burger");
let menu = document.querySelector(".navbar__nav");

const yearE1 = document.querySelector('.year');
const date = new Date();
const year = date.getFullYear();

yearE1.innerText = year;


// button.addEventListener("click", function(){

//     this.classList.toggle("open")
//     menu.classList.toggle("navbar-open")

//     allMenu.forEach((element, i)=> {
//         setTimeout(()=> {
//             element.classList.toggle("anotherclass");
//         }, i * 200);
//     });
// });

