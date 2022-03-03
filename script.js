//let selectedCharacter = 

// var amiiboImg = 'https://amiiboapi.com/api/amiibo/?image=zelda'
let select = document.getElementById('selectDropdown')
let gameNane = ""


document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel')
  var instances = M.Carousel.init(elems)
});
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select')
  var instances = M.FormSelect.init(elems)
});

select.addEventListener('change', () => {
  gameNane = select.options[select.selectedIndex].value
  console.log(gameNane)
})



//Grabs amiibo by character and shows what games its used in
//Ideal to use due to "multiple character have different amiibo design"
var amiiboUrl = 'https://amiiboapi.com/api/amiibo/?character=zelda'
//?gameseries=Chibi Robo
fetch(amiiboUrl)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    //looping over the fetch response and inserting the URL of your repos into a list
    //console.log(data)
  })