const caret = document.querySelector("#moreBtn i"); 
const subMenu = document.getElementById("subMenu");
const moreBtn = document.getElementById("moreBtn");

moreBtn.addEventListener(
"click", 
function(event){
    console.dir(caret.classList);
    /* caret.classList.remove("fa-caret-right"); 
    caret.classList.add("fa-caret-down"); */
    caret.classList.toggle("fa-caret-right"); 
    caret.classList.toggle("fa-caret-down");
    subMenu.classList.toggle("hide"); 
}
);

