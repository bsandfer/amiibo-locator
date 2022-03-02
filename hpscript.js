//let gameName = document.getElementById('selectDropdown').value;
let amiiboUrl = 'https://amiiboapi.com/api/amiibo/?gameseries=' + 'Pokemon';
//?gameseries=Chibi Robo
fetch(amiiboUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //looping over the fetch response and inserting the URL of your repos into a list
    console.log(data)
    console.log(data.amiibo[0])
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

      let info = document.createElement('ul');
      let info_El1 = document.createElement('li');
      info_El1.textContent = data.amiibo[i].amiiboSeries + "\n " + data.amiibo[i].type + "\n" + data.amiibo[i].release;
      let info_El2 = document.createElement('li');
      info_El2.textContent = data.amiibo[i].type;
      info.append(info_El1);
      info.append(info_El2);

      divTwo.appendChild(info);

      //appending the header and bodies onto the main collapsible
      list.appendChild(divOne);
      list.appendChild(divTwo);
      document.getElementById('collapsible').append(list);

      
    }
  });




