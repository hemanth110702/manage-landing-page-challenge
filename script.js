/* header navigation */
const hamBtn = document.querySelector('.ham');
const closeBtn = document.querySelector('.close');







/* Feedback navigation */
const btnNav = document.querySelectorAll(".btnnav");
const allProfile = document.querySelectorAll('.profile'); 
btnNav.forEach((val,index) => {
  btnNav[index].addEventListener('click',()=>{
    rmvBtnActive();
    rmvPrfActive();
    btnNav[index].classList.add('btnactive');
    allProfile[index].classList.add('active');
  });
});

function rmvBtnActive() {
  btnNav.forEach((val,index)=>{
    btnNav[index].classList.remove('btnactive');
  });
}

function rmvPrfActive() {
  allProfile.forEach( (val,index)=>{
    allProfile[index].classList.remove('active');
  });
}