import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../../styles/global.css"
import HeroFeature from "./feature"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      biograpyImage: file(relativePath: { eq: "images/hero/biography.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED)
        }
      }
      partySummaryImage: file(
        relativePath: { eq: "images/hero/partySummary.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED)
        }
      }
      voteSummaryImage: file(
        relativePath: { eq: "images/hero/voteSummary.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED)
        }
      }
    }
  `)

  return (
    <div
      css={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "flex-start",
        alignContent: "center",
        marginTop: "2rem",
        marginBottom: "5rem",
      }}
    >
      <HeroFeature
        title="ค้นประวัติบุคคล"
        subtitle="รู้หน้า รู้ชื่อ แต่ไม่รู้จัก ลองค้นหาประวัติผู้แทนในสภาของเรากันดู"
        image={data.biograpyImage}
      />
      <HeroFeature
        title="ดูภาพรวมพรรคการเมือง"
        subtitle="ใครอยู่ทีมไหน เห็นเหมือนหรือต่างกันอย่างไร ลองดูภาพรวมของแต่กลุ่ม"
        image={data.partySummaryImage}
      />
      <HeroFeature
        title="สรุปการลงคะแนนเสียง"
        subtitle="ใครหนุน ใครค้าน ดูการโหวตครั้งสำคัญในสภา พร้อมอธิบายแบบเข้าใจง่ายๆ"
        image={data.voteSummaryImage}
      />
    </div>
  )
}

export default Hero
