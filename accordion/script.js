const accordion = document.querySelectorAll(".contentBx");
for (let x = 0; x < accordion.length; x++) {
  accordion[x].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
