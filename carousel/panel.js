const panels = document.querySelectorAll(".panel__panel");
const prevBtn = document.querySelector(".prev__btn");
const nextBtn = document.querySelector(".next__btn");
let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + panels.length) % panels.length;
  updatePanel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % panels.length;
  updatePanel();
});

function updatePanel() {
  panels.forEach((panel, index) => {
    if (index === currentIndex) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  });
}
