import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ExternalLink from "../components/externalLink"
import Emoji from "../components/emoji"

const h2 = {
  fontSize: "2.4rem",
  textAlign: "center",
}

const h1 = {
  fontSize: "6rem",
  textAlign: "center",
}

const cssSectionHead = {
  fontSize: "4.8rem",
  textAlign: "center",
}

const cssSection = {
  fontSize: "1.8rem",
  padding: "4rem 2rem 0",
}

const cssSubSection = {
  fontFamily: "var(--ff-text)",
  margin: "0 auto 3rem",
  paddingBottom: "2rem",
  borderBottom: "3px solid var(--cl-black)",
  maxWidth: "832px",
  fontSize: "1.8rem",
}

const cssSubSectionHead = {
  fontWeight: "bold",
  fontSize: "2.4rem",
  marginBottom: "1.5rem",
}

const cssExtLink = {
  color: "black !important",
}

const cssExtLinkButton = {
  display: "inline-block",
  background: "var(--cl-black)",
  padding: "1.5rem 7rem",
  textDecoration: "none",
  borderRadius: "1rem",
  fontSize: "2.4rem",
  fontWeight: "normal",
  fontFamily: "var(--ff-title)",
  color: "var(--cl-white)",
  "&:hover": {
    color: "gray",
  },
  marginBottom: "2rem",
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContributor {
      edges {
        node {
          login
          html_url
        }
      }
    }
  }
