let inputSearch = document.getElementById("inputSearch")
let btnSearch = document.getElementById("btnSearch")
btnSearch.addEventListener("click",()=>{
    if(inputSearch.style.display == "none"){
        inputSearch.style.display = "block"
    }else{
        inputSearch.style.display = "none"
    }
})