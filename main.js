// change background 

let landing = document.querySelector(".landing");
let imgsArray = ["landing-bg-1.jpg", "landing-bg-2.jpg", "landing-bg-3.jpg", "landing-bg-5.jpg"];


let optionStat = true;
let backInterval;

let randomImgs = () => {
    if(optionStat) {

        backInterval = setInterval(() => {
            let randomNum = Math.floor(Math.random() * imgsArray.length);
            landing.style.backgroundImage = 'url("imgs/'+ imgsArray[randomNum] + '")'
        }, 10000)
                
    }
}


// toggle setting box 

let settingBox = document.querySelector(".setting-box");
gearDiv = document.querySelector(".setting-box .gear-icon");
gearIcon = document.querySelector(".setting-box .gear-icon i");

gearDiv.addEventListener("click", (e) => {
    settingBox.classList.toggle("active");
    gearIcon.classList.toggle("fa-spin");

})

// remove active class on click in window 

settingBox.onclick = (e) => {
    e.stopPropagation()
}

document.addEventListener("click", (e) => {
    e.stopPropagation()
    if(e.target !== gearIcon && e.target !== settingBox) {
        settingBox.classList.remove("active");
        gearIcon.classList.remove("fa-spin");
    }
})

// mobile menu 

let mobileIcon = document.querySelector(".mobile-icon");
    menu = document.querySelector(".landing .container .links");

mobileIcon.addEventListener("click", () => {
    menu.classList.toggle("open");
    mobileIcon.classList.replace("fa-bars", "fa-xmark");

    if(!menu.classList.contains("open")){
        mobileIcon.classList.replace("fa-xmark", "fa-bars");
    }
})

// switch colors

let colorStore = localStorage.getItem("color");

if(colorStore !== null) {
    document.documentElement.style.setProperty("--main-clr", localStorage.getItem("color"));
}



let colors = document.querySelectorAll(".clr-options li");

colors.forEach((color) => {
    color.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main-clr", e.target.dataset.color);
        localStorage.setItem("color", e.target.dataset.color)
    })
})

// random image option

let btns = document.querySelectorAll(".bg-options button");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.target.parentElement.querySelector(".active").classList.remove("active")
        e.target.classList.add("active");

        if(e.target.dataset.option == "yes"){
            optionStat = true
            randomImgs()
        }else{
            optionStat = false
            clearInterval(backInterval)
        }
    })
})


randomImgs()
