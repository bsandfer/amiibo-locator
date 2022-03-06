/* ===== VARIALBLES ====*/
let amiiboImg = 'https://amiiboapi.com/api/amiibo/?image=zelda';
let select = document.getElementById('selectDropdown')
let gameName = ""

/* =====================*/
/* == INITIALIIZATION ==*/
/* =====================*/

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel')
  var instances = M.Carousel.init(elems)
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select')
  var instances = M.FormSelect.init(elems)
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

/* =====================*/
/* ===== SIDE MENU =====*/
/* =====================*/

// mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));<script>
function openSideMenu() {
  document.getElementById('side-menu').style.width = '250px';
  //document.getElementById('main').style.marginLeft = '250px';
}

function closeSideMenu() {
  document.getElementById('side-menu').style.width = '0';
  //document.getElementById('main').style.marginLeft = '0';
}

/* =====================*/
/* ======= MODAL =======*/
/* =====================*/

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal() {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal() {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
/* =====================*/

//nathan and hyewon's methods added for game series selection

if (select) {
  select.addEventListener('change', () => {
    gameName = select.options[select.selectedIndex].value;
    if (gameName != "") {
      localStorage.setItem('game', gameName);
      window.location.href = "amiibo.html";
    }
    else {
      return;
    }
  })
}


/* =====================*/
/* ==== SONG PLAYER ====*/
/* =====================*/

//declare variable for music within the acnh API
let songAPI = "http://acnhapi.com/v1/hourly/"

//function to generate random number
function randomnumber() {
  rngNum2 = Math.floor(Math.random() * 72) + 1
  return rngNum2
}

//function to push randomly generated tracks into an array. Used callback function to generate the random number needed. 
function getMusic(){
  let arr = [];
  for(i = 0; i < 73; i++){
    arr.push(songAPI + randomnumber());
  }
  return arr;
}

//Allows user to shuffle upon click. Created audio object and utilized parameters and matched them to the arguments generated previously, thus generating a random playlist. Decremented parameter num. Used recursion to play random track when previous one ends. Will recurse until base case reached.
function playMusic(arr,num){
  let audio= document.getElementById('btnClick').innerHTML = `SHUFFLE SONG</a><audio id="next" autoplay="true"> <source src="${arr[num]}"></audio>`
    num--;
    next.addEventListener("ended", function () {
    playMusic(arr, num);
  });
}

document.getElementById('btnClick').addEventListener('click', () => {

  playMusic(getMusic(), 72);
})

