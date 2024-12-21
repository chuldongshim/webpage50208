"use strict";(self.webpackChunkwebpage_re=self.webpackChunkwebpage_re||[]).push([[8422],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>d});var a=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function n(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):n(n({},t),e)),l},m=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=o(l),d=r,k=c["".concat(u,".").concat(d)]||c[d]||s[d]||i;return l?a.createElement(k,n(n({ref:t},m),{},{components:l})):a.createElement(k,n({ref:t},m))}));function d(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=l.length,n=new Array(i);n[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,n[1]=p;for(var o=2;o<i;o++)n[o]=l[o];return a.createElement.apply(null,n)}return a.createElement.apply(null,l)}c.displayName="MDXCreateElement"},834:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=l(7462),r=(l(7294),l(3905));const i={id:"esp32_sys",title:"\uc2dc\uc2a4\ud15c"},n=void 0,p={unversionedId:"sideprj/hybrid/esp32_sys",id:"sideprj/hybrid/esp32_sys",title:"\uc2dc\uc2a4\ud15c",description:"---",source:"@site/docs/3_sideprj/4_hybrid/b_esp32_sys.md",sourceDirName:"3_sideprj/4_hybrid",slug:"/sideprj/hybrid/esp32_sys",permalink:"/webpage41221/docs/sideprj/hybrid/esp32_sys",draft:!1,editUrl:"https://github.com/chuldongshim/webpage41221/docs/3_sideprj/4_hybrid/b_esp32_sys.md",tags:[],version:"current",frontMatter:{id:"esp32_sys",title:"\uc2dc\uc2a4\ud15c"}},u={},o=[{value:"\uc2dc\uc2a4\ud15c",id:"\uc2dc\uc2a4\ud15c",level:2},{value:"\uc694\uad6c\uc0ac\ud56d",id:"\uc694\uad6c\uc0ac\ud56d",level:3},{value:"\uae30\ub2a5 \uc694\uad6c\uc0ac\ud56d",id:"\uae30\ub2a5-\uc694\uad6c\uc0ac\ud56d",level:3},{value:"\uc544\ud0a4\ud14d\ucc98",id:"\uc544\ud0a4\ud14d\ucc98",level:3},{value:"\uac1c\ubc1c\ucee8\uc149",id:"\uac1c\ubc1c\ucee8\uc149",level:4},{value:"\uc544\ud0a4\ud14d\ucc98",id:"\uc544\ud0a4\ud14d\ucc98-1",level:4},{value:"\ucc38\uace0\uc790\ub8cc",id:"\ucc38\uace0\uc790\ub8cc",level:4},{value:"F1 \ubb34\uc120\ud1b5\uc2e0 \uae30\ub2a5",id:"f1-wireless-comm",level:3},{value:"\uad00\ub828 \uc694\uad6c\uc0ac\ud56d",id:"\uad00\ub828-\uc694\uad6c\uc0ac\ud56d",level:4},{value:"\ucc38\uace0\uc790\ub8cc",id:"\ucc38\uace0\uc790\ub8cc-1",level:4},{value:"F2 \ubb34\uc120\uc5c5\ub370\uc774\ud2b8 \uae30\ub2a5",id:"f2-wireless-update",level:3},{value:"\uad00\ub828 \uc694\uad6c\uc0ac\ud56d",id:"\uad00\ub828-\uc694\uad6c\uc0ac\ud56d-1",level:4},{value:"\ucc38\uace0\uc790\ub8cc",id:"\ucc38\uace0\uc790\ub8cc-2",level:4},{value:"F3 \ubaa8\ub2c8\ud130\ub9c1 \uae30\ub2a5",id:"f3-monitoring",level:3},{value:"\uad00\ub828 \uc694\uad6c\uc0ac\ud56d",id:"\uad00\ub828-\uc694\uad6c\uc0ac\ud56d-2",level:4}],m={toc:o};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\uc2dc\uc2a4\ud15c"},"\uc2dc\uc2a4\ud15c"),(0,r.kt)("h3",{id:"\uc694\uad6c\uc0ac\ud56d"},"\uc694\uad6c\uc0ac\ud56d"),(0,r.kt)("h3",{id:"\uae30\ub2a5-\uc694\uad6c\uc0ac\ud56d"},"\uae30\ub2a5 \uc694\uad6c\uc0ac\ud56d"),(0,r.kt)("p",null,"\uc120\ud589\uc774\ubbc0\ub85c \ube44\uae30\ub2a5/\uc778\ud130\ud398\uc774\uc2a4 \uc694\uad6c\uc0ac\ud56d\uc740 \uace0\ub824\ud558\uc9c0 \uc54a\uace0, \uae30\ub2a5 \uc694\uad6c\uc0ac\ud56d\ub9cc\uc744 \uace0\ub824\ud55c\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#f1-wireless-comm"},"F1 \ubb34\uc120\ud1b5\uc2e0 \uae30\ub2a5"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F1_Req1")," \uadfc\uac70\ub9ac(\ube14\ub8e8\ud22c\uc2a4) \uc81c\uc5b4\ub97c \uc81c\uacf5\ud574\uc57c \ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F1_Req2")," \uc6d0\uac70\ub9ac(\uc640\uc774\ud30c\uc774) \uc81c\uc5b4\ub97c \uc81c\uacf5\ud574\uc57c \ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F1_Req3")," CAN_to_Wifi\ub97c \uc81c\uacf5\ud558\uc5ec CAN\ud1b5\uc2e0\ub9cc \uc874\uc7ac\ud558\ub294 \uc7a5\ube44\uc640 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud574\uc57c \ud55c\ub2e4.",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("a",{parentName:"li",href:"https://upcommons.upc.edu/bitstream/handle/2117/118541/report-tfm-eduard-valentino.pdf"},"(Development of a CAN-Wifi converter based on a ESP32.pdf)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#f2-wireless-update"},"F2 \ubb34\uc120\uc5c5\ub370\uc774\ud2b8\uae30\ub2a5"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F2_Req1")," \uc81c\uc5b4\uae30 \ud38c\uc6e8\uc5b4\ub97c \ubb34\uc120\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8 \ud574\uc57c \ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F2_Req2")," \ud1b5\uc2e0\ubd88\uac00 \uc0c1\ud669\uc744 \uace0\ub824\ud558\uc5ec \uc5c5\ub370\uc774\ud2b8\uac00 \uc9c4\ud589\ub418\uc5b4\uc57c \ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F2_Req3")," \ud5c8\uac00\ub41c \uc0ac\uc6a9\uc790\ub9cc \uc5c5\ub370\uc774\ud2b8\ub97c \uc218\ud589\ud560 \uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#f3-monitoring"},"F3 \ubaa8\ub2c8\ud130\ub9c1\uae30\ub2a5"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F3_Req1")," \ud38c\uc6e8\uc5b4 \uc5c5\ub370\uc774\ud2b8, Signal Monitoring\uc744 \uc704\ud55c \uc6f9GUI\ub97c \uc81c\uacf5\ud574\uc57c \ud55c\ub2e4.")))),(0,r.kt)("h3",{id:"\uc544\ud0a4\ud14d\ucc98"},"\uc544\ud0a4\ud14d\ucc98"),(0,r.kt)("h4",{id:"\uac1c\ubc1c\ucee8\uc149"},"\uac1c\ubc1c\ucee8\uc149"),(0,r.kt)("p",null,"\ubcf8 \ud504\ub85c\uc81d\ud2b8\ub294 \uc55e\uc73c\ub85c \uc9c4\ud589 \ub420 \ubaa8\ub4e0 IOT \uc81c\ud488\uc5d0 \ub3d9\uc77c\ud558\uac8c \uc801\uc6a9\ud560 \uc218 \uc788\ub294 \ud45c\uc900 \ud50c\ub7ab\ud3fc\uc744 \uac1c\ubc1c\ud558\ub294\ub370 \ubaa9\uc801\uc774 \uc788\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IOT \uad00\ub828 \uc81c\ud488(not applicable for automotive)\uc744 \uac1c\ubc1c\ud560 \uacbd\uc6b0 C++ & MBed OS\ub97c \ud45c\uc900\ud50c\ub7ab\ud514\uc73c\ub85c \ud558\uc5ec \uac1c\ubc1c\uc744 \uc9c4\ud589\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Rhapsody\uc5d0\uc11c Class Diagram\uc744 \ud1b5\ud574 \uc544\ud0a4\ud14d\ucc98\ub97c \uc124\uacc4\ud558\uace0, C++\uae30\ubc18\uc73c\ub85c Code Skeleton\uc744 \uc0dd\uc131\ud558\uc5ec MBD OS\uc640 Merge \ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud734\ub300\ud734\uc571\uacfc \ube14\ub8e8\ud22c\uc2a4 \uc5f0\uacb0\uc744 \ud1b5\ud574 \uc6d0\uaca9 \uc2a4\uc704\uce58 \uc785\ub825 \uc5ed\ud560 \uc218\ud589 -> \ud0dc\ube14\ub9bf\uc73c\ub85c \ud654\uba74 \ud06c\uac8c \uc801\uc6a9"),(0,r.kt)("li",{parentName:"ul"},"\ud734\ub300\ud3f0\uc744 \ud1b5\ud574 OTA \uae30\ub2a5 \uad6c\ud604"),(0,r.kt)("li",{parentName:"ul"},"\ud734\ub31c\ud3f0 \uc5c6\uc774 LCD\ub97c \ud1b5\ud574 \uc9c1\uc811 \uc2a4\uc704\uce58 \uc5ed\ud560\ub3c4 \uc218\ud589")),(0,r.kt)("h4",{id:"\uc544\ud0a4\ud14d\ucc98-1"},"\uc544\ud0a4\ud14d\ucc98"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Physical Architecture",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud558\ub4dc\uc6e8\uc5b4 \uc758\uc874\uc801\uc778 \ubd80\ubd84\uc778 PWS \ubc0f MCU Peripherals \uc601\uc5ed\uc744 Physical\ub85c \ubd84\ub958\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4c8\ub85c \uc5b8\uae09\ub418\ub294 \uc2dc\uc2a4\ud15c \uad6c\uc131\uc694\uc18c\ub294 \ud558\ub4dc\uc6e8\uc5b4 \uc790\uccb4\ub97c \uc758\ubbf8\ud55c\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"Logical Architecture",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub85c\uc9c1\uc73c\ub85c \uc5b8\uae09\ub418\ub294 \uc2dc\uc2a4\ud15c \uad6c\uc131\uc694\uc18c\ub294 \ubaa8\ub378\uc744 \ud1b5\ud55c \uc2dc\ubbac\ub808\uc774\uc158\uc744 \uc774\uc6a9\ud558\uc5ec \ud558\ub4dc\uc6e8\uc5b4 \ub3c5\ub9bd\uc801\uc73c\ub85c \uac1c\ubc1c\uc774 \uac00\ub2a5\ud568\uc744 \uc758\ubbf8\ud55c\ub2e4.")))),(0,r.kt)("h4",{id:"\ucc38\uace0\uc790\ub8cc"},"\ucc38\uace0\uc790\ub8cc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://chocoball.tistory.com/entry/Hardware-ESP32-Dual-core?category=729036"},"ESP32\uc758 Dual core \ud655\uc778\ud574 \ubcf4\uae30"))),(0,r.kt)("h3",{id:"f1-wireless-comm"},"[F1 \ubb34\uc120\ud1b5\uc2e0 \uae30\ub2a5]"),(0,r.kt)("h4",{id:"\uad00\ub828-\uc694\uad6c\uc0ac\ud56d"},"\uad00\ub828 \uc694\uad6c\uc0ac\ud56d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F1_Req1")," \uadfc\uac70\ub9ac(\ube14\ub8e8\ud22c\uc2a4) \uc81c\uc5b4\ub97c \uc81c\uacf5\ud574\uc57c \ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"F1_Req2")," \uc6d0\uac70\ub9ac(\uc640\uc774\ud30c\uc774) \uc81c\uc5b4\ub97c \uc81c\uacf5\ud574\uc57c \ud55c\ub2e4.")),(0,r.kt)("h4",{id:"\ucc38\uace0\uc790\ub8cc-1"},"\ucc38\uace0\uc790\ub8cc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ESP32 \uc628\ub77c\uc778 \uc6cc\ud06c\uc20d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gcamp-hub/ESP32_Middle_Class"},"GitHub \uc18c\uc2a4")),(0,r.kt)("li",{parentName:"ul"},"1\uc77c\ucc28",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gcamp-hub/ESP32_Middle_Class/blob/master/ESP32_%EC%A4%91%EA%B8%89%EA%B3%BC%EC%A0%951.pdf"},"ESP32 Peripherals \uacfc\uc815 \ub9ac\ubdf0 \ubc0f Network \uacfc\uc815 \uc18c\uac1c - \uc790\ub8cc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.g.camp/1662"},"\uc628\ub77c\uc778 \ub3d9\uc601\uc0c1 \uad50\uc721")))),(0,r.kt)("li",{parentName:"ul"},"2\uc77c\ucc28",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gcamp-hub/ESP32_Middle_Class/blob/master/ESP32_%EC%A4%91%EA%B8%89%EA%B3%BC%EC%A0%952.pdf"},"lwip+wifi \ub9ac\ubdf0 - \uc790\ub8cc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.g.camp/1663?category=816908"},"\uc628\ub77c\uc778 \ub3d9\uc601\uc0c1 \uad50\uc721")))),(0,r.kt)("li",{parentName:"ul"},"3\uc77c\ucc28",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gcamp-hub/ESP32_Middle_Class/blob/master/ESP32_%EC%A4%91%EA%B8%89%EA%B3%BC%EC%A0%953.pdf"},"BLE+WIFI \ud1b5\ud569 - \uc790\ub8cc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.g.camp/1664?category=816908"},"\uc628\ub77c\uc778 \ub3d9\uc601\uc0c1 \uad50\uc721"))))))),(0,r.kt)("h3",{id:"f2-wireless-update"},"[F2 \ubb34\uc120\uc5c5\ub370\uc774\ud2b8 \uae30\ub2a5]"),(0,r.kt)("h4",{id:"\uad00\ub828-\uc694\uad6c\uc0ac\ud56d-1"},"\uad00\ub828 \uc694\uad6c\uc0ac\ud56d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[FID_02]"," \uc81c\uc5b4\uae30 \ud38c\uc6e8\uc5b4\ub97c \ubb34\uc120\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8 \ud574\uc57c \ud55c\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud1b5\uc2e0\ubd88\uac00 \uc0c1\ud669\uc744 \uace0\ub824\ud558\uc5ec \uc5c5\ub370\uc774\ud2b8\uac00 \uc9c4\ud589\ub418\uc5b4\uc57c \ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud5c8\uac00\ub41c \uc0ac\uc6a9\uc790\ub9cc \uc5c5\ub370\uc774\ud2b8\ub97c \uc218\ud589\ud560 \uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4.")))),(0,r.kt)("h4",{id:"\ucc38\uace0\uc790\ub8cc-2"},"\ucc38\uace0\uc790\ub8cc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.espressif.com/projects/esp-idf/en/stable/security/secure-boot-v1.html"},"Secure Boot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.espressif.com/projects/esp-idf/en/stable/security/flash-encryption.html"},"Flash encryption"))),(0,r.kt)("h3",{id:"f3-monitoring"},"[F3 \ubaa8\ub2c8\ud130\ub9c1 \uae30\ub2a5]"),(0,r.kt)("h4",{id:"\uad00\ub828-\uc694\uad6c\uc0ac\ud56d-2"},"\uad00\ub828 \uc694\uad6c\uc0ac\ud56d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[FID_03]"," \ud38c\uc6e8\uc5b4 \uc5c5\ub370\uc774\ud2b8, Signal Monitoring\uc744 \uc704\ud55c \uc6f9GUI\ub97c \uc81c\uacf5\ud574\uc57c \ud55c\ub2e4.")))}s.isMDXComponent=!0}}]);