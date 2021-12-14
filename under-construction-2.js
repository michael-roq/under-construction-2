let pageWrapper = document.querySelector('.page-wrapper');
let underConstructionSign = document.querySelector('.under-construction-sign')

pageWrapper.addEventListener('mousemove', function(event){

    let x = event.pageX;
    let y = event.pageY;
    let xPercentDecimal = Math.round((x/window.innerWidth) * 1000)/1000;
    let yPercentDecimal = Math.round((y/window.innerWidth) * 1000)/1000;


    underConstructionSign.style.transition = 'all 250ms ease-out';
    // underConstructionSign.style.left = `${(xPercentDecimal * 1) * ((underConstructionSign.getBoundingClientRect().width * .75) - (window.innerWidth/8))}px`;
    // underConstructionSign.style.top = `${(yPercentDecimal * 1) * (underConstructionSign.getBoundingClientRect().height - window.innerHeight)}px`;
    underConstructionSign.style.left = `${(x * .8) - (underConstructionSign.offsetWidth - (window.innerWidth/2))+100}px`;
    console.log(yPercentDecimal);
    underConstructionSign.style.top = `${((y * 1)/4)-180}px`;
});