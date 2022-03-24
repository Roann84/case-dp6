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

function entreEmContato(){
  ga('send', 'event', 'menu', 'entre_em_contato','link_externo');  
  alert(1);
}

ga('send', 'pageview', location.pathname);
ga('send', 'event', 'menu', 'download_pdf','download_pdf');