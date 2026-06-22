const searchInput = document.getElementById("searchInput");

const videoCard = document.querySelector(".video-card");

searchInput.addEventListener("input", function () {

    const keyword = this.value.toLowerCase().trim();

    const title = "video viral terbaru";

    if (title.includes(keyword) || keyword === "") {

        videoCard.style.display = "block";

    } else {

        videoCard.style.display = "none";

    }

});

// Preload thumbnail agar lebih cepat

window.addEventListener("load", () => {

    const img = new Image();

    img.src = "thumbnail.jpg";

});

// Lazy load banner telegram

document.addEventListener("DOMContentLoaded", () => {

    const banner = document.querySelector(".telegram-banner");

    if (banner) {

        banner.loading = "lazy";

        banner.decoding = "async";

    }

});
