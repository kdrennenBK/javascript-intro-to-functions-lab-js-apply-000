function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  console.log(shout());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string) {
  var lowercase = "hello!";
  var uppercase = "HELLO!"
  if (string.toLowerCase() === lowercase) {
    return "I can\'t hear you!"
  } else if (string.toLowerCase() === uppercase ) {
    return "YES INDEED!";
  } 
  }
