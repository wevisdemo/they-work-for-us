"use strict";(self.webpackChunkthey_work_for_us=self.webpackChunkthey_work_for_us||[]).push([[374],{5431:function(e,t,a){a.r(t);var s=a(7462),n=a(917),l=a(9693),i=a.n(l),o=a(7294),r=a(4120),m=a(9357),c=a(8439),p=a(914),d=a(5626),u=a(3741),Z=a(5394),v=a(403),f=a(3644),g=a.n(f),y=a(9692);const h={fontSize:"4rem"},b={paddingTop:"3rem",paddingBottom:"8rem",h2:{fontSize:"4.8rem",textAlign:"center"}},_={fontSize:"2.4rem",textAlign:"left",margin:"1.5rem 0 1.2rem 0"},k={},x={margin:"1rem 0"},z={position:"sticky",top:0,zIndex:10,padding:"unset"},C={color:"var(--cl-black)",width:"50%",display:"flex",justifyContent:"center",alignItems:"center",padding:"1.5rem 0",cursor:"pointer","span.anticon":{"&.rotate-180":{transform:"rotate(180deg)",transition:"0.15s ease"}}},w={fontWeight:"bold",fontSize:"2rem",marginLeft:"1rem"};var N={name:"1d3w5wq",styles:"width:100%"},S={name:"1eoy87d",styles:"display:flex;justify-content:space-between"},E={name:"a07gmx",styles:"font-size:2rem"},P={name:"1n5jvhm",styles:"width:2rem;height:2rem"},j={name:"a07gmx",styles:"font-size:2rem"},T={name:"1n5jvhm",styles:"width:2rem;height:2rem"},Y={name:"1nux3r9",styles:"font-size:4.8rem;text-align:center;padding-top:6rem"},I={name:"mhzmkl",styles:"display:block;list-style:none;text-align:center;margin-bottom:2.4rem;> button{display:inline-block;font-size:2.4rem;padding:1rem 0 0;margin:0 1rem;cursor:pointer;background:transparent;border:none;line-height:1.5;&.active{border-bottom:8px solid var(--cl-black);}}"},L={name:"1xbzohv",styles:"font-family:var(--ff-title);font-size:3.2rem;text-align:center;margin:6rem 0"};t.default=e=>{const{party:t,...a}=e.data,l=a.allPeopleYaml.edges.map((e=>e.node)).filter((e=>{let{is_mp:t}=e;return t})),{0:f,1:A}=(0,o.useState)({}),{0:H,1:M}=(0,o.useState)({}),{0:R,1:B}=(0,o.useState)({}),{0:O,1:V}=(0,o.useState)({}),{0:W,1:q}=(0,o.useState)({}),F=(0,o.useRef)(null),K=(0,o.useRef)(null),Q=(0,o.useRef)(null);(0,o.useEffect)((()=>{var e,t,a,s,n;const l=(null===(e=F.current)||void 0===e?void 0:e.offsetHeight)||0,i=((null===(t=K.current)||void 0===t?void 0:t.offsetTop)||0)-l,o=i+((null===(a=K.current)||void 0===a?void 0:a.offsetHeight)||0),r=((null===(s=Q.current)||void 0===s?void 0:s.offsetTop)||0)-l,m=r+((null===(n=Q.current)||void 0===n?void 0:n.offsetHeight)||0);document.addEventListener("scroll",(e=>{const t=document.documentElement.scrollTop;M(!(t>=i&&t<o)),V(t>=o);B(!(t>=r&&t<m)),q(t>=m)}))}));const U=e=>l.filter((t=>!e.mp_type||t.mp_type===e.mp_type)).length,D=[{id:"ทั้งหมด",label:"ทั้งหมด",count:U({}),filter:{},getClass:e=>e.mp_type?"":"active"},{id:"บัญชีรายชื่อ",label:"บัญชีรายชื่อ",count:U({mp_type:"บัญชีรายชื่อ"}),filter:{mp_type:"บัญชีรายชื่อ"},getClass:e=>"บัญชีรายชื่อ"===e.mp_type?"active":""},{id:"แบ่งเขต",label:"แบ่งเขต",count:U({mp_type:"แบ่งเขต"}),filter:{mp_type:"แบ่งเขต"},getClass:e=>"แบ่งเขต"===e.mp_type?"active":""}],{mp_type:G,gender:J,age:X,education:$,occupation_group:ee,asset:te}=(0,c.Q7)(a),ae=i()([{name:"party_leader",label:"หัวหน้าพรรค"},{name:"party_secretary",label:"เลขาธิการพรรค"}].map(((e,s)=>{var n,l;if(!t[e.name])return null;const i=t[e.name].split(" ").slice(1),o=(0,c.PI)(i.join(" ")),r=i[0],m=i.slice(1).join(" "),p=e.label,d=null===(n=a.allPeopleYaml.edges.find((e=>{let{node:t}=e;return t.name===r&&t.lastname===m})))||void 0===n||null===(l=n.node)||void 0===l?void 0:l.images;return{id:s,name:r,lastname:m,position:p,fields:{slug:o},images:d}}))),se=(()=>{let e=l.filter((e=>!f.mp_type||e.mp_type===f.mp_type));return"บัญชีรายชื่อ"===f.mp_type?e.sort(((e,t)=>e.mp_list-t.mp_list)):"แบ่งเขต"===f.mp_type?e.sort(((e,t)=>e.mp_province===t.mp_province?e.mp_zone-t.mp_zone:e.mp_province.localeCompare(t.mp_province,"th"))):e.sort(((e,t)=>e.name===t.name?e.lastname.localeCompare(t.lastname,"th"):e.name.localeCompare(t.name,"th"))),e})(),ne=(0,c.de)(a.allPeopleYaml,a.allPeopleVoteYaml,a.allVotelogYaml);return(0,n.tZ)(r.Z,{pageStyles:{background:t.color}},(0,n.tZ)(m.Z,{title:"พรรค"+t.name,imageUrl:"/seo/share/party.png"}),(0,n.tZ)("section",{className:"section"},(0,n.tZ)("div",{className:"book"},(0,n.tZ)("div",{className:"page leftPage"},(0,n.tZ)("h1",{css:(0,n.iv)({...h,margin:"1rem 0 0 0"},"","")},"พรรค",t.name),(0,n.tZ)("h2",{style:{..._}},t.en.name," Party"),(0,n.tZ)("h2",{style:{..._}},"About"),(0,n.tZ)("p",{css:(0,n.iv)({...k},"","")},t.description),(0,n.tZ)("h2",{css:(0,n.iv)({..._},"","")},"Official Link"),(0,n.tZ)(d.l,t),(0,n.tZ)("h2",{css:(0,n.iv)({..._},"","")},"In Office"),(0,n.tZ)(d.M,t),(0,n.tZ)("h2",{style:{..._}},"Key Members"),ae.map((e=>(0,n.tZ)("div",{className:"peopleCard",key:e.id},(0,n.tZ)(u.Z,(0,s.Z)({key:e.id},e)))))),(0,n.tZ)("div",{className:"page"},(0,n.tZ)("h2",{style:{..._,marginTop:"11.1rem",marginBottom:"0rem"}},"Members"),(0,n.tZ)("h2",{style:{..._,fontFamily:"var(--ff-text)",fontWeight:"normal"}},"สมาชิกสภาผู้แทนราษฎรจำนวน ",a.allPeopleYaml.totalCount," คน"),(0,n.tZ)("div",{css:N},(0,n.tZ)("div",{style:{...x}},(0,n.tZ)(p.Z,{data:G})),(0,n.tZ)("div",{style:{...x}},(0,n.tZ)(p.Z,{data:J})),(0,n.tZ)("div",{style:{...x}},(0,n.tZ)(p.Z,{data:X})),(0,n.tZ)("div",{style:{...x}},(0,n.tZ)(p.Z,{data:$})),(0,n.tZ)("div",{style:{...x}},(0,n.tZ)(p.Z,{data:ee})),(0,n.tZ)("div",{style:{...x}},(0,n.tZ)(p.Z,{data:te})))))),(0,n.tZ)("section",{css:(0,n.iv)({...b,...z,background:"var(--cl-white)"},"","")},(0,n.tZ)("div",{ref:F,css:S},(0,n.tZ)("a",{href:"#voteLogs",css:(0,n.iv)({...C},"","")},H?(0,n.tZ)(g(),{className:O?"rotate-180":"",css:E}):(0,n.tZ)("div",{css:P}),(0,n.tZ)("span",{css:(0,n.iv)({...w},"","")},"การลงมติล่าสุดของพรรค")),(0,n.tZ)("a",{href:"#members",css:(0,n.iv)({...C,background:"#EEEEEE"},"","")},R?(0,n.tZ)(g(),{className:W?"rotate-180":"",css:j}):(0,n.tZ)("div",{css:T}),(0,n.tZ)("span",{css:(0,n.iv)({...w},"","")},"สมาชิกพรรคในสภา")))),ne.length>0?(0,n.tZ)("section",{id:"voteLogs",ref:K,css:(0,n.iv)({...b,background:"var(--cl-white)"},"","")},(0,n.tZ)("div",{className:"container"},(0,n.tZ)("h2",{css:(0,n.iv)({...h,paddingTop:"6rem"},"","")},"การลงมติล่าสุดของพรรค"),(0,n.tZ)(y.Z,null,ne.map((e=>{let{yamlId:t,fields:a,...l}=e;return(0,n.tZ)(v.Z,(0,s.Z)({isCompact:!0,key:t,slug:a.slug},l))}))))):null,(0,n.tZ)("section",{id:"members",ref:Q,css:(0,n.iv)({...b,background:"#eeeeee"},"","")},(0,n.tZ)("div",{className:"container"},(0,n.tZ)("h2",{css:Y},"สมาชิกพรรคในสภา"),(0,n.tZ)("div",{css:I,role:"tablist"},D.map((e=>{return(0,n.tZ)("button",{type:"button",key:e.id,className:[e.getClass(f)].join(" "),role:"tab",onClick:(t=e.filter,()=>A(t))},e.label," (",e.count,")");var t}))),se.length>0?(0,n.tZ)(y.Z,null,se.map((e=>(0,n.tZ)(Z.Z,(0,s.Z)({key:e.id},e,{type:"mp"}))))):(0,n.tZ)("div",{css:L},"ไม่มีสมาชิก"))))}}}]);
//# sourceMappingURL=41123ed7-b546878dfe5b16bab8a3.js.map