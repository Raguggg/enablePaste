function  paste(text){

setTimeout(() => {

  const textEl = document.activeElement;

  textEl.value += text;

  textEl.dispatchEvent(new Event('input'));

}, 0.1);}
