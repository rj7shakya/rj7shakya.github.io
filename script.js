const hobbies = ["Freelancer", "Software Developer", "Cricket Lover"];

let count = 0;
let index = 0;
let currentHobby = "";
let letter = "";

const typing = () => {
  if (count === hobbies.length) {
    count = 0;
  }

  currentHobby = hobbies[count];
  letter = currentHobby.slice(0, ++index);

  document.querySelector(".hero__text__dynamic").textContent = letter;

  if (letter.length === currentHobby.length) {
    count++;
    index = 0;
  }

  setTimeout(typing, 150);
};

typing();

//button click
//name click
document.querySelector(".header__name").addEventListener("click", () => {
  document.querySelector(".hero__container").scrollIntoView();
});

//about click
document.querySelector(".header__about").addEventListener("click", () => {
  document.querySelector(".about__container").scrollIntoView();
});

//contact click
document.querySelector(".header__contact").addEventListener("click", () => {
  document.querySelector(".contact__container").scrollIntoView();
});

//download click
document.querySelector(".header__download").addEventListener("click", () => {
  window.open("./RajadShakyaCV.pdf", "_blank");
});
