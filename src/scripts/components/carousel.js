import 'owl.carousel';

export const mainOwl = $('#main-owl').owlCarousel({
    center: true,
    dots: false,
    nav: false,
    autoWidth: true,
    touchDrag: false,
    mouseDrag: false,
    slideTransition: '300ms transform cubic-bezier(0.37, 0, 0.63, 1)',
    margin: 10,
    items: 3
});

export const indexOwl = $('#index-owl').owlCarousel({
    dots: false,
    touchDrag: false,
    mouseDrag: false,
    margin: 16,
    responsive: {
        0: {
            items: 3,
            nav: true
        },
        980: {
            items: 4
        }
    },
    navText: ["<svg fill='#fff' height='24' width='24'><path d='m14.1 17.75-1.15-1.175 3.775-3.8H4.1v-1.65h12.625l-3.775-3.8L14.1 6.15l5.8 5.8Z' transform='matrix(-1 0 0-1 24 24)'></path></svg>", "<svg fill='#fff' height='24' width='24'><path d='m14.1 17.75-1.15-1.175 3.775-3.8H4.1v-1.65h12.625l-3.775-3.8L14.1 6.15l5.8 5.8Z'></path></svg>"]
});