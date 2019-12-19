//homepage query, today's edition 
const cors = 'https://nonanathi.herokuapp.com/';
let url = 'https://xkcd.com/info.0.json';
let json_data = `${cors}${url}`;
let max; //for rand
let min = 1; //for rand
var img_url;
var title, edition;

let info = document.getElementById("heading");
var img = document.createElement("img"); //defined globally to be used in random gen


axios.get(json_data)
    .then(res => {
        img_url = res.data.img;
        img.src = img_url;
        var src = document.getElementById("img1");
        src.appendChild(img);
        max = res.data.num; //maximun value for random xkcd generator

        title = res.data.title;
        edition = res.data.num;
        info.textContent = `#${edition} ${title}`;

    });

function randomImgGenerator() {
    let rand = getRandomInt(min, max);
    url = `https://xkcd.com/${rand}/info.0.json`
    json_data = `${cors}${url}`; //making query url
    
    axios.get(json_data)
    .then(res => {
        img_url = res.data.img;
        img.src = img_url;
        var src = document.getElementById("img1");
        src.appendChild(img);

        title = res.data.title;
        edition = res.data.num;
        info.textContent = `#${edition} ${title}`;
    });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}