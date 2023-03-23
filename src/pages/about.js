import React from "react"
import { graphql } from "gatsby"
import WvButtonGroup from "@wevisdemo/ui/react/button-group"
import WvButton from "@wevisdemo/ui/react/button"
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
        <h1 css={cssSectionHead}>เกี่ยวกับโปรเจกต์นี้</h1>
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
            Attribution-NonCommercial License (CC-BY-NC)
            คือสามารถนำไปเผยแพร่และดัดแปลงได้ โดยต้องระบุที่มา
            แต่ห้ามนำไปใช้เพื่อการค้า
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
        <h1 css={cssSectionHead}>ร่วมพัฒนาโปรเจกต์</h1>
        <p>
          คุณเองก็สามารถเป็นส่วนหนึ่งในการพัฒนาเทคโนโลยีภาคประชาชน (Civic
          Technology) ในประเทศนี้ได้
          โดยสามารถแจ้งความประสงค์อยากร่วมพัฒนาโปรเจ็กต์ ส่งความคิดเห็น
          เสนอไอเดียใหม่ๆ แจ้งเปลี่ยน/อัพเดทข้อมูล
          หรือมีข้อสงสัยอยากสอบถามได้ทาง feedback form หรือ GithHub repository
          ด้านล่าง
        </p>
        <WvButtonGroup center>
          <ExternalLink
            style={{ display: "flex" }}
            href="https://sheets.wevis.info/dashboard/#/base/5e439277-692a-43d3-9b17-7d6c683835f6"
          >
            <WvButton>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                <g clip-path="url(#clip0_314_173)">
                  <path
                    d="M7.03582 2.86356H1.17529V19.4081H19.8247V2.86356C19.8247 2.86356 15.306 2.86356 13.9642 2.86356"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M16.0317 8.65536L10.7284 13.9587L5.42513 8.65536"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <line
                    x1="10.667"
                    y1="0.5"
                    x2="10.667"
                    y2="13"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_314_173">
                    <rect
                      width="20.8333"
                      height="20"
                      fill="white"
                      transform="translate(0.0834961 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div>ดาวน์โหลดข้อมูล</div>
            </WvButton>
          </ExternalLink>
          <ExternalLink
            style={{ display: "flex" }}
            href="https://bit.ly/wevisfeedback"
          >
            <WvButton>
              <img
                width="30"
                src="data:image/png;base64,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"
                alt="feedback"
                style={{ margin: 0 }}
              />
              <span>Feedback</span>
            </WvButton>
          </ExternalLink>
          <ExternalLink
            style={{ display: "flex" }}
            href="https://github.com/wevisdemo/they-work-for-us"
          >
            <WvButton>
              <svg role="img" viewBox="0 0 24 24" width="21" height="21">
                <title>GitHub</title>
                <path
                  fill="currentColor"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
              <span>View on Github</span>
            </WvButton>
          </ExternalLink>
        </WvButtonGroup>
      </div>
    </section>
  </Layout>
)

export default AboutPage
