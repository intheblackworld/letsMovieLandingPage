(function(a){function t(t){for(var s,i,r=t[0],d=t[1],c=t[2],f=0,u=[];f<r.length;f++)i=r[f],o[i]&&u.push(o[i][0]),o[i]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(a[s]=d[s]);l&&l(t);while(u.length)u.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var a,t=0;t<n.length;t++){for(var e=n[t],s=!0,r=1;r<e.length;r++){var d=e[r];0!==o[d]&&(s=!1)}s&&(n.splice(t--,1),a=i(i.s=e[0]))}return a}var s={},o={app:0},n=[];function i(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=a,i.c=s,i.d=function(a,t,e){i.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,t){if(1&t&&(a=i(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var s in a)i.d(e,s,function(t){return a[t]}.bind(null,s));return e},i.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(t,"a",t),t},i.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var l=d;n.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"0706":function(a,t,e){},1058:function(a,t,e){"use strict";var s=e("2288"),o=e.n(s);o.a},"10c2":function(a,t,e){"use strict";var s=e("184e"),o=e.n(s);o.a},"184e":function(a,t,e){},"18be":function(a,t,e){},2288:function(a,t,e){},2842:function(a,t){a.exports="data:image/png;base64,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"},"2c93":function(a,t,e){},"2d3f":function(a,t,e){},"382e":function(a,t,e){a.exports=e.p+"img/nav-logo.771c7499.png"},"38cd":function(a,t,e){a.exports=e.p+"img/s3_img_3.6d5b1bda.png"},"3b98":function(a,t,e){},"4ca1":function(a,t,e){"use strict";var s=e("e918"),o=e.n(s);o.a},"56d7":function(a,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("AstrictMask"),e("router-view")],1)},n=[],i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"mask"},[e("section",{attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"0","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[e("icon",{staticClass:"icon",attrs:{data:a.vueIcon}})],1),a._m(0)])},r=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"300","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[e("p",[a._v("\n      請將裝置轉至橫式\n      "),e("br"),a._v("體驗最佳瀏覽方式\n    ")])])}],d=e("8f36"),c=e.n(d),l={name:"AstrictMask",data:function(){return{vueIcon:c.a}}},f=l,u=(e("f6d5"),e("2877")),v=Object(u["a"])(f,i,r,!1,null,"d258543e",null),p=v.exports,m={name:"App",components:{AstrictMask:p}},b=m,g=(e("5c0b"),Object(u["a"])(b,o,n,!1,null,null,null)),h=g.exports,C=e("8c4f"),x=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"home no-padding-top"},[e("div",{ref:"gtmNoScript"}),e("Navigation"),e("div",{attrs:{id:"section1"}},[e("Section1")],1),e("div",{attrs:{id:"section2"}},[e("Section2")],1),e("div",{attrs:{id:"section3"}},[e("Section3")],1),e("div",{attrs:{id:"section4"}},[e("Section4")],1),e("div",{attrs:{id:"section5"}},[e("Section5")],1),e("div",{attrs:{id:"section6"}},[e("Section6")],1),e("div",{attrs:{id:"section7"}},[e("Section7")],1)],1)},_=[],A=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"navigation"},[s("div",{staticClass:"layout-container-fluid"},[s("div",{staticClass:"layout-container"},[s("div",{staticClass:"nav"},[s("img",{staticClass:"logo",attrs:{src:e("382e"),alt:"心天畝的圖片"}}),s("div",{staticClass:"menu",on:{click:a.toggleSidebar}},[s("font-awesome-icon",{attrs:{icon:"bars"}})],1),s("div",{class:"mask "+(a.isOpen?"open":""),on:{click:a.toggleSidebar}}),s("ul",{class:"navlist "+(a.isOpen?"open":"")},a._l(a.list,function(t){return s("li",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#"+t.section,offset:a.offset},expression:"{ element: `#${item.section}`, offset: offset }"}],key:t.name},[s("span",{staticClass:"link"},[t.imgSrc?s("img",{attrs:{src:t.imgSrc,alt:"心天畝的圖片"}}):a._e(),s("span",[s("p",{staticClass:"title"},[a._v(a._s(t.name))]),s("span",{staticClass:"subTitle"},[a._v(a._s(t.subTitle))])])])])}),0)])])])])},y=[],U=(e("4917"),null!=window.navigator.userAgent.match(/iPhone/i)||null!=window.navigator.userAgent.match(/Android/i)),M=null!=window.navigator.userAgent.match(/iPad/i),Q=[{name:"擺脫無效社交",imgSrc:"",subTitle:"",section:"section2"},{name:"配對流程",imgSrc:"",subTitle:"",section:"section3"},{name:"安全保障",imgSrc:"",subTitle:"",section:"section4"},{name:"你可能想問",imgSrc:"",subTitle:"",section:"section5"},{name:"使用回饋",imgSrc:"",subTitle:"",section:"section6"}],F={name:"navigation",components:{},data:function(){return{isOpen:!1,isMobile:U,isTablet:M,list:Q}},computed:{offset:function(){return this.isMobile?-39:this.isTablet?-45:-56}},methods:{toggleSidebar:function(){this.isOpen=!this.isOpen}}},w=F,O=(e("1058"),Object(u["a"])(w,A,y,!1,null,"3351ce15",null)),B=O.exports,S=(e("ac6a"),{mounted:function(){var a=this,t=[];this.$gtmCode.forEach(function(a,e){var s=document.createElement("script");s.type="text/javascript",s.async=!0,s.innerHTML="(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-".concat(a,"');");var o=document.createElement("noscript");o.type="text/javascript",o.async=!0,o.innerHTML='<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-'.concat(a,'"height="0" width="0" style="display:none;visibility:hidden"></iframe>');var n={s:s,n:o};t.push(n)}),t.forEach(function(t){document.head.appendChild(t.s),a.$refs.gtmNoScript.appendChild(t.n)})}}),j=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"section1"},[e("Loading",{attrs:{loading:a.loading}}),a._m(0)],1)},T=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{staticClass:"fullscreen bg-cover no-nav flex-c bg",attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"0","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[e("div",{staticClass:"container flex-c"},[e("div",{staticClass:"content"},[e("p",{staticClass:"title",attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"0","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[a._v("女生免費看電影")]),e("p",{staticClass:"sub-title",attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"300","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[a._v("找一個跟你在電影院裡會心一笑的人")]),e("a",{staticClass:"flex-c",attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"500","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[a._v("開始配對")])])])])}],L=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{class:"loading-bg "+(a.loading?"":"hide")},[e("ClipLoader",{staticClass:"loading-icon",attrs:{loading:"loading",size:150,sizeUnit:"px"}})],1)},E=[],z=e("05c2"),V={name:"loading",components:{ClipLoader:z["ClipLoader"]},props:["loading"]},P=V,k=(e("4ca1"),Object(u["a"])(P,L,E,!1,null,"5e29dd12",null)),I=k.exports,N=e("5118"),q={name:"section1",components:{Loading:I},data:function(){return{loading:!1}},methods:{},created:function(){var a=this;this.$Lazyload.$on("loaded",function(t){t.el,t.src;Object(N["setTimeout"])(function(){a.loading&&(a.loading=!1)},2500)})}},H=q,G=(e("991f"),Object(u["a"])(H,j,T,!1,null,"167aa773",null)),X=G.exports,J=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},R=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"section2"},[s("div",{staticClass:"container flex-c"},[s("div",{staticClass:"content"},[s("p",{staticClass:"title flex-c",attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"0","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[a._v("擺脫你的無效社交")]),s("div",[s("p",{staticClass:"sub-title",attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"300","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[a._v("交朋友不是靠滑的")]),s("p",{attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"300","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[a._v("\n          說真的，我們不想讓你掛在線上，往左滑，往右滑，往右滑，往左滑…\n          好不容易配對成功之後，才發現，那個人已讀不回，這個人不太會回\n          這個人是尬聊魔人，那個人聊天總不正經，我們不願意你把時間浪費在這\n          "),s("br")])]),s("div",{staticClass:"second"},[s("p",{staticClass:"sub-title",attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"500","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[a._v("時間，請花在美好的事物上")]),s("p",{attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"500","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[a._v("\n          認識不同領域的人，拓展交友的圈子\n          "),s("br"),a._v("為你的生活注入點刺激\n          "),s("br"),a._v("直接碰面看場電影，有了共同話題\n          "),s("br"),a._v("讓你們之間再也不尬聊\n        ")])]),s("img",{staticClass:"absolute clock",attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"700","data-aos-duration":"2000","data-aos-mirror":"true","data-aos-once":"false",src:e("e724"),alt:""}})])])])}],D={name:"section2",data:function(){return{loading:!1,isPlay:!1}},methods:{handlePlay:function(){this.isPlay?(this.isPlay=!1,this.$refs.video.pause()):(this.isPlay=!0,this.$refs.video.play())}},created:function(){}},K=D,W=(e("d58c"),Object(u["a"])(K,J,R,!1,null,"430a7b50",null)),Y=W.exports,Z=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"section3 fullscreen bg-cover"},[s("div",{staticClass:"fullscreen mask flex-c"},[s("div",{staticClass:"container flex-ja wrap"},[s("div",{staticClass:"content flex-c"},[s("div",[s("p",{staticClass:"title mb-20",attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"0","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[a._v("配對流程")]),a._m(0),a.isMobile?a._e():s("div",{attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"500","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[s("div",{staticClass:"btn border flex-c"},[a._v("現在就開始配對")]),s("div",{staticClass:"btn flex-c"},[a._v("體驗配對")])])])]),s("div",{staticClass:"content",attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"300","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[s("div",{staticClass:"slide bg-cover"},[s("img",{staticClass:"absolute-c phone-frame",attrs:{src:e("2842"),alt:""}}),a._l(a.slideList,function(t,e){return s("img",{key:"img-"+t.src,class:"slide-img absolute-c "+(a.slideIndex===e?"active":""),attrs:{src:t.src,alt:""}})}),s("div",{staticClass:"flex-ac flex-jb dot-group"},a._l(a.slideList,function(t,e){return s("div",{key:t,staticClass:"dot",on:{click:function(t){return a.setSlide(e)}}})}),0)],2),s("p",{staticClass:"desc"},[a._v(a._s(a.slideList[a.slideIndex].title))]),a.isMobile?s("div",{attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"500","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[s("div",{staticClass:"btn border flex-c show-in-mobile"},[a._v("現在就開始配對")])]):a._e()])])])])},$=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",{staticClass:"sub-title",attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"300","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[a._v("\n            我們在背後用了超級複雜的技術\n            "),e("br"),a._v("只為了讓你有最好的交友體驗\n            "),e("br")])}],aa={data:function(){return{slideIndex:0}},methods:{addIndex:function(){this.slideIndex=this.slideIndex===this.slideList.length-1?0:this.slideIndex+1},decIndex:function(){this.slideIndex=0===this.slideIndex?this.slideList.length-1:this.slideIndex-1}},mounted:function(){}},ta={name:"section3",mixins:[aa],data:function(){return{isMobile:U,slideList:[{title:"1. 加入我們的 FB Bot",src:e("78ce")},{title:"2. 根據我們給出的選項，填寫你的個人資料",src:e("78ce")},{title:"3. 女生填寫自己想要的時段，以及電影",src:e("38cd")},{title:"4. 男生則可以選擇我們推薦配對成功率高的時段",src:e("801b")},{title:"5. 配對成功後，喬好電影院跟詳細時間，就可以準備約會了！",src:e("a00d")}]}},created:function(){var a=this;setInterval(function(){a.addIndex()},3500)},methods:{setSlide:function(a){this.slideIndex=a}}},ea=ta,sa=(e("a4bb"),Object(u["a"])(ea,Z,$,!1,null,"49552776",null)),oa=sa.exports,na=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"section4 pt-40 pb-30"},[e("div",{staticClass:"container"},[e("p",{staticClass:"title flex-c m-auto",attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"0","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[a._v("安心的理由")]),e("div",{staticClass:"graph flex-ac flex-jb"},[e("div",{staticClass:"flex-c",attrs:{"data-aos":"fade-right","data-aos-offset":"50","data-aos-delay":"0","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[e("span",{staticClass:"radar male"}),e("font-awesome-icon",{staticClass:"male",attrs:{icon:"male"}})],1),e("div",{staticClass:"flex-c",attrs:{"data-aos":"fade","data-aos-offset":"50","data-aos-delay":"400","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[e("span",{staticClass:"radar robot"}),e("font-awesome-icon",{staticClass:"robot",attrs:{icon:"robot"}})],1),e("div",{staticClass:"flex-c",attrs:{"data-aos":"fade-left","data-aos-offset":"50","data-aos-delay":"400","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[e("span",{staticClass:"radar female"}),e("font-awesome-icon",{staticClass:"female",attrs:{icon:"female"}})],1)]),a._m(0),e("div",{staticClass:"card",attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"800","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[e("font-awesome-icon",{staticClass:"card",attrs:{icon:"id-card"}}),a._m(1)],1),e("div",{staticClass:"warning",attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"1000","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[e("font-awesome-icon",{attrs:{icon:"exclamation-triangle"}}),a.isMobile?e("p",[a._v("\n        請在配對成功後出去看電影的時候嚴格遵守我們的\n        "),e("span",{staticClass:"big"},[a._v("安全守則")]),e("br"),a._v("我們很認真的看待關於安全的議題\n        "),e("br"),a._v("所以對於沒有遵守的人\n        "),e("br"),a._v("我們採取\n        "),e("span",[a._v("零容忍")]),a._v("的態度\n        "),e("br"),a._v("一律黑名單\n        "),e("br"),a._v("未來不得參與 Let’s Movie 的任何活動\n      ")]):e("p",[a._v("\n        請在配對成功後出去看電影的時候\n        "),e("span",[a._v("嚴格遵守")]),e("br"),a._v("我們的\n        "),e("span",{staticClass:"big"},[a._v("安全守則")]),a._v("\n        我們很認真的看待關於安全的議題\n        "),e("br"),a._v("所以對於沒有遵守的人，我們採取\n        "),e("span",[a._v("零容忍")]),a._v("的態度\n        "),e("br"),a._v("一律黑名單，未來不得參與 Let’s Movie 的任何活動\n      ")]),e("div",[e("div",{staticClass:"btn border flex-c danger m-auto",on:{click:function(t){a.visible=!0}}},[a._v("點擊查看守則")])])],1)]),e("el-dialog",{attrs:{title:"安全守則",visible:a.visible,width:"600px",fullscreen:""},on:{"update:visible":function(t){a.visible=t}}},[e("div",{staticClass:"policy-dialog-content"},[e("p",[a._v("1. 男生在整個約會過程當中，除非取得女生同意，否則不能以任何形式，要求女生的聯絡方式")]),e("p",[a._v("2. 整個約會過程當中，請雙方務必抱持互相尊重的態度，不可出現攻擊性，性別騷擾性的行為跟言詞")]),e("p",[a._v("3. 遵守時間觀念是對彼此的尊重，所以除非有緊急事故，請雙方都要在約定的時間於約定地點碰面，切勿遲到")]),e("p",[a._v("4. 我們沒有限制看電影之後的續攤行程，但是任何續攤行程請在雙方都合意的情況下進行")])])])],1)},ia=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"desc",attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"600","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[a._v("\n      為了讓你們能\n      "),e("span",{staticClass:"pink"},[a._v("更放心地")]),a._v("使用我們的服務，我們的配對機制\n      "),e("br"),a._v("能讓你們傳送的訊息都藉由\n      "),e("span",{staticClass:"green"},[a._v("機器人")]),a._v("轉送\n      "),e("br"),a._v("所以絕對不會透露個人資料給對方\n      "),e("br"),a._v("如 Line/臉書帳號/真實姓名/其它隱密個資\n      "),e("br")])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",[a._v("\n        註冊時採取實名認證以及年齡驗證\n        "),e("br"),a._v("避免詐騙等狀況發生\n      ")])}],ra={name:"section4",mixins:[aa],data:function(){return{isMobile:U,loading:!0,visible:!1}},created:function(){},mounted:function(){var a=this;window.setTimeout(function(){a.loading=!1},2e3)}},da=ra,ca=(e("cd8c"),Object(u["a"])(da,na,ia,!1,null,"0ea76648",null)),la=ca.exports,fa=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},ua=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"section5 pt-40 pb-30"},[e("div",{staticClass:"container"},[e("p",{staticClass:"title flex-c",attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"0","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[a._v("你可能想問")]),e("div",{staticClass:"flex-jb wrap"},[e("div",{staticClass:"desc mb-30",attrs:{"data-aos":"fade-left","data-aos-offset":"50","data-aos-delay":"200","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[e("p",{staticClass:"question flex-ac"},[e("span",{staticClass:"flex-c"},[a._v("1")]),a._v(" 這個服務要付費嗎？會很貴嗎？\n        ")]),e("p",[a._v("A: 我們背後有專業的工作團隊，去配對最適合彼此的人。所以我們的服務需要收取媒合費用。不過不用擔心男生只要 500 元，女生則完全免費。只是為了禮貌，男生需要另外負擔女生的電影票費用喔。")])]),e("div",{staticClass:"desc mb-30",attrs:{"data-aos":"fade-right","data-aos-offset":"50","data-aos-delay":"200","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[e("p",{staticClass:"question flex-ac"},[e("span",{staticClass:"flex-c"},[a._v("1")]),a._v(" 這個服務要付費嗎？會很貴嗎？\n        ")]),e("p",[a._v("A: 我們背後有專業的工作團隊，去配對最適合彼此的人。所以我們的服務需要收取媒合費用。不過不用擔心男生只要 500 元，女生則完全免費。只是為了禮貌，男生需要另外負擔女生的電影票費用喔。")])]),e("div",{staticClass:"desc mb-30",attrs:{"data-aos":"fade-left","data-aos-offset":"50","data-aos-delay":"200","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[e("p",{staticClass:"question flex-ac"},[e("span",{staticClass:"flex-c"},[a._v("1")]),a._v(" 這個服務要付費嗎？會很貴嗎？\n        ")]),e("p",[a._v("A: 我們背後有專業的工作團隊，去配對最適合彼此的人。所以我們的服務需要收取媒合費用。不過不用擔心男生只要 500 元，女生則完全免費。只是為了禮貌，男生需要另外負擔女生的電影票費用喔。")])]),e("div",{staticClass:"desc mb-30",attrs:{"data-aos":"fade-right","data-aos-offset":"50","data-aos-delay":"200","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[e("p",{staticClass:"question flex-ac"},[e("span",{staticClass:"flex-c"},[a._v("1")]),a._v(" 這個服務要付費嗎？會很貴嗎？\n        ")]),e("p",[a._v("A: 我們背後有專業的工作團隊，去配對最適合彼此的人。所以我們的服務需要收取媒合費用。不過不用擔心男生只要 500 元，女生則完全免費。只是為了禮貌，男生需要另外負擔女生的電影票費用喔。")])]),e("div",{staticClass:"desc mb-30",attrs:{"data-aos":"fade-left","data-aos-offset":"50","data-aos-delay":"200","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[e("p",{staticClass:"question flex-ac"},[e("span",{staticClass:"flex-c"},[a._v("1")]),a._v(" 這個服務要付費嗎？會很貴嗎？\n        ")]),e("p",[a._v("A: 我們背後有專業的工作團隊，去配對最適合彼此的人。所以我們的服務需要收取媒合費用。不過不用擔心男生只要 500 元，女生則完全免費。只是為了禮貌，男生需要另外負擔女生的電影票費用喔。")])])])])])}],va={name:"section5",mixins:[aa],data:function(){return{isMobile:U,loading:!0}},methods:{},created:function(){},mounted:function(){var a=this;window.setTimeout(function(){a.loading=!1},2e3)}},pa=va,ma=(e("e3f5"),Object(u["a"])(pa,fa,ua,!1,null,"4ab94207",null)),ba=ma.exports,ga=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"section6 bg-cover"},[e("div",{staticClass:"linear-g-mask"},[e("div",{staticClass:"container pt-40 pb-30"},[e("p",{staticClass:"title flex-c",attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"0","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[a._v("聽聽使用者怎麼說")]),e("div",{staticClass:"bullet-wall"},a._l(a.bulletList,function(t){return e("div",{key:t[1],staticClass:"bullet"},[a._v(a._s(t[0])+" : "+a._s(t[1]))])}),0)])])])},ha=[],Ca={name:"section6",data:function(){return{isMobile:U,bulletList:[["高雄陳先生","拓展交友圈，很開心選的電影得了奧斯卡。"],["台北邵先生","春天似乎提早來了"],["台北丁先生","很簡單且自然的就可以認識到不同領域的人"],["台北張先生","非常感謝，可以多認識一個知性的異性"],["台北陳先生","很特別的體驗，我會想繼續嘗試"],["台北劉先生","很自然，對方也是很交朋友的心情，所以聊起來也沒什麼顧忌，反而有點像本來就是朋友的感覺，滿好的。"],["台北施小姐","棒棒的，認識新朋友很好"],["台北呂小姐","很棒~聊天很開心電影也很好看！！"],["台北張小姐","遇到的人很不錯"],["台北鄭小姐","很開心認識到不同的人～還一起看了都想看的電影 ,覺得很棒很開心～"],["台北江小姐","滿有趣的，比起線上交友這個會比較令人安心"],["台北姜小姐","透過對相同電影的偏好交朋友，真的是個很棒的概念~"],["台北余小姐","電影好看，對方很有禮貌"],["台北高小姐","暢談甚歡"],["台北林小姐","「覺得ㄧ開始有保護隱私，（不能一開始就加Line)很不錯，讓我很安心地參加活動」"],["台北高小姐","「很棒的活動，看了場好電影，一起分享，認識新朋友，聊著彼此對電影的感覺，很有趣！」"],["台北呂小姐","第一次參加這種活動，整體很有創意也不會讓人感覺很像相親"]]}},methods:{},created:function(){window.setTimeout(function(){},1500)}},xa=Ca,_a=(e("951e"),Object(u["a"])(xa,ga,ha,!1,null,"40ee3b1c",null)),Aa=_a.exports,ya=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},Ua=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"section7 fullscreen bg-cover"},[e("div",{staticClass:"linear-g-mask fullscreen flex-c"},[e("div",{staticClass:"desc"},[e("div",{attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"0","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[e("span",{staticClass:"blue"},[a._v("一個人")]),a._v("去電影院有多孤獨，\n        那兩個人去看電影就有\n        "),e("span",{staticClass:"pink"},[a._v("多幸福")]),a._v("。\n        "),e("br"),e("br")]),e("div",{attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"300","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[e("span",{staticClass:"big"},[a._v("來 Lets Movie，遇見你的新緣分")])]),e("div",{attrs:{"data-aos":"fade-up","data-aos-offset":"50","data-aos-delay":"600","data-aos-duration":"1500","data-aos-mirror":"true","data-aos-once":"false"}},[e("div",{staticClass:"btn flex-c m-auto"},[a._v("開始配對")])])])])])}],Ma={name:"section7",data:function(){return{isMobile:U,loading:!0}},methods:{},created:function(){window.setTimeout(function(){},1500)}},Qa=Ma,Fa=(e("ea49"),Object(u["a"])(Qa,ya,Ua,!1,null,"7f1c6671",null)),wa=Fa.exports,Oa=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},Ba=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"simulation fullscreen relative"},[e("div",{staticClass:"frame relative bg-cover"})])}],Sa={name:"section8",mixins:[aa],data:function(){return{isMobile:U}},methods:{},mounted:function(){}},ja=Sa,Ta=(e("10c2"),Object(u["a"])(ja,Oa,Ba,!1,null,"ba9d2138",null)),La=Ta.exports,Ea={name:"home",mixins:[S],components:{Navigation:B,Section1:X,Section2:Y,Section3:oa,Section4:la,Section5:ba,Section6:Aa,Section7:wa,Simulation:La},methods:{onDone:function(){console.log("done")}}},za=Ea,Va=Object(u["a"])(za,x,_,!1,null,null,null),Pa=Va.exports;s["default"].use(C["a"]);var ka=new C["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:Pa}]}),Ia=e("2f62");s["default"].use(Ia["a"]);var Na=new Ia["a"].Store({state:{},mutations:{},actions:{}}),qa=e("9483");Object(qa["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(a){console.error("Error during service worker registration:",a)}});e("2d3f");var Ha={gtmCode:["P3HFT6F"]},Ga=function(a,t,e,s){return{origin:a,delay:e,distance:"".concat(s,"px"),duration:t,viewOffset:{top:-100,right:0,bottom:0,left:0}}},Xa={install:function(a,t){a.prototype.$fadeIn=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Ga("bottom",t,a,e)},a.prototype.$fadeInUp=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30;return Ga("bottom",t,a,e)},a.prototype.$fadeInDown=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30;return Ga("top",t,a,e)},a.prototype.$fadeInRight=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30;return Ga("left",t,a,e)},a.prototype.$fadeInLeft=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30;return Ga("right",t,a,e)},a.prototype.$gtmCode=Ha.gtmCode}},Ja=e("5c96"),Ra=e.n(Ja),Da=(e("0fae"),e("f13c")),Ka=e.n(Da),Wa=e("caf9"),Ya=e("ecee"),Za=e("c074"),$a=e("f5af"),at=e.n($a),tt=(e("e829"),e("f2d1")),et=e("ad3d"),st=e("dd7e"),ot=e.n(st);at.a.init(),Ya["c"].add(Za["a"]),Ya["c"].add(Za["j"]),Ya["c"].add(Za["h"]),Ya["c"].add(Za["g"]),Ya["c"].add(tt["b"]),Ya["c"].add(tt["a"]),Ya["c"].add(Za["f"]),Ya["c"].add(Za["d"]),Ya["c"].add(Za["b"]),Ya["c"].add(Za["i"]),Ya["c"].add(Za["e"]),Ya["c"].add(Za["c"]),s["default"].component("font-awesome-icon",et["a"]),s["default"].use(ot.a,{tagName:"icon"}),s["default"].use(Xa),s["default"].use(Ra.a),s["default"].use(Ka.a),s["default"].use(Wa["a"]),new s["default"]({router:ka,store:Na,render:function(a){return a(h)}}).$mount("#app")},"5c0b":function(a,t,e){"use strict";var s=e("5e27"),o=e.n(s);o.a},"5e27":function(a,t,e){},"78ce":function(a,t,e){a.exports=e.p+"img/s3_img_2.1df733d2.png"},"798c":function(a,t,e){},"801b":function(a,t,e){a.exports=e.p+"img/s3_img_4.88ae116f.png"},"8f36":function(a,t){a.exports={name:"src/assets/svg/tip",data:{viewBox:"0 0 60 60",data:'<path pid="0" d="M17 49c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM13 5h4a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2zM20 5h1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM54 47a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1zM54 35a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1zM54 43a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1zM54 39a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1zM54 31a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1zM54 51a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1zM53 54a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1zM38.043 58h-.994a1 1 0 1 0 0 2h.994a1 1 0 1 0 0-2z"/><path pid="1" d="M34.069 58h-.792l.005-.009c.124-.19.231-.39.324-.597.023-.051.046-.101.067-.152.019-.046.043-.089.06-.136.014-.038.008-.076.017-.114.151-.441.25-.906.25-1.397V28.857a.993.993 0 0 0 .5-.856.987.987 0 0 0-.5-.847V4.405A4.41 4.41 0 0 0 29.595 0H4.405A4.41 4.41 0 0 0 0 4.405v51.189A4.41 4.41 0 0 0 4.405 60h25.689c.152 0 .293-.04.422-.101a4.364 4.364 0 0 0 1.598-.702c.096.455.479.803.961.803h.994a1 1 0 1 0 0-2zM2 8h30V46H2V8zm2.405-6h25.189A2.408 2.408 0 0 1 32 4.405V6H2V4.405A2.408 2.408 0 0 1 4.405 2zm25.19 56H4.405A2.408 2.408 0 0 1 2 55.595V48h30v7.594c0 .309-.064.603-.17.874A2.4 2.4 0 0 1 29.595 58zM42.018 58h-.994a1 1 0 1 0 0 2h.994a1 1 0 1 0 0-2zM45.443 29a1 1 0 1 0 0-2h-.994a1 1 0 1 0 0 2h.994zM37.494 29a1 1 0 1 0 0-2H36.5a1 1 0 1 0 0 2h.994zM45.992 58h-.994a1 1 0 1 0 0 2h.994a1 1 0 1 0 0-2zM41.468 29a1 1 0 1 0 0-2h-.994a1 1 0 1 0 0 2h.994zM53.94 58h-.994a1 1 0 1 0 0 2h.994a1 1 0 1 0 0-2zM59 41.729a1 1 0 0 0-1 1v.994a1 1 0 1 0 2 0v-.994a1 1 0 0 0-1-1zM59 49.678a1 1 0 0 0-1 1v.993a1 1 0 1 0 2 0v-.993a1 1 0 0 0-1-1zM59 45.703a1 1 0 0 0-1 1v.993a1 1 0 1 0 2 0v-.993a1 1 0 0 0-1-1zM59 37.754a1 1 0 0 0-1 1v.994a1 1 0 1 0 2 0v-.994a1 1 0 0 0-1-1zM59.933 30.636a.994.994 0 0 0-1.159-.811 1 1 0 0 0-.811 1.158c.024.137.037.279.037.422v.395a1 1 0 1 0 2 0v-.395c0-.258-.023-.516-.067-.769zM49.417 29a1 1 0 1 0 0-2h-.994a1 1 0 1 0 0 2h.994zM59 33.78a1 1 0 0 0-1 1v.993a1 1 0 1 0 2 0v-.993a1 1 0 0 0-1-1zM53.391 29a1 1 0 1 0 0-2h-.994a1 1 0 1 0 0 2h.994zM49.966 58h-.994a1 1 0 1 0 0 2h.994a1 1 0 1 0 0-2zM56.788 29.317a1 1 0 0 0 .997-1.734 4.367 4.367 0 0 0-1.196-.469.999.999 0 1 0-.447 1.949c.226.052.443.138.646.254zM59 53.651a1 1 0 0 0-1 1v.993c0 .553.448.976 1 .976s1-.473 1-1.025v-.943a1 1 0 0 0-1-1.001zM57.108 57.464a2.37 2.37 0 0 1-.6.357 1 1 0 0 0 .759 1.85 4.432 4.432 0 0 0 1.102-.654 1 1 0 1 0-1.261-1.553zM51.618 20.923a.991.991 0 0 0 1.09-.216l5.999-6a.999.999 0 1 0-1.414-1.414L53 17.586V15c0-7.168-5.832-13-13-13a1 1 0 1 0 0 2c6.065 0 11 4.935 11 11v2.586l-4.293-4.293a.999.999 0 1 0-1.414 1.414l5.999 6c.093.092.203.165.326.216z"/>'}}},"951e":function(a,t,e){"use strict";var s=e("a53a"),o=e.n(s);o.a},"991f":function(a,t,e){"use strict";var s=e("18be"),o=e.n(s);o.a},a00d:function(a,t,e){a.exports=e.p+"img/s3_img_5.11217e50.png"},a4bb:function(a,t,e){"use strict";var s=e("e5ad"),o=e.n(s);o.a},a53a:function(a,t,e){},b112:function(a,t,e){},cd8c:function(a,t,e){"use strict";var s=e("3b98"),o=e.n(s);o.a},d58c:function(a,t,e){"use strict";var s=e("b112"),o=e.n(s);o.a},e3f5:function(a,t,e){"use strict";var s=e("798c"),o=e.n(s);o.a},e5ad:function(a,t,e){},e724:function(a,t){a.exports="data:image/png;base64,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"},e918:function(a,t,e){},ea49:function(a,t,e){"use strict";var s=e("2c93"),o=e.n(s);o.a},f6d5:function(a,t,e){"use strict";var s=e("0706"),o=e.n(s);o.a}});
//# sourceMappingURL=app.605052d4.js.map