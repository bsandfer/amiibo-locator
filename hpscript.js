let gameName = document.getElementById('selectDropdown').value;
let amiiboUrl = 'https://amiiboapi.com/api/amiibo/?gameseries=' + 'Fire Emblem';
//?gameseries=Chibi Robo
fetch(amiiboUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //looping over the fetch response and inserting the URL of your repos into a list
    console.log(data)
    for (let i=0; i<data.length; i++) {
      
    }
  });




