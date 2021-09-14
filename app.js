const blobPath2 = "M36.5,-36.7C49.5,-23.5,63.8,-11.8,64.4,0.6C65,13,52,26,39,35.2C26,44.3,13,49.6,-3.3,53C-19.7,56.3,-39.4,57.7,-52.5,48.5C-65.7,39.4,-72.2,19.7,-65.6,6.7C-58.9,-6.4,-39,-12.7,-25.8,-25.9C-12.7,-39,-6.4,-58.9,2.7,-61.6C11.8,-64.3,23.5,-49.8,36.5,-36.7Z";

const blobPath1 = "M25.8,-16C38.5,-13.2,57.2,-6.6,57.2,-0.1C57.1,6.5,38.3,13,25.6,22.5C13,32,6.5,44.5,-8.4,52.9C-23.3,61.3,-46.7,65.7,-55.9,56.2C-65.1,46.7,-60.2,23.3,-54.5,5.7C-48.8,-11.9,-42.2,-23.8,-33,-26.6C-23.8,-29.4,-11.9,-23.1,-2.6,-20.5C6.6,-17.8,13.2,-18.8,25.8,-16Z";

const blobPath3 = "M50.1,-52.3C56.6,-43.6,47.8,-21.8,43.6,-4.2C39.4,13.5,39.9,26.9,33.4,37.6C26.9,48.3,13.5,56.2,-0.4,56.5C-14.2,56.9,-28.4,49.8,-34.6,39.1C-40.8,28.4,-39.1,14.2,-35.9,3.1C-32.8,-8,-28.4,-15.9,-22.1,-24.6C-15.9,-33.3,-8,-42.8,6.9,-49.7C21.8,-56.6,43.6,-61,50.1,-52.3Z"
setInterval(() => {
    // animation morph
    const timeline = anime.timeline({
        duration : 5000,
        easing : "easeOutExpo"
    });
    timeline.add({
        targets: ".firstBlob",
        d: [
            {value: blobPath2},
            {value: blobPath1},
            // {value: blobPath3}
        ]
    })
}, 5000);