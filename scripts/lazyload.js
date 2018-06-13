function lazyload() {
    let imgs = [].slice.call(document.querySelectorAll('.lazyload'));
    if('IntersectionObserver' in window){
        let observer = new IntersectionObserver(function (entries) {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0) {
                        loadImg(entry.target, () => {
                            observer.unobserve(entry.target)
                        })
                    }
                })
            }, {threshold: 0.01}
        )
        imgs.forEach(img => observer.observe(img))
    }
    let onscroll = throttle(function () {
        if(imgs.length === 0){
            return window.removeEventListener('scroll',onscroll);
        }
         // imgs = imgs.filter(img => img.classList.contains('lazyload'));
         imgs.forEach(img =>inViewport(img) && loadImg(img));
    },250);
    window.addEventListener('scroll',onscroll);
    window.dispatchEvent(new Event('scroll'));
}

function inViewport(img) {
    let {top , left , right , bottom} = img.getBoundingClientRect();
    let vpHeight = document.documentElement.clientHeight;
    return (top > 0 && top < vpHeight || bottom > 0 && bottom < vpHeight);
}

function loadImg(img , callback) {
    let image = new Image();
    image.src = img.dataset.src;
    image.onload = function () {
        img.src = image.src;
        img.classList.remove('lazyload');
        if(typeof callback === 'function')callback();
    }
}

function throttle(func , wait) {
    let previous , timer;
    return function fn() {
        let current = Date.now();
        let diff = current - previous;
        if(!previous || diff >= wait){
            func()
            previous = current;
        }else if(diff < wait){
            clearTimeout(timer);
            timer = setTimeout(fn , wait - diff);
        }
    }
}