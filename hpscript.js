let gameLocal = localStorage.getItem('game');
let amiiboUrl = 'https://amiiboapi.com/api/amiibo/?gameseries=' + gameLocal;
//?gameseries=Chibi Robo


fetch(amiiboUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //looping over the fetch response and inserting the URL of your repos into a list
    for (let i = 0; i < data.amiibo.length; i++) {


      let list = document.createElement('li');
      let divOne = document.createElement('div'); //for the collapsible header
      let divTwo = document.createElement('div'); //for the collapsible body

      //header of the collapsible, presenting character name and image of amiibo
      divOne.classList.add('collapsible-header');
      divOne.textContent = data.amiibo[i].character;
      let img = document.createElement("img");
      img.src = data.amiibo[i].image;
      img.classList.add('imgClass');
      divOne.appendChild(img);



      //body of collapsible, presenting game series, amiibo series, type, and release info
      divTwo.classList.add('collapsible-body');

      let info = document.createElement('ul');

      // game series
      let info_El0 = document.createElement('li');
      info_El0.textContent = "GAME SERIES: " + data.amiibo[i].gameSeries;
      // amiibo series
      let info_El1 = document.createElement('li');
      info_El1.textContent = "AMIIBO SERIES: " + data.amiibo[i].amiiboSeries
      //type of amiibo
      let info_El2 = document.createElement('li');
      info_El2.textContent = "TYPE: " + data.amiibo[i].type;
      //amiibo release info
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


      //appending all the info elements to the main info which is then appended to collapsible body(divTwo)
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




