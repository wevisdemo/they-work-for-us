"use strict";(self.webpackChunkthey_work_for_us=self.webpackChunkthey_work_for_us||[]).push([[441],{6558:function(e,t,a){a.r(t);var n=a(7462),s=a(917),r=a(7294),l=a(574),i=a(8032),o=a(5253),c=a(4120),m=a(9357),g=a(4752),d=a(2505),Z=a(403),h=a(6922),p=a(4703),v=a(4969),u=a(9692);const f={fontSize:"4.8rem",marginTop:"4rem"},y={display:"flex",paddingTop:"3rem",paddingBottom:"8rem",h2:{fontSize:"4.8rem"},h3:{fontSize:"2.1rem"},flexDirection:"column",[(0,o.B)(821)]:{flexDirection:"row"}},x={...y,background:"var(--cl-white)"},b={...y,color:"var(--cl-white)",background:"var(--cl-black)",h2:{...y.h2,color:"var(--cl-white)"}},w={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"300px",padding:"2rem",borderRadius:"10px",color:"var(--cl-white)",background:"var(--cl-black)",width:"calc((var(--container-width) - 4rem) / 2)","&:hover":{background:"var(--cl-gray-0)",textDecoration:"none"},h3:{color:"var(--cl-white)",fontSize:"3.6rem"},h4:{color:"var(--cl-white)",fontSize:"2.4rem",fontFamily:"var(--ff-text)",fontWeight:"normal"}};var k={name:"zk4ghp",styles:"font-size:6rem;font-weight:bold;margin-top:0;margin-bottom:1rem;padding-top:6rem"},S={name:"3q7ahp",styles:"text-align:center;margin:4.8rem 0 0 0"},I={name:"1ml9y9m",styles:"display:flex;justify-content:center;align-items:flex-start;flex-wrap:wrap;margin-top:6rem;gap:1rem"},D={name:"rvvdvb",styles:"margin-bottom:1.2rem"},z={name:"rvvdvb",styles:"margin-bottom:1.2rem"},B={name:"iyyzlo",styles:"margin-top:4rem"},T={name:"xrwoc1",styles:"margin-bottom:1.2rem;text-align:center"},_={name:"19lr0ui",styles:"font-size:3.6rem;text-align:center"},C={name:"oxl3yq",styles:"color:var(--cl-black)"},H={name:"3q7ahp",styles:"text-align:center;margin:4.8rem 0 0 0"};t.default=e=>{let{data:t}=e;const[a,L]=r.useState(!1),[N,q]=r.useState(),[G,P]=r.useState([]),[Y,j]=r.useState(null);return(0,s.tZ)(c.Z,{pageStyles:{background:"var(--cl-people-section)"}},(0,s.tZ)(m.Z,{title:"Home"}),a&&N&&(0,s.tZ)(v.E,{selected:N,zones:G,setIsZoneDialog:e=>{L(e),Y.clearValue()},allPeople:t.allPeopleYaml.edges}),(0,s.tZ)("section",{css:(0,s.iv)({...y},"",""),className:"container"},(0,s.tZ)("div",{css:(0,s.iv)({width:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",[(0,o.B)(821)]:{marginBottom:"3rem",alignItems:"start"}},"","")},(0,s.tZ)("h1",{css:k},"ใครคือผู้แทนของเรา"),(0,s.tZ)("h2",null,"ค้นหา ตรวจสอบ โปร่งใส"),(0,s.tZ)("strong",{css:(0,s.iv)({[(0,o.B)(821)]:{marginBottom:"8rem"}},"","")},"อัพเดตข้อมูล:"," ",(new Date).toLocaleDateString("TH-th",{dateStyle:"long"})),(0,s.tZ)("h3",{css:(0,s.iv)({marginTop:"30px",[(0,o.B)(821)]:{marginTop:"4rem"}},"","")},"ค้นหา ส.ส. เขตบ้านเรา"),(0,s.tZ)(v.F,{setIsZoneDialog:L,setSelected:q,selected:N,setZones:P,setRef:j}),(0,s.tZ)("hr",{css:(0,s.iv)({margin:"40px 0",borderTop:"2px #000 solid",width:"calc(100% - 5rem)",maxWidth:"600px",[(0,o.B)(821)]:{display:"none"}},"","")})),(0,s.tZ)(d.Z,null)),(0,s.tZ)("section",{css:(0,s.iv)({...x},"","")},(0,s.tZ)("div",{className:"container"},(0,s.tZ)(h.Z,{data:t.allPeopleYaml.edges}))),(0,s.tZ)("section",{css:(0,s.iv)({...b},"","")},(0,s.tZ)("div",{className:"container"},(0,s.tZ)("h2",{css:(0,s.iv)({...f},"","")},"สรุปผลการลงมติล่าสุด"),(0,s.tZ)(u.Z,null,t.allVotelogYaml.edges.map((e=>{let{node:{id:t,fields:a,...r}}=e;return(0,s.tZ)(Z.Z,(0,n.Z)({key:t,slug:a.slug},r))}))),(0,s.tZ)("div",{css:S},(0,s.tZ)(g.Z,{to:"/votelog"},"ดูทั้งหมด")))),(0,s.tZ)("section",{css:(0,s.iv)({...x},"","")},(0,s.tZ)("div",{className:"container"},(0,s.tZ)("h2",{css:(0,s.iv)({...f},"","")},"สำรวจตามชนิดและสังกัดผู้แทน"),(0,s.tZ)("div",{css:I},(0,s.tZ)(l.Link,{to:"/cabinet",css:w},(0,s.tZ)(i.G,{image:t.cabinetImage.childImageSharp.gatsbyImageData,alt:"","aria-hidden":"true",css:D}),(0,s.tZ)("h3",null,"คณะรัฐมนตรี"),(0,s.tZ)("h4",null,t.cabinet.totalCount," คน")),(0,s.tZ)(l.Link,{to:"/senate",css:w},(0,s.tZ)(i.G,{image:t.senateImage.childImageSharp.gatsbyImageData,alt:"","aria-hidden":"true",css:z}),(0,s.tZ)("h3",null,"สมาชิกวุฒิสภา"),(0,s.tZ)("h4",null,t.senator.totalCount," คน"))),(0,s.tZ)("div",{css:B},(0,s.tZ)("div",{css:T},(0,s.tZ)(i.G,{style:{margin:"auto"},image:t.representativeImage.childImageSharp.gatsbyImageData,alt:"","aria-hidden":"true"})),(0,s.tZ)("h3",{css:_},(0,s.tZ)(l.Link,{to:"/representatives",css:C},"สมาชิกสภาผู้แทนราษฎร")),(0,s.tZ)(p.Z,{paneHeaderStyle:{textAlign:"center",fontSize:"2.4rem"}}),(0,s.tZ)("div",{css:H},(0,s.tZ)(g.Z,{to:"/representatives"},"ดู ส.ส. ทั้งหมด"))))))}}}]);
//# sourceMappingURL=d676735c-208ffbd516ee04c083f7.js.map