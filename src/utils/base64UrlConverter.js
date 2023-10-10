import { decode as base64_decode, encode as base64_encode } from "base-64";
const base64UrlEncode = (word) => {
  const encoded = base64_encode(word);
  if (word.toString().length < 3) {
    return encoded.replaceAll("=", "");
  } else {
    return encoded;
  }
};

const base64UrlDecode = (word) => {
  return base64_decode(word);
};

export { base64UrlEncode, base64UrlDecode };
