"use strict";var Markdown,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Markdown="object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"function"==typeof require?exports:{},function(){function t(e){return e}function n(e){return!1}function e(){}function k(){}e.prototype={chain:function(e,n){var r=this[e];if(!r)throw new Error("unknown hook "+e);this[e]=r===t?n:function(e){return n(r(e))}},set:function(e,n){if(!this[e])throw new Error("unknown hook "+e);this[e]=n},addNoop:function(e){this[e]=t},addFalse:function(e){this[e]=n}},Markdown.HookCollection=e,k.prototype={set:function(e,n){this["s_"+e]=n},get:function(e){return this["s_"+e]}},Markdown.Converter=function(){var h,m,u,o,r=this.hooks=new e;function c(e){return e=(e=(e=(e=(e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,n)).replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,n)).replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,n)).replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,n)).replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,n)}function n(e,n){var r=n;return r=(r=r.replace(/^\n+/,"")).replace(/\n+$/g,""),r="\n\n~K"+(u.push(r)-1)+"K\n\n"}function l(e,n){var r,t="<hr />\n";return e=p(e=(e=(e=(e=e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(e,n){return"<h1>"+i(n)+"</h1>\n\n"}).replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(e,n){return"<h2>"+i(n)+"</h2>\n\n"}).replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(e,n,r){var t=n.length;return"<h"+t+">"+i(r)+"</h"+t+">\n\n"})).replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,t)).replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,t)).replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,t)),r=e,e=r=(r=(r+="~0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(e,n,r){var t=n,o=r;return"\n\n"+(t="<pre><code>"+(t=(t=(t=_(t=s(v(t)))).replace(/^\n+/g,"")).replace(/\n+$/g,""))+"\n</code></pre>")+"\n\n"+o})).replace(/~0/,""),e=function(e,n){for(var r=(e=(e=e.replace(/^\n+/g,"")).replace(/\n+$/g,"")).split(/\n{2,}/g),t=[],o=/~K(\d+)K/,c=r.length,a=0;a<c;a++){var l=r[a];o.test(l)?t.push(l):/\S/.test(l)&&(l=(l=i(l)).replace(/^([ \t]*)/g,"<p>"),l+="</p>",t.push(l))}if(!n){c=t.length;for(var a=0;a<c;a++)for(var p=!0;p;)p=!1,t[a]=t[a].replace(/~K(\d+)K/g,function(e,n){return p=!0,u[n]})}return t.join("\n\n")}(e=c(e=e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(e,n){var r,t=n;return t=(t=(t=l(t=(t=(t=t.replace(/^[ \t]*>[ \t]?/gm,"~0")).replace(/~0/g,"")).replace(/^[ \t]+$/gm,""))).replace(/(^|\n)/g,"$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,n){var r=n;return r=(r=r.replace(/^  /gm,"~0")).replace(/~0/g,"")}),r=(r="<blockquote>\n"+t+"\n</blockquote>").replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(u.push(r)-1)+"K\n\n"})),n)}function i(e){return e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,n,r,t,o){var c=t;return n+"<code>"+(c=(c=s(c=(c=c.replace(/^([ \t]*)/g,"")).replace(/[ \t]*$/g,""))).replace(/:\/\//g,"~P"))+"</code>"}),e=e.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi,function(e){var n=e.replace(/(.)<\/?code>(?=.)/g,"$1`");return n=y(n,"!"==e.charAt(1)?"\\`*_/":"\\`*_")}),e=e.replace(/\\(\\)/g,b).replace(/\\([`*_{}\[\]()>#+-.!])/g,b),e=e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,a).replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,a),e=d(e=(e=function(e){e=e.replace(/(^|\s)(https?|ftp)(:\/\/[-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[-A-Z0-9+&@#\/%=~_|\[\]])($|\W)/gi,"$1<$2$3>$4");return e=e.replace(/<((https?|ftp):[^'">\s]+)>/gi,function(e,n){return'<a href="'+n+'">'+r.plainLinkText(n)+"</a>"})}(e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,t).replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,t).replace(/(\[([^\[\]]+)\])()()()()()/g,t))).replace(/~P/g,"://")),e=(e=e.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g,"$1<strong>$3</strong>$4").replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g,"$1<em>$3</em>$4")).replace(/  +\n/g," <br>\n")}function t(e,n,r,t,o,c,a,l){null==l&&(l="");var p=n,u=r.replace(/:\/\//g,"~P"),i=t.toLowerCase(),g=o,f=l;if(""==g)if(""==i&&(i=u.toLowerCase().replace(/ ?\n/g," ")),g="#"+i,null!=h.get(i))g=h.get(i),null!=m.get(i)&&(f=m.get(i));else{if(!(-1<p.search(/\(\s*\)$/m)))return p;g=""}var s='<a href="'+(g=y(g=function(r){if(!r)return"";var t=r.length;return r.replace(w,function(e,n){return"~D"==e?"%24":":"!=e||n!=t-1&&!/[0-9\/]/.test(r.charAt(n+1))?"%"+e.charCodeAt(0).toString(16):":"})}(g),"*_"))+'"';return""!=f&&(s+=' title="'+(f=y(f=f.replace(/"/g,"&quot;"),"*_"))+'"'),s+=">"+u+"</a>"}function a(e,n,r,t,o,c,a,l){var p=n,u=r,i=t.toLowerCase(),g=o,f=l;if(f||(f=""),""==g){if(""==i&&(i=u.toLowerCase().replace(/ ?\n/g," ")),g="#"+i,null==h.get(i))return p;g=h.get(i),null!=m.get(i)&&(f=m.get(i))}u=y(u.replace(/"/g,"&quot;"),"*_[]()");var s='<img src="'+(g=y(g,"*_"))+'" alt="'+u+'"';return s+=' title="'+(f=y(f=f.replace(/"/g,"&quot;"),"*_"))+'"',s+=" />"}function p(e){e+="~0";var n=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return o?e=e.replace(n,function(e,n,r){var t=n,o=-1<r.search(/[*+-]/g)?"ul":"ol",c=f(t,o);return c="<"+o+">"+(c=c.replace(/\s+$/,""))+"</"+o+">\n"}):(n=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,e=e.replace(n,function(e,n,r,t){var o=n,c=r,a=-1<t.search(/[*+-]/g)?"ul":"ol",l=f(c,a);return l=o+"<"+a+">\n"+l+"</"+a+">\n"})),e=e.replace(/~0/,"")}r.addNoop("plainLinkText"),r.addNoop("preConversion"),r.addNoop("postConversion"),this.makeHtml=function(e){if(h)throw new Error("Recursive call to converter.makeHtml");return h=new k,m=new k,u=[],o=0,e=c(e=(e=_(e="\n\n"+(e=(e=(e=(e=(e=r.preConversion(e)).replace(/~/g,"~T")).replace(/\$/g,"~D")).replace(/\r\n/g,"\n")).replace(/\r/g,"\n"))+"\n\n")).replace(/^[ \t]+$/gm,"")),e=l(e=e.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,function(e,n,r,t,o,c){return n=n.toLowerCase(),h.set(n,d(r)),o?t:(c&&m.set(n,c.replace(/"/g,"&quot;")),"")})),e=(e=(e=e.replace(/~E(\d+)E/g,function(e,n){var r=parseInt(n);return String.fromCharCode(r)})).replace(/~D/g,"$$")).replace(/~T/g,"~"),e=r.postConversion(e),u=m=h=null,e};var g={ol:"\\d+[.]",ul:"[*+-]"};function f(e,n){o++,e=e.replace(/\n{2,}$/,"\n"),e+="~0";var r=g[n],t=new RegExp("(^[ \\t]*)("+r+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+r+")[ \\t]+))","gm"),a=!1;return e=(e=e.replace(t,function(e,n,r,t){var o=t,c=/\n\n$/.test(o);return o=c||-1<o.search(/\n{2,}/)||a?l(v(o),!0):i(o=(o=p(v(o))).replace(/\n$/,"")),a=c,"<li>"+o+"</li>\n"})).replace(/~0/g,""),o--,e}function s(e){return e=y(e=(e=(e=e.replace(/&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;"),"*_{}[]\\",!1)}function d(e){return e=(e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;")).replace(/<(?![a-z\/?\$!])/gi,"&lt;")}function v(e){return e=(e=e.replace(/^(\t|[ ]{1,4})/gm,"~0")).replace(/~0/g,"")}function _(e){if(!/\t/.test(e))return e;var r,t=["    ","   ","  "," "],o=0;return e.replace(/[\n\t]/g,function(e,n){return"\n"===e?(o=n+1,e):(r=(n-o)%4,o=n+1,t[r])})}var w=/(?:["'*()[\]:]|~D)/g;function y(e,n,r){var t="(["+n.replace(/([\[\]\\])/g,"\\$1")+"])";r&&(t="\\\\"+t);var o=new RegExp(t,"g");return e=e.replace(o,b)}function b(e,n){return"~E"+n.charCodeAt(0)+"E"}}}();