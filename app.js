const cors = 'https://nonanathi.herokuapp.com/';
const url = 'https://xkcd.com/info.0.json';
const json_data = `${cors}${url}`;
var img_url;

axios.get(json_data)
    .then(res => {
        console.log(res.data);
        img_url = res.data.img;
        
        var img = document.createElement("img");
        img.src = img_url;
        var src = document.getElementById("img-view");
        src.appendChild(img);
    });

