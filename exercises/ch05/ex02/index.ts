export function escapeToStringIfElse(input: string): string {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === "\0") {
      result += "\\0";
    } else if (char === "\b") {
      result += '\\b"';
    } else if (char === "\t") {
      result += "\\t";
    } else if (char === "\n") {
      result += "\\n";
    } else if (char === "\v") {
      result += "\\v";
    } else if (char === "\f") {
      result += "\f";
    } else if (char === "\r") {
      result += "\\r";
    } else if (char === '"') {
      result += '\\"';
    } else if (char === "'") {
      result += "\\'";
    } else if (char == "\\") {
      result += "\\\\";
    } else {
      result += char;
    }
  }
  return result;
}
console.log(escapeToStringIfElse("abc\n\"def'ghi\t\t\\\0\bjk\r\vlmn"));

export function escapeToStringSwitch(input: string): string {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    switch (char) {
      case "\0":
        result += "\\0";
        break;
      case "\b":
        result += '\\b"';
        break;
      case "\t":
        result += "\\t";
        break;
      case "\n":
        result += "\\n";
        break;
      case "\v":
        result += "\\v";
        break;
      case "\f":
        result += "\f";
        break;
      case "\r":
        result += "\\r";
        break;
      case '"':
        result += '\\"';
        break;
      case "'":
        result += "\\'";
        break;
      case "\\":
        result += "\\\\";
        break;
      default:
        result += char;
    }
  }
  return result;
}
