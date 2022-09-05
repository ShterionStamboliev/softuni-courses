function encodeAndDecodeMessages() {
  document.getElementById("container").addEventListener("click", event => {
    if (event.target.tagName !== "BUTTON") {
      return;
    }
    const textFields = [...document.getElementsByTagName("textarea")];

    if (event.target.textContent === "Encode and send it") {
      let encode = "";
      const encodeField = textFields[0].value;
      for (const ch of encodeField) {
        encode += String.fromCharCode(ch.charCodeAt() + 1);
      }
      textFields[1].value = encode;
      textFields[0].value = "";
    } else if (event.target.textContent === "Decode and read it") {
      let decode = "";
      const decodeField = textFields[1].value;
      for (const char of decodeField) {
        decode += String.fromCharCode(char.charCodeAt() - 1);
      }
      textFields[1].value = decode;
    }
  });
}

/*
function encodeAndDecodeMessages() {
    const buttons = [...document.getElementsByTagName("button")];
    const textFields = [...document.getElementsByTagName("textarea")];
    buttons[0].addEventListener("click", encode);
    buttons[1].addEventListener("click", decode);
  
    function encode() {
      let str = "";
      let encodeField = textFields[0].value;
      for (const ch of encodeField) {
        str += String.fromCharCode(ch.charCodeAt() + 1);
      }
      textFields[1].value = str;
      textFields[0].value = "";
      // buttons[0].disabled = true;
    }
  
    function decode() {
      let str = "";
      let decodeField = textFields[1].value;
      for (const ch of decodeField) {
        str += String.fromCharCode(ch.charCodeAt() - 1);
      }
      textFields[1].value = str;
      // buttons[1].disabled = true;
    }
  }
  */