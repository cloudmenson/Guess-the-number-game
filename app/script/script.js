let secretNum = Math.ceil(Math.random() * 10);
let tries = 0;

function guessNum(num) {
  if (tries >= 5) {
    return alert("GAME OVER");
  } else if (num === secretNum) {
    return alert("WIN! Reload the page to start again.");
  } else if (secretNum > 5) {
    alert("You didn't guess, but the number is somewhere ahead!");
    tries++;
  } else if (secretNum < 5) {
    alert("You didn't guess, but the number is somewhere behind!");
    tries++;
  }
}
