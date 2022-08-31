// AUDIO
function kanyeSound() {
  let kSound = document.getElementById("audio");
  kSound.play();
  kSound.volume = 0.15;
}

// get data
function getData() {
  kanyeSound();

  fetch("https://api.kanye.rest")
    .then((res) => res.json())
    .then((data) => update(data));
}

// update

function update(data) {
  let quote = document.querySelector("#kanye-quote");
  quote.innerText = "loading...";
  setTimeout(() => {
    quote.innerText = data.quote;
  }, 500);
}
