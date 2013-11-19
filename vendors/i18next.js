// i18next, v1.7.1
// Copyright (c)2013 Jan Mühlemann (jamuhl).
// Distributed under MIT license
// http://i18next.com
// amd with jQuery
!function(a,b){if("object"==typeof exports){var c=require("jquery");module.exports=b(c)}else"function"==typeof define&&define.amd&&define(["jquery"],b)}(this,function(a){function b(a,b){if(!b||"function"==typeof b)return a;for(var c in b)a[c]=b[c];return a}function c(a,b,c){var d,e=0,f=a.length,g=void 0===f||"function"==typeof a;if(c)if(g){for(d in a)if(b.apply(a[d],c)===!1)break}else for(;f>e&&b.apply(a[e++],c)!==!1;);else if(g){for(d in a)if(b.call(a[d],d,a[d])===!1)break}else for(;f>e&&b.call(a[e],e,a[e++])!==!1;);return a}function d(a){return"string"==typeof a?a.replace(/[&<>"'\/]/g,function(a){return F[a]}):a}function e(a){var b=function(a){if(window.XMLHttpRequest)return a(null,new XMLHttpRequest);if(window.ActiveXObject)try{return a(null,new ActiveXObject("Msxml2.XMLHTTP"))}catch(b){return a(null,new ActiveXObject("Microsoft.XMLHTTP"))}return a(new Error)},c=function(a){if("string"==typeof a)return a;var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")},d=function(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(192|d>>6),b+=String.fromCharCode(128|63&d)):(b+=String.fromCharCode(224|d>>12),b+=String.fromCharCode(128|63&d>>6),b+=String.fromCharCode(128|63&d))}return b},e=function(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a=d(a);var c,e,f,g,h,i,j,k="",l=0;do c=a.charCodeAt(l++),e=a.charCodeAt(l++),f=a.charCodeAt(l++),g=c>>2,h=(3&c)<<4|e>>4,i=(15&e)<<2|f>>6,j=63&f,isNaN(e)?i=j=64:isNaN(f)&&(j=64),k+=b.charAt(g)+b.charAt(h)+b.charAt(i)+b.charAt(j),c=e=f="",g=h=i=j="";while(l<a.length);return k},f=function(){for(var a=arguments[0],b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])}return a},g=function(a,d,e,h){"function"==typeof e&&(h=e,e={}),e.cache=e.cache||!1,e.data=e.data||{},e.headers=e.headers||{},e.jsonp=e.jsonp||!1,e.async=void 0===e.async?!0:e.async;var i,j=f({accept:"*/*","content-type":"application/x-www-form-urlencoded;charset=UTF-8"},g.headers,e.headers);if(i="application/json"===j["content-type"]?JSON.stringify(e.data):c(e.data),"GET"===a){var k=[];if(i&&(k.push(i),i=null),e.cache||k.push("_="+(new Date).getTime()),e.jsonp&&(k.push("callback="+e.jsonp),k.push("jsonp="+e.jsonp)),k=k.join("&"),k.length>1&&(d+=d.indexOf("?")>-1?"&"+k:"?"+k),e.jsonp){var l=document.getElementsByTagName("head")[0],m=document.createElement("script");return m.type="text/javascript",m.src=d,l.appendChild(m),void 0}}b(function(b,c){if(b)return h(b);c.open(a,d,e.async);for(var f in j)j.hasOwnProperty(f)&&c.setRequestHeader(f,j[f]);c.onreadystatechange=function(){if(4===c.readyState){var a=c.responseText||"";if(!h)return;h(c.status,{text:function(){return a},json:function(){return JSON.parse(a)}})}},c.send(i)})},h={authBasic:function(a,b){g.headers.Authorization="Basic "+e(a+":"+b)},connect:function(a,b,c){return g("CONNECT",a,b,c)},del:function(a,b,c){return g("DELETE",a,b,c)},get:function(a,b,c){return g("GET",a,b,c)},head:function(a,b,c){return g("HEAD",a,b,c)},headers:function(a){g.headers=a||{}},isAllowed:function(a,b,c){this.options(a,function(a,d){c(-1!==d.text().indexOf(b))})},options:function(a,b,c){return g("OPTIONS",a,b,c)},patch:function(a,b,c){return g("PATCH",a,b,c)},post:function(a,b,c){return g("POST",a,b,c)},put:function(a,b,c){return g("PUT",a,b,c)},trace:function(a,b,c){return g("TRACE",a,b,c)}},i=a.type?a.type.toLowerCase():"get";h[i](a.url,a,function(b,c){200===b?a.success(c.json(),b,null):a.error(c.text(),b,null)})}function f(b,c){"function"==typeof b&&(c=b,b={}),b=b||{},I.extend(E,b),delete E.fixLng,"string"==typeof E.ns&&(E.ns={namespaces:[E.ns],defaultNs:E.ns}),"string"==typeof E.fallbackNS&&(E.fallbackNS=[E.fallbackNS]),E.interpolationPrefixEscaped=I.regexEscape(E.interpolationPrefix),E.interpolationSuffixEscaped=I.regexEscape(E.interpolationSuffix),E.lng||(E.lng=I.detectLanguage()),E.lng?E.useCookie&&I.cookie.create(E.cookieName,E.lng,E.cookieExpirationTime,E.cookieDomain):(E.lng=E.fallbackLng,E.useCookie&&I.cookie.remove(E.cookieName)),D=I.toLanguages(E.lng),z=D[0],I.log("currentLng set to: "+z);var d=t;b.fixLng&&(d=function(a,b){return b=b||{},b.lng=b.lng||d.lng,t(a,b)},d.lng=z),K.setCurrentLng(z),a&&E.setJqueryExt&&n();var e;if(a&&a.Deferred&&(e=a.Deferred()),!E.resStore){var f=I.toLanguages(E.lng);"string"==typeof E.preload&&(E.preload=[E.preload]);for(var g=0,h=E.preload.length;h>g;g++)for(var i=I.toLanguages(E.preload[g]),j=0,k=i.length;k>j;j++)f.indexOf(i[j])<0&&f.push(i[j]);return A.sync.load(f,E,function(a,b){B=b,initialized=!0,c&&c(d),e&&e.resolve(d)}),e?e.promise():void 0}return B=E.resStore,initialized=!0,c&&c(d),e&&e.resolve(d),e?e.promise():void 0}function g(a,b){"string"==typeof a&&(a=[a]);for(var c=0,d=a.length;d>c;c++)E.preload.indexOf(a[c])<0&&E.preload.push(a[c]);return f(b)}function h(a,b,c){"string"!=typeof b?(c=b,b=E.ns.defaultNs):E.ns.namespaces.indexOf(b)<0&&E.ns.namespaces.push(b),B[a]=B[a]||{},B[a][b]=B[a][b]||{},I.extend(B[a][b],c)}function i(a){E.ns.defaultNs=a}function j(a,b){k([a],b)}function k(a,b){var c={dynamicLoad:E.dynamicLoad,resGetPath:E.resGetPath,getAsync:E.getAsync,customLoad:E.customLoad,ns:{namespaces:a,defaultNs:""}},d=I.toLanguages(E.lng);"string"==typeof E.preload&&(E.preload=[E.preload]);for(var e=0,f=E.preload.length;f>e;e++)for(var g=I.toLanguages(E.preload[e]),h=0,i=g.length;i>h;h++)d.indexOf(g[h])<0&&d.push(g[h]);for(var j=[],k=0,l=d.length;l>k;k++){var m=!1,n=B[d[k]];if(n)for(var o=0,p=a.length;p>o;o++)n[a[o]]||(m=!0);else m=!0;m&&j.push(d[k])}j.length?A.sync._fetch(j,c,function(c,d){var e=a.length*j.length;I.each(a,function(a,c){E.ns.namespaces.indexOf(c)<0&&E.ns.namespaces.push(c),I.each(j,function(a,f){B[f]=B[f]||{},B[f][c]=d[f][c],e--,0===e&&b&&(E.useLocalStorage&&A.sync._storeLocal(B),b())})})}):b&&b()}function l(a,b,c){return"function"==typeof b&&(c=b,b={}),b.lng=a,f(b,c)}function m(){return z}function n(){function b(b,c,d){if(0!==c.length){var e="text";if(0===c.indexOf("[")){var f=c.split("]");c=f[1],e=f[0].substr(1,f[0].length-1)}c.indexOf(";")===c.length-1&&(c=c.substr(0,c.length-2));var g;"html"===e?(g=E.defaultValueFromContent?a.extend({defaultValue:b.html()},d):d,b.html(a.t(c,g))):"text"===e?(g=E.defaultValueFromContent?a.extend({defaultValue:b.text()},d):d,b.text(a.t(c,g))):(g=E.defaultValueFromContent?a.extend({defaultValue:b.attr(e)},d):d,b.attr(e,a.t(c,g)))}}function c(c,d){var e=c.attr(E.selectorAttr);if(e||"undefined"==typeof e||e===!1||(e=c.text()||c.val()),e){var f=c,g=c.data("i18n-target");if(g&&(f=c.find(g)||c),d||E.useDataAttrOptions!==!0||(d=c.data("i18n-options")),d=d||{},e.indexOf(";")>=0){var h=e.split(";");a.each(h,function(a,c){""!==c&&b(f,c,d)})}else b(f,e,d);E.useDataAttrOptions===!0&&c.data("i18n-options",d)}}a.t=a.t||t,a.fn.i18n=function(b){return this.each(function(){c(a(this),b);var d=a(this).find("["+E.selectorAttr+"]");d.each(function(){c(a(this),b)})})}}function o(a,b,c,d){if(!a)return a;if(d=d||b,a.indexOf(d.interpolationPrefix||E.interpolationPrefix)<0)return a;var e=d.interpolationPrefix?I.regexEscape(d.interpolationPrefix):E.interpolationPrefixEscaped,f=d.interpolationSuffix?I.regexEscape(d.interpolationSuffix):E.interpolationSuffixEscaped,g="HTML"+f;return I.each(b,function(b,h){var i=c?c+E.keyseparator+b:b;"object"==typeof h&&null!==h?a=o(a,h,i,d):d.escapeInterpolation||E.escapeInterpolation?(a=a.replace(new RegExp([e,i,g].join(""),"g"),h),a=a.replace(new RegExp([e,i,f].join(""),"g"),I.escape(h))):a=a.replace(new RegExp([e,i,f].join(""),"g"),h)}),a}function p(a,b){var c=",",d="{",e="}",f=I.extend({},b);for(delete f.postProcess;-1!=a.indexOf(E.reusePrefix)&&(C++,!(C>E.maxRecursion));){var g=a.lastIndexOf(E.reusePrefix),h=a.indexOf(E.reuseSuffix,g)+E.reuseSuffix.length,i=a.substring(g,h),j=i.replace(E.reusePrefix,"").replace(E.reuseSuffix,"");if(-1!=j.indexOf(c)){var k=j.indexOf(c);if(-1!=j.indexOf(d,k)&&-1!=j.indexOf(e,k)){var l=j.indexOf(d,k),m=j.indexOf(e,l)+e.length;try{f=I.extend(f,JSON.parse(j.substring(l,m))),j=j.substring(0,k)}catch(n){}}}var o=w(j,f);a=a.replace(i,o)}return a}function q(a){return a.context&&"string"==typeof a.context}function r(a){return void 0!==a.count&&"string"!=typeof a.count&&1!==a.count}function s(a,b){b=b||{};var c=u(a,b),d=x(a,b);return void 0!==d||d===c}function t(a,b){return initialized?(C=0,w.apply(null,arguments)):(I.log("i18next not finished initialization. you might have called t function before loading resources finished."),b.defaultValue||"")}function u(a,b){return void 0!==b.defaultValue?b.defaultValue:a}function v(){for(var a=[],b=1;b<arguments.length;b++)a.push(arguments[b]);return{postProcess:"sprintf",sprintf:a}}function w(a,b){"string"==typeof b?"sprintf"===E.shortcutFunction?b=v.apply(null,arguments):"defaultValue"===E.shortcutFunction&&(b={defaultValue:b}):b=b||{},"string"==typeof a&&(a=[a]);for(var c=null,d=0;d<a.length&&(c=a[d],!s(c));d++);var e,f=u(c,b),g=x(c,b),h=b.lng?I.toLanguages(b.lng):D,i=b.ns||E.ns.defaultNs;c.indexOf(E.nsseparator)>-1&&(e=c.split(E.nsseparator),i=e[0],c=e[1]),void 0===g&&E.sendMissing&&(b.lng?J.postMissing(h[0],i,c,f,h):J.postMissing(E.lng,i,c,f,h));var j=b.postProcess||E.postProcess;void 0!==g&&j&&L[j]&&(g=L[j](g,c,b));var k=f;if(f.indexOf(E.nsseparator)>-1&&(e=f.split(E.nsseparator),k=e[1]),k===c&&E.parseMissingKey&&(f=E.parseMissingKey(f)),void 0===g&&(f=o(f,b),f=p(f,b),j&&L[j])){var l=u(c,b);g=L[j](l,c,b)}return void 0!==g?g:f}function x(a,b){b=b||{};var c,d,e=u(a,b),f=D;if(!B)return e;if(b.lng&&(f=I.toLanguages(b.lng),!B[f[0]])){var g=E.getAsync;E.getAsync=!1,A.sync.load(f,E,function(a,b){I.extend(B,b),E.getAsync=g})}var h=b.ns||E.ns.defaultNs;if(a.indexOf(E.nsseparator)>-1){var i=a.split(E.nsseparator);h=i[0],a=i[1]}if(q(b)){c=I.extend({},b),delete c.context,c.defaultValue=E.contextNotFound;var j=h+E.nsseparator+a+"_"+b.context;if(d=t(j,c),d!=E.contextNotFound)return o(d,{context:b.context})}if(r(b)){c=I.extend({},b),delete c.count,c.defaultValue=E.pluralNotFound;var k=h+E.nsseparator+a+E.pluralSuffix,l=K.get(f[0],b.count);if(l>=0?k=k+"_"+l:1===l&&(k=h+E.nsseparator+a),d=t(k,c),d!=E.pluralNotFound)return o(d,{count:b.count,interpolationPrefix:b.interpolationPrefix,interpolationSuffix:b.interpolationSuffix})}for(var m,n=a.split(E.keyseparator),s=0,v=f.length;v>s&&void 0===m;s++){for(var y=f[s],z=0,C=B[y]&&B[y][h];n[z];)C=C&&C[n[z]],z++;if(void 0!==C){if("string"==typeof C)C=o(C,b),C=p(C,b);else if("[object Array]"!==Object.prototype.toString.apply(C)||E.returnObjectTrees||b.returnObjectTrees){if(null===C&&E.fallbackOnNull===!0)C=void 0;else if(null!==C)if(E.returnObjectTrees||b.returnObjectTrees){if("number"!=typeof C){var F={};I.each(C,function(c){F[c]=w(h+E.nsseparator+a+E.keyseparator+c,b)}),C=F}}else C="key '"+h+":"+a+" ("+y+")' "+"returned a object instead of string.",I.log(C)}else C=C.join("\n"),C=o(C,b),C=p(C,b);m=C}}if(void 0===m&&!b.isFallbackLookup&&(E.fallbackToDefaultNS===!0||E.fallbackNS&&E.fallbackNS.length>0))if(b.isFallbackLookup=!0,E.fallbackNS.length){for(var G=0,H=E.fallbackNS.length;H>G;G++)if(m=x(E.fallbackNS[G]+E.nsseparator+a,b)){var J=m.indexOf(E.nsseparator)>-1?m.split(E.nsseparator)[1]:m,L=e.indexOf(E.nsseparator)>-1?e.split(E.nsseparator)[1]:e;if(J!==L)break}}else m=x(a,b);return m}function y(){var a,b=[];if("undefined"!=typeof window&&(!function(){for(var a=window.location.search.substring(1),c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("=");if(e>0){var f=c[d].substring(0,e),g=c[d].substring(e+1);b[f]=g}}}(),b[E.detectLngQS]&&(a=b[E.detectLngQS])),!a&&"undefined"!=typeof document&&E.useCookie){var c=I.cookie.read(E.cookieName);c&&(a=c)}return a||"undefined"==typeof navigator||(a=navigator.language?navigator.language:navigator.userLanguage),a}Array.prototype.indexOf||(Array.prototype.indexOf=function(a){"use strict";if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>0&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&1/0!=d&&d!=-1/0&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(a){"use strict";if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=c;arguments.length>1&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d))));for(var e=d>=0?Math.min(d,c-1):c-Math.abs(d);e>=0;e--)if(e in b&&b[e]===a)return e;return-1});var z,A={},B={},C=0,D=[],E={lng:void 0,load:"all",preload:[],lowerCaseLng:!1,returnObjectTrees:!1,fallbackLng:"dev",fallbackNS:[],detectLngQS:"setLng",ns:"translation",fallbackOnNull:!0,fallbackToDefaultNS:!1,nsseparator:":",keyseparator:".",selectorAttr:"data-i18n",debug:!1,resGetPath:"locales/__lng__/__ns__.json",resPostPath:"locales/add/__lng__/__ns__",getAsync:!0,postAsync:!0,resStore:void 0,useLocalStorage:!1,localStorageExpirationTime:6048e5,dynamicLoad:!1,sendMissing:!1,sendMissingTo:"fallback",sendType:"POST",interpolationPrefix:"__",interpolationSuffix:"__",reusePrefix:"$t(",reuseSuffix:")",pluralSuffix:"_plural",pluralNotFound:["plural_not_found",Math.random()].join(""),contextNotFound:["context_not_found",Math.random()].join(""),escapeInterpolation:!1,setJqueryExt:!0,defaultValueFromContent:!0,useDataAttrOptions:!1,cookieExpirationTime:void 0,useCookie:!0,cookieName:"i18next",cookieDomain:void 0,postProcess:void 0,parseMissingKey:void 0,shortcutFunction:"sprintf"},F={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},G={create:function(a,b,c,d){var e;if(c){var f=new Date;f.setTime(f.getTime()+1e3*60*c),e="; expires="+f.toGMTString()}else e="";d=d?"domain="+d+";":"",document.cookie=a+"="+b+e+";"+d+"path=/"},read:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null},remove:function(a){this.create(a,"",-1)}},H={create:function(){},read:function(){return null},remove:function(){}},I={extend:a?a.extend:b,each:a?a.each:c,ajax:a?a.ajax:e,cookie:"undefined"!=typeof document?G:H,detectLanguage:y,escape:d,log:function(a){E.debug&&"undefined"!=typeof console&&console.log(a)},toLanguages:function(a){var b=[];if("string"==typeof a&&a.indexOf("-")>-1){var c=a.split("-");a=E.lowerCaseLng?c[0].toLowerCase()+"-"+c[1].toLowerCase():c[0].toLowerCase()+"-"+c[1].toUpperCase(),"unspecific"!==E.load&&b.push(a),"current"!==E.load&&b.push(c[0])}else b.push(a);return-1===b.indexOf(E.fallbackLng)&&E.fallbackLng&&b.push(E.fallbackLng),b},regexEscape:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}};I.applyReplacement=o;var J={load:function(a,b,c){b.useLocalStorage?J._loadLocal(a,b,function(d,e){for(var f=[],g=0,h=a.length;h>g;g++)e[a[g]]||f.push(a[g]);f.length>0?J._fetch(f,b,function(a,b){I.extend(e,b),J._storeLocal(b),c(null,e)}):c(null,e)}):J._fetch(a,b,function(a,b){c(null,b)})},_loadLocal:function(a,b,c){var d={},e=(new Date).getTime();if(window.localStorage){var f=a.length;I.each(a,function(a,g){var h=window.localStorage.getItem("res_"+g);h&&(h=JSON.parse(h),h.i18nStamp&&h.i18nStamp+b.localStorageExpirationTime>e&&(d[g]=h)),f--,0===f&&c(null,d)})}},_storeLocal:function(a){if(window.localStorage)for(var b in a)a[b].i18nStamp=(new Date).getTime(),window.localStorage.setItem("res_"+b,JSON.stringify(a[b]))},_fetch:function(a,b,c){var d=b.ns,e={};if(b.dynamicLoad){var f=function(a,b){c(null,b)};if("function"==typeof b.customLoad)b.customLoad(a,d.namespaces,b,f);else{var g=o(b.resGetPath,{lng:a.join("+"),ns:d.namespaces.join("+")});I.ajax({url:g,success:function(a){I.log("loaded: "+g),f(null,a)},error:function(a,b,c){I.log("failed loading: "+g),f("failed loading resource.json error: "+c)},dataType:"json",async:b.getAsync})}}else{var h,i=d.namespaces.length*a.length;I.each(d.namespaces,function(d,f){I.each(a,function(a,d){var g=function(a,b){a&&(h=h||[],h.push(a)),e[d]=e[d]||{},e[d][f]=b,i--,0===i&&c(h,e)};"function"==typeof b.customLoad?b.customLoad(d,f,b,g):J._fetchOne(d,f,b,g)})})}},_fetchOne:function(a,b,c,d){var e=o(c.resGetPath,{lng:a,ns:b});I.ajax({url:e,success:function(a){I.log("loaded: "+e),d(null,a)},error:function(a,b,c){I.log("failed loading: "+e),d(c,{})},dataType:"json",async:c.getAsync})},postMissing:function(a,b,c,d,e){var f={};f[c]=d;var g=[];if("fallback"===E.sendMissingTo&&E.fallbackLng!==!1)g.push({lng:E.fallbackLng,url:o(E.resPostPath,{lng:E.fallbackLng,ns:b})});else if("current"===E.sendMissingTo||"fallback"===E.sendMissingTo&&E.fallbackLng===!1)g.push({lng:a,url:o(E.resPostPath,{lng:a,ns:b})});else if("all"===E.sendMissingTo)for(var h=0,i=e.length;i>h;h++)g.push({lng:e[h],url:o(E.resPostPath,{lng:e[h],ns:b})});for(var j=0,k=g.length;k>j;j++){var l=g[j];I.ajax({url:l.url,type:E.sendType,data:f,success:function(){I.log("posted missing key '"+c+"' to: "+l.url);for(var a=c.split("."),e=0,f=B[l.lng][b];a[e];)f=f[a[e]]=e===a.length-1?d:f[a[e]]||{},e++},error:function(){I.log("failed posting missing key '"+c+"' to: "+l.url)},dataType:"json",async:E.postAsync})}}},K={rules:{ach:{name:"Acholi",numbers:[1,2],plurals:function(a){return Number(a>1)}},af:{name:"Afrikaans",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ak:{name:"Akan",numbers:[1,2],plurals:function(a){return Number(a>1)}},am:{name:"Amharic",numbers:[1,2],plurals:function(a){return Number(a>1)}},an:{name:"Aragonese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ar:{name:"Arabic",numbers:[0,1,2,3,11,100],plurals:function(a){return Number(0===a?0:1==a?1:2==a?2:a%100>=3&&10>=a%100?3:a%100>=11?4:5)}},arn:{name:"Mapudungun",numbers:[1,2],plurals:function(a){return Number(a>1)}},ast:{name:"Asturian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ay:{name:"Aymará",numbers:[1],plurals:function(){return 0}},az:{name:"Azerbaijani",numbers:[1,2],plurals:function(a){return Number(1!=a)}},be:{name:"Belarusian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},bg:{name:"Bulgarian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},bn:{name:"Bengali",numbers:[1,2],plurals:function(a){return Number(1!=a)}},bo:{name:"Tibetan",numbers:[1],plurals:function(){return 0}},br:{name:"Breton",numbers:[1,2],plurals:function(a){return Number(a>1)}},bs:{name:"Bosnian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},ca:{name:"Catalan",numbers:[1,2],plurals:function(a){return Number(1!=a)}},cgg:{name:"Chiga",numbers:[1],plurals:function(){return 0}},cs:{name:"Czech",numbers:[1,2,5],plurals:function(a){return Number(1==a?0:a>=2&&4>=a?1:2)}},csb:{name:"Kashubian",numbers:[1,2,5],plurals:function(a){return Number(1==a?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},cy:{name:"Welsh",numbers:[1,2,3,8],plurals:function(a){return Number(1==a?0:2==a?1:8!=a&&11!=a?2:3)}},da:{name:"Danish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},de:{name:"German",numbers:[1,2],plurals:function(a){return Number(1!=a)}},dz:{name:"Dzongkha",numbers:[1],plurals:function(){return 0}},el:{name:"Greek",numbers:[1,2],plurals:function(a){return Number(1!=a)}},en:{name:"English",numbers:[1,2],plurals:function(a){return Number(1!=a)}},eo:{name:"Esperanto",numbers:[1,2],plurals:function(a){return Number(1!=a)}},es:{name:"Spanish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},es_ar:{name:"Argentinean Spanish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},et:{name:"Estonian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},eu:{name:"Basque",numbers:[1,2],plurals:function(a){return Number(1!=a)}},fa:{name:"Persian",numbers:[1],plurals:function(){return 0}},fi:{name:"Finnish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},fil:{name:"Filipino",numbers:[1,2],plurals:function(a){return Number(a>1)}},fo:{name:"Faroese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},fr:{name:"French",numbers:[1,2],plurals:function(a){return Number(a>1)}},fur:{name:"Friulian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},fy:{name:"Frisian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ga:{name:"Irish",numbers:[1,2,3,7,11],plurals:function(a){return Number(1==a?0:2==a?1:7>a?2:11>a?3:4)}},gd:{name:"Scottish Gaelic",numbers:[1,2,3,20],plurals:function(a){return Number(1==a||11==a?0:2==a||12==a?1:a>2&&20>a?2:3)}},gl:{name:"Galician",numbers:[1,2],plurals:function(a){return Number(1!=a)}},gu:{name:"Gujarati",numbers:[1,2],plurals:function(a){return Number(1!=a)}},gun:{name:"Gun",numbers:[1,2],plurals:function(a){return Number(a>1)}},ha:{name:"Hausa",numbers:[1,2],plurals:function(a){return Number(1!=a)}},he:{name:"Hebrew",numbers:[1,2],plurals:function(a){return Number(1!=a)}},hi:{name:"Hindi",numbers:[1,2],plurals:function(a){return Number(1!=a)}},hr:{name:"Croatian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},hu:{name:"Hungarian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},hy:{name:"Armenian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ia:{name:"Interlingua",numbers:[1,2],plurals:function(a){return Number(1!=a)}},id:{name:"Indonesian",numbers:[1],plurals:function(){return 0}},is:{name:"Icelandic",numbers:[1,2],plurals:function(a){return Number(1!=a%10||11==a%100)}},it:{name:"Italian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ja:{name:"Japanese",numbers:[1],plurals:function(){return 0}},jbo:{name:"Lojban",numbers:[1],plurals:function(){return 0}},jv:{name:"Javanese",numbers:[0,1],plurals:function(a){return Number(0!==a)}},ka:{name:"Georgian",numbers:[1],plurals:function(){return 0}},kk:{name:"Kazakh",numbers:[1],plurals:function(){return 0}},km:{name:"Khmer",numbers:[1],plurals:function(){return 0}},kn:{name:"Kannada",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ko:{name:"Korean",numbers:[1],plurals:function(){return 0}},ku:{name:"Kurdish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},kw:{name:"Cornish",numbers:[1,2,3,4],plurals:function(a){return Number(1==a?0:2==a?1:3==a?2:3)}},ky:{name:"Kyrgyz",numbers:[1],plurals:function(){return 0}},lb:{name:"Letzeburgesch",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ln:{name:"Lingala",numbers:[1,2],plurals:function(a){return Number(a>1)}},lo:{name:"Lao",numbers:[1],plurals:function(){return 0}},lt:{name:"Lithuanian",numbers:[1,2,10],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&(10>a%100||a%100>=20)?1:2)}},lv:{name:"Latvian",numbers:[0,1,2],plurals:function(a){return Number(1==a%10&&11!=a%100?0:0!==a?1:2)}},mai:{name:"Maithili",numbers:[1,2],plurals:function(a){return Number(1!=a)}},mfe:{name:"Mauritian Creole",numbers:[1,2],plurals:function(a){return Number(a>1)}},mg:{name:"Malagasy",numbers:[1,2],plurals:function(a){return Number(a>1)}},mi:{name:"Maori",numbers:[1,2],plurals:function(a){return Number(a>1)}},mk:{name:"Macedonian",numbers:[1,2],plurals:function(a){return Number(1==a||1==a%10?0:1)}},ml:{name:"Malayalam",numbers:[1,2],plurals:function(a){return Number(1!=a)}},mn:{name:"Mongolian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},mnk:{name:"Mandinka",numbers:[0,1,2],plurals:function(a){return Number(1==a?1:2)}},mr:{name:"Marathi",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ms:{name:"Malay",numbers:[1],plurals:function(){return 0}},mt:{name:"Maltese",numbers:[1,2,11,20],plurals:function(a){return Number(1==a?0:0===a||a%100>1&&11>a%100?1:a%100>10&&20>a%100?2:3)}},nah:{name:"Nahuatl",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nap:{name:"Neapolitan",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nb:{name:"Norwegian Bokmal",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ne:{name:"Nepali",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nl:{name:"Dutch",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nn:{name:"Norwegian Nynorsk",numbers:[1,2],plurals:function(a){return Number(1!=a)}},no:{name:"Norwegian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nso:{name:"Northern Sotho",numbers:[1,2],plurals:function(a){return Number(1!=a)}},oc:{name:"Occitan",numbers:[1,2],plurals:function(a){return Number(a>1)}},or:{name:"Oriya",numbers:[2,1],plurals:function(a){return Number(1!=a)}},pa:{name:"Punjabi",numbers:[1,2],plurals:function(a){return Number(1!=a)}},pap:{name:"Papiamento",numbers:[1,2],plurals:function(a){return Number(1!=a)}},pl:{name:"Polish",numbers:[1,2,5],plurals:function(a){return Number(1==a?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},pms:{name:"Piemontese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ps:{name:"Pashto",numbers:[1,2],plurals:function(a){return Number(1!=a)}},pt:{name:"Portuguese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},pt_br:{name:"Brazilian Portuguese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},rm:{name:"Romansh",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ro:{name:"Romanian",numbers:[1,2,20],plurals:function(a){return Number(1==a?0:0===a||a%100>0&&20>a%100?1:2)}},ru:{name:"Russian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},sah:{name:"Yakut",numbers:[1],plurals:function(){return 0}},sco:{name:"Scots",numbers:[1,2],plurals:function(a){return Number(1!=a)}},se:{name:"Northern Sami",numbers:[1,2],plurals:function(a){return Number(1!=a)}},si:{name:"Sinhala",numbers:[1,2],plurals:function(a){return Number(1!=a)}},sk:{name:"Slovak",numbers:[1,2,5],plurals:function(a){return Number(1==a?0:a>=2&&4>=a?1:2)}},sl:{name:"Slovenian",numbers:[5,1,2,3],plurals:function(a){return Number(1==a%100?1:2==a%100?2:3==a%100||4==a%100?3:0)}},so:{name:"Somali",numbers:[1,2],plurals:function(a){return Number(1!=a)}},son:{name:"Songhay",numbers:[1,2],plurals:function(a){return Number(1!=a)}},sq:{name:"Albanian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},sr:{name:"Serbian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},su:{name:"Sundanese",numbers:[1],plurals:function(){return 0}},sv:{name:"Swedish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},sw:{name:"Swahili",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ta:{name:"Tamil",numbers:[1,2],plurals:function(a){return Number(1!=a)}},te:{name:"Telugu",numbers:[1,2],plurals:function(a){return Number(1!=a)}},tg:{name:"Tajik",numbers:[1,2],plurals:function(a){return Number(a>1)}},th:{name:"Thai",numbers:[1],plurals:function(){return 0}},ti:{name:"Tigrinya",numbers:[1,2],plurals:function(a){return Number(a>1)}},tk:{name:"Turkmen",numbers:[1,2],plurals:function(a){return Number(1!=a)}},tr:{name:"Turkish",numbers:[1,2],plurals:function(a){return Number(a>1)}},tt:{name:"Tatar",numbers:[1],plurals:function(){return 0}},ug:{name:"Uyghur",numbers:[1],plurals:function(){return 0}},uk:{name:"Ukrainian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},ur:{name:"Urdu",numbers:[1,2],plurals:function(a){return Number(1!=a)}},uz:{name:"Uzbek",numbers:[1,2],plurals:function(a){return Number(a>1)}},vi:{name:"Vietnamese",numbers:[1],plurals:function(){return 0}},wa:{name:"Walloon",numbers:[1,2],plurals:function(a){return Number(a>1)}},wo:{name:"Wolof",numbers:[1],plurals:function(){return 0}},yo:{name:"Yoruba",numbers:[1,2],plurals:function(a){return Number(1!=a)}},zh:{name:"Chinese",numbers:[1],plurals:function(){return 0}}},addRule:function(a,b){K.rules[a]=b},setCurrentLng:function(a){if(!K.currentRule||K.currentRule.lng!==a){var b=a.split("-");K.currentRule={lng:a,rule:K.rules[b[0]]}}},get:function(a,b){function c(b,c){var d;if(d=K.currentRule&&K.currentRule.lng===a?K.currentRule.rule:K.rules[b]){var e=d.plurals(c),f=d.numbers[e];return 2===d.numbers.length&&1===d.numbers[0]&&(2===f?f=-1:1===f&&(f=1)),f}return 1===c?"1":"-1"}var d=a.split("-");return c(d[0],b)}},L={},M=function(a,b){L[a]=b},N=function(){function a(a){return Object.prototype.toString.call(a).slice(8,-1).toLowerCase()}function b(a,b){for(var c=[];b>0;c[--b]=a);return c.join("")}var c=function(){return c.cache.hasOwnProperty(arguments[0])||(c.cache[arguments[0]]=c.parse(arguments[0])),c.format.call(null,c.cache[arguments[0]],arguments)};return c.format=function(c,d){var e,f,g,h,i,j,k,l=1,m=c.length,n="",o=[];for(f=0;m>f;f++)if(n=a(c[f]),"string"===n)o.push(c[f]);else if("array"===n){if(h=c[f],h[2])for(e=d[l],g=0;g<h[2].length;g++){if(!e.hasOwnProperty(h[2][g]))throw N('[sprintf] property "%s" does not exist',h[2][g]);e=e[h[2][g]]}else e=h[1]?d[h[1]]:d[l++];if(/[^s]/.test(h[8])&&"number"!=a(e))throw N("[sprintf] expecting number but found %s",a(e));switch(h[8]){case"b":e=e.toString(2);break;case"c":e=String.fromCharCode(e);break;case"d":e=parseInt(e,10);break;case"e":e=h[7]?e.toExponential(h[7]):e.toExponential();break;case"f":e=h[7]?parseFloat(e).toFixed(h[7]):parseFloat(e);break;case"o":e=e.toString(8);break;case"s":e=(e=String(e))&&h[7]?e.substring(0,h[7]):e;break;case"u":e=Math.abs(e);break;case"x":e=e.toString(16);break;case"X":e=e.toString(16).toUpperCase()}e=/[def]/.test(h[8])&&h[3]&&e>=0?"+"+e:e,j=h[4]?"0"==h[4]?"0":h[4].charAt(1):" ",k=h[6]-String(e).length,i=h[6]?b(j,k):"",o.push(h[5]?e+i:i+e)}return o.join("")},c.cache={},c.parse=function(a){for(var b=a,c=[],d=[],e=0;b;){if(null!==(c=/^[^\x25]+/.exec(b)))d.push(c[0]);else if(null!==(c=/^\x25{2}/.exec(b)))d.push("%");else{if(null===(c=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(b)))throw"[sprintf] huh?";if(c[2]){e|=1;var f=[],g=c[2],h=[];if(null===(h=/^([a-z_][a-z_\d]*)/i.exec(g)))throw"[sprintf] huh?";for(f.push(h[1]);""!==(g=g.substring(h[0].length));)if(null!==(h=/^\.([a-z_][a-z_\d]*)/i.exec(g)))f.push(h[1]);else{if(null===(h=/^\[(\d+)\]/.exec(g)))throw"[sprintf] huh?";f.push(h[1])}c[2]=f}else e|=2;if(3===e)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";d.push(c)}b=b.substring(c[0].length)}return d},c}(),O=function(a,b){return b.unshift(a),N.apply(null,b)};return M("sprintf",function(a,b,c){return c.sprintf?"[object Array]"===Object.prototype.toString.apply(c.sprintf)?O(a,c.sprintf):"object"==typeof c.sprintf?N(a,c.sprintf):a:a}),A.init=f,A.setLng=l,A.preload=g,A.addResourceBundle=h,A.loadNamespace=j,A.loadNamespaces=k,A.setDefaultNamespace=i,A.t=t,A.translate=t,A.exists=s,A.detectLanguage=I.detectLanguage,A.pluralExtensions=K,A.sync=J,A.functions=I,A.lng=m,A.addPostProcessor=M,A.options=E,a.i18n=A,a.t=A.t,A});