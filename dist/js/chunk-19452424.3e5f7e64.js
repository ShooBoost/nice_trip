(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19452424"],{"00b4":function(e,t,r){"use strict";r("ac1f");var o=r("23e7"),n=r("da84"),a=r("c65b"),c=r("e330"),i=r("1626"),s=r("861d"),l=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),u=n.Error,d=c(/./.test);o({target:"RegExp",proto:!0,forced:!l},{test:function(e){var t=this.exec;if(!i(t))return d(this,e);var r=a(t,this,e);if(null!==r&&!s(r))throw new u("RegExp exec method returned something other than an Object or null");return!!r}})},"25f0":function(e,t,r){"use strict";var o=r("e330"),n=r("5e77").PROPER,a=r("6eeb"),c=r("825a"),i=r("3a9b"),s=r("577e"),l=r("d039"),u=r("ad6d"),d="toString",f=RegExp.prototype,p=f[d],m=o(u),h=l((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),b=n&&p.name!=d;(h||b)&&a(RegExp.prototype,d,(function(){var e=c(this),t=s(e.source),r=e.flags,o=s(void 0===r&&i(f,e)&&!("flags"in f)?m(e):r);return"/"+t+"/"+o}),{unsafe:!0})},"2c3e":function(e,t,r){var o=r("da84"),n=r("83ab"),a=r("9f7f").UNSUPPORTED_Y,c=r("c6b6"),i=r("9bf2").f,s=r("69f3").get,l=RegExp.prototype,u=o.TypeError;n&&a&&i(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===c(this))return!!s(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},"2c46":function(e,t,r){"use strict";r.r(t);r("b0c0"),r("fb6a");var o=r("7a23"),n={class:"container pt-5dot5 pt-lg-8dot75 mb-1 mb-lg-2dot5"},a={class:"container mb-1dot5 mb-3dot75"},c={class:"row"},i={class:"col-12 col-lg-3"},s={class:"dropdown mb-0dot5"},l={class:"btn btn-lg btn-outline-primary border-gray dropdown-toggle w-100 fw-bold d-flex justify-content-between align-items-center px-2 py-0dot75 fs-6",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},u={class:"dropdown-menu w-100 mt-0dot5 p-0 cursorPointer","aria-labelledby":"dropdownMenuButton1"},d={key:0},f=Object(o["createElementVNode"])("hr",{class:"dropdown-divider m-0"},null,-1),p={key:0,class:"dropdown-divider m-0"},m=["onClick"],h={class:"col-12 col-lg-3"},b={class:"dropdown mb-0dot5"},g={class:"btn btn-lg btn-outline-primary border-gray dropdown-toggle w-100 fw-bold d-flex justify-content-between align-items-center px-2 py-0dot75 fs-6",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},y={class:"dropdown-menu w-100 mt-0dot5 p-0 cursorPointer","aria-labelledby":"dropdownMenuButton1"},w={key:0},v=Object(o["createElementVNode"])("hr",{class:"dropdown-divider m-0"},null,-1),O={key:0,class:"dropdown-divider m-0"},j=["onClick"],C={class:"col-12 col-lg-4"},A={class:"col-12 col-lg-2"},k=Object(o["createElementVNode"])("span",{class:"material-icons align-text-top"}," search ",-1),N=Object(o["createTextVNode"])(" 搜尋 "),E=[k,N],x={key:0,class:"container"},S=Object(o["createElementVNode"])("h2",{class:"fs-4 fsLg1dot5 fw-normal m-0 mb-0dot5 mb-lg-0dot75"},"熱門分類",-1),B={class:"row"},V=["onClick"],P=["src","alt"],R={class:"text-white position-absolute top-50 start-50 translate-middle objectFitCover"},T={key:1,class:"container"},L={key:0,class:"fs-4 fsLg1dot5 fw-normal m-0 mb-0dot5 mb-lg-0dot75"},F={key:1,class:"fs-4 fsLg1dot5 fw-normal m-0 mb-0dot5 mb-lg-0dot75"},I={class:"row"};function D(e,t,r,k,N,D){var q=Object(o["resolveComponent"])("loading"),M=Object(o["resolveComponent"])("Breadcrumb"),X=Object(o["resolveComponent"])("CardWithImgAndName"),U=Object(o["resolveDirective"])("mainImg");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(q,{active:N.isLoading,"onUpdate:active":t[0]||(t[0]=function(e){return N.isLoading=e}),"can-cancel":!0,"is-full-page":N.fullPage},null,8,["active","is-full-page"]),Object(o["createElementVNode"])("section",n,[Object(o["createVNode"])(M,{apiType:N.currentTheme,city:e.$route.query.city,category:this.$route.query.category},null,8,["apiType","city","category"])]),Object(o["createElementVNode"])("section",a,[Object(o["createElementVNode"])("div",c,[Object(o["createElementVNode"])("div",i,[Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("button",l,Object(o["toDisplayString"])(this.$route.query.city||"選擇縣市"),1),Object(o["createElementVNode"])("ul",u,[this.$route.query.city?(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",d,[Object(o["createElementVNode"])("a",{onClick:t[1]||(t[1]=function(e){return D.showSearchResults({city:""})}),class:"dropdown-item py-0dot75 px-2"},"選擇縣市"),f])):Object(o["createCommentVNode"])("",!0),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(N.cityList,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:t},[0!==t?(Object(o["openBlock"])(),Object(o["createElementBlock"])("hr",p)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("a",{onClick:function(t){return D.showSearchResults({city:e})},class:"dropdown-item py-0dot75 px-2"},Object(o["toDisplayString"])(e.CityName),9,m)])})),128))])])]),Object(o["createElementVNode"])("div",h,[Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("button",g,Object(o["toDisplayString"])(this.$route.query.category||"選擇類別"),1),Object(o["createElementVNode"])("ul",y,[this.$route.query.category?(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",w,[Object(o["createElementVNode"])("a",{onClick:t[2]||(t[2]=function(e){return D.showSearchResults({category:""})}),class:"dropdown-item py-0dot75 px-2"},"選擇類別"),v])):Object(o["createCommentVNode"])("",!0),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(N.allCategoriesOfCurrentTheme,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:t},[0!==t?(Object(o["openBlock"])(),Object(o["createElementBlock"])("hr",O)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("a",{onClick:function(t){return D.showSearchResults({category:e.name})},class:"dropdown-item py-0dot75 px-2"},Object(o["toDisplayString"])(e.name),9,j)])})),128))])])]),Object(o["createElementVNode"])("div",C,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{class:"form-control form-control-lg bg-gray-light px-2 py-0dot75 mb-0dot5 focusPrimary fs-6",type:"text",placeholder:"你想去哪裡？請輸入關鍵字","aria-label":"搜尋欄，請填入關鍵字進行搜尋","onUpdate:modelValue":t[3]||(t[3]=function(e){return N.keywords=e})},null,512),[[o["vModelText"],N.keywords]])]),Object(o["createElementVNode"])("div",A,[Object(o["createElementVNode"])("button",{onClick:t[4]||(t[4]=function(){return D.getSearchingResults&&D.getSearchingResults.apply(D,arguments)}),class:"btn btn-primary w-100 btn-lg text-white letterSpacingLg fs-6",type:"submit"},E)])])]),N.showResults?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createElementBlock"])("section",x,[S,Object(o["createElementVNode"])("div",B,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(N.allCategoriesOfCurrentTheme,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"col-6 col-lg-3 mb-0dot75",key:t},[Object(o["createElementVNode"])("div",{onClick:function(t){return D.showSearchResults({category:e.name})},class:"w-100 paddingTop53Percent paddingTopLg36Percent position-relative text-white radius24px overflow-hidden cursorPointer"},[Object(o["withDirectives"])(Object(o["createElementVNode"])("img",{src:N.backupImg,alt:e.name,class:"h-100 w-100 position-absolute top-50 start-0 translate-middle-y objectFitCover brightnessOdot6"},null,8,P),[[U,e.imgUrl]]),Object(o["createElementVNode"])("h6",R,Object(o["toDisplayString"])(e.name),1)],8,V)])})),128))])])),N.showResults?(Object(o["openBlock"])(),Object(o["createElementBlock"])("section",T,[0===N.resultSpotsList.length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h2",L," Oops 暫無適合的搜尋結果 ")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("h2",F," 搜尋結果 ")),Object(o["createElementVNode"])("div",I,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(N.resultSpotsList.slice(0,N.amountsOfSpotsDurningEachResultShowingStage*N.stageOfResultShowing),(function(t,r){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"col-6 col-lg-3 mb-1dot25 mb-2dot25",key:r},[Object(o["createVNode"])(X,{class:"w-100",apiType:e.$route.query.theme,spotId:t.RestaurantID||t.ActivityID||t.ScenicSpotID,imgUrl:t.Picture.PictureUrl1||N.backupImg,backupImg:N.backupImg,spotName:t.RestaurantName||t.ActivityName||t.ScenicSpotName,spotCity:t.City?t.City:t.Location?t.Location.slice(0,3):t.Address?t.Address.slice(0,3):""},null,8,["apiType","spotId","imgUrl","backupImg","spotName","spotCity"])])})),128))])])):Object(o["createCommentVNode"])("",!0)],64)}var q=r("1da1"),M=(r("d3b7"),r("159b"),r("7db0"),r("e9c4"),r("4de4"),r("99af"),r("ac1f"),r("5319"),r("4d63"),r("c607"),r("2c3e"),r("25f0"),r("a15b"),r("1276"),r("00b4"),r("96cf"),r("2a6f")),X=r("5ecb"),U=r("fdcb"),Y=r("b3a4"),K=r("9062"),z=r.n(K),G=(r("e40d"),{name:"first",components:{CardWithImgAndName:U["a"],Breadcrumb:Y["a"],Loading:z.a},mixins:[M["a"],X["a"]],props:["apiType","searchingParameters"],directives:{},data:function(){return{currentTheme:this.$route.query.theme,isLoading:!1,fullPage:!0,cityList:[],keywords:"",apiParameters:{},allSpotsOfCurrentTheme:[],allCategoriesOfCurrentTheme:[],resultSpotsList:[],showResults:!0,amountsOfSpotsDurningEachResultShowingStage:8,stageOfResultShowing:1,backupImg:r("c988")}},watch:{$route:function(){this.currentTheme=this.$route.query.theme,this.showSearchResults({})}},methods:{getAllSpotsOfCurrentTheme:function(){var e=this;return Object(q["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getSpotsFromTdx({apiType:r.currentTheme,orderby:["SrcUpdateTime desc"]});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},organizeCategoriesOfCurrentTheme:function(){var e=this;return Object(q["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,r=e,t.next=4,r.getAllSpotsOfCurrentTheme();case 4:return r.allSpotsOfCurrentTheme=t.sent,e.resultSpotsList=r.allSpotsOfCurrentTheme,t.next=8,r.allSpotsOfCurrentTheme.forEach((function(e){var t=[e.Class,e.Class1,e.Class2,e.Class3];t.forEach((function(t){if(t){var o=r.allCategoriesOfCurrentTheme.find((function(e){return e.name===t}));o?o.spots.push(e):r.allCategoriesOfCurrentTheme.push({name:t,spots:[e]})}}))}));case 8:r.allCategoriesOfCurrentTheme.forEach((function(e){var t=e.spots.find((function(e){return e.Picture.PictureUrl1}));e.imgUrl=t?t.Picture.PictureUrl1:r.backupImg})),r.isLoading=!1;case 10:case"end":return t.stop()}}),t)})))()},setCityParameterForGetTdxData:function(e){var t=e.item,r=void 0===t?"":t,o=e.query,n=void 0===o?JSON.parse(JSON.stringify(this.$route.query)):o;return console.log("queryInCity",n),r?(this.apiParameters.city=r.City?r.City:r,n.city=this.apiParameters.city):(this.apiParameters.city="",delete n.city),n},setClassParameterForGetTdxData:function(e){var t=e.category,r=void 0===t?"":t,o=e.query,n=void 0===o?JSON.parse(JSON.stringify(this.$route.query)):o;if(console.log("query in class",n),r)switch(n.category=r,this.currentTheme){case"ScenicSpot":this.apiParameters["filter"]=["Class1%20eq%20'".concat(r,"'%20or%20Class2%20eq%20'").concat(r,"'%20or%20Class3%20eq%20'").concat(r,"'")];break;case"Restaurant":this.apiParameters["filter"]=["Class%20eq%20'".concat(r,"'")];break;case"Activity":this.apiParameters["filter"]=["Class1%20eq%20'".concat(r,"'%20or%20Class2%20eq%20'").concat(r,"'")];break}else this.apiParameters["filter"]=[],delete n.category;return n},showSearchResults:function(e){var t=e.city,r=void 0===t?this.$route.query.city:t,o=e.category,n=void 0===o?this.$route.query.category:o;console.log("city",r,"category",n);var a=this.setCityParameterForGetTdxData({item:r});console.log("urlQuery",a),a=this.setClassParameterForGetTdxData({category:n,query:a}),this.$router.replace({query:a}),console.log("urlQuery",a,"$route.query",this.$route.query),this.getSearchingResults()},getSearchingResults:function(){var e=this;return Object(q["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e,e.stageOfResultShowing=1,e.apiParameters["apiType"]=e.currentTheme,t.next=5,r.getSpotsFromTdx(r.apiParameters);case 5:e.resultSpotsList=t.sent,e.keywords&&(e.resultSpotsList=e.resultSpotsList.filter((function(e){var t=new RegExp(r.keywords.split().join("*"));return t.test(e.Name)}))),e.showResults=!0;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;window.addEventListener("scroll",(function(){e.showResults&&window.scrollY+window.innerHeight>=document.querySelector("body").clientHeight-10&&(e.stageOfResultShowing+=1),console.log("window.scrollY",window.scrollY," window.innerHeight",window.innerHeight,"document.querySelector(body).clientHeight",document.querySelector("body").clientHeight)}))},created:function(){var e=this;return Object(q["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getCityList();case 3:return r.cityList=t.sent,t.next=6,r.organizeCategoriesOfCurrentTheme();case 6:e.$route.query.lat?(e.apiParameters["spatialFilter"]=["nearby(".concat(e.$route.query.lat,",").concat(e.$route.query.lon,",1000)")],e.getSearchingResults(),e.apiParameters={}):e.$route.query.keywords&&(e.keywords=e.$route.query.keywords,e.getSearchingResults()),console.log(e.$route.query),e.showSearchResults({city:e.$route.query.city});case 9:case"end":return t.stop()}}),t)})))()}}),H=r("6b0d"),J=r.n(H);const Q=J()(G,[["render",D]]);t["default"]=Q},"4d63":function(e,t,r){var o=r("83ab"),n=r("da84"),a=r("e330"),c=r("94ca"),i=r("7156"),s=r("9112"),l=r("9bf2").f,u=r("241c").f,d=r("3a9b"),f=r("44e7"),p=r("577e"),m=r("ad6d"),h=r("9f7f"),b=r("6eeb"),g=r("d039"),y=r("1a2d"),w=r("69f3").enforce,v=r("2626"),O=r("b622"),j=r("fce3"),C=r("107c"),A=O("match"),k=n.RegExp,N=k.prototype,E=n.SyntaxError,x=a(m),S=a(N.exec),B=a("".charAt),V=a("".replace),P=a("".indexOf),R=a("".slice),T=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,L=/a/g,F=/a/g,I=new k(L)!==L,D=h.UNSUPPORTED_Y,q=o&&(!I||D||j||C||g((function(){return F[A]=!1,k(L)!=L||k(F)==F||"/a/i"!=k(L,"i")}))),M=function(e){for(var t,r=e.length,o=0,n="",a=!1;o<=r;o++)t=B(e,o),"\\"!==t?a||"."!==t?("["===t?a=!0:"]"===t&&(a=!1),n+=t):n+="[\\s\\S]":n+=t+B(e,++o);return n},X=function(e){for(var t,r=e.length,o=0,n="",a=[],c={},i=!1,s=!1,l=0,u="";o<=r;o++){if(t=B(e,o),"\\"===t)t+=B(e,++o);else if("]"===t)i=!1;else if(!i)switch(!0){case"["===t:i=!0;break;case"("===t:S(T,R(e,o+1))&&(o+=2,s=!0),n+=t,l++;continue;case">"===t&&s:if(""===u||y(c,u))throw new E("Invalid capture group name");c[u]=!0,a[a.length]=[u,l],s=!1,u="";continue}s?u+=t:n+=t}return[n,a]};if(c("RegExp",q)){for(var U=function(e,t){var r,o,n,a,c,l,u=d(N,this),m=f(e),h=void 0===t,b=[],g=e;if(!u&&m&&h&&e.constructor===U)return e;if((m||d(N,e))&&(e=e.source,h&&(t="flags"in g?g.flags:x(g))),e=void 0===e?"":p(e),t=void 0===t?"":p(t),g=e,j&&"dotAll"in L&&(o=!!t&&P(t,"s")>-1,o&&(t=V(t,/s/g,""))),r=t,D&&"sticky"in L&&(n=!!t&&P(t,"y")>-1,n&&(t=V(t,/y/g,""))),C&&(a=X(e),e=a[0],b=a[1]),c=i(k(e,t),u?this:N,U),(o||n||b.length)&&(l=w(c),o&&(l.dotAll=!0,l.raw=U(M(e),r)),n&&(l.sticky=!0),b.length&&(l.groups=b)),e!==g)try{s(c,"source",""===g?"(?:)":g)}catch(y){}return c},Y=function(e){e in U||l(U,e,{configurable:!0,get:function(){return k[e]},set:function(t){k[e]=t}})},K=u(k),z=0;K.length>z;)Y(K[z++]);N.constructor=U,U.prototype=N,b(n,"RegExp",U)}v("RegExp")},7156:function(e,t,r){var o=r("1626"),n=r("861d"),a=r("d2bb");e.exports=function(e,t,r){var c,i;return a&&o(c=t.constructor)&&c!==r&&n(i=c.prototype)&&i!==r.prototype&&a(e,i),e}},"7db0":function(e,t,r){"use strict";var o=r("23e7"),n=r("b727").find,a=r("44d2"),c="find",i=!0;c in[]&&Array(1)[c]((function(){i=!1})),o({target:"Array",proto:!0,forced:i},{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a(c)},9062:function(e,t,r){!function(t,o){e.exports=o(r("7a23"))}(0,(function(e){return(()=>{"use strict";var t={982:t=>{t.exports=e}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.r(n),o.d(n,{default:()=>j,useLoading:()=>O});var e=o(982);const t="undefined"!=typeof window?window.HTMLElement:Object,r={class:"vld-icon"},a={mounted(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn(e){if(!this.isActive)return;if(e.target===this.$refs.root||this.$refs.root.contains(e.target))return;let t=this.container?this.container:this.isFullPage?null:this.$refs.root.parentElement;(this.isFullPage||t&&t.contains(e.target))&&(e.preventDefault(),this.$refs.root.focus())}},beforeUnmount(){document.removeEventListener("focusin",this.focusIn)}},c=(0,e.createVNode)("g",{fill:"none","fill-rule":"evenodd"},[(0,e.createVNode)("g",{transform:"translate(1 1)","stroke-width":"2"},[(0,e.createVNode)("circle",{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}),(0,e.createVNode)("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[(0,e.createVNode)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"})])])],-1),i=(0,e.defineComponent)({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});i.render=function(t,r,o,n,a,i){return(0,e.openBlock)(),(0,e.createBlock)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,stroke:t.color},[c],8,["width","height","stroke"])};const s=i,l=(0,e.createVNode)("circle",{cx:"15",cy:"15",r:"15"},[(0,e.createVNode)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),(0,e.createVNode)("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})],-1),u=(0,e.createVNode)("circle",{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"},[(0,e.createVNode)("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),(0,e.createVNode)("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})],-1),d=(0,e.createVNode)("circle",{cx:"105",cy:"15",r:"15"},[(0,e.createVNode)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),(0,e.createVNode)("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})],-1),f=(0,e.defineComponent)({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}});f.render=function(t,r,o,n,a,c){return(0,e.openBlock)(),(0,e.createBlock)("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:t.color,width:t.width,height:t.height},[l,u,d],8,["fill","width","height"])};const p=f,m=(0,e.createVNode)("rect",{x:"0",y:"13",width:"4",height:"5"},[(0,e.createVNode)("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}),(0,e.createVNode)("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"})],-1),h=(0,e.createVNode)("rect",{x:"10",y:"13",width:"4",height:"5"},[(0,e.createVNode)("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}),(0,e.createVNode)("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"})],-1),b=(0,e.createVNode)("rect",{x:"20",y:"13",width:"4",height:"5"},[(0,e.createVNode)("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}),(0,e.createVNode)("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"})],-1),g=(0,e.defineComponent)({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}});g.render=function(t,r,o,n,a,c){return(0,e.openBlock)(),(0,e.createBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:t.height,width:t.width,fill:t.color},[m,h,b],8,["height","width","fill"])};const y={Spinner:s,Dots:p,Bars:g},w=(0,e.defineComponent)({name:"vue-loading",mixins:[a],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,t],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},emits:["hide","update:active"],data(){return{isActive:this.active}},components:y,mounted(){document.addEventListener("keyup",this.keyPress)},methods:{cancel(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide(){this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(()=>{const t=this.$refs.root.parentElement;var r,o;(0,e.render)(null,t),void 0!==(r=t).remove?r.remove():null===(o=r.parentNode)||void 0===o||o.removeChild(r)},150))},disableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vld-shown")},enableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vld-shown")},keyPress(e){27===e.keyCode&&this.cancel()}},watch:{active(e){this.isActive=e},isActive(e){e?this.disableScroll():this.enableScroll()}},computed:{bgStyle(){return{background:this.backgroundColor,opacity:this.opacity,backdropFilter:`blur(${this.blur})`}}},beforeUnmount(){document.removeEventListener("keyup",this.keyPress)}});w.render=function(t,o,n,a,c,i){return(0,e.openBlock)(),(0,e.createBlock)(e.Transition,{ref:"root",name:t.transition},{default:(0,e.withCtx)(()=>[(0,e.withDirectives)((0,e.createVNode)("div",{tabindex:"0",class:["vld-overlay is-active",{"is-full-page":t.isFullPage}],"aria-busy":t.isActive,"aria-label":"Loading",style:{zIndex:t.zIndex}},[(0,e.createVNode)("div",{class:"vld-background",onClick:o[1]||(o[1]=(0,e.withModifiers)((...e)=>t.cancel&&t.cancel(...e),["prevent"])),style:t.bgStyle},null,4),(0,e.createVNode)("div",r,[(0,e.renderSlot)(t.$slots,"before"),(0,e.renderSlot)(t.$slots,"default",{},()=>[((0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)(t.loader),{color:t.color,width:t.width,height:t.height},null,8,["color","width","height"]))]),(0,e.renderSlot)(t.$slots,"after")])],14,["aria-busy"]),[[e.vShow,t.isActive]])]),_:3},8,["name"])};const v=w;function O(t={},r={}){return{show(o=t,n=r){const a=Object.assign({},t,o,{programmatic:!0,lockScroll:!0,isFullPage:!1,active:!0});let c=a.container;a.container||(c=document.body,a.isFullPage=!0);const i=Object.assign({},r,n);return{hide:function(t,r,o,n={}){const a=(0,e.h)(t,r,n),c=document.createElement("div");return c.classList.add("vld-container"),o.appendChild(c),(0,e.render)(a,c),a.component}(v,a,c,i).ctx.hide}}}}v.install=(e,t={},r={})=>{const o=O(t,r);e.config.globalProperties.$loading=o,e.provide("$loading",o)};const j=v})(),n.default})()}))},b0c0:function(e,t,r){var o=r("83ab"),n=r("5e77").EXISTS,a=r("e330"),c=r("9bf2").f,i=Function.prototype,s=a(i.toString),l=/^\s*function ([^ (]*)/,u=a(l.exec),d="name";o&&!n&&c(i,d,{configurable:!0,get:function(){try{return u(l,s(this))[1]}catch(e){return""}}})},b3a4:function(e,t,r){"use strict";r("99af"),r("b0c0");var o=r("7a23"),n={"aria-label":"breadcrumb"},a={class:"breadcrumb"},c={class:"breadcrumb-item"},i=Object(o["createTextVNode"])("首頁"),s={key:0,class:"breadcrumb-item"},l={key:1,class:"breadcrumb-item"},u={key:2,class:"breadcrumb-item"},d={key:3,class:"breadcrumb-item link-primary active","aria-current":"page"};function f(e,t,r,f,p,m){var h=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("nav",n,[Object(o["createElementVNode"])("ol",a,[Object(o["createElementVNode"])("li",c,[Object(o["createVNode"])(h,{class:"link-primary",to:"/"},{default:Object(o["withCtx"])((function(){return[i]})),_:1})]),p.theme?(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",s,[Object(o["createVNode"])(h,{class:"link-primary",to:"/searching?theme=".concat(r.apiType)},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(p.theme),1)]})),_:1},8,["to"])])):Object(o["createCommentVNode"])("",!0),r.city?(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",l,[Object(o["createVNode"])(h,{class:"link-primary",to:"/searching?theme=".concat(r.apiType,"&city=").concat(r.city)},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(r.city),1)]})),_:1},8,["to"])])):Object(o["createCommentVNode"])("",!0),r.category?(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",u,[Object(o["createVNode"])(h,{class:"link-primary",to:"/searching?theme=".concat(r.apiType,"&category=").concat(r.category)},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(r.category),1)]})),_:1},8,["to"])])):Object(o["createCommentVNode"])("",!0),r.name?(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",d,Object(o["toDisplayString"])(r.name),1)):Object(o["createCommentVNode"])("",!0)])])}var p={data:function(){return{theme:""}},watch:{apiType:function(){this.getChineseNameOfCurrentTheme()}},methods:{getChineseNameOfCurrentTheme:function(){switch(this.apiType){case"ScenicSpot":this.theme="探索景點";break;case"Activity":this.theme="節慶活動";break;case"Restaurant":this.theme="在地美食";break}}},props:["apiType","city","name","category"],created:function(){this.getChineseNameOfCurrentTheme()}},m=r("6b0d"),h=r.n(m);const b=h()(p,[["render",f]]);t["a"]=b},c607:function(e,t,r){var o=r("da84"),n=r("83ab"),a=r("fce3"),c=r("c6b6"),i=r("9bf2").f,s=r("69f3").get,l=RegExp.prototype,u=o.TypeError;n&&a&&i(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===c(this))return!!s(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})},c988:function(e,t){e.exports="data:image/png;base64,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"},e40d:function(e,t,r){},e9c4:function(e,t,r){var o=r("23e7"),n=r("da84"),a=r("d066"),c=r("2ba4"),i=r("e330"),s=r("d039"),l=n.Array,u=a("JSON","stringify"),d=i(/./.exec),f=i("".charAt),p=i("".charCodeAt),m=i("".replace),h=i(1..toString),b=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,y=/^[\uDC00-\uDFFF]$/,w=function(e,t,r){var o=f(r,t-1),n=f(r,t+1);return d(g,e)&&!d(y,n)||d(y,e)&&!d(g,o)?"\\u"+h(p(e,0),16):e},v=s((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&o({target:"JSON",stat:!0,forced:v},{stringify:function(e,t,r){for(var o=0,n=arguments.length,a=l(n);o<n;o++)a[o]=arguments[o];var i=c(u,null,a);return"string"==typeof i?m(i,b,w):i}})}}]);
//# sourceMappingURL=chunk-19452424.3e5f7e64.js.map