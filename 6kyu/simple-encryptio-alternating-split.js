// ❔DESCRIPTION

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

// ☑️ SOLUTION

function encrypt(text, n) {
  if (text !== null && text !== '') {
    while (n > 0) {
      let str = '';
      for (let i = 1; i < text.length; i += 2) {
        str += text.charAt(i);
      }
      for (let i = 0; i < text.length; i += 2) {
        str += text.charAt(i);
      }
      text = str;
      n--;
    }
  }

  return text;
}

function decrypt(encryptedText, n) {
  if (encryptedText !== null && encryptedText !== '') {
    const index = Math.floor(encryptedText.length / 2);
    while (n > 0) {
      let str = '';
      if (encryptedText.length % 2 === 0) {
        for (let i = 0; i < index; i++) {
          str += encryptedText[index + i];
          str += encryptedText[i];
        }
      } else {
        for (let i = 0; i <= index; i++) {
          str += encryptedText[index + i];
          if (i !== index) {
            str += encryptedText[i];
          }
        }
      }
      encryptedText = str;
      n--;
    }
  }

  return encryptedText;
}

// console.log(encrypt('012345', 1)); // =>  "135024"
// console.log(encrypt('', 2)); //  "135024"  ->  "304152"
// console.log(encrypt('012345', 3)); // "135024"  ->  "304152"  ->  "012345"

// console.log(encrypt('01234', 1)); //=>  "13024"
// console.log(encrypt('01234', 2)); //=>  "13024"  ->  "32104"
// console.log(encrypt('01234', 3)); // =>  "13024"  ->  "32104"  ->  "20314"

// console.log(decrypt('hsi  etTi sats!', 1)); // "This is a test!"
// console.log(decrypt('135024', 1)); // =>  "012345"
// console.log(decrypt('304152', 2)); // =>  "012345"
console.log(decrypt('20314', 3)); // =>  "01234"
console.log(decrypt('hskt svr neetn!Ti aai eyitrsig', 1));
