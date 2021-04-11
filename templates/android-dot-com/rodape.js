

/* IMAGENS DE RODAPE */
/*
var imagensRodape = document.querySelectorAll(".mdl-mega-footer--social-btn");
var img1 = imagensRodape[0];
var img2 = imagensRodape[1];
var img3 = imagensRodape[2];
*/

var img1 = document.querySelectorAll(".mdl-mega-footer--social-btn")[0];
img1.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
       'event': 'generic:event',
       'eventCategory': 'android:footer',
       'eventAction': 'click:img',
       'eventLabel': 'img1'
     });
});

var img2 = document.querySelectorAll('.mdl-mega-footer--social-btn')[1];
img2.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:footer',
    'eventAction': 'click:img',
    'eventLabel': 'img2'
  });
});

var img3 = document.querySelectorAll('.mdl-mega-footer--social-btn')[2];
img3.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'android:footer',
    'eventAction': 'click:img',
    'eventLabel': 'img3'
  });
});
/* IMAGENS RODAPE FIM */

/* LINK PARA O TOPO DA PAGINA */
var topo = document.querySelector("#developers-dropdown");
topo.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:footer',
    'eventAction': 'click:link',
    'eventLabel': 'back-to-top'
  });
});
/* TOPO FIM */

/* MENU RODAPE */
var versao = document.querySelector(".android-link-android-link-menu-mdl-typography--font-light")[0];
versao.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:footer:menu',
    'eventAction': 'click:link',
    'eventLabel': 'versions'
  });
});

var forDevelopers = document.querySelector(".android-link-android-link-menu-mdl-typography--font-light")[1];
forDevelopers.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:footer:menu',
    'eventAction': 'click:link',
    'eventLabel': 'for-developers'
  });
});

var blog = document.querySelector("#blog")[1];
blog.addEventListener('click',function(){
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:footer:menu',
    'eventAction': 'click:link',
    'eventLabel': 'blog'
  });
});

var privacyPolicy = document.querySelector("#privacyPolicy");
privacyPolicy.addEventListener('click', function(){
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:footer:menu',
    'eventAction': 'click:link',
    'eventLabel': 'privacyPolicy'
  });
});
/* MENU RODAPE FIM */

/* BOTÃO VIEW SOURCE */
var viewSource = document.querySelector("#view-source");
viewSource.addEventListener('click', function() {

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:float-buttom',
    'eventAction': 'click:button',
    'eventLabel': 'viewSource'
  });
});
/* BOTÃO VIEW SOURCE FIM */
