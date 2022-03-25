// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.


// var entreEmContato = document.getElementById('lnkEntreEmContato')
// entreEmContato.addEventListener('click', function () {
//   ga('send', 'event', 'menu', 'entre_em_contato','link_externo');  
// })

ga('send', 'pageview', location.pathname);

function entreEmContato() {
  ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
  alert(1);
}
function downloadPdf() {
  ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
  alert(1)
}
function btnLorem() {
  ga('send', 'event', 'analise', 'ver_mais', 'Lorem')
  alert(1)
}
function btnIpsum() {
  ga('send', 'event', 'analise', 'ver_mais', 'Ipsum')
  alert(1)
}
function btnDolor() {
  ga('send', 'event', 'analise', 'ver_mais', 'Dolor')
  alert(1)
}
document.getElementById('btnEnviar').onclick = function (e) {
  var nome = document.getElementById('nome').value
  var email = document.getElementById('email').value
  var telefone = document.getElementById('telefone').value
  var aceito = document.getElementById('aceito')
  ga('send', 'event', 'contato', `name: ${nome}; email: ${email}; telefone: ${telefone}; aceito: ${aceito}`, 'preencheu')
  alert(1)
}