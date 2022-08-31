// Navigation with mouse touch
const slider = document.querySelector('.scroll-touch');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; 
    slider.scrollLeft = scrollLeft - walk;
});

// show more/less description
function showMoreOrLess1() {
  let dots = document.getElementById("dots1");
  let moreText = document.getElementById("more1");
  let btnText = document.getElementById("btn-show1");

  if (dots.style.display === "none") {
    btnText.innerHTML = "show more";
    dots.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "show less";
    moreText.style.display = "inline";
  }
}

function showMoreOrLess2() {
  let dots = document.getElementById("dots2");
  let moreText = document.getElementById("more2");
  let btnText = document.getElementById("btn-show2");

  if (dots.style.display === "none") {
    btnText.innerHTML = "show more";
    dots.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "show less";
    moreText.style.display = "inline";
  }
}

function showMoreOrLess3() {
  let dots = document.getElementById("dots3");
  let moreText = document.getElementById("more3");
  let btnText = document.getElementById("btn-show3");

  if (dots.style.display === "none") {
    btnText.innerHTML = "show more";
    dots.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "show less";
    moreText.style.display = "inline";
  }
  }

function showMoreOrLess4() {
  let dots = document.getElementById("dots4");
  let moreText = document.getElementById("more4");
  let btnText = document.getElementById("btn-show4");

  if (dots.style.display === "none") {
    btnText.innerHTML = "show more";
    dots.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "show less";
    moreText.style.display = "inline";
  }
}

// icon likes 
function myHeart1() {
  let x  = document.getElementById("count1");
  if(x.innerHTML === "225"){
    document.getElementById("heart1").src = "src/icons/heart-solid.svg";
    x.innerHTML = "226";
  } else{
    document.getElementById("heart1").src = "src/icons/heart-regular.svg";
    x.innerHTML = "225";
  }
}

function myHeart2() {
  let x  = document.getElementById("count2");
  if(x.innerHTML === "125"){
    document.getElementById("heart2").src = "src/icons/heart-solid.svg";
    x.innerHTML = "126";
  } else{
    document.getElementById("heart2").src = "src/icons/heart-regular.svg";
    x.innerHTML = "125";
  }
}

function myHeart3() {
  let x  = document.getElementById("count3");
  if(x.innerHTML === "420"){
    document.getElementById("heart3").src = "src/icons/heart-solid.svg";
    x.innerHTML = "421";
  } else{
    document.getElementById("heart3").src = "src/icons/heart-regular.svg";
    x.innerHTML = "420";
  }
}

function myHeart4() {
  let x  = document.getElementById("count4");
  if(x.innerHTML === "145"){
    document.getElementById("heart4").src = "src/icons/heart-solid.svg";
    x.innerHTML = "146";
  } else{
    document.getElementById("heart4").src = "src/icons/heart-regular.svg";
    x.innerHTML = "145";
  }
}

// icon bookmark
function bookMark1(){
  const myAnchor = document.getElementById("bookmark1") 
  let text = myAnchor.getAttribute("src");
  if(text === "src/icons/bookmark-regular.svg"){
    document.getElementById("bookmark1").src = "src/icons/bookmark-solid.svg";
  }else{
    document.getElementById("bookmark1").src = "src/icons/bookmark-regular.svg";
  }
}

function bookMark2(){
  const myAnchor = document.getElementById("bookmark2") 
  let text = myAnchor.getAttribute("src");
  if(text === "src/icons/bookmark-regular.svg"){
    document.getElementById("bookmark2").src = "src/icons/bookmark-solid.svg";
  }else{
    document.getElementById("bookmark2").src = "src/icons/bookmark-regular.svg";
  }
}

function bookMark3(){
  const myAnchor = document.getElementById("bookmark3") 
  let text = myAnchor.getAttribute("src");
  if(text === "src/icons/bookmark-regular.svg"){
    document.getElementById("bookmark3").src = "src/icons/bookmark-solid.svg";
  }else{
    document.getElementById("bookmark3").src = "src/icons/bookmark-regular.svg";
  }
}

function bookMark4(){
  const myAnchor = document.getElementById("bookmark4") 
  let text = myAnchor.getAttribute("src");
  if(text === "src/icons/bookmark-regular.svg"){
    document.getElementById("bookmark4").src = "src/icons/bookmark-solid.svg";
  }else{
    document.getElementById("bookmark4").src = "src/icons/bookmark-regular.svg";
  }
}

// icon message 
function messageRegular1() {
  document.getElementById("message1").src = "src/icons/message-regular.svg";
}

function messageSolid1() {
  document.getElementById("message1").src = "src/icons/message-blue.svg";
}

// icon home
function homeRegular() {
  document.getElementById("home").src = "src/icons/home-regular.svg";
}

function homeSolid() {
  document.getElementById("home").src = "src/icons/home-solid.svg";
}

// icon profile
function donationRegular() {
  document.getElementById("donation").src = "src/icons/hand-regular.svg";
}

function donationSolid() {
  document.getElementById("donation").src = "src/icons/hand-solid.svg";
}

// icon profile
function profileRegular() {
  document.getElementById("profile").src = "src/icons/user-regular.svg";
}

function profileSolid() {
  document.getElementById("profile").src = "src/icons/user-solid.svg";
}

// btn processed
function clickProcessed1(){
  let element = document.getElementById("proccess1");
  if(element.innerHTML === "Adoption"){
    element.classList.remove("btn-adoption");
    element.classList.add("btn-wait-owner");
    element.innerHTML = "Processed";
  }else{
    element.classList.add("btn-adoption");
    element.classList.remove("btn-wait-owner");
    element.innerHTML = "Adoption";
  }
}

function clickProcessed2(){
  let element = document.getElementById("proccess2");
  if(element.innerHTML === "Adoption"){
    element.classList.remove("btn-adoption");
    element.classList.add("btn-wait-owner");
    element.innerHTML = "Processed";
  }else{
    element.classList.add("btn-adoption");
    element.classList.remove("btn-wait-owner");
    element.innerHTML = "Adoption";
  }
}


