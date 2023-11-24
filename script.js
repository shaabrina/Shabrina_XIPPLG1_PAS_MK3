let currBerryTile;
let currCatDogTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    // i dimulai dari 0 sampai 8
    // akan berhenti di 9
    for (let i = 0; i < 9; i++){ 

        // <div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile)
        document.getElementById("board").appendChild(tile);
    }
    // kecepatan strawberry dan catdog berpindah 
    // 2000 miliseconds sama kayak 2 detik
    setInterval(setStrawberry, 2000)
    setInterval(setCatDog, 2000)
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9 );
    return num.toString();
}

function setStrawberry() {
    if (gameOver) {
        return;
    }

    if (currBerryTile) {
        currBerryTile.innerHTML = "";
    }

    let Strawberry  = document.createElement("img");
    Strawberry.src = "images/strawberry shortcake.png";

    let num = getRandomTile();
    if (currCatDogTile && currCatDogTile.id == num) {
        return;
    }
    currBerryTile = document.getElementById(num);
    currBerryTile.appendChild(Strawberry);
}

function setCatDog() {
    if (gameOver) {
        return;
    }

    if (currCatDogTile) {
        currCatDogTile.innerHTML = "";
    }

    let CatDog = document.createElement("img");
    CatDog.src = "images/cat and dog.png";

    let num = getRandomTile();
    if (currBerryTile && currBerryTile.id == num) {
        return;
    }
    currCatDogTile = document.getElementById(num);
    currCatDogTile.appendChild(CatDog);
}

function selectTile() {
    if (gameOver) {
        return;
    }

    // jika click strawberry shortcake maka score akan bertambah 10
    if (this == currBerryTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == currCatDogTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}