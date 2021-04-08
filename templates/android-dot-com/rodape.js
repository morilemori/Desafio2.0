

/* IMAGENS DE RODAPE */
var imagensRodape = document.querySelectorAll(".mdl-mega-footer--social-btn");
var img1 = imagensRodape[0];
var img2 = imagensRodape[1];
var img3 = imagensRodape[2];

img1.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
       'event': 'genericEvent',
       'eventCategory': 'imagemRodape',
       'eventAction': 'clickImg',
       'eventLabel': 'img1'
     });
});

img2.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'imagemRodape',
    'eventAction': 'clickImg',
    'eventLabel': 'img2'
  });
});

img3.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'imagemRodape',
    'eventAction': 'clickImg',
    'eventLabel': 'img3'
  });
});
/* IMAGENS RODAPE FIM */

/* LINK PARA O TOPO DA PAGINA */
var topo = document.querySelector(".mdl-typography--font-light");
topo.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'linkTopo',
    'eventAction': 'clickLink',
    'eventLabel': 'topo'
  });
});
/* TOPO FIM */

/* MENU RODAPE */
var versions = document.querySelector(".android-link android-link-menu mdl-typography--font-light");
versions.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'menuRodape',
    'eventAction': 'clickLink',
    'eventLabel': 'versions'
  });
});

var forDevelopers = document.querySelector(".android-link android-link-menu mdl-typography--font-light");
forDevelopers.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'menuRodape',
    'eventAction': 'clickLink',
    'eventLabel': 'forDevelopers'
  });
});

var blog = document.querySelector(".android-link-mdl-typography--font-light");
blog.addEventListener('click',function(){
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'menuRodape',
    'eventAction': 'clickLink',
    'eventLabel': 'blog'
  });
});

var privacyPolicy = document.querySelector(".android-link-mdl-typography--font-light");
privacyPolicy.addEventListener('click', function(){
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'menu:rodape',
    'eventAction': 'click:link',
    'eventLabel': 'privacyPolicy'
  });
});
/* MENU RODAPE FIM */

/* BOTÃO VIEW SOURCE */
var viewSource = document.querySelector(".mdl-button-mdl-js-button-mdl-button--raised-mdl-js-ripple-effect-mdl-color--accent-mdl-color-text--accent-contrast");
viewSource.addEventListener('click', function() {

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'botao:vermelho',
    'eventAction': 'click:button',
    'eventLabel': 'viewSource'
  });
});
/* BOTÃO VIEW SOURCE FIM */
