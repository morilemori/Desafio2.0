/* MEIO NEWS ON PLAYSTORE */
var playStore = document.querySelector(".mdl-typography--font-regular-mdl-typography--text-uppercase android-alt-link");
playStore.addEventListener("click", function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'meioPlayStore',
    'eventAction': 'clickLink',
    'eventLabel': 'playStore'
  });
});
/* MEIO NEWS ON PLAYSTORE FIM */

/* MEIO CUSTOMISE */
var customise = document.querySelector(".android-link-mdl-typography--font-light");
customise.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'meioCustomise',
    'eventAction': 'clickLink',
    'eventLabel': 'customise'
  });
});
/* MEIO CUSTOMISE FIM */

/* MEIO MORE INFO */

var moreInfo = document.querySelectorAll(".android-link-mdl-button-mdl-js-button-mdl-typography--text-uppercase");
var moreInfoSwitch = moreInfo[0];
var moreInfoAndroidify = moreInfo[1];
var moreInfoDownload = moreInfo[2];
var moreInfoFindApps = moreInfo[3];

moreInfoSwitch = addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'meioMoreInfo',
    'eventAction': 'clickLink',
    'eventLabel': 'switch'
  });
});

moreInfoAndroidify = addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'meioMoreInfo',
    'eventAction': 'clickLink',
    'eventLabel': 'androidify'
  });
});

moreInfoDownload = addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'meioMoreInfo',
    'eventAction': 'clickLink',
    'eventLabel': 'download'
  });
});

moreInfoFindApps = addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'genericEvent',
    'eventCategory': 'meioMoreInfo',
    'eventAction': 'clickLink',
    'eventLabel': 'findApps'
  });
});
/* MEIO MORE INFO FIM */
