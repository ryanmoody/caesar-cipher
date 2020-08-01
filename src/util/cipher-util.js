export const encode = (text, shift) => {
  if (shift < 0) {
    return encode(text, shift + 26);
  }
  
  let encodedText = '';
  
  for (let i = 0; i < text.length; i++) {
    let character = text[i];

    if (character.match(/[a-z]/i)) {
      let code = text.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        encodedText += String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        encodedText += String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    } else {
      encodedText += text.charAt(i);
    }
  }

  return encodedText;
};

export const decode = (text, shift) => {
  shift = (26 - shift) % 26;
  return encode(text, shift);
};