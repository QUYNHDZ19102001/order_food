$('.slide').owlCarousel({
    loop:true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    
    nav : true, // Show next and prev buttons
    slideSpeed : 1000,
    paginationSpeed : 2000,
    singleItem:true

})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})