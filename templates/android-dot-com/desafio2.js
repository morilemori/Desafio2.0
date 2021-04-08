//Desafio 2.0

//IMAGEM DO LOGO
//Capturando o elemento html (logo android) atraves da classe da imagem
var logo = document.querySelector(".android-logo-image");

//Adicionando um escutador de evento na imagem do logo. Ao ser clicado, colocará as variaveis e respectivos valores no datalayer;
logo.addEventListener('click', function(){

     window.dataLayer = window.dataLayer || [];
       window.dataLayer.push({
          'event': 'generic:event',
          'eventCategory': 'header:logo',
          'eventAction': 'click:img',
          'eventLabel': 'logo'
  });
  // teste de funcionalidade
  console.log("adicionando um escutador de evento ao clicarem no logo,");
});
/*FIM DO LOGO*/

/*CONTAINER NAVIGATION*/
var menuHeader = document.querySelectorAll(".mdl-navigation__link-mdl-typography--text-uppercase");
var phone = menuHeader[0];
var tablets = menuHeader[1];
var wear = menuHeader[2];
var tv= menuHeader[3];
var auto = menuHeader[4];
var one = menuHeader[5];
var play = menuHeader[6];

menuHeader.addEventListener('click', function(){
  window.dataLayer = window.dataLayer ||[];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'navigation:menu',
    'eventAction': 'click:link',
    'eventLabel': 'navigation'
  });
});

phone.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'navigation:menu',
    'eventAction': 'click:link',
    'eventLabel': 'phone'
  });
  console.log("colocando dados de container>avigation>phone pro dataLayer");
});

tablets.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'navigation:menu',
    'eventAction': 'click:link',
    'eventLabel': 'tablets'
  });

  console.log("colocando dados de navigation>tablets pro dataLayer");
});

wear.addEventListener('click', function() {

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'navigation:menu',
    'eventAction': 'click:link',
    'eventLabel': 'wear'
  });

  console.log("colocando dados de navigation>wear pro dataLayer");
});

tv.addEventListener('click', function() {

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'navigation:menu',
    'eventAction': 'click:link',
    'eventLabel': 'tv'
  });

  console.log("colocando dados de navigation>tv pro dataLayer");
});

auto.addEventListener('click', function() {

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'navigation:menu',
    'eventAction': 'click:link',
    'eventLabel': 'auto'
  });

  console.log("colocando dados de navigation>auto pro dataLayer");
});

one.addEventListener('click', function() {

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'navigation:menu',
    'eventAction': 'click:link',
    'eventLabel': 'one'
  });

  console.log("colocando dados de navigation>one pro dataLayer");
});

play.addEventListener('click', function() {

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'navigation:menu',
    'eventAction': 'click:link',
    'eventLabel': 'play'
  });

  console.log("colocando dados de navigation>play pro dataLayer");
});

/* FIM NAVIGATION MENU */

/* BOTÃO LUPA */
var buscar = document.querySelector(".android-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width");
buscar.addEventListener('click', function() {

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'header:lupa',
    'eventAction': 'click:button',
    'eventLabel': 'buscar'
  });

  console.log("colocando dados do botão de busca pro dataLayer");
})
/* FIM DO BOTÃO LUPA */

/* BOTÃO [...] DO HEADER */
var mais = document.querySelector(".android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect");
mais.addEventListener('click', function(){

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'header:mais',
    'eventAction': 'click:button',
    'eventLabel': 'mais'
  });

  console.log("colocando dados do botão mais pro dataLayer");
})
/* FIM DO BOTÃO [...] */
