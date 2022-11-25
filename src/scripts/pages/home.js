import Go from '../helpers/go';
import { mainOwl, indexOwl } from '../components/carousel';

class Home {
    constructor() {
        this.pageIndex = 0;
        this.n = $('.section').length;
        this.animating = false;

        // bootstrap
        $('.section').eq(0).addClass('is-active');

        for (var i = 0; i < this.n; i++) {
            const color = $('.section').eq(i).data('color');
            $('.section').eq(i).find('.title').css('color', color);
        }
        const resize = () => { $(':root').css('--full-vh', $(window).height() + 'px'); }
        $(window).on('resize', resize);
        resize();

        this.animations();
        this.handleMenu();
    }

    animations() {
        // switch on wheel
        $(window).on('wheel', e => {
            const delta = e.originalEvent.wheelDelta / 120
            if (delta > 0) {
                this.switchPage(this.pageIndex - 1);
                
            } else if (delta < 0) {
                this.switchPage(this.pageIndex + 1);
            }
        });

        // switch on touch
        let ts;
        $(window).on('touchstart', e => {
            ts = e.originalEvent.touches[0].clientX;
        });
        $(window).on('touchend', e => {
            const te = e.originalEvent.changedTouches[0].clientX;
            if (ts > te + 5) this.switchPage(this.pageIndex + 1)
            else if (ts < te - 5) this.switchPage(this.pageIndex - 1)
        })

        // switch with index slider
        $('#index-owl .owl-next').off('click').on('click', () => {
            this.switchPage(this.pageIndex + 1);
        });

        $('#index-owl .owl-prev').off('click').on('click', () => {
            this.switchPage(this.pageIndex - 1);
        });

        $('#index-owl .item').each((i, el) => {
            $(el).on('click', () => { this.switchPage(i); });
        });
    }

    switchPage(i) {
        if (i >= this.n || i < 0 || this.animating ) return false;
        this.animating = true; 

        const currItems = '.section.is-active .roll';
        const currPage = '.section.is-active';

        // move index box
        if (!($(window).width() <= 968 && i > 2)) 
            $('#box').css('transform', `translateX(${i * 80}px)`);

        // handle carousel
        mainOwl.trigger('to.owl.carousel', [i]);
        indexOwl.trigger('to.owl.carousel', [i - 2]);
        $('#index-owl .owl-prev').toggleClass('disabled', i <= 0);

        Go(currItems)
            .up({
                easing: 'easeInSine',
                duration: 260
            })
            .complete(() => {
                $(currPage).removeClass('is-active');
                $('.section').eq(i).addClass('is-active');
                this.pageIndex = i
            })
            .up({
                start: '100%',
                easing: 'easeOutExpo',
                duration: 1000
            })
            .complete(() => { this.animating = false });
    }

    handleMenu() {
        const settings = {
            duration: 700,
            easing: 'cubicBezier(.34,.52,0,1)'
        }

        open = () => {
            $('.header').addClass('is-opened');
            Go('#opener').up(settings);
            Go('#closer', '.header .roll').up(settings, {start: '100%'})
                .complete(() => $('#closer').one('click', close) )
        }

        close = () => {
            Go('#closer', '.header .roll').down(settings, {delay: 0});
            Go('#opener').down(settings)
                .complete(() => $('.header').removeClass('is-opened'));
        }

        $('#opener').on('click', open);
    }
}

export default Home;