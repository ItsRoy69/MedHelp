  //js for the card state management

  var cards = document.getElementsByClassName("card");
  for(let i = 0; i < cards.length; i++) {
    var categories = cards[i].getElementsByClassName("category");
      for(let j = 0; j < categories.length; j++){
        categories[j].addEventListener("click", () => {
          console.log(`clicked category ${categories[j].innerHTML} of card ${i+1}`)
          cards[i].getElementsByClassName("category-active")[0].classList.remove("category-active");
          cards[i].getElementsByClassName("category")[j].classList.add("category-active");
          console.log(`added active category class to ${categories[j].innerHTML} of card ${i+1}`);
          if (screen.width >= 1000){
            cards[i].getElementsByClassName("indicator")[0].style.left = `${5 + j * (25)}%`;
          }
          else{
            cards[i].getElementsByClassName("indicator")[0].style.left = `${2.5 + j * (25)}%`;
          }
          cards[i].getElementsByClassName("active")[0].classList.remove("active");
          cards[i].getElementsByClassName("infotext")[j].classList.add("active");
        })
      }
  };
  
