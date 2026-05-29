function alphabetPosition(text) {
 let Ntext= text.toLowerCase().split("").map(letter=>letter.charCodeAt(0) - 96).filter(num => num >= 1 && num <= 26);
 // for (let i=0;i<text.length;i++){
 // if(text[i]>=1&& text[i]<=26){
 
  return Ntext.join(" ");
 // else {
 //   return "";}}
}