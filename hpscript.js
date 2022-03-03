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
      let divOne = document.createElement('div'); //for the collapsible header
      let divTwo = document.createElement('div'); //for the collapsible body

      //header of the collapsible, presenting character name of amiibo
      divOne.classList.add('collapsible-header');
      divOne.textContent = data.amiibo[i].character;

      //body of collapsible, presenting image, type, amiibo series info 
      divTwo.classList.add('collapsible-body');

      let img = document.createElement("img");
      img.src = data.amiibo[i].image;
      divTwo.classList.add('imgClass');
      divTwo.appendChild(img);
      

      let info = document.createElement('ul');

      let info_El0 = document.createElement('li');
      info_El0.textContent = "GAME SERIES: " + data.amiibo[i].gameSeries;

      let info_El1 = document.createElement('li');
      info_El1.textContent = "AMIIBO SERIES: " + data.amiibo[i].amiiboSeries

      let info_El2 = document.createElement('li');
      info_El2.textContent = "TYPE: " + data.amiibo[i].type;

      let info_El3 = document.createElement('li');
      info_El3.textContent = "RELEASE: "
      //for each of the release continents
      let info_El3na = document.createElement('li');
      let info_El3eu = document.createElement('li');
      let info_El3jp = document.createElement('li');
      let info_El3au = document.createElement('li');
      info_El3na.textContent = "North America: " + data.amiibo[i].release.na;
      info_El3eu.textContent = "Europe: " + data.amiibo[i].release.eu;
      info_El3jp.textContent = "Japan: " + data.amiibo[i].release.jp;
      info_El3au.textContent = "Australia: " + data.amiibo[i].release.au 
     
      

      info.append(info_El0);
      info.append(info_El1);
      info.append(info_El2);
      info.append(info_El3);
      info.append(info_El3na);
      info.append(info_El3eu);
      info.append(info_El3jp);
      info.append(info_El3au);

      divTwo.appendChild(info);

      //appending the header and bodies onto the main collapsible
      list.appendChild(divOne);
      list.appendChild(divTwo);
      document.getElementById('collapsible').append(list);


    }
  });




