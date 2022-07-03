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
