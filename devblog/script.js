const marqueeTrack = document.querySelector(".marquee-track");

if (marqueeTrack) {

    const items = Array.from(marqueeTrack.children);

    for (let i = items.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [items[i], items[j]] = [items[j], items[i]];

    }

    items.forEach(item => {
        marqueeTrack.appendChild(item);
    });

}

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
