const searchInput = document.getElementById("searchInput");
const videoCard = document.querySelector(".video-card");

searchInput.addEventListener("keyup", () => {

const keyword = searchInput.value.toLowerCase();

const title =
videoCard.dataset.title.toLowerCase();

if(title.includes(keyword)){
videoCard.style.display = "block";
}else{
videoCard.style.display = "none";
}

});
