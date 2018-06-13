class Slider {
    constructor(options = {}) {
        this.$el = options.el;
        this.slides = options.slides;
        this.render();
        this.swiper = this.initSwiper();
    }

    render() {
        this.$el.innerHTML = `<div class="swiper-wrapper"></div>`;
        this.$wrap = this.$el.firstElementChild;
        this.$wrap.innerHTML =this.slides.map(slide =>
            `<a href="${slide.link}" class="swiper-slide">
                <img src="${slide.image}">
            </a>`
        ).join('')
        this.$burster = document.createElement('div');
        this.$burster.setAttribute('class','swiper-pagination');
        this.$el.appendChild(this.$burster);
    }

    initSwiper() {
        return new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay: true,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        });
    }
}