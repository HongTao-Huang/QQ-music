!(function () {
    let navView = document.querySelector('#topNavbar');
    !(function () {
        let main = document.querySelector('main');
        [].forEach.call(main.children, child=>{
            child.classList.add('hide');
        })
        main.firstElementChild.classList.remove('hide');
    }).call();
    navView.addEventListener('click',function (ev) {
        let element = ev.target;
        [].forEach.call(element.parentElement.children, tab =>{
            tab.classList.remove('active');
        })
        element.classList.add('active');
        if(element.dataset.role !== 'tabs') return;
        let nowTab = document.querySelector(element.dataset.view);
         [].forEach.call(nowTab.parentElement.children, child =>{
             child.classList.add('hide');
         })
        nowTab.classList.remove('hide');
    })
}).call();