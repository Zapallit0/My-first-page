var loader =document.getElementById("preloader");

window.addEventListener("load",function(){
    loader.style.display="none"
})

const header = document.querySelector("header");
const sectionOneOptions={rootMargin:"-200px 0px 0px 0px"};
const selectionOne= document.querySelector(".home-intro");

const sectionOneObserver= new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            header.classList.add("nav-scrolled");
        }
        else{
            header.classList.remove("nav-scrolled");
        }

    })
},sectionOneOptions);

sectionOneObserver.observe(sectionOne);

