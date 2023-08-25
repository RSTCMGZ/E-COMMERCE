const config = {
    type: "carousel",
    perView: 4,
    gap: 20,
    autoplay: 3000,
    breakpoints: {
        992: {
            perView: 3,
        },
        768: {
            perView: 2,
        },
        576: {
            perView: 1,
        },
    },
}

new Glide(".product_carousel", config).mount()





const config2 = {
    type: "carousel",
    perView: 4,
    gap: 20,
    autoplay: 3000,
    breakpoints: {
        992: {
            perView: 3,
        },
        768: {
            perView: 2,
        },
        576: {
            perView: 1,
        },
    },
}

new Glide(".product_carousel2", config).mount()