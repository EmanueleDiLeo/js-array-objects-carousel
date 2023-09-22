const images =[
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp"
];

const arrowTop = document.querySelector(".arrow-top");
const arrowBot = document.querySelector(".arrow-bot");
const boxImg = document.querySelector(".box-img");
const miniImg = document.querySelector(".mini-img")

let indexImg = 0;

let heightMini = 100 / images.length;

for(let i = 0; i < images.length; i++){
  boxImg.innerHTML += `<img class="hide item" src="${images[i]}" alt="${i+1}">`;
  miniImg.innerHTML += `<img class="item-mini" src="${images[i]}" alt="${i+1}">`;
}

const itemsImg = document.getElementsByClassName("item");
const itemsMiniImg = document.getElementsByClassName("item-mini");

for(let i = 0; i < images.length; i++){
  itemsMiniImg[i].style.height = heightMini + "%";
}

itemsImg[indexImg].classList.remove("hide");
itemsMiniImg[indexImg].classList.add("active");

// EVENTO CLICK FRECCIA SU
arrowTop.addEventListener("click", function(){
  itemsImg[indexImg].classList.add("hide");
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
  itemsMiniImg[indexImg].classList.add("active");

});

// EVENTO CLICK FRECCIA GIU
arrowBot.addEventListener("click", function(){

  itemsImg[indexImg].classList.add("hide");
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
  itemsMiniImg[indexImg].classList.add("active");

});

