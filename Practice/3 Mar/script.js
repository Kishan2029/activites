// Cookies and Web Storage

/*Cookies*/
// Test if cookies are enabled

if (navigator.cookieEnabled === false) {
    alert("Error: cookies not enabled!");
}

// Adding and Setting Cookies

var COOKIE_NAME = "Example Cookie";
var COOKIE_VALUE = "Hello, world!";
var COOKIE_PATH = "/foo/bar";
var COOKIE_EXPIRES;

/* Set the cookie expiration to 1 minute in future (60000ms = 1 minute). */
COOKIE_EXPIRES = (new Date(Date.now() + 60000)).toUTCString();
document.cookie +=
    COOKIE_NAME + "=" + COOKIE_VALUE
    + "; expires=" + COOKIE_EXPIRES
    + "; path=" + COOKIE_PATH;

// Reading cookies
var name = name + "=",
    cookie_array = document.cookie.split(';'), cookie_value;
for (var i = 0; i < cookie_array.length; i++) {
    var cookie = cookie_array[i]; while (cookie.charAt(0) == ' ')
        cookie = cookie.substring(1, cookie.length); if (cookie.indexOf(name) == 0)
        cookie_value = cookie.substring(name.length, cookie.length);
}

// Removing cookies
var expiry = new Date();
expiry.setTime(expiry.getTime() - 3600);
document.cookie = name + "=; expires=" + expiry.toGMTString() + "; path=/"

/*------------------------------------------------------------------------------------------------------------------------*/
/*Web Storage*/

// Using localStorage
localStorage.setItem('name', "John Smith");
console.log(localStorage.getItem('name')); // "John Smith"
localStorage.removeItem('name');
console.log(localStorage.getItem('name')); // null

var players = [{ name: "Tyler", score: 22 }, { name: "Ryan", score: 41 }]; localStorage.setItem('players', JSON.stringify(players));
console.log(JSON.parse(localStorage.getItem('players')));
// [ Object { name: "Tyler", score: 22 }, Object { name: "Ryan", score: 41 } ]

/*------------------------------------------------------------------------------------------------------------------------*/

// Simpler way of handling Storage

// Store values (Strings, Numbers)
localStorage.hello = "Hello";
localStorage.year = 2017;
// Store complex data (Objects, Arrays)
var user = { name: "John", surname: "Doe", books: ["A", "B"] };
localStorage.user = JSON.stringify(user);
// Important: Numbers are stored as String console.log( typeof localStorage.year ); // String
// Retrieve values
var someYear = localStorage.year; // "2017"
// Retrieve complex data
var userData = JSON.parse(localStorage.user); var userName = userData.name; // "John"
// Remove specific data
delete localStorage.year;
// Clear (delete) all stored data
localStorage.clear();

// sessionStorage
var audio = document.querySelector('audio');
// Maintain the volume if the user clicks a link then navigates back here.
audio.volume = Number(sessionStorage.getItem('volume') || 1.0); audio.onvolumechange = function (event) {
    sessionStorage.setItem('volume', audio.volume);
};

sessionStorage.setItem('key', 'value');
var data = sessionStorage.getItem('key');
sessionStorage.removeItem('key')

/*------------------------------------------------------------------------------------------------------------------------*/

// localStorage length
localStorage.setItem('StackOverflow', 'Documentation');
localStorage.setItem('font', 'Helvetica');
localStorage.setItem('image', 'sprite.svg');
localStorage.length;

/*------------------------------------------------------------------------------------------------------------------------*/

// Error conditions
var video = document.querySelector('video') try {
    video.volume = localStorage.getItem('volume')
} catch (error) {
    alert('If you\'d like your volume saved, turn on cookies')
}
video.play()

/*------------------------------------------------------------------------------------------------------------------------*/

// Remove Storage Item
localStorage.setItem("greet", "hi");
localStorage.removeItem("greet");
console.log(localStorage.getItem("greet"));



