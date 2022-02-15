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

let velkostPisma = 16;

function zvacsi() {
  let odstavec = document.querySelector('p');
  console.log('velkostPisma' + 1);
  velkostPisma++;
}
