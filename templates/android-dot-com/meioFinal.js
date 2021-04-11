/* MEIO NEWS ON PLAYSTORE */
var playStore = document.querySelector(".mdl-typography--font-regular.mdl-typography--text-uppercase.android-alt-link");
playStore.addEventListener("click", function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:playStore',
    'eventAction': 'click:link',
    'eventLabel': 'playStore'
  });
});
/* MEIO NEWS ON PLAYSTORE FIM */

/* MEIO CUSTOMISE */
var customise = document.querySelector(".android-link.mdl-typography--font-light")[0];
customise.addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:customise',
    'eventAction': 'click:link',
    'eventLabel': 'customise'
  });
});
/* MEIO CUSTOMISE FIM */

/* MEIO MORE INFO */

/*var moreInfo = document.querySelectorAll(".android-link-mdl-button-mdl-js-button-mdl-typography--text-uppercase");
var moreInfoSwitch = moreInfo[0];
var moreInfoAndroidify = moreInfo[1];
var moreInfoDownload = moreInfo[2];
var moreInfoFindApps = moreInfo[3];
*/

var moreInfoSwitch = document.querySelector('.mdl-cell.mdl-cell--3-col.mdl-cell--4-col-tablet.mdl-cell--4-col-phone.mdl-card mdl-shadow--3dp')[0]
moreInfoSwitch = addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:moreInfo',
    'eventAction': 'click:link',
    'eventLabel': 'switch'
  });
});

var moreInfoAndroidify = document.querySelector('.mdl-cell.mdl-cell--3-col.mdl-cell--4-col-tablet.mdl-cell--4-col-phone.mdl-card mdl-shadow--3dp')[1]
moreInfoAndroidify = addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:moreInfo',
    'eventAction': 'click:link',
    'eventLabel': 'androidify'
  });
});

var moreInfoDownload = document.querySelector('.mdl-cell.mdl-cell--3-col.mdl-cell--4-col-tablet.mdl-cell--4-col-phone.mdl-card mdl-shadow--3dp')[2]
moreInfoDownload = addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:moreInfo',
    'eventAction': 'click:link',
    'eventLabel': 'download'
  });
});

var moreInfoFindApps = document.querySelector('.mdl-cell.mdl-cell--3-col.mdl-cell--4-col-tablet.mdl-cell--4-col-phone.mdl-card mdl-shadow--3dp')[3]
moreInfoFindApps = addEventListener('click', function() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'generic:event',
    'eventCategory': 'android:moreInfo',
    'eventAction': 'click:link',
    'eventLabel': 'findApps'
  });
});
/* MEIO MORE INFO FIM */
