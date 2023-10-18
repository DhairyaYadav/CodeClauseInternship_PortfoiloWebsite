const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});

let abtara = document.querySelector("#aboutarea");

let firstPageAnim = (params) => {
    let tl = gsap.timeline();
    tl.from("#nav ul",{
        y: '-60',
        opacity: 1,
        duration:1.5,
        ease: Expo.easeInOut
    });
    tl.from("#imgarea img",{
        x: '350',
        duration: .7,
        ease: Expo.easeInOut,
        delay:-1
    })
    tl.to("#uppertxt h1",{
        y: '0',
        duration:2,
        ease: Expo.easeInOut,
        delay: -1,
        stagger: .2
    });
    tl.to("#bottomtxt h1",{
        y: '0',
        duration:2,
        ease: Expo.easeInOut,
        delay: -1,
        stagger: .2
    });
    tl.to("#bottomtxt h5",{
        y: '0',
        duration:2,
        ease: Expo.easeInOut,
        delay: -1,
        stagger: .2
    });

}

abtara.addEventListener("mouseover",()=>{
    abtara.style.opacity = "1";
})

let tablinks = document.querySelectorAll(".tablinks");
let portfoliocontents = document.querySelectorAll(".portfoliocontent");

let opentab = (tabname) => {
    for(tablink of tablinks){
        tablink.classList.remove('activelink');
    }
    for(portfoliocontent of portfoliocontents){
        portfoliocontent.classList.remove("activetab");
    }
    for (tablink of tablinks) {
        tablink.addEventListener('click', (e) => {
            e.currentTarget.classList.add("activelink");
            document.getElementById(tabname).classList.add("activetab");
        });
    }
}



firstPageAnim();