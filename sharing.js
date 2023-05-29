const shareBtn = document.querySelector(".share-btn");

shareBtn.addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({
      title: "MedHelp",
      "sizes": "512x512",
      url: "https://itsroy69.github.io/MedHelp/",
    });
  }
});
