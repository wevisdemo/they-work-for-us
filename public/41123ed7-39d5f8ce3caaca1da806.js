(self.webpackChunkthey_work_for_us=self.webpackChunkthey_work_for_us||[]).push([[6374],{7350:function(e,t,a){"use strict";a.r(t);var n=a(2122),s=a(4382),i=a(9756),l=a(9693),r=a.n(l),c=a(7294),m=a(2584),o=a(4164),p=a(9501),d=a(3202),u=a(6157),g=a(686),Z=a(7354),f=a(7915);var y={fontSize:"4rem"},v={paddingTop:"3rem",paddingBottom:"8rem",h2:{fontSize:"4.8rem",textAlign:"center"}},b={fontSize:"2.4rem",textAlign:"left",margin:"1.5rem 0 1.2rem 0"},_={},h={margin:"1rem 0"},j={name:"1d3w5wq",styles:"width:100%"},k={name:"wvve2d",styles:"display:flex;justify-content:center;align-items:flex-start;flex-wrap:wrap;margin-top:6rem"},O={name:"1nux3r9",styles:"font-size:4.8rem;text-align:center;padding-top:6rem"},w={name:"1pcmrxu",styles:"display:block;list-style:none;text-align:center;> li{display:inline-block;font-size:2.4rem;padding:1rem 0 0;margin:0 1rem;cursor:pointer;&.active{border-bottom:8px solid var(--cl-black);}}"},x={name:"dmlp6m",styles:"display:flex;flex-wrap:wrap;justify-content:space-evenly"},C={name:"1xbzohv",styles:"font-family:var(--ff-title);font-size:3.2rem;text-align:center;margin:6rem 0"};t.default=function(e){var t,a=e.data,l=a.party,z=(0,i.Z)(a,["party"]),N=(0,c.useState)({}),P=N[0],S=N[1],Y=(0,c.useState)(z.allPeopleYaml.edges.map((function(e){return e.node})))[0],A=function(e){return Y.filter((function(t){return!e.mp_type||t.mp_type===e.mp_type})).length},M=[{id:"ทั้งหมด",label:"ทั้งหมด",count:A({}),filter:{},getClass:function(e){return e.mp_type?"":"active"}},{id:"บัญชีรายชื่อ",label:"บัญชีรายชื่อ",count:A({mp_type:"บัญชีรายชื่อ"}),filter:{mp_type:"บัญชีรายชื่อ"},getClass:function(e){return"บัญชีรายชื่อ"===e.mp_type?"active":""}},{id:"แบ่งเขต",label:"แบ่งเขต",count:A({mp_type:"แบ่งเขต"}),filter:{mp_type:"แบ่งเขต"},getClass:function(e){return"แบ่งเขต"===e.mp_type?"active":""}}],B=(0,p.Q7)(z),I=B.mp_type,T=B.gender,V=B.age,q=B.education,F=B.occupation_group,K=B.asset,L=r()([{name:"party_leader",label:"หัวหน้าพรรค"},{name:"party_secretary",label:"เลขาธิการพรรค"}].map((function(e,t){if(!l[e.name])return null;var a=l[e.name].split(" ").slice(1),n=(0,p.PI)(a.join(" "));return{id:t,name:a[0],lastname:a.slice(1).join(" "),position:e.label,fields:{slug:n}}}))),Q=(t=Y.filter((function(e){return!P.mp_type||e.mp_type===P.mp_type})),"บัญชีรายชื่อ"===P.mp_type?t.sort((function(e,t){return e.mp_list-t.mp_list})):"แบ่งเขต"===P.mp_type?t.sort((function(e,t){return e.mp_province===t.mp_province?e.mp_zone-t.mp_zone:e.mp_province.localeCompare(t.mp_province,"th")})):t.sort((function(e,t){return e.name===t.name?e.lastname.localeCompare(t.lastname,"th"):e.name.localeCompare(t.name,"th")})),t),U=(0,p.de)(z.allPeopleYaml,z.allPeopleVoteYaml,z.allVotelogYaml);return(0,s.tZ)(m.Z,{pageStyles:{background:l.color}},(0,s.tZ)(o.Z,{title:"พรรค"+l.name,imageUrl:"/seo/share/party.png"}),(0,s.tZ)("section",{className:"section"},(0,s.tZ)("div",{className:"book"},(0,s.tZ)("div",{className:"page leftPage"},(0,s.tZ)("h1",{css:(0,s.iv)(Object.assign({},y,{margin:"1rem 0 0 0"}),"","","","")},"พรรค",l.name),(0,s.tZ)("h2",{style:Object.assign({},b)},l.en.name," Party"),(0,s.tZ)("h2",{style:Object.assign({},b)},"About"),(0,s.tZ)("p",{css:(0,s.iv)(Object.assign({},_),"","","","")},l.description),(0,s.tZ)("h2",{css:(0,s.iv)(Object.assign({},b),"","","","")},"Official Link"),(0,s.tZ)(u.l,l),(0,s.tZ)("h2",{css:(0,s.iv)(Object.assign({},b),"","","","")},"In Office"),(0,s.tZ)(u.M,l),(0,s.tZ)("h2",{style:Object.assign({},b)},"Key Members"),L.map((function(e){return(0,s.tZ)("div",{className:"peopleCard",key:e.id},(0,s.tZ)(g.Z,(0,n.Z)({key:e.id},e)))}))),(0,s.tZ)("div",{className:"page"},(0,s.tZ)("h2",{style:Object.assign({},b,{marginTop:"11.1rem",marginBottom:"0rem"})},"Members"),(0,s.tZ)("h2",{style:Object.assign({},b,{fontFamily:"var(--ff-text)",fontWeight:"normal"})},"สมาชิกสภาผู้แทนราษฎรจำนวน ",z.allPeopleYaml.totalCount," คน"),(0,s.tZ)("div",{css:j},(0,s.tZ)("div",{style:Object.assign({},h)},(0,s.tZ)(d.Z,{data:I})),(0,s.tZ)("div",{style:Object.assign({},h)},(0,s.tZ)(d.Z,{data:T})),(0,s.tZ)("div",{style:Object.assign({},h)},(0,s.tZ)(d.Z,{data:V})),(0,s.tZ)("div",{style:Object.assign({},h)},(0,s.tZ)(d.Z,{data:q})),(0,s.tZ)("div",{style:Object.assign({},h)},(0,s.tZ)(d.Z,{data:F})),(0,s.tZ)("div",{style:Object.assign({},h)},(0,s.tZ)(d.Z,{data:K})))))),U.length>0?(0,s.tZ)("section",{css:(0,s.iv)(Object.assign({},v,{background:"var(--cl-white)"}),"","","","")},(0,s.tZ)("div",{className:"container"},(0,s.tZ)("h2",{css:(0,s.iv)(Object.assign({},y),"","","","")},"การลงมติล่าสุดของพรรค"),(0,s.tZ)("div",{css:k},U.map((function(e){var t=e.id,a=e.fields,l=(0,i.Z)(e,["id","fields"]);return(0,s.tZ)(f.Z,(0,n.Z)({isCompact:!0,key:t,css:(0,s.iv)("width:calc((var(--container-width) - 4rem) / 2);margin:0 1rem 2rem 1rem;","","","",""),slug:a.slug},l))}))))):null,(0,s.tZ)("section",{css:(0,s.iv)(Object.assign({},v,{background:"#eeeeee"}),"","","","")},(0,s.tZ)("div",{className:"container"},(0,s.tZ)("h2",{css:O},"สมาชิกพรรคในสภา"),(0,s.tZ)("ul",{css:w},M.map((function(e){return(0,s.tZ)("li",{key:e.id,className:[e.getClass(P)].join(" "),role:"tab",onClick:(t=e.filter,function(){return S(t)})},e.label," (",e.count,")");var t}))),Q.length>0?(0,s.tZ)("div",{css:x},Q.map((function(e,t){return(0,s.tZ)(Z.Z,(0,n.Z)({key:e.id},e,{type:"mp"}))}))):(0,s.tZ)("div",{css:C},"ไม่มีสมาชิก"))))}}}]);
//# sourceMappingURL=41123ed7-39d5f8ce3caaca1da806.js.map