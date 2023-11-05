


let macBtn = document.getElementById("btn-1")
macBtn.addEventListener("click",function openMacWindow(){

    let input = document.getElementById("webLink")
    window.open( input.value , "_blank", "width=1920,height=1080")

})


let ipadBtn = document.getElementById("btn-2")
ipadBtn.addEventListener("click",function openIpadWindow(){

    let input = document.getElementById("webLink")
    window.open( input.value , "_blank", "width=1024,height=1366")
})


let galaxyBtn = document.getElementById("btn-3")
galaxyBtn.addEventListener("click",function openGalaxyWindow(){

    let input = document.getElementById("webLink")
    window.open( input.value , "_blank", "width=412,height=869")

})

let iphoneBtn = document.getElementById("btn-4")
iphoneBtn.addEventListener("click",function openIphoneWindow(){

    let input = document.getElementById("webLink")
    window.open( input.value , "_blank", "width=375,height=812")

})
