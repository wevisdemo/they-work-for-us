(self.webpackChunkpolitician_directory=self.webpackChunkpolitician_directory||[]).push([[507],{8358:function(e,n,t){"use strict";t.d(n,{M:function(){return o},l:function(){return u.Z}});t(7294);var r=t(4165),a=t(4382),o=function(e){var n=[e.established_date,e.dissolved_date];return n[0]&&(n[0]=(0,r.p6)(n[0])),n[1]?n[1]=(0,r.p6)(n[1]):n[1]="Now",(0,a.tZ)("p",null,n[0]," - ",n[1])},u=t(7371)},7371:function(e,n,t){"use strict";var r=t(4382),a=t(8029),o=t.n(a),u=t(9693),i=t.n(u),c=(t(7294),t(6116)),l={fontSize:"1.7rem",fontFamily:"var(--ff-title)",fontWeight:"bold",textDecoration:"none",border:"1px solid var(--cl-black)",marginRight:"1rem",padding:"0 1rem",color:"var(--cl-black)","&:hover":{textDecoration:"none"}};n.Z=function(e){var n=i()(["website","facebook","twitter"].map((function(n){var t=e[n];return t?(0,r.tZ)(c.Z,{key:n,href:t,css:(0,r.iv)(Object.assign({},l),"","")},o()(n)):null})));return(0,r.tZ)("div",{className:"official-website"},n.length>0?n:"ไม่มีข้อมูล")}},5462:function(e,n,t){"use strict";t(7294);var r=t(4382);var a={display:"flex",marginBottom:"0rem",minHeight:"2.4rem",lineHeight:"2.4rem"},o={fontSize:"1.6rem",whiteSpace:"nowrap",overflow:"hidden",fontFamily:"var(--ff-title)"},u={display:"flex",border:"1.5px solid var(--cl-black)",minHeight:"30px",lineHeight:"30px",position:"relative"},i={borderRight:"1px solid var(--cl-black)",fontSize:"1rem",whiteSpace:"nowrap",overflow:"hidden","&:last-child":{borderRightWidth:0},"&:hover .tooltip-text":{display:"block",zIndex:10}},c={display:"none",fontSize:"1.2rem",lineHeight:"1.8rem",top:"32px",position:"absolute",border:"1px solid black",backgroundColor:"white",padding:"0.5rem"},l={name:"35tz8q",styles:"float:left;height:100%;width:1px"},m={name:"yiy6tn",styles:"float:left;font-family:var(--ff-text);font-size:1.2rem;font-weight:bold"},s={name:"35tz8q",styles:"float:left;height:100%;width:1px"},d={name:"pm9d1r",styles:"float:left;margin-left:0.25rem"};n.Z=function(e){var n=e.data,t=n.map((function(e){return e.value})).reduce((function(e,n){return e+n}),0),f=function(e){var n=e/t*100;return Math.floor(n)===n?Math.floor(n)+"%":n.toFixed(2)+"%"};return(0,r.tZ)("div",null,(0,r.tZ)("div",{css:a},n.map((function(e){return(0,r.tZ)("div",{key:e.name,css:o,style:{width:f(e.value)}},(0,r.tZ)("span",{css:l}),(0,r.tZ)("span",{css:m},e.name))}))),(0,r.tZ)("div",{css:u},n.map((function(e){return(0,r.tZ)("div",{key:e.name,className:"tooltip",css:i,style:{backgroundColor:e.background,width:f(e.value)}},(0,r.tZ)("span",{css:s}),(0,r.tZ)("span",{css:d,style:{color:(n=e.background,t=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,n,t,r){return"#"+n+n+t+t+r+r})).substring(1).match(/.{2}/g).map((function(e){return parseInt(e,16)})),1-(.299*t[0]+.587*t[1]+.114*t[2])/255<.5?"var(--cl-black)":"var(--cl-white)")}},f(e.value)),(0,r.tZ)("div",{className:"tooltip-text",css:c},(0,r.tZ)("div",null,e.name),(0,r.tZ)("div",null,f(e.value))));var n,t}))))}},4165:function(e,n,t){"use strict";t.d(n,{p6:function(){return b},uf:function(){return k},od:function(){return y},ht:function(){return w},PI:function(){return Z},QM:function(){return x},o8:function(){return S},Q7:function(){return _},de:function(){return z}});var r=t(7329),a=t(3105),o=t.n(a),u=t(7361),i=t.n(u),c=t(3311),l=t.n(c),m=t(9693),s=t.n(m),d=t(998),f=t.n(d),v=(t(5161),t(2580)),p=t.n(v);function g(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function b(e){return p()(e).format("DD.MM.YYYY")}function k(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}function y(e){var n,t=e.toString();switch(t.slice(-1)){case"1":n="st";break;case"2":n="nd";break;case"3":n="rd";break;default:n="th"}return t+"<sup>"+n+"</sup>"}function w(e,n){return e.name===n.name?e.lastname.localeCompare(n.lastname,"th"):e.name.localeCompare(n.name,"th")}function Z(e){return e?"/people/"+e.replace(/ /g,"-"):""}function x(e){return p()().diff(p()(e),"year")}function S(e){return e?""+e.replace(/ /g,"-"):""}function I(e,n,t){return void 0===t&&(t={}),t=Object.assign({valueKey:"name"},t),s()(n.map((function(n,r){var a=l()(e||[],[t.valueKey,n.name]);return a?Object.assign({},a,{name:n.label||n.name,background:n.background}):null})))}function _(e){var n,t,a,o,u,c,l;if(i()(e,"education.group")&&(n=I(n=(0,r.Z)(i()(e,"education.group")),[{name:"ต่ำกว่าปริญญาตรี",background:"var(--cl-theme-1)"},{name:"สถาบันทหาร",background:"var(--cl-theme-2)"},{name:"ปริญญาตรี",background:"var(--cl-theme-3)"},{name:"ปริญญาโท",background:"var(--cl-theme-4)"},{name:"ปริญญาเอก",background:"var(--cl-theme-5)"},{name:"ไม่พบข้อมูล",background:"var(--cl-theme-unknown)"}])),i()(e,"occupation_group.group")){t=(0,r.Z)(i()(e,"occupation_group.group")),(a=t).map((function(e){return e.name||(e.name="ไม่พบข้อมูล"),e}));var m=(t=function(e,n){void 0===n&&(n=3);var t=f()(e,["name","ไม่พบข้อมูล"]),r=(t>=0?e.splice(t,1):[])[0];e.sort((function(e,n){return parseInt(n.value)-parseInt(e.value)}));var a=[],o=0;return e.map((function(e,t){return t>n-1?o+=e.value:a.push(e),e})),o>0&&a.push({value:o,name:"อื่นๆ"}),e=a,r&&e.push(r),e}(t=a)).filter((function(e){return!["อื่นๆ","ไม่พบข้อมูล"].includes(e.name)}));t=I(t,[].concat((0,r.Z)(m.slice(0,3).map((function(e,n){return{name:e.name,background:"var(--cl-theme-"+(2+n)+")"}}))),[{name:"อื่นๆ",background:"var(--cl-theme-5)"},{name:"ไม่พบข้อมูล",background:"var(--cl-theme-unknown)"}]))}return i()(e,"gender.group")&&(o=I(o=(0,r.Z)(i()(e,"gender.group")),[{name:"ชาย",background:"var(--cl-theme-2)"},{name:"หญิง",background:"var(--cl-theme-5)"},{name:"ไม่พบข้อมูล",background:"var(--cl-theme-unknown)"}])),i()(e,"age.edges")&&(u=I(u=function(e,n){void 0===n&&(n=[39,55,74]);var t=[];t.push({name:String("25-"+String(n[0]-1))+" ปี",value:0}),t.push({name:String(n[0])+"-"+String(n[1]-1)+" ปี",value:0}),t.push({name:String(n[1])+"-"+String(n[2]-1)+" ปี",value:0}),t.push({name:String(n[2])+" ปีขึ้นไป",value:0});var r=p()().year();return e.map((function(e){var a=p()(e.node.birthdate).year(),o=r-a;return o<n[0]?t[0].value++:o<n[1]?t[1].value++:o<n[2]?t[2].value++:t[3].value++,e})),t}(u=(0,r.Z)(i()(e,"age.edges"))),[{name:"25-38 ปี",background:"var(--cl-theme-2)"},{name:"39-54 ปี",background:"var(--cl-theme-3)"},{name:"55-73 ปี",background:"var(--cl-theme-4)"},{name:"74 ปีขึ้นไป",background:"var(--cl-theme-5)"},{name:"ไม่พบข้อมูล",background:"var(--cl-theme-unknown)"}])),i()(e,"asset.edges")&&(c=I(c=function(e,n){void 0===n&&(n=[10,100,1e3]);var t,a={name:"ไม่พบข้อมูล",value:0},o=-1,u=[].concat((0,r.Z)(n.map((function(e){return t=o+1,o=e,{name:t+"-"+e+" ล้านบาท",value:0,max:1e6*e}}))),[{name:n[n.length-1]+1+" ล้านบาทขึ้นไป",value:0,max:Number.POSITIVE_INFINITY}]);return e.forEach((function(e){var n=e.node;if("number"==typeof n.asset&&n.asset>=0)for(var t,r=g(u);!(t=r()).done;){var o=t.value;if(n.asset<=o.max){o.value++;break}}else a.value++})),[].concat((0,r.Z)(u),[a])}(c=(0,r.Z)(i()(e,"asset.edges"))),[{name:"0-10 ล้านบาท",background:"var(--cl-theme-2)"},{name:"11-100 ล้านบาท",background:"var(--cl-theme-3)"},{name:"101-1000 ล้านบาท",background:"var(--cl-theme-4)"},{name:"1001 ล้านบาทขึ้นไป",background:"var(--cl-theme-5)"},{name:"ไม่พบข้อมูล",background:"var(--cl-theme-unknown)"}])),i()(e,"mp_type.group")&&(l=I(l=(0,r.Z)(i()(e,"mp_type.group")),[{name:"บัญชีรายชื่อ",background:"var(--cl-theme-2)"},{name:"แบ่งเขต",background:"var(--cl-theme-5)"}])),{gender:o,asset:c,age:u,education:n,occupation_group:t,mp_type:l}}function j(e,n,t){return o()(e,(function(e){return i()(l()(e.votelog||[],(function(e){return e.key===n})),"value")===t}))}function z(e,n,t,r){void 0===r&&(r=6);var a=n.edges.map((function(e){return e.node})),o=e.edges.map((function(e){var n=e.node,t=l()(a,["id",n.id]);return Object.assign({},n,t)}));return t.edges.map((function(e){var n=e.node,t=j(o,n.id,"1").length,r=j(o,n.id,"2").length,a=j(o,n.id,"3").length,u=j(o,n.id,"4").length,i={approve:t,disprove:r,abstained:a,absent:u,total_voter:t+r+a+u};return Object.assign({},n,i)})).filter((function(e){return e.total_voter>0})).slice(0,r)}},9693:function(e){e.exports=function(e){for(var n=-1,t=null==e?0:e.length,r=0,a=[];++n<t;){var o=e[n];o&&(a[r++]=o)}return a}}}]);
//# sourceMappingURL=835101f4d796ad34d120bc9a9f1d2c86364e33e6-19d7609c03d704385e58.js.map