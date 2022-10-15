let openBtn = document.querySelector(".fa-bars");
let closeBtn = document.querySelector(".fa-xmark");
let menu =document.querySelector(".navbar__menu")
let scroll= document.querySelector(".fa-regular");

openBtn.addEventListener('click',()=>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
});

closeBtn.addEventListener('click',()=>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
});

//Scroll

window.onscroll = ()=>{
    this.scrollY >= 1000 ?  scroll.classList.add("show") : scroll.classList.remove("show") 
};

scroll.onclick = ()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth",
    })
}