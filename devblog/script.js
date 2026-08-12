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
