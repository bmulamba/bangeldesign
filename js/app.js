
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

const MainImg = document.getElementById("MainImg");
const SmlImg = document.getElementsByClassName("small-img");


const items = document.s

bar.addEventListener('click', () => {
    nav.classList.add('active')
});

close.addEventListener('click', () => {
    nav.classList.remove('active')
});

// select small imge 

SmlImg[0].addEventListener('click', () =>{
    MainImg.src = SmlImg[0].src;
    // console.log(";lkkk");
});

SmlImg[1].addEventListener("click", () =>{
    MainImg.src = SmlImg[1].src;
});

SmlImg[2].addEventListener("click", () =>{
    MainImg.src = SmlImg[2].src;
});

SmlImg[3].addEventListener("click", () =>{
    MainImg.src = SmlImg[3].src;
});


// single page 




