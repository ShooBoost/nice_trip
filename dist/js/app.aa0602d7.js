(function(e){function t(t){for(var n,a,s=t[0],i=t[1],l=t[2],d=0,u=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&u.push(c[a][0]),c[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==c[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},c={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-32665c56":"59f80889","chunk-fdc5b7bc":"868aa904"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-32665c56":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-32665c56":"02ec4705","chunk-fdc5b7bc":"31d6cfe0"}[e]+".css",c=i.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===c))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===n||d===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],p.parentNode.removeChild(p),r(o)},p.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=s(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(p);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,r[1](u)}c[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/nice_trip/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=d;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2492:function(e,t,r){},"2a6f":function(e,t,r){"use strict";var n=r("1da1"),a=(r("96cf"),r("4de4"),r("d3b7"),r("159b"),r("a15b"),r("99af"),r("ac1f"),r("1276"),r("5319"),r("fb6a"),r("6c2d")),c=r("bc3a"),o=r.n(c);t["a"]={data:function(){return{tdxData:[]}},methods:{getSpotApiUrl:function(e){var t=e.apiType,r=void 0===t?"ScenicSpot":t,n=e.city,a=void 0===n?null:n,c=e.select,o=void 0===c?[]:c,s=e.filter,i=void 0===s?[]:s,l=e.orderby,d=void 0===l?[]:l,u=e.top,p=void 0===u?[]:u,m=e.skip,b=void 0===m?[]:m,f=e.spatialFilter,g=void 0===f?[]:f,h=[{type:"select",valueList:o},{type:"filter",valueList:i},{type:"orderby",valueList:d},{type:"top",valueList:p},{type:"skip",valueList:b},{type:"spatialFilter",valueList:g}],v="",j=[];h.forEach((function(e){if(0!==e.valueList.length){var t="";t+="$".concat(e.type,"="),t+=1===e.valueList.length?e.valueList[0]:e.valueList.join("%2C%20"),j.push(t)}})),a&&(r+="/".concat(a)),0!==j.length&&(v=j.join("&"),v+="&");var O="https://ptx.transportdata.tw/MOTC/v2/Tourism/".concat(r,"?").concat(v,"$format=JSON");return O},getAuthorizationHeader:function(){var e="6881a6e19c3240089c9d8cc87f52f52e",t="z274IyT03M2HixJY5cAbZn-8ccs",r=(new Date).toGMTString(),n=new a["a"]("SHA-1","TEXT");n.setHMACKey(t,"TEXT"),n.update("x-date: "+r);var c=n.getHMAC("B64"),o='hmac username="'.concat(e,'",algorithm="hmac-sha1",headers="x-date",signature="').concat(c,'"');return{Authorization:o,"X-Date":r}},getSpotsFromTdx:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t,a=n.getSpotApiUrl(e),r.prev=2,r.next=5,o.a.get("".concat(a),{headers:t.getAuthorizationHeader()});case 5:return c=r.sent,r.next=8,c.data;case 8:return r.abrupt("return",r.sent);case 11:r.prev=11,r.t0=r["catch"](2),console.log(r.t0);case 14:case"end":return r.stop()}}),r,null,[[2,11]])})))()},getCityList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="https://gist.motc.gov.tw/gist_api/V3/Map/Basic/City?$format=JSON",t.prev=1,t.next=4,o.a.get(r,{headers:e.getAuthorizationHeader()});case 4:return n=t.sent,t.next=7,n.data;case 7:return t.abrupt("return",t.sent);case 10:t.prev=10,t.t0=t["catch"](1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()},getTdxGeoData:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,c,s,i,l,d,u,p,m;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=e.apiType,a=void 0===n?"GeoCode":n,c=e.address,s=void 0===c?"":c,i=e.locX,l=void 0===i?"":i,d=e.locY,u=void 0===d?"":d,p="",r.t0=a,r.next="GeoCode"===r.t0?5:"GeoLocating"===r.t0?7:9;break;case 5:return p="https://gist.motc.gov.tw/gist_api/V3/Map/GeoCode/Coordinate/Address/".concat(s),r.abrupt("break",9);case 7:return p="https://gist.motc.gov.tw/gist_api/V3/Map/GeoLocating/District/LocationX/".concat(l,"/LocationY/").concat(u,"?$format=JSON"),r.abrupt("break",9);case 9:return r.prev=9,r.next=12,o.a.get("".concat(p),{headers:t.getAuthorizationHeader()});case 12:return m=r.sent,r.next=15,m.data;case 15:return r.abrupt("return",r.sent);case 18:return r.prev=18,r.t1=r["catch"](9),console.log(r.t1),r.next=23,null;case 23:return r.abrupt("return",r.sent);case 24:case"end":return r.stop()}}),r,null,[[9,18]])})))()},getCityName:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,c,o,s,i,l,d,u,p;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.address,a=e.locX,c=e.locY,!a||!c){r.next=11;break}return r.next=4,t.getTdxGeoData({apiType:"GeoLocating",locX:a,locY:c});case 4:return o=r.sent,r.next=7,o;case 7:if(!r.sent){r.next=9;break}return r.abrupt("return",o[0].CityName);case 9:r.next=27;break;case 11:if(!n){r.next=26;break}return r.next=14,t.getTdxGeoData({apiType:"GeoCode",address:n});case 14:return s=r.sent,s=s[0].Geometry.split(" "),i=[s[1].replace("(",""),s[2].replace(")","")],l=i[0],d=i[1],r.next=19,t.getTdxGeoData({apiType:"GeoLocating",locX:l,locY:d});case 19:return u=r.sent,p=u.CityName?u.CityName:n.slice(0,3),r.next=23,p;case 23:return r.abrupt("return",r.sent);case 26:return r.abrupt("return","");case 27:case"end":return r.stop()}}),r)})))()}}}},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("6cc5");var n=r("7a23");function a(e,t,r,a,c,o){var s=Object(n["resolveComponent"])("Header"),i=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(s,{class:""}),Object(n["createVNode"])(i)],64)}var c=r("663f"),o=r.n(c),s=r("c86b"),i=r.n(s),l={class:"navbar navbar-expand-md navbar-light bg-white fixed-top"},d={class:"container"},u=Object(n["createElementVNode"])("img",{class:"d-none d-md-block",src:o.a,alt:"Logo"},null,-1),p=Object(n["createElementVNode"])("img",{class:"d-md-none",src:i.a,alt:"Logo"},null,-1),m=Object(n["createElementVNode"])("button",{class:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["createElementVNode"])("span",{class:"navbar-toggler-icon"})],-1),b={class:"collapse navbar-collapse",id:"navbarNav"},f={class:"navbar-nav ms-auto text-center"},g={class:"nav-item"},h=Object(n["createTextVNode"])("探索景點"),v={class:"nav-item"},j=Object(n["createTextVNode"])("節慶活動"),O={class:"nav-item"},y=Object(n["createTextVNode"])("品嚐美食");function w(e,t,r,a,c,o){var s=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("nav",l,[Object(n["createElementVNode"])("div",d,[Object(n["createVNode"])(s,{class:"navbar-brand",to:"/"},{default:Object(n["withCtx"])((function(){return[u,p]})),_:1}),m,Object(n["createElementVNode"])("div",b,[Object(n["createElementVNode"])("ul",f,[Object(n["createElementVNode"])("li",g,[Object(n["createVNode"])(s,{class:"nav-link",to:"/searching?theme=ScenicSpot"},{default:Object(n["withCtx"])((function(){return[h]})),_:1})]),Object(n["createElementVNode"])("li",v,[Object(n["createVNode"])(s,{class:"nav-link",to:"/searching?theme=Activity"},{default:Object(n["withCtx"])((function(){return[j]})),_:1})]),Object(n["createElementVNode"])("li",O,[Object(n["createVNode"])(s,{class:"nav-link",to:"/searching?theme=Restaurant"},{default:Object(n["withCtx"])((function(){return[y]})),_:1})])])])])])}var N={name:"header",props:{}},k=r("6b0d"),x=r.n(k);const V=x()(N,[["render",w]]);var E=V,L={components:{Header:E}};r("a93a");const S=x()(L,[["render",a]]);var T=S,C=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),B=(r("99af"),{class:"container pt-5dot5 pt-lg-10dot125 mb-2 mb-lg-4"}),D={class:"row"},A=Object(n["createStaticVNode"])('<div class="col-12 col-lg-6 offset-lg-1 mb-2 mb-lg-0"><div><h1 class="mb-1 fw-normal lh-sm"> 探索<ins class="textUnderline">台灣之美</ins><br> 讓我們更親近這片土地 </h1><div class="text-black-light"><span class="material-icons text-yellow fs-6 fsLg5"> location_on </span><h2 class="d-inline me-0dot5 fs-6 fsLg5">台灣旅遊景點導覽</h2><h2 class="d-inline fs-6 fsLg5">Taiwan Travel Guide</h2></div></div></div>',1),F={class:"col-12 col-lg-4"},I={class:"dropdown mb-0dot5"},P={class:"btn btn-lg btn-outline-primary border-gray dropdown-toggle w-100 fw-bold d-flex justify-content-between align-items-center px-2 py-0dot75 fs-6",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},_={class:"dropdown-menu w-100 mt-0dot5 p-0","aria-labelledby":"dropdownMenuButton1"},R=Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("hr",{class:"dropdown-divider m-0"})],-1),U=Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("hr",{class:"dropdown-divider m-0"})],-1),G=["href"],M=Object(n["createElementVNode"])("span",{class:"material-icons align-text-top"}," search ",-1),H=Object(n["createTextVNode"])(" 搜尋 "),K=[M,H],z={class:"container"},J={class:"container"},X=Object(n["createElementVNode"])("div",{class:"d-flex justify-content-between align-items-center mb-lg-0dot75 mb-0dot5"},[Object(n["createElementVNode"])("h2",{class:"fs-4 fsLg1dot5 d-inline fw-normal m-0"},"近期活動"),Object(n["createElementVNode"])("a",{class:"link-secondary m-0",href:"/searching?theme=Activity"},"查看更多活動 ❯")],-1),W={class:"container mb-3 mb-lg-2"},Y=Object(n["createElementVNode"])("div",{class:"d-flex justify-content-between align-items-center mb-lg-0dot75 mb-0dot5"},[Object(n["createElementVNode"])("h2",{class:"fs-4 fsLg1dot5 d-inline fw-normal m-0"},"熱門打卡景點"),Object(n["createElementVNode"])("a",{class:"link-secondary m-0",href:"/searching?theme=ScenicSpot"},"查看更多景點 ❯")],-1),q={class:"container mb-4dot5 mb-lg-7dot5"},$=Object(n["createElementVNode"])("div",{class:"d-flex justify-content-between align-items-center mb-lg-0dot75 mb-0dot5"},[Object(n["createElementVNode"])("h2",{class:"fs-4 fsLg1dot5 d-inline fw-normal m-0"},"一再回訪美食"),Object(n["createElementVNode"])("a",{class:"link-secondary m-0",href:"/searching?theme=Restaurant"},"查看更多美食 ❯")],-1);function Z(e,t,r,a,c,o){var s=Object(n["resolveComponent"])("Carousel"),i=Object(n["resolveComponent"])("Card"),l=Object(n["resolveComponent"])("carouselOnMobile");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("section",B,[Object(n["createElementVNode"])("div",D,[A,Object(n["createElementVNode"])("div",F,[Object(n["createElementVNode"])("div",I,[Object(n["createElementVNode"])("button",P,Object(n["toDisplayString"])(c.themeForSearchTC),1),Object(n["createElementVNode"])("ul",_,[Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("a",{onClick:t[0]||(t[0]=function(e){return o.setThemeForSearch("探索景點")}),class:"dropdown-item py-0dot75 px-2"},"探索景點")]),R,Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("a",{onClick:t[1]||(t[1]=function(e){return o.setThemeForSearch("節慶活動")}),class:"dropdown-item py-0dot75 px-2"},"節慶活動")]),U,Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("a",{onClick:t[2]||(t[2]=function(e){return o.setThemeForSearch("品嚐美食")}),class:"dropdown-item py-0dot75 px-2"},"品嚐美食")])])]),Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.keywordsForSearch=e}),class:"form-control form-control-lg bg-gray-light px-2 py-0dot75 mb-0dot5 focusPrimary fs-6",type:"text",placeholder:"你想去哪裡？請輸入關鍵字","aria-label":"搜尋欄，請填入關鍵字進行搜尋"},null,512),[[n["vModelText"],c.keywordsForSearch]]),Object(n["createElementVNode"])("a",{class:"btn btn-primary w-100 btn-lg text-white letterSpacingLg fs-6",href:c.keywordsForSearch.length>0?"/searching?theme=".concat(c.themeForSearch,"&keywords=").concat(c.keywordsForSearch):"/searching?theme=".concat(c.themeForSearch)},K,8,G)])])]),Object(n["createElementVNode"])("section",z,[Object(n["createVNode"])(s,{areWordsOnImg:"yes",apiType:"ScenicSpot",carsouelList:c.carsouelList,class:"mb-2"},null,8,["carsouelList"])]),Object(n["createElementVNode"])("section",J,[X,Object(n["createVNode"])(i,{apiType:"Activity",spotsList:c.moreActivitiesList,class:"mb-2dot25"},null,8,["spotsList"])]),Object(n["createElementVNode"])("section",W,[Y,Object(n["createVNode"])(l,{apiType:"ScenicSpot",carsouelList:c.moreScenicSpotsList,class:"mb-2dot25"},null,8,["carsouelList"])]),Object(n["createElementVNode"])("section",q,[$,Object(n["createVNode"])(l,{apiType:"Restaurant",carsouelList:c.moreRestaurantsList,class:"mb-2dot25"},null,8,["carsouelList"])])],64)}var Q=r("1da1"),ee=(r("159b"),r("fb6a"),r("96cf"),r("d221")),te={key:0,class:"row"},re=["href"],ne={class:"col-4 position-relative overflow-hidden paddingTopLg30Percent paddingTop20Percent radiusLg12px radius8px radiusLgEndNone border border-gray"},ae=["src","alt"],ce={class:"col-8 radiusLg12px radiusLgStartNone p-0 ps-1 py-lg-1 ps-lg-2 pe-lg-1dot5 d-flex flex-column justify-content-between bgColorLgGrayLight borderLgGray"},oe={class:"mb-0dot25 text-black-light fs-6dot75 fsLg6"},se={class:"textOverFlowHidden fs-6 fsLg4dot375"},ie={class:"d-flex justify-content-between align-items-end position-relative"},le={class:"m-0 text-black-light fs-6dot75 fsLg6"},de=Object(n["createElementVNode"])("span",{class:"align-text-bottom material-icons-outlined d-none d-lg-inline-block"}," place ",-1),ue=Object(n["createElementVNode"])("a",{class:"link-primary stretched-link d-none d-lg-inline",href:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwTibxpHQtnHzTgHzkyi_JZZgUfufJ9r6g9w&usqp=CAU",target:"_blank"},"詳細介紹 ❯",-1);function pe(e,t,r,a,c,o){return r.spotsList[0]?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",te,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(r.spotsList,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("a",{class:"col col-12 col-lg-6 d-flex mb-0dot75 hoverImgBigger",key:t,href:"/spotDetail?theme="+r.apiType+"&id="+e[c.spotIDKey],target:"_blank"},[Object(n["createElementVNode"])("div",ne,[Object(n["createElementVNode"])("img",{class:"h-100 w-100 objectFitCover position-absolute top-50 start-50 translate-middle",src:e.Picture.PictureUrl1,alt:e[c.spotNameKey]},null,8,ae)]),Object(n["createElementVNode"])("div",ce,[Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("p",oe,Object(n["toDisplayString"])(e.StartTime)+" - "+Object(n["toDisplayString"])(e.EndTime),1),Object(n["createElementVNode"])("h5",se,Object(n["toDisplayString"])(e[c.spotNameKey]),1)]),Object(n["createElementVNode"])("div",ie,[Object(n["createElementVNode"])("p",le,[de,Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.City),1)]),ue])])],8,re)})),128))])):Object(n["createCommentVNode"])("",!0)}var me={name:"carsouel",components:{},props:["apiType","spotsList"],data:function(){return{spotIDKey:this.apiType+"ID",spotNameKey:this.apiType+"Name"}},mounted:function(){}};const be=x()(me,[["render",pe]]);var fe=be,ge=r("b4c3"),he=r("2a6f"),ve={name:"first",components:{Carousel:ee["a"],Card:fe,CarouselOnMobile:ge["a"]},mixins:[he["a"]],data:function(){return{carsouelList:[],moreActivitiesList:[],moreScenicSpotsList:[],moreRestaurantsList:[],themeForSearch:"ScenicSpot",themeForSearchTC:"探索景點",keywordsForSearch:""}},created:function(){var e=this;Object(Q["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getSpotsFromTdx({apiType:"Restaurant",orderby:["SrcUpdateTime desc"],top:["10"],skip:["16"]});case 2:return e.moreRestaurantsList=t.sent,t.t0=console,t.next=6,e.moreRestaurantsList;case 6:t.t1=t.sent,t.t0.log.call(t.t0,"_this.moreRestaurantsList",t.t1);case 8:case"end":return t.stop()}}),t)})))(),Object(Q["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getSpotsFromTdx({apiType:"ScenicSpot",orderby:["SrcUpdateTime desc"],top:["20"],skip:["50"]});case 2:return r=t.sent,t.next=5,r.forEach(function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r.Picture.PictureUrl1&&(r.City=r.Address.slice(0,3),e.carsouelList.length<6?e.carsouelList.push(r):e.moreScenicSpotsList.push(r));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 5:case"end":return t.stop()}}),t)})))(),Object(Q["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getSpotsFromTdx({apiType:"Activity",orderby:["SrcUpdateTime desc"],top:["30"]});case 2:return r=t.sent,t.next=5,r.forEach((function(t){t.Picture.PictureUrl1&&e.moreActivitiesList.length<4&&(t.EndTime=t.EndTime.slice(0,10),t.StartTime=t.StartTime.slice(0,10),e.moreActivitiesList.push(t))}));case 5:console.log(e.moreActivitiesList);case 6:case"end":return t.stop()}}),t)})))()},methods:{setThemeForSearch:function(e){switch(this.themeForSearchTC=e,e){case"探索景點":this.themeForSearch="ScenicSpot";break;case"節慶活動":this.themeForSearch="Activity";break;case"品嚐美食":this.themeForSearch="Restaurant";break}}}};const je=x()(ve,[["render",Z]]);var Oe=je,ye=[{path:"/",name:"Home",component:Oe},{path:"/spotDetail",name:"spotDetail",component:function(){return r.e("chunk-fdc5b7bc").then(r.bind(null,"de3c"))}},{path:"/searching",name:"searching",component:function(){return r.e("chunk-32665c56").then(r.bind(null,"2c46"))}}],we=Object(C["a"])({history:Object(C["b"])("/nice_trip/"),routes:ye}),Ne=we;r("7b17");Object(n["createApp"])(T).use(Ne).mount("#app")},"5ecb":function(e,t,r){"use strict";var n=r("1da1");r("96cf"),r("d3b7");t["a"]={directives:{mainImg:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=function(e){return new Promise((function(t,r){var n=new Image;n.onload=function(){t(!0)},n.onerror=function(){r(!1)},n.src=e})).then((function(e){return e})).catch((function(e){return e}))},!t.value){r.next=6;break}return r.next=4,n(t.value);case 4:a=r.sent,a&&e.setAttribute("src",t.value);case 6:case"end":return r.stop()}}),r)})))()}}}},"663f":function(e,t,r){e.exports=r.p+"img/Logo-desktop.69f2e6a1.svg"},a93a:function(e,t,r){"use strict";r("2492")},b4c3:function(e,t,r){"use strict";var n=r("7a23");function a(e,t,r,a,c,o){var s=Object(n["resolveComponent"])("CardWithImgAndName"),i=Object(n["resolveComponent"])("swiper-slide"),l=Object(n["resolveComponent"])("swiper");return r.carsouelList[0]?(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:0,slidesPerView:1.75,spaceBetween:16,breakpoints:{768:{slidesPerView:2.5,spaceBetween:30},992:{slidesPerView:4,spaceBetween:30}},class:"position-relative"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(r.carsouelList,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:t},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{apiType:r.apiType,spotId:e[c.spotIDKey],imgUrl:e.Picture.PictureUrl1,backupImg:r.backupImg,spotName:e[c.spotNameKey],spotCity:e.City},null,8,["apiType","spotId","imgUrl","backupImg","spotName","spotCity"])]})),_:2},1024)})),128))]})),_:1},8,["slidesPerView","breakpoints"])):Object(n["createCommentVNode"])("",!0)}var c=r("fdcb"),o=r("8349"),s=r("4da1");r("bbe3");s["c"].use([s["b"]]);var i={name:"CarouselOnMobile",components:{Swiper:o["a"],SwiperSlide:o["b"],CardWithImgAndName:c["a"]},props:["apiType","carsouelList","backupImg"],data:function(){return{spotIDKey:this.apiType+"ID",spotNameKey:this.apiType+"Name"}},mounted:function(){}},l=r("6b0d"),d=r.n(l);const u=d()(i,[["render",a]]);t["a"]=u},c86b:function(e,t,r){e.exports=r.p+"img/Logo-mobile.5aab6adc.svg"},d221:function(e,t,r){"use strict";var n=r("7a23"),a=["href"],c={class:"text-white fs-5 fsLg3"},o=["src","alt"];function s(e,t,r,s,i,l){var d=Object(n["resolveComponent"])("swiper-slide"),u=Object(n["resolveComponent"])("swiper");return r.carsouelList?(Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:0,slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0},navigation:!0,class:"position-relative"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(r.carsouelList,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(d,{key:t,class:"paddingTop53Percent paddingTopLg36Percent position-relative text-white radius24px overflow-hidden"},{default:Object(n["withCtx"])((function(){return[r.areWordsOnImg?(Object(n["openBlock"])(),Object(n["createElementBlock"])("a",{key:0,href:"/spotDetail?theme="+r.apiType+"&id="+e[i.spotIDKey],target:"_blank",class:"w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle zIndex1"},[Object(n["createElementVNode"])("h3",c,Object(n["toDisplayString"])(e.City)+" | "+Object(n["toDisplayString"])(e[i.spotNameKey]),1)],8,a)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("img",{src:e.Picture.PictureUrl1,alt:e.PictureDescription1||e[i.spotNameKey],class:"h-100 w-100 position-absolute top-50 start-0 translate-middle-y objectFitCover"},null,8,o)]})),_:2},1024)})),128))]})),_:1})):Object(n["createCommentVNode"])("",!0)}var i=r("8349"),l=r("4da1");r("bbe3");l["c"].use([l["b"],l["a"]]);var d={name:"carsouel",components:{Swiper:i["a"],SwiperSlide:i["b"]},props:["areWordsOnImg","apiType","carsouelList"],data:function(){return{spotIDKey:this.apiType+"ID",spotNameKey:this.apiType+"Name"}},mounted:function(){}},u=r("6b0d"),p=r.n(u);const m=p()(d,[["render",s]]);t["a"]=m},fdcb:function(e,t,r){"use strict";var n=r("7a23"),a=["href"],c={class:"w-100 paddingTop75Percent position-relative radius20px overflow-hidden hoverImgBigger mb-0dot375 mb-lg-0dot625"},o=["src","alt"],s={class:"fs-5dot125 fsLg4dot375 text-black"},i={class:"m-0 text-black-light fs-6dot75 fsLg6"},l=Object(n["createElementVNode"])("span",{class:"align-text-bottom material-icons-outlined d-inline-block"}," place ",-1);function d(e,t,r,d,u,p){var m=Object(n["resolveDirective"])("mainImg");return Object(n["openBlock"])(),Object(n["createElementBlock"])("a",{class:"w-100 h-100",href:"/spotDetail?theme="+r.apiType+"&id="+r.spotId,target:"_blank"},[Object(n["createElementVNode"])("div",c,[Object(n["withDirectives"])(Object(n["createElementVNode"])("img",{src:r.backupImg,alt:r.spotName,class:"position-absolute w-100 h-100 top-50 start-0 translate-middle-y objectFitCover"},null,8,o),[[m,r.imgUrl]])]),Object(n["createElementVNode"])("h5",s,Object(n["toDisplayString"])(r.spotName),1),Object(n["createElementVNode"])("p",i,[l,Object(n["createTextVNode"])(Object(n["toDisplayString"])(r.spotCity),1)])],8,a)}var u=r("5ecb"),p={name:"cardWithImgAndName",props:["apiType","spotId","backupImg","imgUrl","spotName","spotCity"],mixins:[u["a"]],data:function(){return{}},mounted:function(){}},m=r("6b0d"),b=r.n(m);const f=b()(p,[["render",d]]);t["a"]=f}});
//# sourceMappingURL=app.aa0602d7.js.map