`

const allDesigners = [
  {
    login: "พิชญา โชนะโต",
    html_url: "https://www.instagram.com/messymachine/",
  },
  {
    login: "น้ำใส ศุภวงศ์",
    html_url: "https://www.instagram.com/namsaisupavong/",
  },
]

const allDataGatherers = [
  {
    login: "เอกพล เธียรถาวร",
  },
  {
    login: "นันทวัณ หวังอุดมสุข",
  },
  {
    login: "พรรัตน์ วชิราชัย",
  },
  {
    login: "ปรารถนา อึ้งชูศักดิ์",
  },
  {
    login: "จักรภัทร วัฒนอังกูร",
  },
  {
    login: "เศวตโชติ วิชาชัย",
  },
  {
    login: "กันต์ ว่องประเสริฐกุล",
  },
  {
    login: "นันทิพัฒน์ พรเลิศ",
  },
  {
    login: "รวิสรา รัตนวรรณนุกูล",
  },
  {
    login: "ศตพล  อำนวยสกุล",
  },
  {
    login: "ทัชภูมิ ทุมสวัสดิ์",
  },
  {
    login: "ภูมิพัฒน์ พรเจริญสุข",
  },
  {
    login: "มาพร เลิศสุริย์เดช",
  },
  {
    login: "ทัตเทพ เทพบริรักษ์",
  },
  {
    login: "ลีลา จันสว่าง",
  },
  {
    login: "วริษา พิพัฒน์ธราวงศ์",
  },
  {
    login: "ปวิตา แก้วพรหมมาลย์",
  },
  {
    login: "ณัฐินี ณ เชียงใหม่",
  },
  {
    login: "ณัฐพงศ์ เปรมพูลสวัสดิ์",
  },
  {
    login: "ธัญญาภรณ์ สุรภักดี",
  },
  {
    login: "จุฑาวุฒิ แพตทริค เศวตอัศวนนท์",
  },
  {
    login: "ธนบดี ยังหอม",
  },
  {
    login: "วรลักษณ์ เชื้อบุญมี",
  },
  {
    login: "นัทธพงศ์ ไกรทองสุข",
  },
  {
    login: "ยศกร มีทรัพย์",
  },
  {
    login: "รชต สนิท",
  },
  {
    login: "ปรเมศวร์ ไมตรีโสภณ",
  },
  {
    login: "ปุญญิศา ศัพทเสน",
  },
  {
    login: "วรุตม์ อุดมรัตน์",
  },
  {
    login: "ภัทชา ด้วงกลัด",
  },
]

const allEditors = [
  {
    login: "ยิ่งชีพ อัชฌานนท์",
  },
  {
    login: "ธนิสรา เรืองเดช",
  },
]

const allProducers = [
  { login: "Punch Up", html_url: "https://punchup.world/" },
  { login: "Boonmee Lab", html_url: "https://www.boonmeelab.com/" },
  { login: "iLaw", html_url: "https://ilaw.or.th/" },
]

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="About Us" />
    <section
      css={{
        ...cssSection,
        backgroundColor: "var(--cl-pink)",
        padding: "4rem 0 6rem 0",
      }}
    >
      <div className="container">
        <h1 css={h1}>About Us</h1>
        <h2 css={h2}>{data.site.siteMetadata.title}</h2>
      </div>
    </section>
    <section css={{ ...cssSection }}>
      <div className="container">
        <h1 css={cssSectionHead}>เกี่ยวกับโปรเจ็คต์นี้</h1>
        <div css={cssSubSection}>
          <p>
            หลายคนอาจจะมีคำถามในใจว่า เลือกตั้งผ่านมาแล้วเราได้อะไร? WeVis
            ยังคงเชื่อว่าการเลือกตั้งเป็นกลไกที่สำคัญสำหรับการขับเคลื่อนประชาธิปไตย
            (In Vote We Trust) และ ‘ผู้แทน’ ที่ได้มาจากกลไกการเลือกตั้ง
            ทั้งที่มาจากคะแนนเสียง สูตรคำนวณ หรือการแต่งตั้ง
            และไม่ว่าจะอยู่ในตำแหน่งใด
            จำเป็นต้องทำหน้าที่อย่างเต็มที่เพื่อประชาชน
          </p>
          <p>
            สิ่งที่เราทำได้หลังจากนี้ คือการช่วยกันดูว่าผู้แทนที่เข้าไปในสภา
            เขาทำได้ตามที่เคยสัญญากับเราไหม?
            หรือเขาทำตามหน้าที่ที่ควรทำหรือเปล่า?
            แต่อุปสรรคอย่างหนึ่งที่ทำให้เราคนไทยทำสิ่งนี้ได้ยาก
            คือข้อมูลและแพลตฟอร์มต่างๆ ของรัฐนั้น อยู่ในรูปแบบที่ซับซ้อน
            กระจัดกระจาย รวมถึงบางส่วนอาจเข้าใจและใช้งานยากสำหรับคนทั่วไป
            ทำให้ภาระของการติดตามและตรวจสอบ
            ต้องมาตกหนักอยู่ที่ประชาชนและสื่อมวลชน
          </p>
          <p>
            WeVis จึงตั้งใจพัฒนาแพลตฟอร์ม {data.site.siteMetadata.title}{" "}
            ที่จะทำให้ประชาชนทั่วไปรวมถึงสื่อมวลชน สามารถทำความรู้จักและติดตาม
            'ผู้แทน' ของเราได้ง่ายขึ้น พวกเขาคือใคร เคยทำอะไรมาบ้าง พูดอะไรในสภา
            และเลือกที่จะสนับสนุนอะไร เพื่อเปลี่ยนข้อมูลที่เป็นของเราทุกคน
            ให้อยู่ในรูปแบบที่เข้าถึงและเข้าใจได้ง่ายขึ้น
          </p>
          <p>
            โดยในช่วงเริ่มต้นเปิดแพลตฟอร์มในเดือนพฤศจิกายน 62
            เราได้รวบรวมข้อมูลพื้นฐานของสมาชิกรัฐสภา (ส.ส. และ ส.ว.)
            รวมทั้งคณะรัฐมนตรี ที่กระจัดกระจายอยู่หลายที่มาไว้ที่เดียวกัน
            พร้อมกับผลการลงมติที่น่าจับตา นับตั้งแต่เปิดประชุมสภาจนถึงวันที่ 1
            พฤศจิกายน 62 และทางทีมได้ทยอยอัพเดทข้อมูลต่างๆ
            เพิ่มเติมเพื่อให้เป็นระยะ เพื่อเป็นฐานข้อมูลสำหรับการสืบค้นต่อไป
            โดยจัดทำเป็นแพลตฟอร์ม 2 ภาษา
            เพื่ออำนวยความสะดวกให้กับสื่อต่างชาติในการเข้าถึงข้อมูล และ WeVis
            ได้วางแผนที่จะอัพเดทข้อมูลต่างๆ เพิ่มเติมในระยะต่อไป
          </p>
          <p>
            <strong>
              เพราะเราเชื่อว่าข้อมูลและประชาธิปไตย.. เป็นของเราทุกคน
            </strong>
          </p>
        </div>
        <div css={cssSubSection}>
          <div css={cssSubSectionHead}>ที่มาของข้อมูล</div>
          <p>
            จากการสืบค้นเบื้องต้น ทางทีมงานพบว่าข้อมูลที่ต้องการใช้งานนั้น
            ไม่มีการจัดโครงสร้างอย่างเป็นระบบ ไม่ครบถ้วน ไม่อัพเดท
            กระจัดกระจายในหลายเว็บไซต์ และบางส่วนยังเป็นข้อมูลที่อยู่ในรูปแบบของ
            pdf ที่สแกนและอัพโหลดไว้ ทำให้ไม่สามารถนำไปใช้งานต่อได้
            เราจึงประกาศรับอาสาสมัคร เพื่อมาช่วยในการสืบค้น เรียบเรียง
            เปลี่ยนข้อมูลให้เป็นไฟล์ดิจิทัล รวมถึงแปลให้เป็นภาษาอังกฤษ
            ซึ่งมีผู้สนใจช่วยพัฒนาจำนวนมาก จากนั้น
            ทางทีมงานจึงนำข้อมูลดังกล่าวมาตรวจสอบอีกครั้งก่อนเผยแพร่
          </p>

          <p>อ้างอิงข้อมูลจาก:</p>
          <ul>
            <li>
              <ExternalLink href="https://www.ect.go.th/ect_th">
                https://www.ect.go.th/ect_th
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.nacc.go.th/main.php?filename=asset_reveal">
                https://www.nacc.go.th/main.php?filename=asset_reveal
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.senate.go.th">
                https://www.senate.go.th
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.thaigov.go.th">
                https://www.thaigov.go.th
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="http://www.parliament.go.th">
                http://www.parliament.go.th
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="http://msbis.parliament.go.th">
                http://msbis.parliament.go.th
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.soc.go.th">
                https://www.soc.go.th
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="http://www.mratchakitcha.soc.go.th">
                http://www.mratchakitcha.soc.go.th
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="http://www.kpi.ac.th">
                http://www.kpi.ac.th
              </ExternalLink>
            </li>
          </ul>

          <p>
            ในกรณีที่ไม่สามารถค้นหาข้อมูลที่ต้องการจากเว็บไซต์ทางราชการได้
            เราจำเป็นต้องใช้ข้อมูลจาก Wikipedia
            ที่นำไปตรวจสอบเทียบเคียงกับสื่ออื่นๆ อีกรอบ:
          </p>
          <ul>
            <li>
              <ExternalLink href="https://en.wikipedia.org/wiki/2019_Thai_general_WeVision">
                https://en.wikipedia.org/wiki/2019_Thai_general_WeVision
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://en.wikipedia.org/wiki/2019_Thai_parliament">
                https://en.wikipedia.org/wiki/2019_Thai_parliament
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://en.wikipedia.org/wiki/Cabinet_of_Thailand">
                https://en.wikipedia.org/wiki/Cabinet_of_Thailand
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://en.wikipedia.org/wiki/Senate_of_Thailand">
                https://en.wikipedia.org/wiki/Senate_of_Thailand
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://en.wikipedia.org/wiki/House_of_Representatives_(Thailand)">
                https://en.wikipedia.org/wiki/House_of_Representatives_(Thailand)
              </ExternalLink>
            </li>
          </ul>
        </div>
        <div css={cssSubSection}>
          <div css={cssSubSectionHead}>นโยบายการนำข้อมูลไปใช้ต่อ</div>
          <p>
            WeVis มีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source
            และเปิดข้อมุลเป็น Open Data ภายใต้เงื่อนไข Creative Commons
            Attribution-ShareAlike License คือสามารถนำไปเผยแพร่และดัดแปลงได้
            โดยต้องระบุที่มา แต่ห้ามนำไปใช้เพื่อการค้า
            และต้องเผยแพร่งานดัดแปลงโดยใช้สัญญาอนุญาตชนิดเดียวกัน
          </p>
        </div>
      </div>
    </section>

    <section css={{ ...cssSection }}>
      <div className="container">
        <h1 css={cssSectionHead}>อาสาสมัครร่วมพัฒนา</h1>
        <div css={cssSubSection}>
          <div css={cssSubSectionHead}>
            เขียนโปรแกรม <Emoji symbol="👩‍💻" label="programmer"></Emoji>
          </div>
          <div>
            {data.allContributor.edges.map(({ node }, i) => (
              <span key={i}>
                {i === 0 ? "" : ", "}
                <ExternalLink href={node.html_url} css={cssExtLink}>
                  {node.login}
                </ExternalLink>
              </span>
            ))}
          </div>
        </div>
        <div css={cssSubSection}>
          <div css={cssSubSectionHead}>
            ออกแบบ <Emoji symbol="👩‍🎨" label="designer"></Emoji>
          </div>
          <div>
            {allDesigners.map((node, i) => (
              <span key={i}>
                {i === 0 ? "" : ", "}
                <ExternalLink href={node.html_url} css={cssExtLink}>
                  {node.login}
                </ExternalLink>
              </span>
            ))}
          </div>
        </div>
        <div css={cssSubSection}>
          <div css={cssSubSectionHead}>
            สืบค้นและรวบรวมข้อมูล <Emoji symbol="🕵️‍♀️" label="detective"></Emoji>
          </div>
          <div>
            {allDataGatherers.map((node, i) => (
              <span key={i}>
                {i === 0 ? "" : ", "}
                <ExternalLink href={node.html_url} css={cssExtLink}>
                  {node.login}
                </ExternalLink>
              </span>
            ))}
          </div>
        </div>
        <div css={cssSubSection}>
          <div css={cssSubSectionHead}>
            บรรณาธิการ <Emoji symbol="👩‍🍳" label="chef"></Emoji>
          </div>
          <div>
            {allEditors.map((node, i) => (
              <span key={i}>
                {i === 0 ? "" : ", "}
                <ExternalLink href={node.html_url} css={cssExtLink}>
                  {node.login}
                </ExternalLink>
              </span>
            ))}
          </div>
        </div>
        <div css={cssSubSection}>
          <div css={cssSubSectionHead}>
            ประสานงานและจัดการอื่นๆ <Emoji symbol="🧙‍♀️" label="magic"></Emoji>
          </div>
          <div>
            {allProducers.map((node, i) => (
              <span key={i}>
                {i === 0 ? "" : ", "}
                <ExternalLink href={node.html_url} css={cssExtLink}>
                  {node.login}
                </ExternalLink>
              </span>
            ))}
          </div>
        </div>
        <div css={cssSubSection}>
          <p>
            {data.site.siteMetadata.title} ได้รับการสนับสนุนทุนในการดำเนินงานจาก
            Friedrich Naumann Foundation
            ซึ่งนำมาใช้เป็นต้นทุนในการประสานงานและบริหารจัดการ การจัด Meetup
            เพื่อดำเนินโครงการ การผลิตของที่ระลึก และแบ่งเป็นค่าเสียเวลาเล็กๆ
            น้อยๆ ให้กับอาสาสมัคร
          </p>
        </div>
      </div>
    </section>
    <section css={{ ...cssSection, marginBottom: "8rem" }}>
      <div className="container">
        <h1 css={cssSectionHead}>ร่วมพัฒนาโปรเจ็กท์</h1>
        <p>
          คุณเองก็สามารถเป็นส่วนหนึ่งในการพัฒนาเทคโนโลยีภาคประชาชน (Civic
          Technology) ในประเทศนี้ได้
          โดยสามารถแจ้งความประสงค์อยากร่วมพัฒนาโปรเจ็กต์ ส่งความคิดเห็น
          เสนอไอเดียใหม่ๆ แจ้งเปลี่ยน/อัพเดทข้อมูล
          หรือมีข้อสงสัยอยากสอบถามได้ทาง{" "}
          <ExternalLink href="https://airtable.com/shryu4errnlj1LWsM">
            Project feedback form
          </ExternalLink>
        </p>
        <div style={{ textAlign: "center" }}>
          <ExternalLink
            href="https://github.com/codeforthailand/politician-directory"
            css={cssExtLinkButton}
          >
            View This Project On Github
          </ExternalLink>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage
