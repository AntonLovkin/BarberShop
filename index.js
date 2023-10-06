const images = [];
let timeoutId;

images[0] = 'images/Slider_img_3.png';
images[1] = 'images/Slider_img_2.png';
images[2] = 'images/Slider_img_1.png';

const heroBgImg = document.getElementById('hero');
const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');
let currentSlide = 0;
// console.log(currentSlide)
function showSlide(index) {
    heroBgImg.style.backgroundImage = `url('${images[index]}')`;
};

prevBtn.addEventListener('click', () => {
    clearTimeout(timeoutId)
    currentSlide = currentSlide - 1;
    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    };
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    clearTimeout(timeoutId)
    currentSlide = currentSlide + 1;
    if (currentSlide === images.length) {
        currentSlide = 0;
    };
    showSlide(currentSlide);
});

// showSlide(currentSlide);

let i = 0;
function changePicture() {
    heroBgImg.style.backgroundImage = `url('${images[i]}')`;
     heroBgImg.style.transition = 'all 1s ease-out';
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    timeoutId = setTimeout("changePicture()", 3000);
}

window.onload = changePicture;

// -------------------------------
const scrollButton = document.getElementById('scrollButton');

window.addEventListener('scroll', () => {
    
    if (window.scrollY > 300) {
        // const settimeoutId = setTimeout(() => {
        //     console.log('start')
        //     scrollButton.style.display = 'none';
        // }, 3000);

        scrollButton.style.display = 'block';

        // clearTimeout(settimeoutId);

    } else {
        scrollButton.style.display = 'none';
    }
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


