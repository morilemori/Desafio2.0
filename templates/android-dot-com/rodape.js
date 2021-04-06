

/* IMAGENS DE RODAPE */
var imagensRodape = querySelectorAll(".mdl-mega-footer--social-btn");
var img1 = imagensRodape[0];
var img2 = imagensRodape[1];
var img3 = imagensRodape[2];

botao1.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
       'event': 'genericEvent',
       'eventCategory': 'imagemRodape',
       'eventAction': 'clickImg',
       'eventLabel': 'img1'
     });
});

botao2.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'imagemRodape',
    'eventAction': 'clickImg',
    'eventLabel': 'img2'
  });
});

botao3.addEventListener('click', function() {
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
var topo = querySelector(".mdl-typography--font-light");
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
var versions = querySelector(".android-link android-link-menu mdl-typography--font-light");
versions.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'menuRodape',
    'eventAction': 'clickLink',
    'eventLabel': 'versions'
  });
});

var forDevelopers = querySelector(".android-link android-link-menu mdl-typography--font-light");
forDevelopers.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'menuRodape',
    'eventAction': 'clickLink',
    'eventLabel': 'forDevelopers'
  });
});

var blog = querySelector(".android-link-mdl-typography--font-light");
blog.addEventListener('click',function(){
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'menuRodape',
    'eventAction': 'clickLink',
    'eventLabel': 'blog'
  });
});

var privacyPolicy = querySelector(".android-link-mdl-typography--font-light");
privacyPolicy.addEventListener('click', function(){
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'menuRodape',
    'eventAction': 'clickLink',
    'eventLabel': 'privacyPolicy'
  });
});
/* MENU RODAPE FIM */
