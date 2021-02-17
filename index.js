const https = require('https');
// Bitcoin のレートを json で取得することができるAPI
const URL = "https://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&units=metric&lang=ja&APPID=70231f04896404eaf5c37b7bf3bb63ee";

https.get(URL, function (res) {
    var body = '';
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        body += chunk;
    });
    res.on('data', function (chunk) {
        // body の値を json としてパースしている
        res = JSON.parse(body);
        console.log(res);
    })
  }).on('error', function (e) {
    console.log(e.message);
});