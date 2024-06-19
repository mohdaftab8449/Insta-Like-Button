let image=document.querySelector("img")
let love=document.querySelector("i")
image.addEventListener("dblclick",()=>{
    love.style.transform="scale(2)"
    setTimeout(()=>{
        love.style.transform="scale(0)"
    },2000)
})