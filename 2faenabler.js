var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://discord.com/api/v9/users/@me/mfa/totp/enable', true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('Authorization', 'SEU TOKEN');
xhr.onload = function () {
console.log(this.responseText);
};
xhr.send('{"code":"CODIGO","secret":"COLOQUEOSECRETAQUI","password":"COLOQUE A SENHA AQUI"}');