const slides = document.getElementsByClassName("slide");
const images = document.getElementsByClassName("individualSlides");
var currentSlide = 0;
var currentPic = 0;

function nextSlide(next) {
    console.log(slides);
    currentSlide += next;
    if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    console.log(currentSlide);


    if (currentSlide == 0) {
        console.log("in the zero loop " + currentSlide);
        slides[currentSlide].classList.add("active");
        slides[slides.length-1].classList.remove("active");

        console.log(slides[currentSlide]);
        console.log(slides[slides.length-1]);
    }
    else {
        console.log("in the other loop " + currentSlide);
        slides[currentSlide].classList.add("active");
        slides[currentSlide-1].classList.remove("active");
        console.log(slides[currentSlide]);
        console.log(slides[currentSlide-1]);
    }
}

function nextPic() {
    console.log(images.length);
    console.log(currentPic);
    currentPic += 1;
    if (currentPic > images.length - 1) {
        currentPic = 0;
    }
    console.log(currentPic);


    if (currentPic == 0) {
        console.log("in the zero loop " + currentPic);
        images[currentPic].classList.add("activePic");
        images[images.length-1].classList.remove("activePic");

        console.log(images[currentPic]);
        console.log(images[images.length-1]);
    }
    else {
        console.log("in the other loop " + currentPic);
        images[currentPic].classList.add("activePic");
        images[currentPic-1].classList.remove("activePic");
        console.log(images[currentPic]);
        console.log(images[currentPic-1]);
    }
}