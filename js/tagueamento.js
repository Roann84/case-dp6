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

//#region Elementos Contato e Download
function entreEmContato() {
  ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
}

function downloadPdf() {
  ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
}
//#endregion

//#region Elementos Análise
function btnLorem() {
  ga('send', 'event', 'analise', 'ver_mais', 'Lorem')
}
function btnIpsum() {
  ga('send', 'event', 'analise', 'ver_mais', 'Ipsum')
}
function btnDolor() {
  ga('send', 'event', 'analise', 'ver_mais', 'Dolor')
}
//#endregion

//#region Elementos Sobre
document.getElementById('btnEnviar').onclick = function (e) {
  ga('send', 'event', 'contato', 'enviado', 'enviado')
}

var nome = document.querySelector('#nome')
nome.onchange = function () {
  ga('send', 'event', 'contato', `nome: ${nome.value}`, 'preencheu')
}

var email = document.getElementById('email')
email.onchange = function () {
  ga('send', 'event', 'contato', `email: ${email.value}`, 'preencheu')
}

var telefone = document.getElementById('telefone')
telefone.onchange = function () {
  ga('send', 'event', 'contato', `telefone: ${telefone.value}`, 'preencheu')
}

var aceito = document.getElementById('aceito')
aceito.addEventListener('click', function () {
  if (aceito.checked) {
    ga('send', 'event', 'contato', `aceito: ${aceito.value}`, 'preencheu')
  }
})
//#endregion