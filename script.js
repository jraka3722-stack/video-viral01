// ==============================
// SEARCH VIDEO
// ==============================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const keyword = this.value.toLowerCase().trim();

        const card = document.querySelector(".card");

        const title = "video viral terbaru";

        if (keyword === "" || title.includes(keyword)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}

// ==============================
// NEXT VIDEO
// ==============================

function nextVideo() {

    window.open(
        "https://cdn2.sliwtdrive.com/BIYDvcux1.mp4",
        "_blank"
    );

}

// ==============================
// PRELOAD IMAGE
// ==============================

window.addEventListener("load", () => {

    const thumbnail = new Image();

    thumbnail.src = "thumbnail.webp";

});

// ==============================
// SMOOTH LOAD
// ==============================

document.querySelectorAll("img").forEach((img) => {

    img.setAttribute("decoding", "async");

});

// ==============================
// DISABLE RIGHT CLICK (OPSIONAL)
// ==============================

document.addEventListener("contextmenu", (e) => {

    e.preventDefault();

});
