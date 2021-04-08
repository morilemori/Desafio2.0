/* MEIO ANDROID SCREENS */

// DUVIDA: COMO FAZER PARA querySelector("IMAGEM DO RELOGIO") Ja que tem a mesma classe
var screensWear = document.querySelector(".android-wear-android-screen");
screensWear.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'meioScreens',
    'eventAction': 'clickImg',
    'eventLabel': 'wear'
  });
});

var screensPhone = document.querySelector(".android-phone-android-screen");
screensPhone.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'meioScreens',
    'eventAction': 'clickImg',
    'eventLabel': 'phone'
  });
});

var screensTablets = document.querySelector(".android-tablet-android-screen");
screensTablets.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'meioScreens',
    'eventAction': 'clickImg',
    'eventLabel': 'tablets'
  });
});

var screensTv = document.querySelector(".android-tv-android-screen");
screensTv.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'meioScreens',
    'eventAction': 'clickImg',
    'eventLabel': 'tv'
  });
});

var screensAuto = document.querySelector(".android-auto-android-screen");
screensAuto.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'meioScreens',
    'eventAction': 'clickImg',
    'eventLabel': 'auto'
  });
});


/* MEIO ANDROID SCREENS FIM */
