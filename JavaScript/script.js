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
  document.getElementById('main').style.marginLeft = '250px';
}

function closeSideMenu() {
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}

/* =====================*/
/* ======= MODAL =======*/
/* =====================*/


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
