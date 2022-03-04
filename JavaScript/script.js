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

// mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));<script>
//side menu//
function openSideMenu() {
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}

function closeSideMenu() {
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}


//amiiboSelect()

// let amiiboUrl = 'https://amiiboapi.com/api/amiibo/?gameseries=' + gameName
// //?gameseries=Chibi Robo
// fetch(amiiboUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     //looping over the fetch response and inserting the URL of your repos into a list
//     console.log(data)
//   });
// console.log(data);
// console.log(data.amiibo[0]);
// console.log(data.amiibo[0].release);
// for (let i = 0; i < data.amiibo.length; i++) {

//   //amiiboSeries character image  type release {au:, eu: jp na}

//   let list = document.createElement('li');
//   let divOne = document.createElement('div');
//   let divTwo = document.createElement('div');
//   //header of the collapsible, presenting character name of amiibo
//   divOne.classList.add('collapsible-header');
//   divOne.textContent = data.amiibo[i].character;

//   //body of collapsible, presenting image, type, amiibo series info 
//   divTwo.classList.add('collapsible-body');

//   let img = document.createElement("img");
//   img.src = data.amiibo[i].image;
//   divTwo.appendChild(img);

//   let info = document.createElement('ul');

//   let info_El0 = document.createElement('li');
//   info_El0.textContent = "Game Series: " + data.amiibo[i].gameSeries;

//   let info_El1 = document.createElement('li');
//   info_El1.textContent = "Amiibo Series: " + data.amiibo[i].amiiboSeries

//   let info_El2 = document.createElement('li');
//   info_El2.textContent = "Type: " + data.amiibo[i].type;

//   let info_El3 = document.createElement('li');
//   let releaseObj = JSON.stringify(data.amiibo[i].release);
//   info_El3.textContent = "Release: " + releaseObj;

//   info.append(info_El0);
//   info.append(info_El1);
//   info.append(info_El2);
//   info.append(info_El3);

//   divTwo.appendChild(info);

//   //appending the header and bodies onto the main collapsible
//   list.appendChild(divOne);
//   list.appendChild(divTwo);
//   document.getElementById('collapsible').append(list);
// }
