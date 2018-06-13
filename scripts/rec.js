// import { Slider } from './slider.js'

fetch('../json/rec.json').then(respons => respons.json()).then(render);

function render(json) {
    renderSlider(json.data.slider);
    renderRadios(json.data.radioList);
    renderhotSongs(json.data.songList);
}

function renderSlider(slides) {
    this.slider = new Slider({
        el: document.querySelector('#slider'),
        slides: slides.map(slide => ({
            link: slide.linkUrl.replace('http://', 'https://'),
            image: slide.picUrl.replace('http://', 'https://')
        }))
    })
}

function renderRadios(radios) {
    document.querySelector('.radios .list').innerHTML = radios.map(radio =>
        `<div class="listItem">
            <div class="listMedia">
                <img src="${radio.picUrl}" alt="图片">
                <span class="icon icon_play"></span>
            </div>
            <div class="listTitle">${radio.Ftitle}</div>
        </div>`).join('')
}

function renderhotSongs(radios) {
    document.querySelector('.hotSongs .list').innerHTML = radios.map(list =>
        `<div class="listItem">
            <div class="listMedia">
                <img src="${list.picUrl}" alt="图片">
                <span class="icon icon_play"></span>
            </div>
            <div class="listTitle">${list.songListDesc}</div>
        </div>`).join('')
}


