/* MEIO {BONECO ANDROID LINK} */
// DUVIDA EM COMO REPRESENTAR A CLASSE (LINK CREATE CHAR): REPRESENTAR COMO $0?
var boneco = document.querySelector(".logo-font-android-create-character");
boneco.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'meio:boneco',
    'eventAction': 'click:link',
    'eventLabel': 'boneco'
  });
});
/* MEIO BONECO ANDROID LINK FIM */

/* MEIO BONECO ANDROID BOTAO */
var bonecoBotao = document.querySelector(".android-fab-mdl-button-mdl-button--colored-mdl-js-button-mdl-button--fab-mdl-js-ripple-effect");
bonecoBotao.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'meio:boneco',
    'eventAction': 'click:button',
    'eventLabel': 'bonecoBotao'
  });
});
/* MEIO BONECO ANDROID BOTAO FIM*/
