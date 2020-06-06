import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { media } from "../styles"
import BarChart from "../components/motion/barchart"

const cssMainSection = {
  display: "block",
  padding: "2rem 2rem",
  [media(767)]: {
    display: "block",
  },
}

const MotionPage = ({ data }) => {
  return (
    <Layout
      pageStyles={{
        background: "var(--cl-motion-section)",
      }}
    >
      <SEO title="Home" />
      <section css={{ ...cssMainSection }}>
        <h1>Motion</h1>
        <BarChart
          data={[
            { category: "การเกษตร", count: 25 },
            { category: "การศึกษา", count: 20 },
            { category: "กฎหมาย", count: 17 },
            { category: "เศรษฐกิจ", count: 15 },
            { category: "สิทธิมนุษยชน", count: 13 },
            { category: "สังคม", count: 10 },
            { category: "อื่นๆ", count: 7 },
          ]}
          xTicks={[0, 5, 10, 15, 20, 25]}
        />
      </section>
    </Layout>
  )
}

export default MotionPage
