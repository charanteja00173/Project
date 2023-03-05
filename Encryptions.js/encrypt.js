const CryptoJS = require("crypto-js");
let encryptWithAES = (text) => {
  let secretkey = "@Crack#231^&";
  return CryptoJS.AES.encrypt(text, secretkey).toString();
};
let decryptWithAES = (ciphertext) => {
  let secretkey = "@Crack#231^&";
  let bytes = CryptoJS.AES.decrypt(ciphertext, secretkey);
  let originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
function testing()
{   console.log()
    console.log("=================================================================>🕵️‍♂️ Simple Example to show how the process take place 🕵️‍♂️<=================================================================")
    console.log()
    let texts= "Privacy Protection Over Internet"
    console.log("Original text is : 📝")
    console.log(texts)
    console.log()
    encryptext = encryptWithAES(texts)
    console.log("The encrypted text is : 📝🔑🔐")
    console.log(encryptext)
    console.log()
    decryptext= decryptWithAES(encryptext)
    console.log("The Text generated after the Decryption is : 🔑🔓📝")
    console.log(decryptext)
    console.log()
    console.log("=======================================>🎯 Both Original and text Generated after Decryption are same which says the process completed successfully 🏅<=======================================")
};

testing();