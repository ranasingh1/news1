window.addEventListener("scroll", function () {
  let navbar = document.getElementById("top");
  if (window.pageYOffset >= 202) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

document.querySelectorAll(".video-container video").forEach((vid) => {
  vid.onclick = () => {
    document.querySelector(".popup-video").style.display = "block";
    document.querySelector("popup-video iframe").src = vid.getAttribute("src");
  };
});

document.querySelector(".popup-video span").onclick = () => {
  document.querySelector(".popup-video").style.display = "none";
};

window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".popup").style.display = "block";
  }, 1000);
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});
