(function(e){function t(t){for(var n,a,i=t[0],s=t[1],l=t[2],d=0,u=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&u.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(u.length)u.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0d70adef":"5dc56c4b","chunk-0e58d18f":"fa944a54"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-0d70adef":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-0d70adef":"02ec4705","chunk-0e58d18f":"31d6cfe0"}[e]+".css",o=s.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===o))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],d=l.getAttribute("data-href");if(d===n||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],p.parentNode.removeChild(p),r(c)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,r[1](u)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/nice_trip/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=d;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2a6f":function(e,t,r){"use strict";var n=r("1da1"),a=(r("96cf"),r("4de4"),r("d3b7"),r("159b"),r("a15b"),r("99af"),r("ac1f"),r("1276"),r("5319"),r("fb6a"),r("6c2d")),o=r("bc3a"),c=r.n(o);t["a"]={data:function(){return{tdxData:[]}},methods:{getSpotApiUrl:function(e){var t=e.apiType,r=void 0===t?"ScenicSpot":t,n=e.city,a=void 0===n?null:n,o=e.select,c=void 0===o?[]:o,i=e.filter,s=void 0===i?[]:i,l=e.orderby,d=void 0===l?[]:l,u=e.top,p=void 0===u?[]:u,m=e.skip,b=void 0===m?[]:m,f=e.spatialFilter,h=void 0===f?[]:f,g=[{type:"select",valueList:c},{type:"filter",valueList:s},{type:"orderby",valueList:d},{type:"top",valueList:p},{type:"skip",valueList:b},{type:"spatialFilter",valueList:h}],v="",j=[];g.forEach((function(e){if(0!==e.valueList.length){var t="";t+="$".concat(e.type,"="),t+=1===e.valueList.length?e.valueList[0]:e.valueList.join("%2C%20"),j.push(t)}})),a&&(r+="/".concat(a)),0!==j.length&&(v=j.join("&"),v+="&");var O="https://ptx.transportdata.tw/MOTC/v2/Tourism/".concat(r,"?").concat(v,"$format=JSON");return O},getAuthorizationHeader:function(){var e="6881a6e19c3240089c9d8cc87f52f52e",t="z274IyT03M2HixJY5cAbZn-8ccs",r=(new Date).toGMTString(),n=new a["a"]("SHA-1","TEXT");n.setHMACKey(t,"TEXT"),n.update("x-date: "+r);var o=n.getHMAC("B64"),c='hmac username="'.concat(e,'",algorithm="hmac-sha1",headers="x-date",signature="').concat(o,'"');return{Authorization:c,"X-Date":r}},getSpotsFromTdx:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t,a=n.getSpotApiUrl(e),r.prev=2,r.next=5,c.a.get("".concat(a),{headers:t.getAuthorizationHeader()});case 5:return o=r.sent,r.next=8,o.data;case 8:return r.abrupt("return",r.sent);case 11:r.prev=11,r.t0=r["catch"](2),console.log(r.t0);case 14:case"end":return r.stop()}}),r,null,[[2,11]])})))()},getCityList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="https://gist.motc.gov.tw/gist_api/V3/Map/Basic/City?$format=JSON",t.prev=1,t.next=4,c.a.get(r,{headers:e.getAuthorizationHeader()});case 4:return n=t.sent,t.next=7,n.data;case 7:return t.abrupt("return",t.sent);case 10:t.prev=10,t.t0=t["catch"](1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()},getTdxGeoData:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,s,l,d,u,p,m;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=e.apiType,a=void 0===n?"GeoCode":n,o=e.address,i=void 0===o?"":o,s=e.locX,l=void 0===s?"":s,d=e.locY,u=void 0===d?"":d,p="",r.t0=a,r.next="GeoCode"===r.t0?5:"GeoLocating"===r.t0?7:9;break;case 5:return p="https://gist.motc.gov.tw/gist_api/V3/Map/GeoCode/Coordinate/Address/".concat(i),r.abrupt("break",9);case 7:return p="https://gist.motc.gov.tw/gist_api/V3/Map/GeoLocating/District/LocationX/".concat(l,"/LocationY/").concat(u,"?$format=JSON"),r.abrupt("break",9);case 9:return r.prev=9,r.next=12,c.a.get("".concat(p),{headers:t.getAuthorizationHeader()});case 12:return m=r.sent,r.next=15,m.data;case 15:return r.abrupt("return",r.sent);case 18:return r.prev=18,r.t1=r["catch"](9),console.log(r.t1),r.next=23,null;case 23:return r.abrupt("return",r.sent);case 24:case"end":return r.stop()}}),r,null,[[9,18]])})))()},getCityName:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c,i,s,l,d,u,p;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.address,a=e.locX,o=e.locY,!a||!o){r.next=11;break}return r.next=4,t.getTdxGeoData({apiType:"GeoLocating",locX:a,locY:o});case 4:return c=r.sent,r.next=7,c;case 7:if(!r.sent){r.next=9;break}return r.abrupt("return",c[0].CityName);case 9:r.next=27;break;case 11:if(!n){r.next=26;break}return r.next=14,t.getTdxGeoData({apiType:"GeoCode",address:n});case 14:return i=r.sent,i=i[0].Geometry.split(" "),s=[i[1].replace("(",""),i[2].replace(")","")],l=s[0],d=s[1],r.next=19,t.getTdxGeoData({apiType:"GeoLocating",locX:l,locY:d});case 19:return u=r.sent,p=u.CityName?u.CityName:n.slice(0,3),r.next=23,p;case 23:return r.abrupt("return",r.sent);case 26:return r.abrupt("return","");case 27:case"end":return r.stop()}}),r)})))()}}}},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("6cc5");var n=r("7a23");function a(e,t,r,a,o,c){var i=Object(n["resolveComponent"])("Navbar"),s=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(i,{class:"order-3 order-md-0 fixed-bottom sticky-md-top"}),Object(n["createVNode"])(s)],64)}var o=r("663f"),c=r.n(o),i=r("c86b"),s=r.n(i),l={class:"d-flex align-items-center justify-content-around justify-content-md-start container py-0dot5 py-md-1 bg-white"},d=Object(n["createElementVNode"])("img",{class:"d-none d-md-inline-block",src:c.a,alt:"Logo"},null,-1),u=Object(n["createElementVNode"])("img",{class:"d-md-none",src:s.a,alt:"Logo"},null,-1),p=Object(n["createTextVNode"])("探索"),m=Object(n["createElementVNode"])("br",{class:"d-md-none"},null,-1),b=Object(n["createTextVNode"])("景點"),f=Object(n["createTextVNode"])("節慶"),h=Object(n["createElementVNode"])("br",{class:"d-md-none"},null,-1),g=Object(n["createTextVNode"])("活動"),v=Object(n["createTextVNode"])("品嚐"),j=Object(n["createElementVNode"])("br",{class:"d-md-none"},null,-1),O=Object(n["createTextVNode"])("美食");function y(e,t,r,a,o,c){var i=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("nav",l,[Object(n["createVNode"])(i,{class:"me-md-auto",to:"/"},{default:Object(n["withCtx"])((function(){return[d,u]})),_:1}),Object(n["createVNode"])(i,{class:"me-md-3",to:"/searching?theme=ScenicSpot",push:""},{default:Object(n["withCtx"])((function(){return[p,m,b]})),_:1}),Object(n["createVNode"])(i,{class:"me-md-3",to:"/searching?theme=Activity",push:""},{default:Object(n["withCtx"])((function(){return[f,h,g]})),_:1}),Object(n["createVNode"])(i,{class:"",to:"/searching?theme=Restaurant",push:""},{default:Object(n["withCtx"])((function(){return[v,j,O]})),_:1})])}var w={name:"navbar"},x=r("6b0d"),N=r.n(x);const k=N()(w,[["render",y]]);var V=k,T={components:{Navbar:V}};r("7488");const L=N()(T,[["render",a]]);var S=L,C=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),E=(r("99af"),{class:"container mb-3 mb-lg-4 pt-3 pt-md-5"}),B={class:"row"},D=Object(n["createStaticVNode"])('<div class="col-12 col-lg-6 offset-lg-1 mb-2 mb-lg-0"><div><h1 class="mb-1 mb-md-1 fw-normal lh-sm"> 探索<ins class="textUnderline">台灣之美</ins><br> 讓我們更親近這片土地 </h1><div class="text-black-light"><span class="material-icons text-yellow fs-6 fsLg5"> location_on </span><h2 class="d-inline me-0dot5 fs-6 fsLg5">台灣旅遊景點導覽</h2><h2 class="d-inline fs-6 fsLg5">Taiwan Travel Guide</h2></div></div></div>',1),_={class:"col-12 col-lg-4"},A={class:"dropdown mb-0dot5"},F={class:"btn btn-lg btn-outline-primary border-gray dropdown-toggle w-100 fw-bold d-flex justify-content-between align-items-center px-2 py-0dot75 fs-6",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},I={class:"dropdown-menu w-100 mt-0dot5 p-0","aria-labelledby":"dropdownMenuButton1"},P=Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("hr",{class:"dropdown-divider m-0"})],-1),R=Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("hr",{class:"dropdown-divider m-0"})],-1),M=Object(n["createElementVNode"])("span",{class:"material-icons align-text-top"}," search ",-1),G=Object(n["createTextVNode"])(" 搜尋 "),U={class:"container"},K={class:"container"},H={class:"d-flex justify-content-between align-items-center mb-lg-0dot75 mb-0dot5"},X=Object(n["createElementVNode"])("h2",{class:"fs-4 fsLg1dot5 d-inline fw-normal m-0"},"近期活動",-1),z=Object(n["createTextVNode"])("查看更多活動 ❯"),J={class:"container mb-1dot5 mb-lg-2"},W={class:"d-flex justify-content-between align-items-center mb-lg-0dot75 mb-0dot5"},Y=Object(n["createElementVNode"])("h2",{class:"fs-4 fsLg1dot5 d-inline fw-normal m-0"},"熱門打卡景點",-1),$=Object(n["createTextVNode"])("查看更多景點 ❯"),q={class:"container mb-4dot5"},Z={class:"d-flex justify-content-between align-items-center mb-lg-0dot75 mb-0dot5"},Q=Object(n["createElementVNode"])("h2",{class:"fs-4 fsLg1dot5 d-inline fw-normal m-0"},"一再回訪美食",-1),ee=Object(n["createTextVNode"])("查看更多美食 ❯");function te(e,t,r,a,o,c){var i=Object(n["resolveComponent"])("router-link"),s=Object(n["resolveComponent"])("Carousel"),l=Object(n["resolveComponent"])("Card"),d=Object(n["resolveComponent"])("carouselOnMobile");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("section",E,[Object(n["createElementVNode"])("div",B,[D,Object(n["createElementVNode"])("div",_,[Object(n["createElementVNode"])("div",A,[Object(n["createElementVNode"])("button",F,Object(n["toDisplayString"])(o.themeForSearchTC),1),Object(n["createElementVNode"])("ul",I,[Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("a",{onClick:t[0]||(t[0]=function(e){return c.setThemeForSearch("探索景點")}),class:"dropdown-item py-0dot75 px-2"},"探索景點")]),P,Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("a",{onClick:t[1]||(t[1]=function(e){return c.setThemeForSearch("節慶活動")}),class:"dropdown-item py-0dot75 px-2"},"節慶活動")]),R,Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("a",{onClick:t[2]||(t[2]=function(e){return c.setThemeForSearch("品嚐美食")}),class:"dropdown-item py-0dot75 px-2"},"品嚐美食")])])]),Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.keywordsForSearch=e}),class:"form-control form-control-lg bg-gray-light px-2 py-0dot75 mb-0dot5 focusPrimary fs-6",type:"text",placeholder:"你想去哪裡？請輸入關鍵字","aria-label":"搜尋欄，請填入關鍵字進行搜尋"},null,512),[[n["vModelText"],o.keywordsForSearch]]),Object(n["createVNode"])(i,{class:"btn btn-primary w-100 btn-lg text-white letterSpacingLg fs-6",to:o.keywordsForSearch.length>0?"/searching?theme=".concat(o.themeForSearch,"&keywords=").concat(o.keywordsForSearch):"/searching?theme=".concat(o.themeForSearch)},{default:Object(n["withCtx"])((function(){return[M,G]})),_:1},8,["to"])])])]),Object(n["createElementVNode"])("section",U,[Object(n["createVNode"])(s,{areWordsOnImg:"yes",apiType:"ScenicSpot",carsouelList:o.carsouelList,class:"mb-3 mb-md-2"},null,8,["carsouelList"])]),Object(n["createElementVNode"])("section",K,[Object(n["createElementVNode"])("div",H,[X,Object(n["createVNode"])(i,{class:"link-secondary m-0",to:"/searching?theme=Activity"},{default:Object(n["withCtx"])((function(){return[z]})),_:1})]),Object(n["createVNode"])(l,{apiType:"Activity",spotsList:o.moreActivitiesList,class:"mb-2dot25"},null,8,["spotsList"])]),Object(n["createElementVNode"])("section",J,[Object(n["createElementVNode"])("div",W,[Y,Object(n["createVNode"])(i,{class:"link-secondary m-0",to:"/searching?theme=ScenicSpot"},{default:Object(n["withCtx"])((function(){return[$]})),_:1})]),Object(n["createVNode"])(d,{apiType:"ScenicSpot",carsouelList:o.moreScenicSpotsList,class:"mb-2dot25"},null,8,["carsouelList"])]),Object(n["createElementVNode"])("section",q,[Object(n["createElementVNode"])("div",Z,[Q,Object(n["createVNode"])(i,{class:"link-secondary m-0",to:"/searching?theme=Restaurant"},{default:Object(n["withCtx"])((function(){return[ee]})),_:1})]),Object(n["createVNode"])(d,{apiType:"Restaurant",carsouelList:o.moreRestaurantsList,class:"mb-2dot25"},null,8,["carsouelList"])])],64)}var re=r("1da1"),ne=(r("159b"),r("fb6a"),r("96cf"),r("d221")),ae={key:0,class:"row"},oe={class:"col-4 position-relative overflow-hidden paddingTopLg30Percent paddingTop20Percent radiusLg12px radius8px radiusLgEndNone border border-gray"},ce=["src","alt"],ie={class:"col-8 radiusLg12px radiusLgStartNone p-0 ps-1 py-lg-1 ps-lg-2 pe-lg-1dot5 d-flex flex-column justify-content-between bgColorLgGrayLight borderLgGray"},se={class:"mb-0dot25 text-black-light fs-6dot75 fsLg6"},le={class:"textOverFlowHidden fs-6 fsLg4dot375"},de={class:"d-flex justify-content-between align-items-end position-relative"},ue={class:"m-0 text-black-light fs-6dot75 fsLg6"},pe=Object(n["createElementVNode"])("span",{class:"align-text-bottom material-icons-outlined d-none d-lg-inline-block"}," place ",-1),me=Object(n["createElementVNode"])("a",{class:"link-primary stretched-link d-none d-lg-inline",target:"_blank"},"詳細介紹 ❯",-1);function be(e,t,r,a,o,c){var i=Object(n["resolveComponent"])("router-link");return r.spotsList[0]?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",ae,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(r.spotsList,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(i,{class:"col col-12 col-lg-6 d-flex mb-0dot75 hoverImgBigger",key:t,to:"/spotDetail?theme="+r.apiType+"&id="+e[o.spotIDKey],target:"_blank"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",oe,[Object(n["createElementVNode"])("img",{class:"h-100 w-100 objectFitCover position-absolute top-50 start-50 translate-middle",src:e.Picture.PictureUrl1,alt:e[o.spotNameKey]},null,8,ce)]),Object(n["createElementVNode"])("div",ie,[Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("p",se,Object(n["toDisplayString"])(e.StartTime)+" - "+Object(n["toDisplayString"])(e.EndTime),1),Object(n["createElementVNode"])("h5",le,Object(n["toDisplayString"])(e[o.spotNameKey]),1)]),Object(n["createElementVNode"])("div",de,[Object(n["createElementVNode"])("p",ue,[pe,Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.City),1)]),me])])]})),_:2},1032,["to"])})),128))])):Object(n["createCommentVNode"])("",!0)}var fe={name:"carsouel",components:{},props:["apiType","spotsList"],data:function(){return{spotIDKey:this.apiType+"ID",spotNameKey:this.apiType+"Name"}},mounted:function(){}};const he=N()(fe,[["render",be]]);var ge=he,ve=r("b4c3"),je=r("2a6f"),Oe={name:"first",components:{Carousel:ne["a"],Card:ge,CarouselOnMobile:ve["a"]},mixins:[je["a"]],data:function(){return{carsouelList:[],moreActivitiesList:[],moreScenicSpotsList:[],moreRestaurantsList:[],themeForSearch:"ScenicSpot",themeForSearchTC:"探索景點",keywordsForSearch:""}},created:function(){var e=this;Object(re["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getSpotsFromTdx({apiType:"Restaurant",orderby:["SrcUpdateTime desc"],top:["10"],skip:["16"]});case 2:return e.moreRestaurantsList=t.sent,t.t0=console,t.next=6,e.moreRestaurantsList;case 6:t.t1=t.sent,t.t0.log.call(t.t0,"_this.moreRestaurantsList",t.t1);case 8:case"end":return t.stop()}}),t)})))(),Object(re["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getSpotsFromTdx({apiType:"ScenicSpot",orderby:["SrcUpdateTime desc"],top:["20"],skip:["50"]});case 2:return r=t.sent,t.next=5,r.forEach(function(){var t=Object(re["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r.Picture.PictureUrl1&&(r.City=r.Address.slice(0,3),e.carsouelList.length<6?e.carsouelList.push(r):e.moreScenicSpotsList.push(r));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 5:case"end":return t.stop()}}),t)})))(),Object(re["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getSpotsFromTdx({apiType:"Activity",orderby:["SrcUpdateTime desc"],top:["30"]});case 2:return r=t.sent,t.next=5,r.forEach((function(t){t.Picture.PictureUrl1&&e.moreActivitiesList.length<4&&(t.EndTime=t.EndTime.slice(0,10),t.StartTime=t.StartTime.slice(0,10),e.moreActivitiesList.push(t))}));case 5:console.log(e.moreActivitiesList);case 6:case"end":return t.stop()}}),t)})))()},methods:{setThemeForSearch:function(e){switch(this.themeForSearchTC=e,e){case"探索景點":this.themeForSearch="ScenicSpot";break;case"節慶活動":this.themeForSearch="Activity";break;case"品嚐美食":this.themeForSearch="Restaurant";break}}}};const ye=N()(Oe,[["render",te]]);var we=ye,xe=[{path:"/",name:"Home",component:we},{path:"/spotDetail",name:"spotDetail",component:function(){return r.e("chunk-0e58d18f").then(r.bind(null,"de3c"))}},{path:"/searching",name:"searching",component:function(){return r.e("chunk-0d70adef").then(r.bind(null,"2c46"))}}],Ne=Object(C["a"])({history:Object(C["b"])("/nice_trip/"),routes:xe}),ke=Ne;r("7b17");Object(n["createApp"])(S).use(ke).mount("#app")},"5ecb":function(e,t,r){"use strict";var n=r("1da1");r("96cf"),r("d3b7");t["a"]={directives:{mainImg:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=function(e){return new Promise((function(t,r){var n=new Image;n.onload=function(){t(!0)},n.onerror=function(){r(!1)},n.src=e})).then((function(e){return e})).catch((function(e){return e}))},!t.value){r.next=6;break}return r.next=4,n(t.value);case 4:a=r.sent,a&&e.setAttribute("src",t.value);case 6:case"end":return r.stop()}}),r)})))()}}}},"663f":function(e,t,r){e.exports=r.p+"img/Logo-desktop.69f2e6a1.svg"},7488:function(e,t,r){"use strict";r("e4a9")},b4c3:function(e,t,r){"use strict";var n=r("7a23");function a(e,t,r,a,o,c){var i=Object(n["resolveComponent"])("CardWithImgAndName"),s=Object(n["resolveComponent"])("swiper-slide"),l=Object(n["resolveComponent"])("swiper");return r.carsouelList[0]?(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:0,slidesPerView:1.75,spaceBetween:16,breakpoints:{768:{slidesPerView:2.5,spaceBetween:30},992:{slidesPerView:4,spaceBetween:30}},class:"position-relative"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(r.carsouelList,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:t},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i,{apiType:r.apiType,spotId:e[o.spotIDKey],imgUrl:e.Picture.PictureUrl1,backupImg:r.backupImg,spotName:e[o.spotNameKey],spotCity:e.City},null,8,["apiType","spotId","imgUrl","backupImg","spotName","spotCity"])]})),_:2},1024)})),128))]})),_:1},8,["slidesPerView","breakpoints"])):Object(n["createCommentVNode"])("",!0)}var o=r("fdcb"),c=r("8349"),i=r("4da1");r("bbe3");i["c"].use([i["b"]]);var s={name:"CarouselOnMobile",components:{Swiper:c["a"],SwiperSlide:c["b"],CardWithImgAndName:o["a"]},props:["apiType","carsouelList","backupImg"],data:function(){return{spotIDKey:this.apiType+"ID",spotNameKey:this.apiType+"Name"}},mounted:function(){}},l=r("6b0d"),d=r.n(l);const u=d()(s,[["render",a]]);t["a"]=u},c86b:function(e,t,r){e.exports=r.p+"img/Logo-mobile.5aab6adc.svg"},d221:function(e,t,r){"use strict";var n=r("7a23"),a={class:"text-white fs-5 fsLg3"},o=["src","alt"];function c(e,t,r,c,i,s){var l=Object(n["resolveComponent"])("router-link"),d=Object(n["resolveComponent"])("swiper-slide"),u=Object(n["resolveComponent"])("swiper");return r.carsouelList?(Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:0,slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0},navigation:!0,class:"position-relative"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(r.carsouelList,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(d,{key:t,class:"paddingTop53Percent paddingTopLg36Percent position-relative text-white radius24px overflow-hidden"},{default:Object(n["withCtx"])((function(){return[r.areWordsOnImg?(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:0,to:"/spotDetail?theme="+r.apiType+"&id="+e[i.spotIDKey],target:"_blank",class:"w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle zIndex1"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("h3",a,Object(n["toDisplayString"])(e.City)+" | "+Object(n["toDisplayString"])(e[i.spotNameKey]),1)]})),_:2},1032,["to"])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("img",{src:e.Picture.PictureUrl1,alt:e.PictureDescription1||e[i.spotNameKey],class:"h-100 w-100 position-absolute top-50 start-0 translate-middle-y objectFitCover"},null,8,o)]})),_:2},1024)})),128))]})),_:1})):Object(n["createCommentVNode"])("",!0)}var i=r("8349"),s=r("4da1");r("bbe3");s["c"].use([s["b"],s["a"]]);var l={name:"carsouel",components:{Swiper:i["a"],SwiperSlide:i["b"]},props:["areWordsOnImg","apiType","carsouelList"],data:function(){return{spotIDKey:this.apiType+"ID",spotNameKey:this.apiType+"Name"}},mounted:function(){}},d=r("6b0d"),u=r.n(d);const p=u()(l,[["render",c]]);t["a"]=p},e4a9:function(e,t,r){},fdcb:function(e,t,r){"use strict";var n=r("7a23"),a={class:"w-100 paddingTop75Percent position-relative radius20px overflow-hidden hoverImgBigger mb-0dot375 mb-lg-0dot625"},o=["src","alt"],c={class:"fs-5dot125 fsLg4dot375 text-black"},i={class:"m-0 text-black-light fs-6dot75 fsLg6"},s=Object(n["createElementVNode"])("span",{class:"align-text-bottom material-icons-outlined d-inline-block"}," place ",-1);function l(e,t,r,l,d,u){var p=Object(n["resolveComponent"])("router-link"),m=Object(n["resolveDirective"])("mainImg");return Object(n["openBlock"])(),Object(n["createBlock"])(p,{class:"w-100 h-100",to:"/spotDetail?theme="+r.apiType+"&id="+r.spotId,target:"_blank"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",a,[Object(n["withDirectives"])(Object(n["createElementVNode"])("img",{src:r.backupImg,alt:r.spotName,class:"position-absolute w-100 h-100 top-50 start-0 translate-middle-y objectFitCover"},null,8,o),[[m,r.imgUrl]])]),Object(n["createElementVNode"])("h5",c,Object(n["toDisplayString"])(r.spotName),1),Object(n["createElementVNode"])("p",i,[s,Object(n["createTextVNode"])(Object(n["toDisplayString"])(r.spotCity),1)])]})),_:1},8,["to"])}var d=r("5ecb"),u={name:"cardWithImgAndName",props:["apiType","spotId","backupImg","imgUrl","spotName","spotCity"],mixins:[d["a"]],data:function(){return{}},mounted:function(){}},p=r("6b0d"),m=r.n(p);const b=m()(u,[["render",l]]);t["a"]=b}});
//# sourceMappingURL=app.dd00e40a.js.map