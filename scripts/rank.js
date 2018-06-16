fetch('https://qq-music-api.now.sh/top').then(respons => respons.json()).then(render);

function render(json){
    renderTopList(json.data.topList);
    lazyload();
}

function renderTopList(tops) {
    document.querySelector('#rankingView .topList').innerHTML = tops.map(top =>
        `<li class="topListItem clearFix">
                <div class="topItemMedia">
                    <img data-src="${top.picUrl}" class="lazyload">
                </div>
                <div class="topItemInfo">
                    <div class="topContent">
                        <h3 class="topTitle">${top.topTitle}</h3>
                        ${songList(top.songList)}
                    </div>
                </div>
            </li>`
    ).join('');
}

function songList(songs) {
    return songs.map((song , index) => `<p class="topText">${index+1}<span class="songName">${song.songname}</span>- ${song.singername}</p>`).join('');
}
