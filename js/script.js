const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, 
  {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, 
  {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, 
  {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, 
  {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

const arrowTop = document.querySelector("#arrow-top");
const arrowBot = document.querySelector("#arrow-bot");
const boxImg = document.querySelector(".box-img");
const miniImg = document.querySelector(".mini-img")

let indexImg = 0;
let heightMini = 100 / images.length;

images.forEach((element) => {
  boxImg.innerHTML += ` <img class="hide item" src="${element.image}" alt="${element.title}">
                        <div class="box-text hide">
                          <h2>${element.title}</h2>
                          <p>${element.text}</p> 
                        </div>`;
  miniImg.innerHTML += `<img class="item-mini" src="${element.image}" alt="${element.title}">`;
});


const itemsImg = document.getElementsByClassName("item");
const itemsText = document.getElementsByClassName("box-text");
const itemsMiniImg = document.getElementsByClassName("item-mini");

for(let i = 0; i < images.length; i++){
  itemsMiniImg[i].style.height = heightMini + "%";
}

itemsImg[indexImg].classList.remove("hide");
itemsText[indexImg].classList.remove("hide");
itemsMiniImg[indexImg].classList.add("active");

let change;

// EVENTO CLICK FRECCIA SU
arrowTop.addEventListener("click", function(){

  change = false;
  arrowTop.style.display = "none";
  arrowBot.style.display = "flex";
  
  const clock = setInterval(function(){
    
    itemsImg[indexImg].classList.add("hide");
    itemsText[indexImg].classList.add("hide");
    itemsMiniImg[indexImg].classList.remove("active");

    if(indexImg === 0){
      indexImg = images.length - 1;
      console.log(itemsImg[indexImg]);
    }
    else{
      indexImg--;
      console.log(itemsImg[indexImg]);
    }

    itemsImg[indexImg].classList.remove("hide");
    itemsText[indexImg].classList.remove("hide");
    itemsMiniImg[indexImg].classList.add("active");

    if(change){
      clearInterval(clock);
    }
  }, 1000);

});

// EVENTO CLICK FRECCIA GIU
arrowBot.addEventListener("click", function(){

  change = true;
  arrowBot.style.display = "none";
  arrowTop.style.display = "flex";

  const clock = setInterval(function(){

    itemsImg[indexImg].classList.add("hide");
    itemsText[indexImg].classList.add("hide");
    itemsMiniImg[indexImg].classList.remove("active");

    if(indexImg === (images.length - 1)){
      indexImg = 0;
      console.log(itemsImg[indexImg]);
    }
    else{
      indexImg++;
      console.log(itemsImg[indexImg]);
    }


    itemsImg[indexImg].classList.remove("hide");
    itemsText[indexImg].classList.remove("hide");
    itemsMiniImg[indexImg].classList.add("active");

    if(!change){
      clearInterval(clock);
      
    }
  }, 1000);

});


for(let i = 0; i < images.length; i++){
  itemsMiniImg[i].addEventListener("click", function(){
    itemsImg[indexImg].classList.add("hide");
    itemsText[indexImg].classList.add("hide");
    itemsMiniImg[indexImg].classList.remove("active");
    indexImg = i;
    itemsImg[indexImg].classList.remove("hide");
    itemsText[indexImg].classList.remove("hide");
    itemsMiniImg[indexImg].classList.add("active");
  });
}


