const slides = document.querySelectorAll('.slide')
for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
const newBackground = document.getElementById("background-restaurant");
document.addEventListener("mousemove", function(e) {
    MoveBackground(e);
});

function MoveBackground(e) {
    let offsetX = (e.clientX / window.innerWidth * 30) - 15;
    let offsetY = (e.clientY / window.innerHeight * 10) - 5;
    newBackground.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;");
}
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
fetch('https://api.openweathermap.org/data/2.5/weather?id=5128581&appid=15118786baf2154fe5ab7a6d324ec4f3')
    .then(function(resp) {
        return resp.json()
    })
    .then(function(data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) +
            '&deg';
        document.querySelector('.disclaimer').textContent = data.weather[0]
            ['description'];
        document.querySelector('.features li').innerHTML = data.weather[0]
            ['description'];
    })
    .catch(function() {
        // catch any erors
    });

    