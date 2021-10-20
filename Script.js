const penels = document.querySelectorAll(".question");

console.log(penels);

penels.forEach((penel) =>{
    penel.addEventListener("click", () =>{
        removeActiveClass ();
        penel.parentElement.classList.add("active");
    })
})


function removeActiveClass (){
    penels.forEach((penel) =>{
        penel.parentElement.classList.remove("active");
})
}

