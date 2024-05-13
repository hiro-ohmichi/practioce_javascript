export function detectFileType(buffer) {
  const magicbyte = new Uint8Array(buffer.slice(0, 8));
  if (compareSignature(magicbyte, [0x25, 0x50, 0x44, 0x46, 0x2d])) {
    return "PDF";
  } else if (compareSignature(magicbyte, [0x50, 0x4b, 0x03, 0x04])) {
    return "ZIP";
  } else if (compareSignature(magicbyte, [0x50, 0x4b, 0x05, 0x06])) {
    return "ZIP";
  } else if (compareSignature(magicbyte, [0x50, 0x4b, 0x07, 0x08])) {
    return "ZIP";
  } else if (
    compareSignature(magicbyte, [0x47, 0x49, 0x46, 0x38, 0x37, 0x61])
  ) {
    return "GIF";
  } else if (
    compareSignature(magicbyte, [0x47, 0x49, 0x46, 0x38, 0x39, 0x61])
  ) {
    return "GIF";
  } else if (
    compareSignature(magicbyte, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a])
  ) {
    return "PNG";
  } else {
    return "UNKNOWN";
  }
}

function compareSignature(signature, expectedSignature) {
  if (signature.length < expectedSignature.length) {
    return false;
  }
  for (let i = 0; i < expectedSignature.length; i++) {
    //console.log(`マジックは${signature[i]}で正解は${expectedSignature[i]}`);
    if (signature[i] !== expectedSignature[i]) {
      return false;
    }
  }
  return true;
}
