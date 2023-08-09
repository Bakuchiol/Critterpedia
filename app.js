const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active')
    // console.log(e.pageX);
    startX = e.pageX - slider.offsetLeft;
    console.log(startX);
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active')
    
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active')

});

slider.addEventListener('mousemove', () => {
    console.log(isDown);
    console.log('WORKS');
    // stops the function from running
    if(!isDown) return
    console.log(startX);
});





