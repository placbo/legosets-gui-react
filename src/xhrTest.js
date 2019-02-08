var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var data = null;
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
});
xhr.open("GET", "https://brickset.com/api/v2.asmx/getSets?apiKey=idQo-dSiu-aZK4&userHash=937816394103724&query=75884&theme=&setNumber=&year=&owned=&wanted=&orderBy=&pageSize=&pageNumber=&userName=&subtheme=");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("Postman-Token", "72602698-eff1-4f9c-8e0d-cfa82bf38927");
xhr.send(data);