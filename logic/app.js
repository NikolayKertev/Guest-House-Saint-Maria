let images = document.querySelectorAll(".image");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModel(`images/gallery/img${index+1}.jpg`);
  });
});

close.addEventListener("click", () => (wrapper.style.display = "none"));

function openModel(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
  imgWrapper.style.pointerEvents = "none";
}

