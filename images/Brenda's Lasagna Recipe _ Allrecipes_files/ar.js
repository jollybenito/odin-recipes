"use strict";var brandmetrics;!function(p){if(void 0===p.api){p.api=null;var f,i="unknown";p.bootstrap=function(e,n,t){void 0===t&&(t=!1);var o=function(){window._brandmetrics_initiated&&window._brandmetrics_initiated(window.brandmetrics.api),n&&n(window.brandmetrics.api)};"unknown"===i||t?(i="strapping",r(e,function(e,n){if(e)u(n,function(e){window.brandmetrics.api=e,o()});else{window.brandmetrics.api={hasConsent:function(){return!1},isReady:function(){return!0}},o()}})):o()},p.register=function(e){v[e.id]=e.ctor,f&&f(e)},p.getModule=function(e){return v[e]},p.defaultOptions=function(e){return{siteId:void 0===e.siteId?"":e.siteId,baseUrl:void 0!==e.baseUrl?e.baseUrl:location.protocol+"//"+location.host,cdnUrl:e.cdnUrl,measurements:e.measurements||[],language:e.language,listeners:e.listeners||[],storage:e.storage||"none",startMode:void 0===e.startMode?{type:"manual"}:e.startMode,cookieDomain:void 0!==e.cookieDomain?e.cookieDomain:".brandmetrics.com",consentMode:void 0===e.consentMode?{type:"iab"}:e.consentMode,consentRetryCount:void 0===e.consentRetryCount?2:e.consentRetryCount,userMode:void 0===e.userMode?{type:"none"}:e.userMode,isTest:void 0!==e.isTest&&e.isTest,logConfiguration:void 0!==e.logConfiguration?e.logConfiguration:{errors:!1,bundle:!1,level:"None"},survey:void 0!==e.survey?e.survey:{max:10,interval:10,expInt:10,maxTot:50,intervalTot:10},adSlot:{},inview:void 0!==e.inview?e.inview:{type:"intersectionobserver",threshold:1e3},surveyRandomization:void 0!==e.surveyRandomization?e.surveyRandomization:!0===e.isTest?1:.5,hostConfiguration:e.hostConfiguration,dataRequestType:e.dataRequestType||"script"}};var v={},r=function(e,t){if(!("sandbox"in document.createElement("iframe")))throw new Error("Sandbox not supported");s();var o=p.defaultOptions(e||{});if(d())a(!1,o,t);else{var i=1,r=function(){n(o,function(e,n){!e&&i<=o.consentRetryCount?(i++,setTimeout(function(){r()},3e3)):t(e,n)})};r()}},n=function(n,t){if("none"!==n.consentMode.type){var e=void 0;switch(n.consentMode.type){case"iab":e=new(p.getModule(22));break;case"custom":e=new(p.getModule(23))(n.consentMode.conf);break;default:throw new Error("Cannot handle consent type: "+n.consentMode.type)}e.check(function(e){e?o(n,t):a(!1,n,t)})}else o(n,t)},s=function(){},o=function(e,n){if(void 0===window._brandmetrics_consent)a(!0,e,n);else{var t=window._brandmetrics_consent();a(t,e,n)}},a=function(e,n,t){t(e,n)},d=function(){try{return null!==localStorage.getItem("__bmdnt")}catch(e){return!1}},u=function(s,a){var e=[0,21,3,4,2,19];switch(s.userMode.type){case"custom":e.push(24)}var d="none"!==s.storage||0<s.listeners.length;if(d)switch(e.push(1),e.push(26),s.inview.type){case"intersectionobserver":e.push(16),e.push(15);break;case"legacy":e.push(15);break;case"none":break;default:throw new Error("brandmetrics: inview not supported: "+s.inview)}for(var u=[],n=0,t=s.listeners;n<t.length;n++){var o=t[n],i="apn"===o.type?10:"gpt"===o.type?8:"pxl"===o.type?11:"pbj"===o.type?7:"ntv"===o.type?12:"gptStrict"===o.type?9:"gptHb"===o.type?28:-1;-1!==i&&(u.push({n:i,d:o}),e.push(i))}var c,r="ls"===s.storage?5:6;c=r,e.push(r);var l=function(){return e.filter(function(e){return void 0===v[e]}).length<=0&&(f=void 0,function(){var e=new(p.getModule(2))(s),n=new(p.getModule(c))(s,e,!1),t=u.filter(function(e){return"api"!==e.d.type}).map(function(e){return new(p.getModule(e.n))(e.d)}),o=new(p.getModule(3))(s,e),i=p.getModule(4),r=d?new(p.getModule(1))(s,o,e,t,n):void 0;void 0!==r&&new(p.getModule(26))({options:s,collection:r});switch(s.userMode.type){case"custom":s.userMode.conf.measurements&&0<s.userMode.conf.measurements.length&&(new(p.getModule(24))(s.userMode.conf).lookup(function(e){e&&o.ConfigureSingleUsers(e)}),o.RestrictSingleUserMesurement(s.userMode.conf.measurements))}p.getModule(0)(s,e,o,i,r,0,function(e){a(e)})}(),!0)};(f=l)()||(m(s,e),l())},m=function(e,n){if(document.body){for(var t=0,o=0,i=n;o<i.length;o++){var r=i[o];t|=Math.pow(2,r)}var s=window.location&&window.location.search&&-1!==window.location.search.indexOf("bm_d"),a="?";if(s&&(a+="bm_d"),e.logConfiguration.bundle){var d="sid="+e.siteId+"&rnd="+Math.floor(9999001*Math.random()+1e3).toString();a+="?"===a?d:"&"+d}var u=(!s&&e.cdnUrl?e.cdnUrl:e.baseUrl)+"/scripts/bundle/"+t.toString()+".js"+("?"!==a?a:""),c=document.createElement("script");c.setAttribute("type","text/javascript"),c.setAttribute("async","true"),c.setAttribute("src",u),document.body.appendChild(c)}else document.addEventListener("DOMContentLoaded",function(){m(e,n)})}}}(brandmetrics||(brandmetrics={}));"use strict";!function(){var n=function(t){var i,a,n=function(){if(window.__tcfapi)return window.__tcfapi;for(var o,t=window,a={};t;){try{if(t.frames.___tcfapiLocator){o=t;break}}catch(t){}if(t===window.top)break;t=t.parent}return o?(window.addEventListener("message",function(t){var n;try{n="string"==typeof t.data?JSON.parse(t.data):t.data}catch(t){}if(void 0!==n){var e=n.__tcfapiReturn;e&&a[e.callId]&&(a[e.callId](e.returnValue,e.success),delete a[e.callId])}},!1),window.__tcfapi=function(t,n,e,r){var i={__tcfapiCall:{command:t,parameter:r,version:n,callId:Math.random().toString()}};a[i.__tcfapiCall.callId]=e,o.postMessage(i,"*")},window.__tcfapi):void 0}();n?(a=t,n("getTCData",2,function(t,n){if(n&&t.vendor&&t.purpose){var e=t.vendor,r=t.purpose,i=!1,o=!1;if(e.consents&&(i=e.consents[422]),e.legitimateInterests&&(i=i||e.legitimateInterests[422]),r.consents&&(o=r.consents[1]),r.legitimateInterests&&(o=o||r.legitimateInterests[1]),i&&o)return void a(!0)}a(!1)},[422])):window.__cmp&&"function"==typeof window.__cmp?(i=t,window.__cmp("getVendorConsents",Uint16Array.from([422]),function(t,n){if(n&&t.vendorConsents&&t.purposeConsents){var e=t.vendorConsents[422],r=t.purposeConsents[1];if(e&&r)return void i(!0)}i(!1)})):t(!0)},t=function(){function t(){}return t.prototype.check=function(t){n(t)},t}();window.brandmetrics.register({id:22,ctor:t})}();window.brandmetrics.bootstrap({baseUrl:"https://collector.brandmetrics.com",cdnUrl:"https://cdn.brandmetrics.com",siteId:"b37d045d-05ae-48fe-af55-f25eb49e091c",storage:"ls",listeners:[{"type":"gpt","conf":null},{"type":"ntv","conf":[{"element":{"type":"url","regex":"(?:https:\\/\\/)?(?:www\\.)?([^?]+)"},"id":{"type":"url","regex":"(?:https:\\/\\/)?(?:www\\.)?([^?]+)"}}]}],measurements:[{id:"93a4b2537e49495f8fa2f96fe846d732",keys:[{"source":"gpt","lineItemId":"5884395317","campaignId":2966145078},{"source":"gpt","lineItemId":"5884395536","campaignId":2966145078},{"source":"gpt","lineItemId":"5884395542","campaignId":2966145078},{"source":"gpt","lineItemId":"5901523668","campaignId":2966145078},{"source":"gpt","lineItemId":"5884395353","campaignId":2966145078},{"source":"gpt","lineItemId":"5884395989","campaignId":2966145078}],},{id:"221c0686bc1f4907b70a4e3ca17e1ab0",keys:[{"source":"gpt","lineItemId":"5862698142","campaignId":2955691420},{"source":"gpt","lineItemId":"5862698157","campaignId":2955691420},{"source":"gpt","lineItemId":"5862698283","campaignId":2955691420},{"source":"gpt","lineItemId":"5862698295","campaignId":2955691420},{"source":"gpt","lineItemId":"5862698307","campaignId":2955691420},{"source":"gpt","lineItemId":"5862698313","campaignId":2955691420},{"source":"gpt","lineItemId":"5862699252","campaignId":2955691420},{"source":"gpt","lineItemId":"5863973746","campaignId":2955691420},{"source":"gpt","lineItemId":"5863973893","campaignId":2955691420},{"source":"gpt","lineItemId":"5863973902","campaignId":2955691420},{"source":"gpt","lineItemId":"5863973917","campaignId":2955691420},{"source":"gpt","lineItemId":"5863974124","campaignId":2955691420}],},{id:"3daa78221b484a1f839fc94d23cfa0e1",keys:[{"source":"gpt","lineItemId":"5864371649","campaignId":2956285335},{"source":"gpt","lineItemId":"5864371802","campaignId":2956285335},{"source":"gpt","lineItemId":"5862461979","campaignId":2956285335},{"source":"gpt","lineItemId":"5862462198","campaignId":2956285335},{"source":"gpt","lineItemId":"5862462219","campaignId":2956285335},{"source":"gpt","lineItemId":"5862462384","campaignId":2956285335},{"source":"gpt","lineItemId":"5862462435","campaignId":2956285335},{"source":"gpt","lineItemId":"5862462471","campaignId":2956285335},{"source":"gpt","lineItemId":"5863722844","campaignId":2956285335},{"source":"gpt","lineItemId":"5863722883","campaignId":2956285335},{"source":"gpt","lineItemId":"5864371427","campaignId":2956285335},{"source":"gpt","lineItemId":"5864371820","campaignId":2956285335},{"source":"gpt","lineItemId":"5864371862","campaignId":2956285335}],},{id:"59c229c47cc44b4abe4729a7db9f5946",keys:[{"source":"gpt","lineItemId":"5846431377","campaignId":2945186126},{"source":"gpt","lineItemId":"5846473587","campaignId":2945186126},{"source":"gpt","lineItemId":"5848342487","campaignId":2945186126},{"source":"gpt","lineItemId":"5848342523","campaignId":2945186126},{"source":"gpt","lineItemId":"5848342547","campaignId":2945186126}],},{id:"f78c3b6c12514a34a5abac15827b8e48",keys:[{"source":"gpt","lineItemId":"5866255136","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255175","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255154","campaignId":2956516751},{"source":"gpt","lineItemId":"5864380221","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255340","campaignId":2956516751},{"source":"gpt","lineItemId":"5865587245","campaignId":2956516751},{"source":"gpt","lineItemId":"5865587206","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255592","campaignId":2956516751},{"source":"gpt","lineItemId":"5865586783","campaignId":2956516751},{"source":"gpt","lineItemId":"5866249604","campaignId":2956516751},{"source":"gpt","lineItemId":"5866254917","campaignId":2956516751},{"source":"gpt","lineItemId":"5864368446","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255418","campaignId":2956516751},{"source":"gpt","lineItemId":"5865587239","campaignId":2956516751},{"source":"gpt","lineItemId":"5864380521","campaignId":2956516751},{"source":"gpt","lineItemId":"5866254872","campaignId":2956516751},{"source":"gpt","lineItemId":"5865587191","campaignId":2956516751},{"source":"gpt","lineItemId":"5864380461","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255820","campaignId":2956516751},{"source":"gpt","lineItemId":"5864380494","campaignId":2956516751},{"source":"gpt","lineItemId":"5865586798","campaignId":2956516751},{"source":"gpt","lineItemId":"5866254902","campaignId":2956516751},{"source":"gpt","lineItemId":"5865586723","campaignId":2956516751},{"source":"gpt","lineItemId":"5866254911","campaignId":2956516751},{"source":"gpt","lineItemId":"5866254884","campaignId":2956516751},{"source":"gpt","lineItemId":"5865587224","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255565","campaignId":2956516751},{"source":"gpt","lineItemId":"5865586990","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255634","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255607","campaignId":2956516751},{"source":"gpt","lineItemId":"5865586930","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255838","campaignId":2956516751},{"source":"gpt","lineItemId":"5865587170","campaignId":2956516751},{"source":"gpt","lineItemId":"5865570712","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255871","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255661","campaignId":2956516751},{"source":"gpt","lineItemId":"5865586741","campaignId":2956516751},{"source":"gpt","lineItemId":"5865587035","campaignId":2956516751},{"source":"gpt","lineItemId":"5866249622","campaignId":2956516751},{"source":"gpt","lineItemId":"5865586966","campaignId":2956516751},{"source":"gpt","lineItemId":"5866249640","campaignId":2956516751},{"source":"gpt","lineItemId":"5866254941","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255856","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255379","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255088","campaignId":2956516751},{"source":"gpt","lineItemId":"5865586762","campaignId":2956516751},{"source":"gpt","lineItemId":"5866254851","campaignId":2956516751},{"source":"gpt","lineItemId":"5865586735","campaignId":2956516751},{"source":"gpt","lineItemId":"5866254959","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255358","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255196","campaignId":2956516751},{"source":"gpt","lineItemId":"5865586957","campaignId":2956516751},{"source":"gpt","lineItemId":"5866254950","campaignId":2956516751},{"source":"gpt","lineItemId":"5866254896","campaignId":2956516751},{"source":"gpt","lineItemId":"5866255679","campaignId":2956516751},{"source":"gpt","lineItemId":"5865586942","campaignId":2956516751},{"source":"gpt","lineItemId":"5866254929","campaignId":2956516751}],},{id:"431e58ff74ee47b5a8a382a94b201f5c",keys:[{"source":"gpt","lineItemId":"5910841174","campaignId":2978212052},{"source":"gpt","lineItemId":"5910841189","campaignId":2978212052},{"source":"gpt","lineItemId":"5910841327","campaignId":2978212052},{"source":"gpt","lineItemId":"5910841348","campaignId":2978212052},{"source":"gpt","lineItemId":"5911546451","campaignId":2978212052}],},{id:"8116982e7b47454da3989bdeb3116c52",keys:[{"source":"gpt","lineItemId":"5925226289","campaignId":2983444703}],},{id:"1b3a8b4ef8cd43fca9ecb2d42a4f6330",keys:[{"source":"gpt","lineItemId":"5939491573","campaignId":2989221349},{"source":"gpt","lineItemId":"5937141493","campaignId":2989221349},{"source":"gpt","lineItemId":"5937141535","campaignId":2989221349},{"source":"gpt","lineItemId":"5937141574","campaignId":2989221349},{"source":"gpt","lineItemId":"5937141727","campaignId":2989221349},{"source":"gpt","lineItemId":"5937141760","campaignId":2989221349},{"source":"gpt","lineItemId":"5937141799","campaignId":2989221349},{"source":"gpt","lineItemId":"5937141967","campaignId":2989221349}],},{id:"993c6c81c29e46fd8f1279261a51a7c0",keys:[{"source":"gpt","lineItemId":"5934349836","campaignId":2988525287},{"source":"gpt","lineItemId":"5934350811","campaignId":2988525287}],},{id:"8c48344399f947359bc7bc63189aa55c",keys:[{"source":"gpt","lineItemId":"5859265675","campaignId":2952697819},{"source":"gpt","lineItemId":"5859267316","campaignId":2952697819},{"source":"gpt","lineItemId":"5857989285","campaignId":2952697819},{"source":"gpt","lineItemId":"5859265630","campaignId":2952697819},{"source":"gpt","lineItemId":"5859265810","campaignId":2952697819},{"source":"gpt","lineItemId":"5859265822","campaignId":2952697819},{"source":"gpt","lineItemId":"5859265831","campaignId":2952697819},{"source":"gpt","lineItemId":"5859265846","campaignId":2952697819},{"source":"gpt","lineItemId":"5859265879","campaignId":2952697819},{"source":"gpt","lineItemId":"5859265882","campaignId":2952697819},{"source":"gpt","lineItemId":"5859265885","campaignId":2952697819},{"source":"gpt","lineItemId":"5859266122","campaignId":2952697819},{"source":"gpt","lineItemId":"5859266146","campaignId":2952697819},{"source":"gpt","lineItemId":"5859267016","campaignId":2952697819},{"source":"gpt","lineItemId":"5859267034","campaignId":2952697819},{"source":"gpt","lineItemId":"5859267049","campaignId":2952697819},{"source":"gpt","lineItemId":"5859267064","campaignId":2952697819},{"source":"gpt","lineItemId":"5859267073","campaignId":2952697819},{"source":"gpt","lineItemId":"5859267082","campaignId":2952697819},{"source":"gpt","lineItemId":"5859267091","campaignId":2952697819},{"source":"gpt","lineItemId":"5859267289","campaignId":2952697819},{"source":"gpt","lineItemId":"5859267325","campaignId":2952697819},{"source":"gpt","lineItemId":"5859267481","campaignId":2952697819},{"source":"gpt","lineItemId":"5859267487","campaignId":2952697819},{"source":"gpt","lineItemId":"5859267490","campaignId":2952697819},{"source":"gpt","lineItemId":"5859267493","campaignId":2952697819},{"source":"gpt","lineItemId":"5859267505","campaignId":2952697819},{"source":"gpt","lineItemId":"5859943856","campaignId":2952697819},{"source":"gpt","lineItemId":"5859943880","campaignId":2952697819},{"source":"gpt","lineItemId":"5859943898","campaignId":2952697819},{"source":"gpt","lineItemId":"5859944042","campaignId":2952697819},{"source":"gpt","lineItemId":"5859944057","campaignId":2952697819},{"source":"gpt","lineItemId":"5859944072","campaignId":2952697819},{"source":"gpt","lineItemId":"5859944135","campaignId":2952697819},{"source":"gpt","lineItemId":"5859944378","campaignId":2952697819},{"source":"gpt","lineItemId":"5859944384","campaignId":2952697819},{"source":"gpt","lineItemId":"5859944396","campaignId":2952697819},{"source":"gpt","lineItemId":"5859944525","campaignId":2952697819},{"source":"gpt","lineItemId":"5859944552","campaignId":2952697819},{"source":"gpt","lineItemId":"5860938893","campaignId":2952697819},{"source":"gpt","lineItemId":"5863453134","campaignId":2952697819},{"source":"gpt","lineItemId":"5864692048","campaignId":2952697819}],},{id:"1b7f3218af0a4383bfe922fee907930a",keys:[{"source":"gpt","lineItemId":"5859162418","campaignId":2952569015},{"source":"gpt","lineItemId":"5859163816","campaignId":2952569015},{"source":"gpt","lineItemId":"5859163843","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837515","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837536","campaignId":2952569015},{"source":"gpt","lineItemId":"5859838010","campaignId":2952569015},{"source":"gpt","lineItemId":"5859838268","campaignId":2952569015},{"source":"gpt","lineItemId":"5857906002","campaignId":2952569015},{"source":"gpt","lineItemId":"5857906014","campaignId":2952569015},{"source":"gpt","lineItemId":"5857906017","campaignId":2952569015},{"source":"gpt","lineItemId":"5857906023","campaignId":2952569015},{"source":"gpt","lineItemId":"5857906065","campaignId":2952569015},{"source":"gpt","lineItemId":"5857906071","campaignId":2952569015},{"source":"gpt","lineItemId":"5857906215","campaignId":2952569015},{"source":"gpt","lineItemId":"5857906230","campaignId":2952569015},{"source":"gpt","lineItemId":"5857906242","campaignId":2952569015},{"source":"gpt","lineItemId":"5857906245","campaignId":2952569015},{"source":"gpt","lineItemId":"5857906545","campaignId":2952569015},{"source":"gpt","lineItemId":"5859159829","campaignId":2952569015},{"source":"gpt","lineItemId":"5859159988","campaignId":2952569015},{"source":"gpt","lineItemId":"5859159997","campaignId":2952569015},{"source":"gpt","lineItemId":"5859160021","campaignId":2952569015},{"source":"gpt","lineItemId":"5859162229","campaignId":2952569015},{"source":"gpt","lineItemId":"5859162370","campaignId":2952569015},{"source":"gpt","lineItemId":"5859162382","campaignId":2952569015},{"source":"gpt","lineItemId":"5859162409","campaignId":2952569015},{"source":"gpt","lineItemId":"5859163366","campaignId":2952569015},{"source":"gpt","lineItemId":"5859163387","campaignId":2952569015},{"source":"gpt","lineItemId":"5859163420","campaignId":2952569015},{"source":"gpt","lineItemId":"5859163435","campaignId":2952569015},{"source":"gpt","lineItemId":"5859163561","campaignId":2952569015},{"source":"gpt","lineItemId":"5859163570","campaignId":2952569015},{"source":"gpt","lineItemId":"5859163585","campaignId":2952569015},{"source":"gpt","lineItemId":"5859163627","campaignId":2952569015},{"source":"gpt","lineItemId":"5859163648","campaignId":2952569015},{"source":"gpt","lineItemId":"5859163828","campaignId":2952569015},{"source":"gpt","lineItemId":"5859163840","campaignId":2952569015},{"source":"gpt","lineItemId":"5859163879","campaignId":2952569015},{"source":"gpt","lineItemId":"5859821168","campaignId":2952569015},{"source":"gpt","lineItemId":"5859836774","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837317","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837332","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837338","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837344","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837347","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837485","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837497","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837509","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837548","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837560","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837581","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837743","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837752","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837764","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837788","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837797","campaignId":2952569015},{"source":"gpt","lineItemId":"5859837818","campaignId":2952569015},{"source":"gpt","lineItemId":"5859838001","campaignId":2952569015},{"source":"gpt","lineItemId":"5859838034","campaignId":2952569015},{"source":"gpt","lineItemId":"5859838073","campaignId":2952569015},{"source":"gpt","lineItemId":"5859838205","campaignId":2952569015},{"source":"gpt","lineItemId":"5859838211","campaignId":2952569015},{"source":"gpt","lineItemId":"5859838226","campaignId":2952569015},{"source":"gpt","lineItemId":"5859838235","campaignId":2952569015},{"source":"gpt","lineItemId":"5859838253","campaignId":2952569015},{"source":"gpt","lineItemId":"5859838286","campaignId":2952569015},{"source":"gpt","lineItemId":"5859838475","campaignId":2952569015},{"source":"gpt","lineItemId":"5859838490","campaignId":2952569015},{"source":"gpt","lineItemId":"5859838502","campaignId":2952569015},{"source":"gpt","lineItemId":"5864647351","campaignId":2952569015},{"source":"gpt","lineItemId":"5864664442","campaignId":2952569015},{"source":"gpt","lineItemId":"5865327293","campaignId":2952569015}],},{id:"ab5e7cd8ea3842d8869d10b37aa36a3a",keys:[{"source":"gpt","lineItemId":"5865780205","campaignId":2957401344},{"source":"gpt","lineItemId":"5865782371","campaignId":2957401344},{"source":"gpt","lineItemId":"5865782383","campaignId":2957401344},{"source":"gpt","lineItemId":"5865782395","campaignId":2957401344},{"source":"gpt","lineItemId":"5865782536","campaignId":2957401344},{"source":"gpt","lineItemId":"5865782551","campaignId":2957401344},{"source":"gpt","lineItemId":"5865782566","campaignId":2957401344},{"source":"gpt","lineItemId":"5865782578","campaignId":2957401344},{"source":"gpt","lineItemId":"5866431743","campaignId":2957401344},{"source":"gpt","lineItemId":"5866453361","campaignId":2957401344}],},{id:"1dcb49a4ff7d44209acfb39f4bb6d9e3",keys:[{"source":"gpt","lineItemId":"5794019673","campaignId":2910630704},{"source":"gpt","lineItemId":"5795436883","campaignId":2910630704},{"source":"gpt","lineItemId":"5795438389","campaignId":2910630704},{"source":"gpt","lineItemId":"5796030236","campaignId":2910630704},{"source":"gpt","lineItemId":"5796030380","campaignId":2910630704},{"source":"gpt","lineItemId":"5796030392","campaignId":2910630704},{"source":"gpt","lineItemId":"5796030407","campaignId":2910630704},{"source":"gpt","lineItemId":"5796030419","campaignId":2910630704},{"source":"gpt","lineItemId":"5858007045","campaignId":2910630704},{"source":"gpt","lineItemId":"5858007048","campaignId":2910630704},{"source":"gpt","lineItemId":"5858007093","campaignId":2910630704},{"source":"gpt","lineItemId":"5858007096","campaignId":2910630704},{"source":"gpt","lineItemId":"5858007102","campaignId":2910630704},{"source":"gpt","lineItemId":"5858007105","campaignId":2910630704}],},{id:"a48f87946a62472abdc18f07deaedc41",keys:[{"source":"gpt","lineItemId":"5857108554","campaignId":2952912675},{"source":"gpt","lineItemId":"5858998238","campaignId":2952912675},{"source":"gpt","lineItemId":"5859002114","campaignId":2952912675},{"source":"gpt","lineItemId":"5859002123","campaignId":2952912675},{"source":"gpt","lineItemId":"5859002135","campaignId":2952912675},{"source":"gpt","lineItemId":"5859002141","campaignId":2952912675}],},{id:"34eed1dad23d40d88a2b319211dcf28f",keys:[{"source":"gpt","lineItemId":"5886172005","campaignId":2967782841},{"source":"gpt","lineItemId":"5886172017","campaignId":2967782841},{"source":"gpt","lineItemId":"5886172029","campaignId":2967782841},{"source":"gpt","lineItemId":"5886172044","campaignId":2967782841},{"source":"gpt","lineItemId":"5886172059","campaignId":2967782841},{"source":"gpt","lineItemId":"5886172074","campaignId":2967782841},{"source":"gpt","lineItemId":"5886172248","campaignId":2967782841},{"source":"gpt","lineItemId":"5886172296","campaignId":2967782841},{"source":"gpt","lineItemId":"5886172314","campaignId":2967782841},{"source":"gpt","lineItemId":"5887384462","campaignId":2967782841},{"source":"gpt","lineItemId":"5887384468","campaignId":2967782841},{"source":"gpt","lineItemId":"5887384483","campaignId":2967782841},{"source":"gpt","lineItemId":"5887384492","campaignId":2967782841},{"source":"gpt","lineItemId":"2967782841","campaignId":2967782841}],},{id:"2a34a2edf0cd40d2a2d88c7e8cd35516",keys:[{"source":"gpt","lineItemId":"5875488888","campaignId":2962940340},{"source":"gpt","lineItemId":"5875489098","campaignId":2962940340},{"source":"gpt","lineItemId":"5875488606","campaignId":2962940340},{"source":"gpt","lineItemId":"5875488855","campaignId":2962940340},{"source":"gpt","lineItemId":"5875488909","campaignId":2962940340},{"source":"gpt","lineItemId":"5875488933","campaignId":2962940340},{"source":"gpt","lineItemId":"5875487406","campaignId":2962940340},{"source":"gpt","lineItemId":"5875488630","campaignId":2962940340},{"source":"gpt","lineItemId":"5875488687","campaignId":2962940340},{"source":"gpt","lineItemId":"5875488873","campaignId":2962940340},{"source":"gpt","lineItemId":"5875488945","campaignId":2962940340},{"source":"gpt","lineItemId":"5875488957","campaignId":2962940340},{"source":"gpt","lineItemId":"5875489137","campaignId":2962940340},{"source":"gpt","lineItemId":"5875489155","campaignId":2962940340},{"source":"gpt","lineItemId":"5875489176","campaignId":2962940340},{"source":"gpt","lineItemId":"5876690602","campaignId":2962940340}],},{id:"a3a44d50cd05441abb7f00d04bff6810",keys:[{"source":"gpt","lineItemId":"5762318116","campaignId":2892202731},{"source":"gpt","lineItemId":"5762318122","campaignId":2892202731},{"source":"gpt","lineItemId":"5762320261","campaignId":2892202731},{"source":"gpt","lineItemId":"5794699803","campaignId":2892202731},{"source":"gpt","lineItemId":"5794714683","campaignId":2892202731},{"source":"gpt","lineItemId":"5794715910","campaignId":2892202731},{"source":"gpt","lineItemId":"5794742100","campaignId":2892202731},{"source":"gpt","lineItemId":"5794742130","campaignId":2892202731},{"source":"gpt","lineItemId":"5796085162","campaignId":2892202731},{"source":"gpt","lineItemId":"5796678458","campaignId":2892202731},{"source":"gpt","lineItemId":"5796678845","campaignId":2892202731},{"source":"gpt","lineItemId":"5796704282","campaignId":2892202731},{"source":"gpt","lineItemId":"5796704636","campaignId":2892202731},{"source":"gpt","lineItemId":"5797015835","campaignId":2892202731},{"source":"gpt","lineItemId":"2892202731","campaignId":2892202731}],},{id:"38464f9e988b4860a3b0f93d4b190267",keys:[{"source":"api","key":"38464f9e988b4860a3b0f93d4b190267"}],},{id:"992b5353e79d47efb80356c416184adb",keys:[{"source":"gpt","campaignId":2990407915}],}],consentMode:{"type":"iab","conf":null},surveyRandomization:1,startMode:{"type":"auto","conf":null},userMode:{"type":"none","conf":null},});