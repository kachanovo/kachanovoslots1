
let balance = 100;
const fruits = ["fruit1.png", "fruit2.png", "fruit3.png", "fruit4.png", "fruit5.png"];
const reelEls = ["reel1", "reel2", "reel3"];
let history = [];

function spin() {
  const bet = parseInt(document.getElementById("bet").value);
  if (bet > balance) {
    alert("Недостатньо коштів!");
    return;
  }

  document.getElementById("spin-sound").play();

  const res = [];
  reelEls.forEach((reelId, i) => {
    const fruit = fruits[Math.floor(Math.random() * fruits.length)];
    document.getElementById(reelId).innerHTML = `<img src="assets/${fruit}" />`;
    res.push(fruit);
  });

  if (res[0] === res[1] && res[1] === res[2]) {
    const win = bet * 5;
    balance += win;
    document.getElementById("win-sound").play();
    alert("🎉 Виграш! +" + win + "$");
    history.push("+" + win + "$ — 3 " + res[0]);
  } else {
    balance -= bet;
  }

  document.getElementById("balance").textContent = balance;
}
