//let gameName = document.getElementById('selectDropdown').value;
let amiiboUrl = 'https://amiiboapi.com/api/amiibo/?gameseries=' + 'Pokemon';
//?gameseries=Chibi Robo
fetch(amiiboUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //looping over the fetch response and inserting the URL of your repos into a list
    console.log(data);
    console.log(data.amiibo[0]);
    console.log(data.amiibo[0].release);
    for (let i = 0; i < data.amiibo.length; i++) {

      //amiiboSeries character image  type release {au:, eu: jp na}
      
      let list = document.createElement('li');
      let divOne = document.createElement('div');
      let divTwo = document.createElement('div');
      //header of the collapsible, presenting character name of amiibo
      divOne.classList.add('collapsible-header');
      divOne.textContent = data.amiibo[i].character;

      //body of collapsible, presenting image, type, amiibo series info 
      divTwo.classList.add('collapsible-body');
      
      let img = document.createElement("img");
      img.src = data.amiibo[i].image;
      divTwo.appendChild(img);

      let info = document.createElement('ol');
      let info_El1 = document.createElement('li');
      info_El1.textContent = "Amiibo Series: " + data.amiibo[i].amiiboSeries
      let info_El2 = document.createElement('li');
      info_El2.textContent = "Type: " + data.amiibo[i].type;
      
      let info_El3 = document.createElement('li');
      let releaseObj = JSON.stringify(data.amiibo[i].release);
      info_El3.textContent = "Release: " + releaseObj;

      info.append(info_El1);
      info.append(info_El2);
      info.append(info_El3);

      divTwo.appendChild(info);

      //appending the header and bodies onto the main collapsible
      list.appendChild(divOne);
      list.appendChild(divTwo);
      document.getElementById('collapsible').append(list);

      
    }
  });




