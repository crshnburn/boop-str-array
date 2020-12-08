/**
{
  "api": 1,
  "name": "Strings to Array",
  "description": "Convert a list of strings into an array of strings",
  "author": "crshnburn",
  "icon": "metamorphose",
  "tags": "string,array,golang"
}
**/

function main(input) {
    var list = input.fullText;

    var elements = list.split("\n");

    var result = "{\n\t\"";
    result += elements.join("\",\n\t\"")
    result += "\",\n}"

    input.fullText = result
}