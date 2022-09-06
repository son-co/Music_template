$(document).ready(function() {
    $('.list-popular').owlCarousel({
        nav: true,
        navSpeed: 1200,
        rewind: true,
        dots: false,
        items: 8,
        margin: 15,
        navText: ["<a class='prev'> <ion-icon name='arrow-back-outline'></ion-icon></a>", "<a class='next'> <ion-icon name='arrow-forward-outline'></ion-icon><a/>"],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            360: {
                items: 1,
                nav: true
            },
            768: {
                items: 4
            },
            1024: {
                items: 7
            },
            1200: {
                items: 8
            }
        }
    });
    $('.list-popular_artist').owlCarousel({
        nav: true,
        navSpeed: 1200,
        rewind: true,
        dots: false,
        items: 8,
        margin: 10,
        navText: ["<a class='prev'> <ion-icon name='arrow-back-outline'></ion-icon></a>", "<a class='next'> <ion-icon name='arrow-forward-outline'></ion-icon><a/>"],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            360: {
                items: 1,
                nav: true
            },
            768: {
                items: 4
            },
            1024: {
                items: 9
            },
            1200: {
                items: 11
            }
        }
    });


})