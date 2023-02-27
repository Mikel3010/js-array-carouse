'use strict'

/* <div class="item show"> <img src="./img/01.webp" alt=""></div>
<div class="item"> <img src="./img/02.webp" alt=""></div>
<div class="item"> <img src="./img/03.webp" alt=""></div>
<div class="item"> <img src="./img/04.webp" alt=""></div>
<div class="item"> <img src="./img/05.webp" alt=""></div> */

const imgs = ['01.webp','02.webp','03.webp','04.webp','05.webp'];
let itemsContent = '';

const slider = document.querySelector('.slider');

for(let i = 0; i < imgs.length; i++){
    itemsContent += `<div class="item"><img src="./img/${imgs[i]}" alt=""></div>`;
}

slider.innerHTML += itemsContent;
document.querySelector('.item').classList.add('show');