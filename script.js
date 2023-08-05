/* header navigation */
const hamBtn = document.querySelector('.ham');
const closeBtn = document.querySelector('.close');
const mobNav = document.querySelector('.mob-navigation');

hamBtn.addEventListener('click', ()=>{
  hamBtn.classList.add('none');
  closeBtn.classList.remove('none');
  mobNav.classList.add('flex');
});

closeBtn.addEventListener('click', ()=>{
  closeBtn.classList.add('none');
  hamBtn.classList.remove('none');
  mobNav.classList.remove('flex');
})






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


/* email validation */

function validateEmail() {
  const emailInput = document.querySelector('#emailInput');
  const errorMsg = document.querySelector('#errorMsg');
  const emailValue = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === '' || !emailRegex.test(emailValue)) {
    errorMsg.textContent = 'Please insert a valid email.';
    errorMsg.style.display = 'block';
  } else {
    errorMsg.style.display = 'none';
    emailInput.value = "";
  }
}
