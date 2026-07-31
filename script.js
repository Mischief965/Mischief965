const images = [

{
src:"images/gallery/009.jpg",
caption:"설명9"
},

{
src:"images/gallery/008.jpg",
caption:"설명8"
},

{
src:"images/gallery/007.jpg",
caption:"설명7"
},

{
src:"images/gallery/006.jpg",
caption:"설명6"
},

{
src:"images/gallery/005.jpg",
caption:"설명5"
},

{
src:"images/gallery/004.jpg",
caption:"설명4"
},

{
src:"images/gallery/003.jpg",
caption:"설명3"
},

{
src:"images/gallery/002.jpg",
caption:"설명2"
},

{
src:"images/gallery/001.jpg",
caption:"설명1"
}

];

let current = 0;

function openLightbox(index) {
    current = index;
    updateImage();
    document.getElementById("lightbox").classList.add("show");
}

function closeLightbox() {
    document.getElementById("lightbox").classList.remove("show");
}

function updateImage() {
    document.getElementById("lightbox-img").src = images[current].src;
    document.getElementById("caption").textContent = images[current].caption;
}

function changeImage(step) {
    current += step;

    if (current < 0) {
        current = images.length - 1;
    }

    if (current >= images.length) {
        current = 0;
    }

    updateImage();
}

document.addEventListener("keydown", function (e) {

    const lightbox = document.getElementById("lightbox");

    if (e.key === "Escape") {

        if (lightbox.classList.contains("show")) {
            closeLightbox();
        } else {

            // gallery.html에서만 Home으로 이동
            if (window.location.pathname.includes("gallery")) {
                window.location.href = "index.html";
            }

        }

    }

    if (!lightbox.classList.contains("show")) return;

    if (e.key === "ArrowLeft") changeImage(-1);
    if (e.key === "ArrowRight") changeImage(1);

});

document.getElementById("lightbox").addEventListener("click", function (e) {
    if (e.target.id === "lightbox") {
        closeLightbox();
    }
});

// 메인 미리보기 만들기
const preview = document.getElementById("preview-gallery");

if (preview) {

    images.slice(0, 5).forEach((image, index) => {

        preview.innerHTML += `
            <a href="#" onclick="openLightbox(${index});return false;">
                <img src="${image.src}">
            </a>
        `;

    });

}


// 갤러리 페이지 만들기
const gallery = document.getElementById("gallery");

if (gallery) {

    images.forEach((image, index) => {

        gallery.innerHTML += `
            <a href="#" onclick="openLightbox(${index});return false;">
                <img src="${image.src}">
            </a>
        `;

    });

}


const quotes = [

    "I am Loki of Asgard.",
    "Kneel!!",
    "Kneel before me. I said, KNEEL!!!",
    "I have been falling...! for 30 minutes!",
    "Your savior is here!!!",
    "I, Loki, Prince of Asgard. ...Odinson. rightful king of Jotunheim, the God of Mischief, do hereby pledge to you my undying fidelity.",
    "I assure you, Brother. The sun will shine on us again.",
    "Glorious purpose⋯.",
    "Love is a dagger.",
    "For you, for all of us.",
    "I know what I want. I know what kind of god I need to be.",
    "We are playing god.",
    "Good. 'Cause that's not who I am anymore. I'm Sylvie now.",
    "I need your unique Loki perspective.",
    "For all time. Always.",

];

const randomQuote = quotes[
    Math.floor(Math.random() * quotes.length)
];

const quote = document.getElementById("quote");

if (quote) {
    quote.textContent =
        quotes[Math.floor(Math.random() * quotes.length)];
}