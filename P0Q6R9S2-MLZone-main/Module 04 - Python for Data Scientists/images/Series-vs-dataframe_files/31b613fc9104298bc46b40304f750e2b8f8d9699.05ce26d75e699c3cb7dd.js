(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{CwrG:function(e,t,n){"use strict";(function(e){var r=n("HeVR"),i=n("r7fO"),a=n.n(i),o=n("Kjgm"),c=n("0cs2"),s=n("lm2l"),u=n("4Cts"),l=n("uZsn"),f=n("y71I"),d="text-gray-500  dark:text-gray-600 hover:text-white focus:text-white hover:cursor-pointer focus:cursor-pointer",p={letterSpacing:"2.5px"};t.a=function(t){var n=function(){return Object(r.jsxs)("div",{className:"flex flex-col my-4 sm:mt-14 items-start text-left",children:[Object(r.jsx)(a.a,{prefetch:!1,href:"/",children:Object(r.jsx)("a",{id:e.env.REACT_APP_STANDALONE?"selenium-footer-logo":null,"aria-label":"educative.io",children:Object(r.jsxs)("div",{className:"flex items-center text-white",children:[Object(r.jsx)(o.a,{height:"20px"}),Object(r.jsx)(c.a,{className:"h-4 ml-2"})]})})}),Object(r.jsx)("div",{className:"mt-4 text-gray-100 dark:text-dark-contrastText leading-6",children:Object(r.jsx)("p",{className:"text-base",children:l.k})})]})},i=s.b.map((function(e){return Object(r.jsx)("a",{href:e.to,target:"_blank",rel:"noopener noreferrer","aria-label":e.name,className:"mb-4 text-gray-50 fill-current hover:text-primary focus:text-primary dark:hover:text-primary-light dark:focus:text-primary-light hover:cursor-pointer focus:cursor-pointer",children:Object(r.jsx)("span",{className:"mr-1 flex justify-center h-12 w-12",children:e.icon})},e.name)}));return Object(r.jsx)("div",{className:"w-full mt-auto relative flex-none ".concat(t.hidden?"hidden":"flex"," ").concat(t.noTopPadding?"pt-0":"pt-24"),children:Object(r.jsx)("div",{className:"flex justify-center flex-col w-full py-10 px-4 lg:px-6 bg-utils-footerLight dark:bg-utils-footerDark",children:Object(r.jsxs)("div",{className:"flex items-start justify-between flex-col self-center w-full",style:{maxWidth:"1140px"},children:[Object(r.jsx)("div",{className:"flex flex-col justify-between w-full",children:Object(r.jsx)(n,{})}),Object(r.jsx)("div",{className:"w-full self-center",children:Object(r.jsx)(u.a,{color:"border-gray-50 dark:border-gray-500"})}),Object(r.jsx)("div",{className:"grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 content-center w-full lg:gap-x-[calc(25%-176px)] sm:gap-x-[calc(33.3%-90px)] gap-x-[calc(50%-75px)] overflow-hidden",children:s.a.map((function(e,t){return Object(r.jsxs)("div",{className:"mt-12 sm:w-48 sm:shrink-0 ",style:{maxWidth:"186px"},children:[Object(r.jsx)("div",{className:"text-xs font-semibold tracking-widest uppercase mb-4 text-white dark:text-dark-contrastText leading-5",style:p,children:e.catName}),e.links.map((function(e){return"cookie-settings"===e.type?Object(r.jsxs)("div",{id:"ed-cookie-settings",className:"flex",onClick:function(){var e,t;return null===(e=window)||void 0===e||null===(t=e.OneTrust)||void 0===t?void 0:t.ToggleInfoDisplay()},children:[Object(r.jsx)("span",{className:"".concat(d," font-normal mb-4 leading-6"),children:e.name}),e.tag&&Object(r.jsx)(f.a,{className:"ml-2",children:e.tag})]},e.name):Object(r.jsxs)("div",{className:"flex",children:[Object(r.jsx)(a.a,{prefetch:!1,href:e.to,passHref:!0,children:Object(r.jsx)("a",{"aria-label":e.to.startsWith("/")?"educative.io".concat(e.to):e.to,rel:e.rel,children:Object(r.jsx)("p",{className:"".concat(d," font-normal mb-4 leading-6"),children:e.name})})}),e.tag&&Object(r.jsx)(f.a,{className:"ml-2",children:e.tag})]},e.name)}))]},e.catName)}))}),Object(r.jsx)("div",{className:"w-full self-center flex bg-gray-A400 mt-6",children:Object(r.jsx)(u.a,{})}),Object(r.jsxs)("div",{className:"flex justify-center lg:justify-between mt-10 sm:mt-4 mb-4 lg:mb-14 self-center w-full flex-col lg:flex-row items-center lg:items-start",style:{maxWidth:"1140px"},children:[Object(r.jsx)("div",{className:"mt-4 ml-4 lg:ml-0 flex items-center justify-start",children:i}),Object(r.jsxs)("div",{className:"flex items-center text-left text-gray-500 flex-col-reverse lg:flex-row -mt-2 lg:mt-0",children:[Object(r.jsxs)("p",{className:"text-xs font-semibold tracking-wide m-0 mt-2 lg:mt-0",children:["Copyright \xa9",(new Date).getFullYear()," Educative, Inc. All rights reserved."]}),Object(r.jsx)("img",{src:"/static/imgs/soc2.svg",id:e.env.REACT_APP_STANDALONE?"selenium-soc2":null,loading:"lazy",alt:"soc2",className:"m-2 lg:m-0 lg:ml-5 w-12 h-12"})]})]})]})})})}}).call(this,n("viS8"))},chUb:function(e,t,n){"use strict";n.d(t,"a",(function(){return T})),n.d(t,"c",(function(){return D}));var r=n("yZHS"),i=Object.prototype.hasOwnProperty;var a=new WeakMap,o=0;var c={isOnline:function(){return"undefined"===typeof navigator.onLine||navigator.onLine},isDocumentVisible:function(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))}},s=new(function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.__cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(){this.__cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.__cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n)if(null!==e[n]){var r=void 0;"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):a.has(e[n])?r=a.get(e[n]):(r=o,a.set(e[n],o++)),t+="@"+r}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.__listeners.push(e),function(){if(n){n=!1;var r=t.__listeners.indexOf(e);r>-1&&(t.__listeners[r]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}());var u="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),l={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,i){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&i.retryCount>n.errorRetryCount)){var a=Math.min(i.retryCount||0,8),o=~~((Math.random()+.5)*(1<<a))*n.errorRetryInterval;setTimeout(r,o,i)}},errorRetryInterval:1e3*(u?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(u?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,a;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((a=t.length)===n.length)for(;a--&&e(t[a],n[a]););return-1===a}if(!r||"object"===typeof t){for(r in a=0,t){if(i.call(t,r)&&++a&&!i.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===a}}return t!==t&&n!==n},fetcher:c.fetcher,isOnline:c.isOnline,isDocumentVisible:c.isDocumentVisible},f=Object(r.createContext)({});f.displayName="SWRConfigContext";var d=f,p=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(t){a(t)}}function c(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((r=r.apply(e,t||[])).next())}))},h=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(c){a=[6,c],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},m="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),v=m?null:window.requestAnimationFrame||function(e){return setTimeout(e,1)},y=m?r.useEffect:r.useLayoutEffect,b={},g={},j={},O={},x={},w={},k={},E=function(){var e=0;return function(){return++e}}();if(!m&&window.addEventListener){var S=function(e){if(l.isDocumentVisible()&&l.isOnline())for(var t in e)e[t][0]&&e[t][0]()};window.addEventListener("visibilitychange",(function(){return S(j)}),!1),window.addEventListener("focus",(function(){return S(j)}),!1),window.addEventListener("online",(function(){return S(O)}),!1)}var N=function(e,t){void 0===t&&(t=!0);var n=s.serializeKey(e),r=n[0],i=n[2],a=n[3];if(!r)return Promise.resolve();var o=x[r];if(r&&o){for(var c=s.get(r),u=s.get(i),l=s.get(a),f=[],d=0;d<o.length;++d)f.push(o[d](t,c,u,l,d>0));return Promise.all(f).then((function(){return s.get(r)}))}return Promise.resolve(s.get(r))},L=function(e,t,n,r){var i=x[e];if(e&&i)for(var a=0;a<i.length;++a)i[a](!1,t,n,r)},_=function(e,t,n){return void 0===n&&(n=!0),p(void 0,void 0,void 0,(function(){var r,i,a,o,c,u,l,f,d,p,m,v,y;return h(this,(function(h){switch(h.label){case 0:if(r=s.serializeKey(e),i=r[0],a=r[2],!i)return[2];if("undefined"===typeof t)return[2,N(e,n)];if(w[i]=E()-1,k[i]=0,o=w[i],c=g[i],f=!1,t&&"function"===typeof t)try{t=t(s.get(i))}catch(b){l=b}if(!t||"function"!==typeof t.then)return[3,5];f=!0,h.label=1;case 1:return h.trys.push([1,3,,4]),[4,t];case 2:return u=h.sent(),[3,4];case 3:return d=h.sent(),l=d,[3,4];case 4:return[3,6];case 5:u=t,h.label=6;case 6:return(p=function(){if(o!==w[i]||c!==g[i]){if(l)throw l;return!0}})()?[2,u]:("undefined"!==typeof u&&s.set(i,u),s.set(a,l),k[i]=E()-1,f?[3,8]:[4,0]);case 7:if(h.sent(),p())return[2,u];h.label=8;case 8:if(m=x[i]){for(v=[],y=0;y<m.length;++y)v.push(m[y](!!n,u,l,void 0,y>0));return[2,Promise.all(v).then((function(){if(l)throw l;return s.get(i)}))]}if(l)throw l;return[2,u]}}))}))};var T=d.Provider,C=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i,a,o={};t.length>=1&&(i=t[0]),t.length>2?(a=t[1],o=t[2]):"function"===typeof t[1]?a=t[1]:"object"===typeof t[1]&&(o=t[1]);var c=s.serializeKey(i),u=c[0],f=c[1],m=c[2],S=c[3];o=Object.assign({},l,Object(r.useContext)(d),o);var N=Object(r.useRef)(o);y((function(){N.current=o})),"undefined"===typeof a&&(a=o.fetcher);var T=function(){var e=s.get(u);return"undefined"===typeof e?o.initialData:e},C=T(),R=s.get(m),P=!!s.get(S),A=Object(r.useRef)({data:!1,error:!1,isValidating:!1}),I=Object(r.useRef)({data:C,error:R,isValidating:P});Object(r.useDebugValue)(I.current.data);var D=Object(r.useState)(null)[1],V=Object(r.useCallback)((function(e){var t=!1;for(var n in e)I.current[n]!==e[n]&&(I.current[n]=e[n],A.current[n]&&(t=!0));if(t||o.suspense){if(z.current||!K.current)return;D({})}}),[]),z=Object(r.useRef)(!1),F=Object(r.useRef)(u),K=Object(r.useRef)(!1),H=Object(r.useRef)({emit:function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];z.current||K.current&&(t=N.current)[e].apply(t,n)}}),M=Object(r.useCallback)((function(e,t){return _(F.current,e,t)}),[]),W=function(e,t){t&&(e[u]?e[u].push(t):e[u]=[t])},B=function(e,t){if(e[u]){var n=e[u],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},U=Object(r.useCallback)((function(t){return void 0===t&&(t={}),p(e,void 0,void 0,(function(){var e,n,r,i,c,l,d;return h(this,(function(p){switch(p.label){case 0:if(!u||!a)return[2,!1];if(z.current)return[2,!1];t=Object.assign({dedupe:!1},t),e=!0,n="undefined"!==typeof b[u]&&t.dedupe,p.label=1;case 1:return p.trys.push([1,6,,7]),V({isValidating:!0}),s.set(S,!0),n||L(u,I.current.data,I.current.error,!0),r=void 0,i=void 0,n?(i=g[u],[4,b[u]]):[3,3];case 2:return r=p.sent(),[3,5];case 3:return o.loadingTimeout&&!s.get(u)&&setTimeout((function(){e&&H.current.emit("onLoadingSlow",u,o)}),o.loadingTimeout),b[u]=null!==f?a.apply(void 0,f):a(u),g[u]=i=E(),[4,b[u]];case 4:r=p.sent(),setTimeout((function(){delete b[u],delete g[u]}),o.dedupingInterval),H.current.emit("onSuccess",r,u,o),p.label=5;case 5:return g[u]>i||w[u]&&(i<=w[u]||i<=k[u]||0===k[u])?(V({isValidating:!1}),[2,!1]):(s.set(u,r),s.set(m,void 0),s.set(S,!1),c={isValidating:!1},"undefined"!==typeof I.current.error&&(c.error=void 0),o.compare(I.current.data,r)||(c.data=r),V(c),n||L(u,r,c.error,!1),[3,7]);case 6:return l=p.sent(),delete b[u],delete g[u],s.set(m,l),I.current.error!==l&&(V({isValidating:!1,error:l}),n||L(u,void 0,l,!1)),H.current.emit("onError",l,u,o),o.shouldRetryOnError&&(d=(t.retryCount||0)+1,H.current.emit("onErrorRetry",l,u,o,U,Object.assign({dedupe:!0},t,{retryCount:d}))),[3,7];case 7:return e=!1,[2,!0]}}))}))}),[u]);y((function(){if(u){z.current=!1,K.current=!0;var e=I.current.data,t=T();F.current!==u&&(F.current=u),o.compare(e,t)||V({data:t});var n=function(){return U({dedupe:!0})};(o.revalidateOnMount||!o.initialData&&void 0===o.revalidateOnMount)&&("undefined"!==typeof t?v(n):n());var r=!1,i=function(){!r&&N.current.revalidateOnFocus&&(r=!0,n(),setTimeout((function(){return r=!1}),N.current.focusThrottleInterval))},a=function(){N.current.revalidateOnReconnect&&n()},c=function(e,t,r,i,a){void 0===e&&(e=!0),void 0===a&&(a=!0);var c={},s=!1;return"undefined"===typeof t||o.compare(I.current.data,t)||(c.data=t,s=!0),I.current.error!==r&&(c.error=r,s=!0),"undefined"!==typeof i&&I.current.isValidating!==i&&(c.isValidating=i,s=!0),s&&V(c),!!e&&(a?n():U())};return W(j,i),W(O,a),W(x,c),function(){V=function(){return null},z.current=!0,B(j,i),B(O,a),B(x,c)}}}),[u,U]),y((function(){var t=null,n=function(){return p(e,void 0,void 0,(function(){return h(this,(function(e){switch(e.label){case 0:return I.current.error||!N.current.refreshWhenHidden&&!N.current.isDocumentVisible()||!N.current.refreshWhenOffline&&!N.current.isOnline()?[3,2]:[4,U({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return N.current.refreshInterval&&(t=setTimeout(n,N.current.refreshInterval)),[2]}}))}))};return N.current.refreshInterval&&(t=setTimeout(n,N.current.refreshInterval)),function(){t&&clearTimeout(t)}}),[o.refreshInterval,o.refreshWhenHidden,o.refreshWhenOffline,U]);var G=Object(r.useMemo)((function(){var e={revalidate:U,mutate:M};return Object.defineProperties(e,{error:{get:function(){return A.current.error=!0,F.current===u?I.current.error:R},enumerable:!0},data:{get:function(){return A.current.data=!0,F.current===u?I.current.data:C},enumerable:!0},isValidating:{get:function(){return A.current.isValidating=!0,!!u&&I.current.isValidating},enumerable:!0}}),e}),[U]);if(o.suspense){var q=s.get(u),J=s.get(m);if("undefined"===typeof q&&(q=C),"undefined"===typeof J&&(J=R),"undefined"===typeof q&&"undefined"===typeof J){if(b[u]||U(),b[u]&&"function"===typeof b[u].then)throw b[u];q=b[u]}if("undefined"===typeof q&&J)throw J;return{error:J,data:q,revalidate:U,mutate:M,isValidating:I.current.isValidating}}return G},R=function(){return(R=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},P=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(t){a(t)}}function c(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((r=r.apply(e,t||[])).next())}))},A=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(c){a=[6,c],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},I=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function D(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i,a,o={};t.length>=1&&(i=t[0]),t.length>2?(a=t[1],o=t[2]):"function"===typeof t[1]?a=t[1]:"object"===typeof t[1]&&(o=t[1]);var c=(o=Object.assign({},l,Object(r.useContext)(d),o)).initialSize,u=void 0===c?1:c,f=o.revalidateAll,p=void 0!==f&&f,h=o.persistSize,m=void 0!==h&&h,v=o.fetcher,y=I(o,["initialSize","revalidateAll","persistSize","fetcher"]);"undefined"===typeof a&&(a=v);var b=null;try{b=s.serializeKey(i(0,null))[0]}catch(T){}var g=Object(r.useState)(!1)[1],j=null;b&&(j="context@"+b);var O,x=null;b&&(x="size@"+b,O=s.get(x));var w=Object(r.useRef)(O||u),k=Object(r.useRef)(!1);Object(r.useEffect)((function(){k.current?m||(w.current=u):k.current=!0}),[b]);var E=C(b?["many",b]:null,(function(){return P(e,void 0,void 0,(function(){var e,t,n,r,c,u,l,f,d,h;return A(this,(function(m){switch(m.label){case 0:e=s.get(j)||{},t=e.originalData,n=e.force,r=[],c=null,u=0,m.label=1;case 1:return u<w.current?(l=s.serializeKey(i(u,c)),f=l[0],d=l[1],f?(h=s.get(f),p||n||"undefined"===typeof n&&0===u||t&&!o.compare(t[u],h)||"undefined"===typeof h?null===d?[3,3]:[4,a.apply(void 0,d)]:[3,6]):[3,8]):[3,8];case 2:return h=m.sent(),[3,5];case 3:return[4,a(f)];case 4:h=m.sent(),m.label=5;case 5:s.set(f,h),m.label=6;case 6:r.push(h),c=h,m.label=7;case 7:return++u,[3,1];case 8:return s.delete(j),[2,r]}}))}))}),y),S=Object(r.useRef)(E.data);Object(r.useEffect)((function(){S.current=E.data}),[E.data]);var N=Object(r.useCallback)((function(e,t){if(void 0===t&&(t=!0),t&&"undefined"!==typeof e){var n=S.current;s.set(j,{originalData:n,force:!1})}else t&&s.set(j,{force:!0});return E.mutate(e,t)}),[E.mutate,j]),L=w.current,_=Object(r.useCallback)((function(e){return"function"===typeof e?w.current=e(w.current):"number"===typeof e&&(w.current=e),s.set(x,w.current),g((function(e){return!e})),N((function(e){return e}))}),[N,x]);return R(R({},E),{mutate:N,size:L,setSize:_})}t.b=C},lm2l:function(e,t,n){"use strict";n.d(t,"b",(function(){return g}));var r,i,a=n("HeVR"),o=n("62Ob"),c=n("V83w"),s=n("m5xG"),u=n("yZHS");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f,d,p=function(e){return u.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-youtube"},e),r||(r=u.createElement("path",{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"})),i||(i=u.createElement("polygon",{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"})))},h=n("jxKE");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v=function(e){return u.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24},e),f||(f=u.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),d||(d=u.createElement("path",{d:"M12 14a3 3 0 003-3V5a3 3 0 10-6 0v6a3 3 0 003 3zm-1.2-9.1c0-.7.5-1.2 1.2-1.2s1.2.5 1.2 1.2v6.2a1.2 1.2 0 11-2.4 0V4.9zm6.5 6.1c0 3-2.5 5.1-5.3 5.1S6.7 14 6.7 11H5a7 7 0 006 6.7V21h2v-3.3a7 7 0 006-6.7h-1.7z"})))},y=n("+Zpp"),b=[{catName:"SOLUTIONS",links:[{name:"For Enterprise",to:"/enterprise",type:"Link"},{name:"For Individuals",to:"/individual-learner",type:"Link"},{name:"For HR & Recruiting",type:"Link",to:"https://try.educative.io/recruiting"},{name:"For Bootcamps",to:"/bootcamps",type:"Link"}]},{catName:"PRODUCTS",links:[{name:"Educative Learning",to:"/explore",type:"Link"},{name:"Educative Onboarding",to:"/onboarding",type:"Link"},{name:"Educative Skill Assessments",to:"/assessments",onClick:function(){Object(y.e)(y.c.ASSESSMENT,y.b.SA_CLICKED_IN_FOOTER,"/assessments"),Object(y.e)(y.c.ENTERPRISE_ASSESSMENTS,y.b.ASSESS_CLICKED_FOOTER)},type:"Link"},{name:"Educative Projects",to:"/projects",onClick:function(){Object(y.e)(y.c.STANDALONE_PROJECT,y.b.PROJECTS_FOOTER_LINK_CLICKED,"/projects")},type:"Link"}]},{catName:"Pricing",links:[{name:"For Enterprise",to:"/enterprise-pricing",type:"Link"},{name:"For Individuals",to:"/unlimited",type:"Link"},{name:"Free Trial",to:"/b2c-trial",type:"Link"}]},{catName:"LEGAL",links:[{name:"Privacy Policy",to:"/privacy",type:"Link"},{name:"Cookie Settings",to:"",type:"cookie-settings"},{name:"Terms of Service",to:"/terms",type:"Link"},{name:"Business Terms of Service",to:"/enterprise-terms",type:"Link"}]},{catName:"CONTRIBUTE",links:[{name:"Become an Author",to:h.n,type:"Link"},{name:"Become an Affiliate",to:"/affiliate",type:"Link"},{name:"Become a Contributor",to:"https://learn.educative.io/educative-answers",type:"Link"}]},{catName:"RESOURCES",links:[{name:"Educative Blog",to:"/blog",type:"Link"},{name:"EM Hub",to:"https://emhub.io/",type:"Link"},{name:"Educative Sessions",to:"https://www.youtube.com/channel/UCT_8FqzTIr2Q1BOtvX_DPPw",type:"Link"},{name:"Educative Answers",to:"/answers",type:"Link"}]},{catName:"ABOUT US",links:[{name:"Our Team",to:"/team",type:"Link"},{name:"Careers",to:"/careers",type:"Link",tag:"Hiring"},{name:"Frequently Asked Questions",to:"/courses/educative-faq",type:"Link"},{name:"Contact Us",to:"/contactUs",type:"Link"},{name:"Press",to:"/press",type:"Link"}]},{catName:"MORE",links:[{name:"GitHub Students Scholarship",to:"/github-students",type:"Link"},{name:"Course Catalog",to:"/explore",type:"Link"},{name:"Early Access Courses",to:"/explore/early-access",type:"Link"},{name:"Earn Referral Credits",to:"/refer-a-friend",type:"Link"},{name:"CodingInterview.com",to:"https://codinginterview.com",type:"Link"}]}],g=[{name:"Facebook",to:"//facebook.com/educativeinc",icon:Object(a.jsx)(o.a,{className:"w-5 h-5"})},{name:"Linkedin",to:"//linkedin.com/company/educative-inc/",icon:Object(a.jsx)(c.a,{className:"w-5 h-5"})},{name:"Twitter",to:"//twitter.com/educativeinc",icon:Object(a.jsx)(s.a,{className:"w-5 h-5"})},{name:"YouTube",to:"//www.youtube.com/channel/UCT_8FqzTIr2Q1BOtvX_DPPw/?sub_confirmation=1",icon:Object(a.jsx)(p,{className:"w-5 h-5"})},{name:"Podcast",to:"//educativesessions.podbean.com",icon:Object(a.jsx)(v,{className:"w-5 h-5"})}];t.a=b}}]);
//# sourceMappingURL=31b613fc9104298bc46b40304f750e2b8f8d9699.05ce26d75e699c3cb7dd.js.map