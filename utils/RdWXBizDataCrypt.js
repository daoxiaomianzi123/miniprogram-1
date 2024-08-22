// 引入CryptoJS
// var app = getApp();
// var CryptoJS = require('cryptojs-master/cryptojs.js').Crypto;
// // 加密
// function Encrypt(word, keyStr, ivStr) {
// 	let key = CryptoJS.enc.Utf8.parse('hxkj2022cheddkey');
// 	let iv = CryptoJS.enc.Utf8.parse('hxkj2022cheddvip');

// 	if (keyStr) {
// 		key = CryptoJS.enc.Utf8.parse(keyStr);
// 		iv = CryptoJS.enc.Utf8.parse(ivStr);
// 	}

// 	let srcs = CryptoJS.enc.Utf8.parse(word);
// 	var encrypted = CryptoJS.AES.encrypt(srcs, key, {
// 		iv: iv,
// 		mode: CryptoJS.mode.CBC,
// 		padding: CryptoJS.pad.ZeroPadding
// 	});
// 	return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
// }

// // 解密
// function Decrypt(word, keyStr, ivStr) {
// 	let key = CryptoJS.enc.Utf8.parse('hxkj2022cheddkey');
// 	let iv = CryptoJS.enc.Utf8.parse('hxkj2022cheddvip');

// 	if (keyStr) {
// 		key = CryptoJS.enc.Utf8.parse(keyStr);
// 		iv = CryptoJS.enc.Utf8.parse(ivStr);
// 	}

// 	let base64 = CryptoJS.enc.Base64.parse(word);
// 	let src = CryptoJS.enc.Base64.stringify(base64);

// 	var decrypt = CryptoJS.AES.decrypt(src, key, {
// 		iv: iv,
// 		mode: CryptoJS.mode.CBC,
// 		padding: CryptoJS.pad.ZeroPadding
// 	});

// 	var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
// 	return decryptedStr.toString();
// }

// export {
// 	Encrypt,
// 	Decrypt
// }
var CryptoJS = require('/crypto-js.js');

// 密钥 16 位

var key = 'hxkj2022cheddkey';

// 初始向量 initial vector 16 位

var iv = 'hxkj2022cheddvip';

// key 和 iv 可以一致

key = CryptoJS.enc.Utf8.parse(key);

iv = CryptoJS.enc.Utf8.parse(iv);

//加密

function encrypted(param) {
	var encrypted = CryptoJS.AES.encrypt(param, key, {
		iv: iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	});

	encrypted = encrypted.toString();

	return encrypted;

}

//解密

function decrypted(param) {

	var decrypted = CryptoJS.AES.decrypt(param, key, {

		iv: iv,

		mode: CryptoJS.mode.CBC,

		padding: CryptoJS.pad.Pkcs7

	});

	decrypted = CryptoJS.enc.Utf8.stringify(decrypted);

	return decrypted;

}

module.exports = {

	encrypted: encrypted,

	decrypted: decrypted,

}
