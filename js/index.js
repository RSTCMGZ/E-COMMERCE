//! home sidebar start
const btnOpenSidebar = document.querySelector("#btn-menu")
const sidebar = document.querySelector("#sidebar")
const btnCloseSidebar = document.querySelector("#close-sidebar")

//? click outside start


btnOpenSidebar.addEventListener(("click"), () => {
    sidebar.style.left = "0"
})
btnCloseSidebar.addEventListener(("click"), () => {
    sidebar.style.left = "-100%"
})


document.addEventListener(("click"), (e) => {
    if (!e.composedPath().includes(sidebar) && !e.composedPath().includes(btnOpenSidebar)) {
        sidebar.style.left = "-100%"
    }
})
//? click outside end

//! home sidebar end























//! search  modal start

const btnOpenSearch = document.querySelector(".search-button")
const modalSearch = document.getElementsByClassName("modal-search")
const btnCloseSearch = document.getElementById("close-search")
const modalSearchWrapper = document.getElementsByClassName("modal-wrapper")


btnOpenSearch.addEventListener(("click"), () => {
    modalSearch[0].style.visibility = "visible"
    modalSearch[0].style.opacity = "1"
})

btnCloseSearch.addEventListener(("click"), () => {
    modalSearch[0].style.visibility = "hidden"
    modalSearch[0].style.opacity = "0"
})

//? click outside start

document.addEventListener("click", function (e) {
    if (
        !e.composedPath().includes(modalSearchWrapper[0]) &&
        !e.composedPath().includes(btnOpenSearch)
    ) {
        modalSearch[0].style.visibility = "hidden"
        modalSearch[0].style.opacity = "0"


    }
})

//? clic1k outside end


//! search  modal end

//! slider start

let slideIndex = 1;

showSlides(slideIndex)
setInterval(() => {
    showSlides((slideIndex += 1))
}, 4000)
function plusSlide(n) {
    showSlides((slideIndex += n))
}

function currentSlide(n) {
    showSlides((slideIndex = n))
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slider-item")
    const dots = document.getElementsByClassName("slider-dot")
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = 3;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")

    }

    slides[slideIndex - 1].style.display = "flex"
    dots[slideIndex - 1].className += " active"
}


//! slider end

