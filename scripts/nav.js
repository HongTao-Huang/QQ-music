!(function () {
    let navView = document.querySelector('#topNavbar');
    !(function () {
        let nav = document.querySelector('#topNavbar .navList');
        let main = document.querySelector('main');
        [].forEach.call(nav.children, child=>{
            child.classList.remove('active');
        });
        [].forEach.call(main.children, child=>{
            child.classList.add('hide');
        })
        nav.children.item(2).classList.add('active');
        main.children.item(2).classList.remove('hide');
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