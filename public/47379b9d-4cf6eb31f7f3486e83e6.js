(self.webpackChunkpolitician_directory=self.webpackChunkpolitician_directory||[]).push([[182],{3048:function(e,t,n){"use strict";n.r(t);var a=n(4382),o=n(3311),s=n.n(o),r=n(7361),i=n.n(r),l=n(3105),c=n.n(l),m=n(7294),d=n(9285),p=n(6116),g=n(4738),v=n(6179),u=n(2193),f=n(4168),Z=n(5381),y=n(122);var b={borderBottom:"0.5rem solid black",paddingTop:"3rem",paddingBottom:"3rem",h2:{fontSize:"4.8rem",textAlign:"center"},".dot":{margin:"0 1rem",height:"2rem",width:"2rem",display:"inline-block",borderRadius:"50%"}},h=function(e,t,n){return c()(e,(function(e){return i()(s()(e.votelog||[],(function(e){return e.key===t})),"value")===n}))},k={name:"a07gmx",styles:"font-size:2rem"},x={name:"iw9wuc",styles:"font-size:2.4rem;font-family:var(--ff-title);line-height:3rem;cursor:pointer;border-radius:5px;padding:1rem 1rem;margin-right:1rem;margin-bottom:1rem;display:block;background-color:var(--cl-pink);pointer-events:auto"},w={name:"1c4ttjh",styles:"color:var(--cl-black);:hover{color:var(--cl-black);}"},_={name:"18f0q7a",styles:"display:flex;flex-flow:row wrap;padding:0;border:none;background:none;width:100%;border-radius:5px;pointer-events:none;&:focus{outline:none;}text-align:left"},j={name:"1a9jymu",styles:"font-weight:bold;padding-top:2em"},z={name:"16uqoo3",styles:":hover{color:var(--cl-black);}"},I={name:"1a9jymu",styles:"font-weight:bold;padding-top:2em"},S={name:"3xn8g6",styles:"font-size:2rem;align-self:flex-start"},B={name:"1jokkpy",styles:"color:var(--cl-vote-no)"},N={name:"bq35ou",styles:"color:var(--cl-vote-yes)"},O={name:"a07gmx",styles:"font-size:2rem"},q={name:"nyfdx3",styles:"margin-bottom:3rem"},R={name:"tjo4qw",styles:"float:right"},C={name:"1i9vogi",styles:"margin-top:0"},D={name:"1751s4e",styles:"background-color:var(--cl-vote-yes)"},Y={name:"4yzf4l",styles:"background-color:var(--cl-vote-no)"},A={name:"iyyzlo",styles:"margin-top:4rem"},G={name:"nfd03i",styles:"margin-right:1rem"};t.default=function(e){var t,n=e.data,o=n.votelogYaml,r=n.voteRecordIcon,i=n.downloadIcon,l=n.allPeopleVoteYaml,c=n.allPeopleYaml,P=o.passed,E=o.total_voter,F=[];l.nodes.forEach((function(e){var t=s()(c.nodes,["id",e.id]);F.push(Object.assign({},e,t))}));var T=h(F,o.id,"1"),U=h(F,o.id,"2"),V=h(F,o.id,"3"),W=h(F,o.id,"4");return(0,a.tZ)(g.Z,{pageStyles:{background:"#000"}},(0,a.tZ)(v.Z,{title:o.title,imageUrl:"/seo/share/votelog.png"}),(0,a.tZ)("div",{style:{background:"#fff",borderRadius:"10px",padding:"3rem",margin:"5rem auto",maxWidth:"min(calc(100% - 2rem), 920px)"}},(0,a.tZ)("section",{css:(0,a.iv)(Object.assign({},b,{paddingBottom:"1rem !important",span:{fontSize:"3rem"}}),"","")},(0,a.tZ)("div",{className:"container"},(0,a.tZ)("span",null,(0,a.tZ)(d.G,{image:r.childImageSharp.gatsbyImageData,style:{verticalAlign:"middle",display:"inline-block",marginRight:"5px"}}),o.meeting,(0,a.tZ)("span",{css:R},o.vote_date)))),(0,a.tZ)("section",{css:(0,a.iv)(Object.assign({},b,{paddingBottom:"1rem !important",span:{fontSize:"3rem"}}),"","")},(0,a.tZ)("div",{className:"container",css:q}," ",(0,a.tZ)("h1",{css:C},""+o.title),(0,a.tZ)("p",{css:O},o.legal_title)),(0,a.tZ)("span",null,"สถานะ"," ",P?(0,a.tZ)("span",{css:N},(0,a.tZ)("span",{className:"dot",css:D}),"ผ่าน"):(0,a.tZ)("span",{css:B},(0,a.tZ)("span",{className:"dot",css:Y}),"ไม่ผ่าน"),(0,a.tZ)("span",{css:(0,a.iv)((t={display:"block"},t[(0,y.B)(767)]={float:"right"},t),"","")},"ผู้เข้าร่วมประชุม ",E," คน"))),(0,a.tZ)("section",{css:(0,a.iv)(Object.assign({display:"flex",alignItems:"center",flexDirection:"column"},b),"","")},o.is_no_vote?(0,a.tZ)("div",{css:S},o.no_vote_description||"-"):(0,a.tZ)(m.Fragment,null,(0,a.tZ)(f.Z,{data:[T.map((function(e){return{node:e}})),U.map((function(e){return{node:e}})),V.map((function(e){return{node:e}})),W.map((function(e){return{node:e}}))],colors:["var(--cl-vote-yes)","var(--cl-vote-no)","var(--cl-vote-abstained)","var(--cl-vote-absent)"],borderColors:["var(--cl-vote-yes)","var(--cl-vote-no)","var(--cl-vote-abstained)","var(--cl-black)"]}),(0,a.tZ)("div",{css:A},(0,a.tZ)(Z.Z,o)))),(0,a.tZ)("section",{css:(0,a.iv)(Object.assign({},b,{fontSize:"2rem"}),"","")},(0,a.tZ)("h1",null,"เนื้อหา"),(0,a.tZ)("p",null,o.description_th),(0,a.tZ)("p",{css:I},"อ้างอิง"),(0,a.tZ)(p.Z,{href:o.reference,css:z},(0,a.tZ)("p",null,o.reference)),(0,a.tZ)("p",{css:j},"เอกสารการลงมติ"),(0,a.tZ)("button",{css:_},o.document.filter((function(e){return e.link})).map((function(e){return(0,a.tZ)(p.Z,{key:e.link,href:e.link,css:w},(0,a.tZ)("span",{css:x},(0,a.tZ)(d.G,{image:i.childImageSharp.gatsbyImageData,css:G}),e.title||"เอกสาร"))})))),(0,a.tZ)("section",null,(0,a.tZ)("div",{className:"container"},(0,a.tZ)("h1",null,"บันทึกคะแนนเสียง"),o.is_no_vote?(0,a.tZ)("div",{css:k},"ไม่มีข้อมูลการลงคะแนนเสียง"):(0,a.tZ)(u.Z,{data:[T,U,V,W]})))))}}}]);
//# sourceMappingURL=47379b9d-4cf6eb31f7f3486e83e6.js.map