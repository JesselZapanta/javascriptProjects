const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const aside = document.getElementById("aside");

openBtn.addEventListener("click", function(){
    aside.classList.add("active");
})

closeBtn.addEventListener("click", function(){
    aside.classList.remove("active");
})

