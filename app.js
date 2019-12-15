// const axios = require('axios');

// async function makeRequest() {
//   const config = {
//     method: 'get',
//     url: 'https://xkcd.com/info.0.json'
//   }

//   let res = await axios (config)
//   let imgUrl = res.data.img;

//   let toBeChanged = document.getElementsByClassName('img-view');
//   var image = new Image;
//   toBeChanged.appendChild(imgUrl);
//   }
// makeRequest();

const cors = 'https://nonanathi.herokuapp.com/';
const url = 'https://xkcd.com/info.0.json';
const json_data = `${cors}${url}`;

fetch(json_data)
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log('request failed', error)
  });  