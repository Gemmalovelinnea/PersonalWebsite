window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})

document.addEventListener('DOMContentLoaded', function (event) {

    document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
    document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'visible';

    document.getElementById('flip-card-btn-turn-to-back').onclick = function () {
        document.getElementById('flip-card').classList.toggle('do-flip');
    };

    document.getElementById('flip-card-btn-turn-to-front').onclick = function () {
        document.getElementById('flip-card').classList.toggle('do-flip');
    };

});


const flipCardWrapAll = document.querySelector("#flip-card-wrap-all")
const cardsWrapper = document.querySelectorAll("#flip-card-wrap-all .flip-card-3D-wrapper")
const cards = document.querySelectorAll("#flip-card-wrap-all .flip-card")
let frontButtons = ""
let backButtons = ""

for (let i = 0; i < cardsWrapper.length; i++) {
    frontButtons = cardsWrapper[i].querySelector(".flip-card-btn-turn-to-back")
    frontButtons.style.visibility = "visible"
    frontButtons.onclick = function () {
        cards[i].classList.toggle('do-flip')
    }

    backButtons = cardsWrapper[i].querySelector(".flip-card-btn-turn-to-front")
    backButtons.style.visibility = "visible"
    backButtons.onclick = function () {
        cards[i].classList.toggle('do-flip')
    }

}

function smoothScroll(target, duration) {
    let position = target.getBoundingClientRect().top;
    let offset = window.pageYOffset;
    let distance = position - offset;
    let start = null;

    const animate = (time) => {
        if (start === null) start = time;
        let elapsed = time - start;
        let y = ease(elapsed, offset, distance, duration);
        window.scrollTo(0, y);
        if (elapsed < duration) requestAnimationFrame(animate)
    }

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animate)
}


let sourceTitle = document.querySelector('.scroll-1 h4')
let source = document.querySelector('.scroll-1 h4')
let targetTitle = document.querySelector('.circle-wrapper h1');
let target = document.querySelector('.circle-wrapper');

sourceTitle.addEventListener('click', function () {
    smoothScroll(target, 1000);
});

let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.cards');

const end = () => {
    isDown = false;
    slider.classList.remove('active');
}

const start = (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

const move = (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = (x - startX);
    slider.scrollLeft = scrollLeft - dist;
}

(() => {
    slider.addEventListener('mousedown', start);
    slider.addEventListener('touchstart', start);

    slider.addEventListener('mousemove', move);
    slider.addEventListener('touchmove', move);

    slider.addEventListener('mouseleave', end);
    slider.addEventListener('mouseup', end);
    slider.addEventListener('touchend', end);
})();

