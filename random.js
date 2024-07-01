// import Swiper from 'swiper';
// import 'swiper/css'


// let videoContainer = document.getElementById("img3-container")

// document.getElementById("watch").addEventListener("click", () => {
//     console.log("apple")
//     videoContainer.innerHTML = 
//     ' <div id= "flexcont"> <iframe width="1200" height="550" src="https://www.youtube.com/embed/btpWt1Cas2I?si=BErrYmErDbwPBVlx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <p id= "close-btn"> x </p> </div> '

        

//     })

    





let menuScreen = document.getElementById("menubar-options")






document.getElementById("menu-button").addEventListener("click", () => {
    console.log("berries")
    
    menuScreen.style.display = "block"



})

document.getElementById("cross-mark").addEventListener("click", () =>  {
    menuScreen.style.display = "none"

})
