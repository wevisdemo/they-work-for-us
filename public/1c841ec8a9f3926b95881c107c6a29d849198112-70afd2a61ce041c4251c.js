(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3WF5":function(t,n,e){var r=e("eUgh"),a=e("ut/Y"),u=e("l9OW"),i=e("Z0cm");t.exports=function(t,n){return(i(t)?r:u)(t,a(n,3))}},"7Qib":function(t,n,e){"use strict";e.d(n,"c",(function(){return $})),e.d(n,"d",(function(){return b})),e.d(n,"e",(function(){return y})),e.d(n,"l",(function(){return S})),e.d(n,"j",(function(){return M})),e.d(n,"k",(function(){return k})),e.d(n,"i",(function(){return w})),e.d(n,"a",(function(){return D})),e.d(n,"h",(function(){return O})),e.d(n,"g",(function(){return x})),e.d(n,"f",(function(){return W})),e.d(n,"b",(function(){return Y}));var r=e("KQm4"),a=e("k4Da"),u=e.n(a),i=e("mwIZ"),o=e.n(i),s=e("J2m7"),c=e.n(s),f=e("wig9"),d=e.n(f),l=e("UfWW"),h=e.n(l),m=(e("3WF5"),e("Wgwc")),v=e.n(m);function g(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return p(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return p(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}function p(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function $(t){return v()(t).format("DD.MM.YYYY")}function b(t){return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}function y(t){var n,e=t.toString();switch(e.slice(-1)){case"1":n="st";break;case"2":n="nd";break;case"3":n="rd";break;default:n="th"}return e+"<sup>"+n+"</sup>"}function S(t,n){return t.name===n.name?t.lastname.localeCompare(n.lastname,"th"):t.name.localeCompare(n.name,"th")}function M(t){return t?"/people/"+t.replace(/ /g,"-"):""}function k(t){return t.name&&t.lastname?"https://elect.thematter.co/data/politicians/"+t.name+"-"+t.lastname.replace(/ /g,"-")+".jpg":""}function w(t){return"https://elect.in.th/candidates/statics/party-logos/"+t+".png"}function D(t){return v()().diff(v()(t),"year")}function O(t){return t?""+t.replace(/ /g,"-"):""}function _(t,n,e){return void 0===e&&(e={}),e=Object.assign({valueKey:"name"},e),d()(n.map((function(n,r){var a=c()(t||[],[e.valueKey,n.name]);return a?Object.assign({},a,{name:n.label||n.name,background:n.background}):null})))}function x(t){var n,e,a,u,i,s,c;if(o()(t,"education.group")&&(n=_(n=Object(r.a)(o()(t,"education.group")),[{name:"ต่ำกว่าปริญญาตรี",background:"var(--cl-theme-1)"},{name:"สถาบันทหาร",background:"var(--cl-theme-2)"},{name:"ปริญญาตรี",background:"var(--cl-theme-3)"},{name:"ปริญญาโท",background:"var(--cl-theme-4)"},{name:"ปริญญาเอก",background:"var(--cl-theme-5)"},{name:"ไม่พบข้อมูล",background:"var(--cl-theme-unknown)"}])),o()(t,"occupation_group.group")){e=Object(r.a)(o()(t,"occupation_group.group")),(a=e).map((function(t){return t.name||(t.name="ไม่พบข้อมูล"),t}));var f=(e=function(t,n){void 0===n&&(n=3);var e=h()(t,["name","ไม่พบข้อมูล"]),r=(e>=0?t.splice(e,1):[])[0];t.sort((function(t,n){return parseInt(n.value)-parseInt(t.value)}));var a=[],u=0;return t.map((function(t,e){return e>n-1?u+=t.value:a.push(t),t})),u>0&&a.push({value:u,name:"อื่นๆ"}),t=a,r&&t.push(r),t}(e=a)).filter((function(t){return!["อื่นๆ","ไม่พบข้อมูล"].includes(t.name)}));e=_(e,[].concat(Object(r.a)(f.slice(0,3).map((function(t,n){return{name:t.name,background:"var(--cl-theme-"+(2+n)+")"}}))),[{name:"อื่นๆ",background:"var(--cl-theme-5)"},{name:"ไม่พบข้อมูล",background:"var(--cl-theme-unknown)"}]))}return o()(t,"gender.group")&&(u=_(u=Object(r.a)(o()(t,"gender.group")),[{name:"ชาย",background:"var(--cl-theme-2)"},{name:"หญิง",background:"var(--cl-theme-5)"},{name:"ไม่พบข้อมูล",background:"var(--cl-theme-unknown)"}])),o()(t,"age.edges")&&(i=_(i=function(t,n){void 0===n&&(n=[39,55,74]);var e=[];e.push({name:String("25-"+String(n[0]-1))+" ปี",value:0}),e.push({name:String(n[0])+"-"+String(n[1]-1)+" ปี",value:0}),e.push({name:String(n[1])+"-"+String(n[2]-1)+" ปี",value:0}),e.push({name:String(n[2])+" ปีขึ้นไป",value:0});var r=v()().year();return t.map((function(t){var a=v()(t.node.birthdate).year(),u=r-a;return u<n[0]?e[0].value++:u<n[1]?e[1].value++:u<n[2]?e[2].value++:e[3].value++,t})),e}(i=Object(r.a)(o()(t,"age.edges"))),[{name:"25-38 ปี",background:"var(--cl-theme-2)"},{name:"39-54 ปี",background:"var(--cl-theme-3)"},{name:"55-73 ปี",background:"var(--cl-theme-4)"},{name:"74 ปีขึ้นไป",background:"var(--cl-theme-5)"},{name:"ไม่พบข้อมูล",background:"var(--cl-theme-unknown)"}])),o()(t,"asset.edges")&&(s=_(s=function(t,n){void 0===n&&(n=[10,100,1e3]);var e,a={name:"ไม่พบข้อมูล",value:0},u=-1,i=[].concat(Object(r.a)(n.map((function(t){return e=u+1,u=t,{name:e+"-"+t+" ล้านบาท",value:0,max:1e6*t}}))),[{name:n[n.length-1]+1+" ล้านบาทขึ้นไป",value:0,max:Number.POSITIVE_INFINITY}]);return t.forEach((function(t){var n=t.node;if("number"==typeof n.asset&&n.asset>=0)for(var e,r=g(i);!(e=r()).done;){var u=e.value;if(n.asset<=u.max){u.value++;break}}else a.value++})),[].concat(Object(r.a)(i),[a])}(s=Object(r.a)(o()(t,"asset.edges"))),[{name:"0-10 ล้านบาท",background:"var(--cl-theme-2)"},{name:"11-100 ล้านบาท",background:"var(--cl-theme-3)"},{name:"101-1000 ล้านบาท",background:"var(--cl-theme-4)"},{name:"1001 ล้านบาทขึ้นไป",background:"var(--cl-theme-5)"},{name:"ไม่พบข้อมูล",background:"var(--cl-theme-unknown)"}])),o()(t,"mp_type.group")&&(c=_(c=Object(r.a)(o()(t,"mp_type.group")),[{name:"บัญชีรายชื่อ",background:"var(--cl-theme-2)"},{name:"แบ่งเขต",background:"var(--cl-theme-5)"}])),{gender:u,asset:s,age:i,education:n,occupation_group:e,mp_type:c}}function j(t,n,e){return u()(t,(function(t){return o()(c()(t.votelog||[],(function(t){return t.key===n})),"value")===e}))}function W(t,n,e){var r=n.edges.map((function(t){return t.node})),a=t.edges.map((function(t){var n=t.node,e=c()(r,["id",n.id]);return Object.assign({},n,e)}));return e.edges.map((function(t){var n=t.node,e=j(a,n.id,"1").length,r=j(a,n.id,"2").length,u=j(a,n.id,"3").length,i=j(a,n.id,"4").length,o={approve:e,disprove:r,abstained:u,absent:i,total_voter:e+r+u+i};return Object.assign({},n,o)}))}function Y(t){var n=t.approve,e=t.disprove,r=t.abstained,a=t.absent,u=n+e+r+a;return{passed:t.passed,total_voter:u,approve:n,disprove:e,abstained:r,absent:a}}},J2m7:function(t,n,e){var r=e("XKAG")(e("UfWW"));t.exports=r},KwMD:function(t,n){t.exports=function(t,n,e,r){for(var a=t.length,u=e+(r?1:-1);r?u--:++u<a;)if(n(t[u],u,t))return u;return-1}},Sxd8:function(t,n,e){var r=e("ZCgT");t.exports=function(t){var n=r(t),e=n%1;return n==n?e?n-e:n:0}},UfWW:function(t,n,e){var r=e("KwMD"),a=e("ut/Y"),u=e("Sxd8"),i=Math.max;t.exports=function(t,n,e){var o=null==t?0:t.length;if(!o)return-1;var s=null==e?0:u(e);return s<0&&(s=i(o+s,0)),r(t,a(n,3),s)}},Wgwc:function(t,n,e){t.exports=function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",a="day",u="week",i="month",o="quarter",s="year",c="date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},m={s:h,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),a=e%60;return(n<=0?"+":"-")+h(r,2,"0")+":"+h(a,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),a=n.clone().add(r,i),u=e-a<0,o=n.clone().add(r+(u?-1:1),i);return+(-(r+(e-a)/(u?a-o:o-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(f){return{M:i,y:s,w:u,d:a,D:c,h:r,m:e,s:n,ms:t,Q:o}[f]||String(f||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",g={};g[v]=l;var p=function(t){return t instanceof S},$=function(t,n,e){var r;if(!t)return v;if("string"==typeof t)g[t]&&(r=t),n&&(g[t]=n,r=t);else{var a=t.name;g[a]=t,r=a}return!e&&r&&(v=r),r||!e&&v},b=function(t,n){if(p(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new S(e)},y=m;y.l=$,y.i=p,y.w=function(t,n){return b(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var S=function(){function l(t){this.$L=$(t.locale,null,!0),this.parse(t)}var h=l.prototype;return h.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(y.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(f);if(r){var a=r[2]-1||0,u=(r[7]||"0").substring(0,3);return e?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,u)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,u)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,n){var e=b(t);return this.startOf(n)<=e&&e<=this.endOf(n)},h.isAfter=function(t,n){return b(t)<this.startOf(n)},h.isBefore=function(t,n){return this.endOf(n)<b(t)},h.$g=function(t,n,e){return y.u(t)?this[n]:this.set(e,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,o){var f=this,d=!!y.u(o)||o,l=y.p(t),h=function(t,n){var e=y.w(f.$u?Date.UTC(f.$y,n,t):new Date(f.$y,n,t),f);return d?e:e.endOf(a)},m=function(t,n){return y.w(f.toDate()[t].apply(f.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(n)),f)},v=this.$W,g=this.$M,p=this.$D,$="set"+(this.$u?"UTC":"");switch(l){case s:return d?h(1,0):h(31,11);case i:return d?h(1,g):h(0,g+1);case u:var b=this.$locale().weekStart||0,S=(v<b?v+7:v)-b;return h(d?p-S:p+(6-S),g);case a:case c:return m($+"Hours",0);case r:return m($+"Minutes",1);case e:return m($+"Seconds",2);case n:return m($+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(u,o){var f,d=y.p(u),l="set"+(this.$u?"UTC":""),h=(f={},f[a]=l+"Date",f[c]=l+"Date",f[i]=l+"Month",f[s]=l+"FullYear",f[r]=l+"Hours",f[e]=l+"Minutes",f[n]=l+"Seconds",f[t]=l+"Milliseconds",f)[d],m=d===a?this.$D+(o-this.$W):o;if(d===i||d===s){var v=this.clone().set(c,1);v.$d[h](m),v.init(),this.$d=v.set(c,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},h.set=function(t,n){return this.clone().$set(t,n)},h.get=function(t){return this[y.p(t)]()},h.add=function(t,o){var c,f=this;t=Number(t);var d=y.p(o),l=function(n){var e=b(f);return y.w(e.date(e.date()+Math.round(n*t)),f)};if(d===i)return this.set(i,this.$M+t);if(d===s)return this.set(s,this.$y+t);if(d===a)return l(1);if(d===u)return l(7);var h=(c={},c[e]=6e4,c[r]=36e5,c[n]=1e3,c)[d]||1,m=this.$d.getTime()+t*h;return y.w(m,this)},h.subtract=function(t,n){return this.add(-1*t,n)},h.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=y.z(this),a=this.$locale(),u=this.$H,i=this.$m,o=this.$M,s=a.weekdays,c=a.months,f=function(t,r,a,u){return t&&(t[r]||t(n,e))||a[r].substr(0,u)},l=function(t){return y.s(u%12||12,t,"0")},h=a.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:f(a.monthsShort,o,c,3),MMMM:f(c,o),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:f(a.weekdaysMin,this.$W,s,2),ddd:f(a.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(u),HH:y.s(u,2,"0"),h:l(1),hh:l(2),a:h(u,i,!0),A:h(u,i,!1),m:String(i),mm:y.s(i,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:r};return e.replace(d,(function(t,n){return n||m[t]||r.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,c,f){var d,l=y.p(c),h=b(t),m=6e4*(h.utcOffset()-this.utcOffset()),v=this-h,g=y.m(this,h);return g=(d={},d[s]=g/12,d[i]=g,d[o]=g/3,d[u]=(v-m)/6048e5,d[a]=(v-m)/864e5,d[r]=v/36e5,d[e]=v/6e4,d[n]=v/1e3,d)[l]||v,f?g:y.a(g)},h.daysInMonth=function(){return this.endOf(i).$D},h.$locale=function(){return g[this.$L]},h.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=$(t,n,!0);return r&&(e.$L=r),e},h.clone=function(){return y.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},l}(),M=S.prototype;return b.prototype=M,[["$ms",t],["$s",n],["$m",e],["$H",r],["$W",a],["$M",i],["$y",s],["$D",c]].forEach((function(t){M[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),b.extend=function(t,n){return t.$i||(t(n,S,b),t.$i=!0),b},b.locale=$,b.isDayjs=p,b.unix=function(t){return b(1e3*t)},b.en=g[v],b.Ls=g,b.p={},b}()},XKAG:function(t,n,e){var r=e("ut/Y"),a=e("MMmD"),u=e("7GkX");t.exports=function(t){return function(n,e,i){var o=Object(n);if(!a(n)){var s=r(e,3);n=u(n),e=function(t){return s(o[t],t,o)}}var c=t(n,e,i);return c>-1?o[s?n[c]:c]:void 0}}},ZCgT:function(t,n,e){var r=e("tLB3");t.exports=function(t){return t?(t=r(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},k4Da:function(t,n,e){var r=e("LXxW"),a=e("n3Sm"),u=e("ut/Y"),i=e("Z0cm");t.exports=function(t,n){return(i(t)?r:a)(t,u(n,3))}},l9OW:function(t,n,e){var r=e("SKAX"),a=e("MMmD");t.exports=function(t,n){var e=-1,u=a(t)?Array(t.length):[];return r(t,(function(t,r,a){u[++e]=n(t,r,a)})),u}},n3Sm:function(t,n,e){var r=e("SKAX");t.exports=function(t,n){var e=[];return r(t,(function(t,r,a){n(t,r,a)&&e.push(t)})),e}},wig9:function(t,n){t.exports=function(t){for(var n=-1,e=null==t?0:t.length,r=0,a=[];++n<e;){var u=t[n];u&&(a[r++]=u)}return a}}}]);
//# sourceMappingURL=1c841ec8a9f3926b95881c107c6a29d849198112-70afd2a61ce041c4251c.js.map