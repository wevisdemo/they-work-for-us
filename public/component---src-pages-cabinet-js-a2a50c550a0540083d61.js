(self.webpackChunkthey_work_for_us=self.webpackChunkthey_work_for_us||[]).push([[9902],{7695:function(n,e,t){"use strict";t.d(e,{Z:function(){return d}});t(7294);var i=t(4514),r=t(2122),o=t(7329),s=t(7354),u=t(9501),a=t(4382);var c={name:"co8fsy",styles:"margin-bottom:6rem"},f={name:"1asf64",styles:"text-align:center;font-size:3.6rem;margin:3rem"},m={name:"37enj7",styles:"display:flex;flex-wrap:wrap;margin:0 auto;justify-content:center"},l=function(n){var e=n.members,t=n.title,i=(0,o.Z)(e);return i.sort(u.ht),i=i.map((function(n){var e=n.cabinet_position.filter((function(n){return n.indexOf(t)>=0})).join(", ");return(0,a.tZ)(s.Z,(0,r.Z)({key:n.id},n,{cabinet_position:e,type:"cabinet"}))})),(0,a.tZ)("div",{css:c},(0,a.tZ)("h2",{css:f},t),(0,a.tZ)("div",{css:m},i))},d=function(){var n=(0,i.useStaticQuery)("4245691691"),e="นายกรัฐมนตรี",t=n.allPeopleYaml.edges.filter((function(n){return n.node.cabinet_position.some((function(n){return n===e}))})),r=function(n){return function(e,t){var i=e.node.cabinet_position.find((function(e){return e.indexOf(n)>-1}));return i===t.node.cabinet_position.find((function(e){return e.indexOf(n)>-1}))?-1:i.indexOf("ช่วย")>-1?1:-1}},o=[{ministry:e,members:t}].concat(["รองนายกรัฐมนตรี","สำนักนายกรัฐมนตรี","กระทรวงกลาโหม","กระทรวงการคลัง","กระทรวงการต่างประเทศ","กระทรวงการท่องเที่ยวและกีฬา","กระทรวงพัฒนาสังคมและความมั่นคงของมนุษย์","กระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม","กระทรวงเกษตรและสหกรณ์","กระทรวงคมนาคม","กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม","กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม","กระทรวงพลังงาน","กระทรวงพาณิชย์","กระทรวงมหาดไทย","กระทรวงยุติธรรม","กระทรวงแรงงาน","กระทรวงวัฒนธรรม","กระทรวงศึกษาธิการ","กระทรวงสาธารณสุข","กระทรวงอุตสาหกรรม"].map((function(e){return{ministry:e,members:n.allPeopleYaml.edges.filter((function(n){return n.node.cabinet_position.some((function(n){return n.indexOf(e)>-1}))})).sort(r(e))}})));return(0,a.tZ)("div",null,o.map((function(n){var e=n.ministry,t=n.members.map((function(n){return Object.assign({},n.node)}));return(0,a.tZ)(l,{key:e,members:t,title:e})})))}}}]);
//# sourceMappingURL=component---src-pages-cabinet-js-a2a50c550a0540083d61.js.map