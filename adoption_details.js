function showLarge(e) {
    let small = e.target;
    document.getElementById("large").src = small.src;
}

function init() {
    let smallPics = document.getElementsByClassName("small-pic");
    for (let i = 0; i < smallPics.length; i++) {
        smallPics[i].onclick = showLarge;
    }
}

window.addEventListener("load", init, false);