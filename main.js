let wordsInput = document.querySelector("#words-input"),
  charCount = document.querySelector(".char-count"),
  wordsCount = document.querySelector(".words-count");

wordsInput.addEventListener("input", () => {
  chars = wordsInput.value.length;
  words = wordsInput.value.split(" ").length;

  if (words == null) {
    words = 0;
  }

  charCount.innerHTML = `Characters : ${chars}`;
  wordsCount.innerHTML = `Words : ${words}`;
});
