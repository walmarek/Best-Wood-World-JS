console.log(
  "%c Just Hello! This code sits in Git!",
  "color: Goldenrod; font-size: 20px; font-weight: bold"
);

{
  const show = document.querySelector(".js-section-button");
  const message = document.querySelector(".js-section-message");

  show.addEventListener("click", () => {
    message.classList.toggle("section--messageReveal");
    show.classList.replace("section__button", "section--message");
  });
}

{
  const noButton = document.querySelector(".js-section-buttonHidden-no");
  const yesButton = document.querySelector(".js-section-buttonHidden-yes");
  const project = document.querySelector(".js-section-project");
  const noOption = document.querySelector(".js-section-projectNo");
  const yesOption = document.querySelector(".js-section-projectYes");

  noButton.addEventListener("click", () => {
    project.classList.toggle("section--projectHidden");
    noOption.classList.replace("section--projectNo", "section--projectReveal");
  });

  yesButton.addEventListener("click", () => {
    project.classList.toggle("section--projectHidden");
    yesOption.classList.replace(
      "section--projectYes",
      "section--projectReveal"
    );
  });
}

{
  const checkButton = document.querySelector(".js-section-buttonSpin");
  const inputOne = document.querySelector(".js-section-projectInput-one");
  const inputTwo = document.querySelector(".js-section-projectInput-two");
  const outputOne = document.querySelector(".js-section-projectInput-enterOne");
  const outputTwo = document.querySelector(".js-section-projectInput-enterTwo");
  const result = document.querySelector(".js-section-messageEnd");

  checkButton.addEventListener("click", () => {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    document.querySelector(".js-section-projectInput-one").value = num1;
    document.querySelector(".js-section-projectInput-two").value = num2;
    result.classList.remove("section--messageEnd-hiedden");
    console.log(num1, num2);

    let messageResult;
    if ((num1 == outputOne.value) & (num2 == outputTwo.value)) {
      prompt("Well done You did it!!! What is your name?", "Name:");
      messageResult = "Congratulation You WIN!!!";
    } else {
      messageResult = "You missed, more luck next time!";
    }

    document.querySelector(".section--messageEnd").innerHTML = messageResult;
  });

  // let num01 = Math.random().toFixed(1) * 10;
  // let num02 = Math.random().toFixed(1) * 10;
}
