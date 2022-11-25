(function(factory) {

    module.exports = factory(require('jquery'), require('animejs/lib/anime.es.js').default);

} (function($, anime) {

    function is(obj) {
        return obj == 0 ? obj.toString() : obj;
    }

    function merge(arr) {
        let obj = {}
        for (var i = 0; i < arr.length; i++) {
            obj = {...obj, ...arr[i]}
        }
        return obj;
    }

    function Go(...args) {
        if (!(this instanceof Go)) return new Go(...args);

        const el = [];
        const config = {};

        for (var i = 0; i < args.length; i++) {
            if (typeof args[i] === 'string') el.push(args[i]);
            else if (typeof args[i] === 'object') Object.assign(config, args[i]);
        }

        this.el = el;
        const conf = {...Go.defaultConfig, ...config};

        // attributes defined by the constructor
        this.mod = conf.mod;
        this.easing = conf.easing;
        this.translate = conf.translate;
        this.duration = conf.duration;
        this.delay = conf.delay;
        this.endDelay = conf.endDelay;

        // the promise attr
        this.promise = Promise.resolve();
    }
    
    Go.prototype = {
        eachTarget(task) {
            let target;
            for (var i = 0; i < this.el.length; i++) {
                if (Array.isArray(this.el)) target = this.el[i];
                else {
                    target = el;
                    i = this.el.length - 1;
                }
                task?.(target);
            }
        },
        move(animation, type) {
            let dirX, dirY;

            if (animation.translate) 
                dirX = dirY = animation.translate + this.mod;
            else 
                dirX = dirY = this.translate + this.mod;

            dirX = type == 'right' ? dirX : '-' + dirX;
            dirY = type == 'down' ? dirY : '-' + dirY;

            if (type == 'up' || type == 'down') dirX = 0;
            else dirY = 0;

            if (animation.start) {
                this.eachTarget((t) => {
                    if (dirX) $(t).css('transform', `translateX(${animation.start})`);
                    else $(t).css('transform', `translateY(${animation.start})`);
                });
            }
            
            const duration = this.duration;
            const easing = this.easing;
            const delay = this.delay;
            const endDelay = this.endDelay;

            this.eachTarget((t) => {
                promise = anime({
                    targets: t,
                    translateX: `+=${dirX}`,
                    translateY: `+=${dirY}`,
        
                    easing: function(el) {
                        const local = $(el).attr('data-easing');
                        return animation.easing || local || easing;
                    },
                    delay: function(el) {
                        const local = $(el).attr('data-delay');
                        return is(animation.delay) || is(local) || is(delay);
                    },
                    endDelay: function(el) {
                        const local = $(el).attr('data-endDelay');
                        return parseInt(is(animation.endDelay) || is(local) || is(endDelay));
                    },
                    duration: function(el) {
                        const local = $(el).attr('data-duration');
                        return is(animation.duration) || is(local) || is(duration);
                    }
                }).finished;
            });

            return promise;
        },

        up() {
            const params = merge(arguments);
            this.promise = this.promise.then(() => this.move(params, 'up'));
            return this;
        },
        down() {
            const params = merge(arguments);
            this.promise = this.promise.then(() => this.move(params, 'down'));
            return this;
        },
        left() {
            const params = merge(arguments);
            this.promise = this.promise.then(() => this.move(params, 'left'));
            return this;
        },
        right() {
            const params = merge(arguments);
            this.promise = this.promise.then(() => this.move(params, 'right'));
            return this;
        },
        complete(task = () => {}) {
            this.promise = this.promise.then(task);
            return this;
        }
    }

    Go.defaultConfig = {
        mod: '%',
        easing: 'linear',
        translate: 100,
        duration: 500,
        delay: 0,
        endDelay: 0
    }

    return Go;
}));


