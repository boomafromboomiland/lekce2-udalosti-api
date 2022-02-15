// tady je místo pro náš program

/*let nadpis = document.querySelector ('h1');
nadpis.classList.add('aktivni');

// nadpis.classList.remove('aktivni');
// nadpis.classList.toggle('aktivni'); (zapne, ak nie je; vypne, ak je --> roll na menu)

let pocitadlo = 0;

function priNajetiNaStvorec() {
  console.log('test' + pocitadlo);
  //pocitadlo = pocitadlo + 1;
  pocitadlo++;
};

function stvorec() {
  ctverecekZeleny.classList.toggle('ctverecek zluty')
}

*/

function stucni () {
  let odstavec = document.querySelector('p');
  odstavec.style.fontWeight = 'bold';
}

function zmenFarbu() {
  let odstavec = document.querySelector('p');
  odstavec.classList.toggle('red');
}

/*function zvacsi() {
  let odstavec = document.querySelector('p');
  
}*/

function pustAudio() {
  let audioFile = document.getElementById('zvuk');
  audioFile.play();
}

function pauza() {
  let audioFile = document.getElementById('zvuk');
  audioFile.pause();
}

function stisit() {
  let audioFile = document.getElementById('zvuk');
  //audioFile.muted = true;
  audioFile.volume = 0;
}

function hlasnejsie() {
  let audioFile = document.getElementById('zvuk');
  audioFile.volume = 1;
}

function hlasitost() {
  let audioFile = document.getElementById('zvuk');
  audioFile.volume = 0.5;
}

function opakovat() {
  let audioFile = document.getElementById('zvuk');
  audioFile.currentTime = 0;
}