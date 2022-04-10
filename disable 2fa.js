var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://discord.com/api/v9/users/@me/mfa/totp/disable', true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('Authorization', 'mfa.1QRy58OiSisAtuvVgSIRr_7FAshM2wmh3f6rW6nIZ_TDJhHQMJ2un0HWWvLtFxJFL-hr24UKuVCTslDBtclx');
xhr.onload = function () {
console.log(this.responseText);
};
xhr.send('{"code":"783594"}');