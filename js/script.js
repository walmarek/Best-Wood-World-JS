console.log(
  "%c Just Hello! This code sits in Git!",
  "color: Goldenrod; font-size: 20px; font-weight: bold"
);

{
  const revealButton = document.querySelector(".js-lottery-reveal-button");
  const lotteryQuestion = document.querySelector(".js-lottery-question");

  revealButton.addEventListener("click", () => {
    lotteryQuestion.classList.toggle("lottery-questionReveal");
    revealButton.classList.replace("section__button", "section-questionHide");
  });
}

{
  const noButton = document.querySelector(".js-section-button-hidden-no");
  const yesButton = document.querySelector(".js-section-button-hidden-yes");
  const lottery = document.querySelector(".js-section-lottery");
  const noAnswer = document.querySelector(".js-section-lottery-no");
  const yesAnswer = document.querySelector(".js-section-lottery-yes");

  noButton.addEventListener("click", () => {
    lottery.classList.toggle("sectionLottery-hidden");
    noAnswer.classList.replace("sectionLottery-no", "sectionLottery-reveal");
  });

  yesButton.addEventListener("click", () => {
    lottery.classList.toggle("sectionLottery-hidden");
    yesAnswer.classList.replace("sectionLottery-yes", "sectionLottery-reveal");

    const person = prompt("Please enter your name", "Name here");

if (person != null) {
  document.querySelector(".sectionLottery-message-prompt").innerHTML =
  "Check numbers if You win " + person + "!" ;
}
  });
}

{
  const checkButton = document.querySelector(".js-section-button-check");
  const resultNum1 = document.querySelector(".js-section-lottery-result-one");
  const resultNum2 = document.querySelector(".js-section-lottery-result-two");
  const inputNum1 = document.querySelector(".js-section-lottery-input-one");
  const inputNum2 = document.querySelector(".js-section-lottery-input-two");
  const hiddenResultMessage = document.querySelector(
    ".js-section-lottery-result"
  );

  checkButton.addEventListener(
    "click",
    () => {
      let num1 = Math.floor(Math.random() * 10) + 1;
      let num2 = Math.floor(Math.random() * 10) + 1;
      resultNum1.value = num1;
      resultNum2.value = num2;
      hiddenResultMessage.classList.remove("sectionLottery-messageEnd-hieden");

      // let num01 = Math.random().toFixed(1) * 10;
      // let num02 = Math.random().toFixed(1) * 10;

      let revealedResultMessage;
      if ((num1 == inputNum1.value) & (num2 == inputNum2.value)) {
        revealedResultMessage = "Congratulations You WIN!!! Well Done!";
      } else {
        revealedResultMessage = "You missed, more luck next time!";
      }
      document.querySelector(".sectionLottery-messageEnd").innerHTML =
        revealedResultMessage;
    },
    { once: true }
  );
}
