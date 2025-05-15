let images = document.querySelectorAll(".image");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    openModel(`images/gallery/img${index + 1}.jpg`);
  });
  document.addEventListener('click', (e) => {
    if (!img.contains(e.target)) {
      console.log(e.target);
      
      if ((e.target.classList.contains("image") || (e.target.classList.contains("imageArea")))) {

      }
      else wrapper.style.display = "none";
    }
  })
})

close.addEventListener("click", () => (wrapper.style.display = "none"));

function openModel(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
  imgWrapper.style.pointerEvents = "none";
}

