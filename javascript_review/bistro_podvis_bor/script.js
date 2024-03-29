// const test = true;
// console.log(test);

// Animation - original code from Beau Carnes
// function myMove() {
//     var elem = document.getElementById("myAnimation");
//     var pos = 0;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++;
//         elem.style.top = pos + 'px';
//         elem.style.left = pos + 'px';
//       }
//     }
//   }

//   var item = document.getElementById('item');
//   item.animate([
//       { transform: 'scale(1)', background: 'red', opacity: 1, offset: 0 },
//       { transform: 'scale(.5) rotate(270deg)', background: 'blue', opacity: .5, offset: .2 },
//       { transform: 'scale(1) rotate(0deg)', background: 'red', opacity: 1, offset: 1 },
//     ], {
//       duration: 2000, //milliseconds
//       easing: 'ease-in-out', //'linear', a bezier curve, etc.
//       delay: 10, //milliseconds
//       iterations: Infinity, //or a number
//       direction: 'alternate', //'normal', 'reverse', etc.
//       fill: 'forwards' //'backwards', 'both', 'none', 'auto'
//     });

// Modified with the picture slider
// Work fine in Mozilla vs zoom in-out bug in chrome

// var pictureCrossFades = document.querySelector(".myPhotoCrossFades");
// pictureCrossFades.animate(
//   [
//     {
//       transform: "scale(1)",
//       background: "url('./img/pic-1.jpg')",
//       opacity: 1,
//     },
//     {
//       transform: "scale(1)",
//       background: "url('./img/pic-2.jpg')",
//       opacity: 0.5,
//     },
//     {
//       transform: "scale(1)",
//       background: "url('./img/pic-3.jpg')",
//       opacity: 1,
//       offset: 1,
//     },
//   ],
//   {
//     duration: 5000, //milliseconds
//     easing: "ease-in-out", //'linear', a bezier curve, etc.
//     delay: 1000, //milliseconds
//     iterations: Infinity, //or a number
//     //   direction: 'alternate', //'normal', 'reverse', etc.
//     //   fill: 'forwards' //'backwards', 'both', 'none', 'auto'
//   }
// );

let i = 0;
let images = [];
let time = 5000;
const mainMenu = document.querySelector(".main-container--navbar_hamburger");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-100%";
}

images[0] = "img/food-4.jpg";
images[1] = "img/food-1.jpg";
images[2] = "img/table.jpeg";

function crossfadeImages() {
  //   let i = 0;
  //   let images = ["img/food-4.jpg", "img/food-1.jpg", "img/table.jpeg"];
  //   let time = 1000;
  document.myPhotoCrossFades.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("crossfadeImages()", time);
}

window.onload = crossfadeImages();

document
  .querySelector(".navbar_submenu")
  .addEventListener("click", expandDropdownMenu);

function expandDropdownMenu() {
  document
    .querySelector(".navbar_sublist")
    .classList.toggle("navbar_list-active");
}

const accordion = document.querySelectorAll(
  ".container-column-4_accordion-button"
);
for (let x = 0; x < accordion.length; x++) {
  accordion[x].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-100%";
}
// const show = function(){
//     let hamburgerMenu = document.querySelector('.main-container--navbar_hamburger')
//     console.log('Hello');
// };

// (function () {
//     const openMenu = document.querySelector(".openMenu").addEventListener('click', show);
// })();
