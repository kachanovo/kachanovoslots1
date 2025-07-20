let balance = 100;
let slotImages = [
    "assets/img/apple.png",
    "assets/img/cherry.png",
    "assets/img/lemon.png",
    "assets/img/watermelon.png",
    "assets/img/seven.png"
];

function spin() {
    const bet = parseInt(document.getElementById("bet").value);
    if (bet > balance || bet <= 0) {
        alert("Недостатньо коштів або неправильна ставка");
        return;
    }

    balance -= bet;

    const results = [];
    for (let i = 1; i <= 3; i++) {
        const randomIndex = Math.floor(Math.random() * slotImages.length);
        const slotImg = slotImages[randomIndex];
        document.getElementById(`slot${i}`).src = slotImg;
        results.push(slotImg);
    }

    if (results[0] === results[1] && results[1] === results[2]) {
        balance += bet * 10;
        alert("🎉 Ви виграли!");
    }

    document.getElementById("balance").textContent = balance;
}