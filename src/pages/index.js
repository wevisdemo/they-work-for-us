import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { media } from "../styles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/button"
import Hero from "../components/hero"
import VoteLogCard from "../components/voteLogCard"
import WaffleFilter from "../components/waffleFilter"
import PartyGroupList from "../components/partyGroupList"
import { Autocomplete, ZoneDialog } from "../components/search"

export const query = graphql`
  {
    cabinet: allPeopleYaml(
      filter: { is_cabinet: { eq: true }, is_active: { eq: true } }
    ) {
      totalCount
    }
    senator: allPeopleYaml(
      filter: { is_senator: { eq: true }, is_active: { eq: true } }
    ) {
      totalCount
    }
    allPeopleYaml {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          birthdate(fromNow: true)
          degree
          education
          ex_occupation
          graduation
          gender
          occupation_group
          name
          lastname
          title
          cabinet_position
          is_active
          is_cabinet
          is_senator
          is_mp
          mp_type
          mp_list
          mp_province
          mp_zone
          party
          images {
            url
          }
        }
      }
    }
    allVotelogYaml(
      filter: { is_active: { eq: true } }
      limit: 6
      sort: { vote_date: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          title
          description_th
          passed
          approve
          disprove
          abstained
          absent
          vote_date
        }
      }
    }
    cabinetImage: file(
      relativePath: { eq: "images/icons/cabinet/cabinet.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 60, layout: FIXED)
      }
    }
    senateImage: file(relativePath: { eq: "images/icons/senate/senate.png" }) {
      childImageSharp {
        gatsbyImageData(width: 60, layout: FIXED)
      }
    }
    representativeImage: file(
      relativePath: { eq: "images/icons/representative/representative.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 60, layout: FIXED)
      }
    }
  }
`

const cssH1 = { fontSize: "4.8rem", marginTop: "4rem" }

const cssSection = {
  display: "flex",
  paddingTop: "3rem",
  paddingBottom: "8rem",
  h2: {
    fontSize: "4.8rem",
  },
  h3: {
    fontSize: "2.1rem",
  },
  flexDirection: "column",
  [media(821)]: {
    flexDirection: "row",
  },
}
const cssSectionWhite = {
  ...cssSection,
  background: "var(--cl-white)",
}
const cssSectionBlack = {
  ...cssSection,
  color: "var(--cl-white)",
  background: "var(--cl-black)",
  h2: {
    ...cssSection.h2,
    color: "var(--cl-white)",
  },
}

const cssPartyTypeCard = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "300px",
  padding: "2rem",
  borderRadius: "10px",
  color: "var(--cl-white)",
  background: "var(--cl-black)",

  width: `calc((var(--container-width) - 4rem) / 2)`,
  "&:hover": {
    background: "var(--cl-gray-0)",
    textDecoration: "none",
  },
  h3: {
    color: "var(--cl-white)",
    fontSize: "3.6rem",
  },
  h4: {
    color: "var(--cl-white)",
    fontSize: "2.4rem",
    fontFamily: "var(--ff-text)",
    fontWeight: "normal",
  },
}

const IndexPage = ({ data }) => {
  const [isZoneDialog, setIsZoneDialog] = React.useState(false)
  const [selected, setSelected] = React.useState()
  const [zones, setZones] = React.useState([])
  return (
    <Layout
      pageStyles={{
        background: "var(--cl-people-section)",
      }}
    >
      <Seo title="Home" />
      {isZoneDialog && selected && (
        <ZoneDialog
          selected={selected}
          zones={zones}
          setIsZoneDialog={setIsZoneDialog}
          allPeople={data.allPeopleYaml.edges}
        />
      )}
      <section
        css={{
          ...cssSection,
        }}
        className="container"
      >
        <div
          css={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "3rem",
            textAlign: "center",
            [media(821)]: {
              alignItems: "start",
            },
          }}
        >
          <h1
            css={{
              fontSize: "6rem",
              fontWeight: "bold",
              marginTop: 0,
              marginBottom: "1rem",
              paddingTop: "6rem",
            }}
          >
            ใครคือผู้แทนของเรา
          </h1>
          <h2
            css={{
              marginBottom: "8rem",
            }}
          >
            ค้นหา ตรวจสอบ โปร่งใส
          </h2>
          <h3
            css={{
              marginTop: "4rem",
            }}
          >
            ค้นหา ส.ส. เขตบ้านเรา
          </h3>
          <Autocomplete
            setIsZoneDialog={setIsZoneDialog}
            setSelected={setSelected}
            selected={selected}
            setZones={setZones}
          />
        </div>
        <Hero />
      </section>

      <section
        css={{
          ...cssSectionWhite,
        }}
      >
        <div className="container">
          <WaffleFilter
            // key="parliament"
            data={data.allPeopleYaml.edges}
          />
        </div>
      </section>

      <section
        css={{
          ...cssSectionBlack,
        }}
      >
        <div className="container">
          <h2 css={{ ...cssH1 }}>สรุปผลการลงมติล่าสุด</h2>
          <div
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginTop: "6rem",
            }}
          >
            {data.allVotelogYaml.edges.map(
              ({ node: { id, fields, ...votelog } }) => (
                <VoteLogCard
                  key={id}
                  css={{
                    width: `calc((var(--container-width) - 4rem) / 2)`,
                    margin: "0 1rem 2rem 1rem",
                  }}
                  slug={fields.slug}
                  {...votelog}
                />
              )
            )}
          </div>
          <div
            css={{
              textAlign: "center",
              margin: "4.8rem 0 0 0",
            }}
          >
            <Button to="/votelog">ดูทั้งหมด</Button>
          </div>
        </div>
      </section>

      <section
        css={{
          ...cssSectionWhite,
        }}
      >
        <div className="container">
          <h2 css={{ ...cssH1 }}>สำรวจตามชนิดและสังกัดผู้แทน</h2>

          <div
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginTop: "6rem",
              gap: "1rem",
            }}
          >
            <Link to={"/cabinet"} css={cssPartyTypeCard}>
              <GatsbyImage
                image={data.cabinetImage.childImageSharp.gatsbyImageData}
                alt=""
                aria-hidden="true"
                css={{ marginBottom: "1.2rem" }}
              />
              <h3>คณะรัฐมนตรี</h3>
              <h4>{data.cabinet.totalCount} คน</h4>
            </Link>
            <Link to={"/senate"} css={cssPartyTypeCard}>
              <GatsbyImage
                image={data.senateImage.childImageSharp.gatsbyImageData}
                alt=""
                aria-hidden="true"
                css={{ marginBottom: "1.2rem" }}
              />
              <h3>สมาชิกวุฒิสภา</h3>
              <h4>{data.senator.totalCount} คน</h4>
            </Link>
          </div>

          <div css={{ marginTop: "4rem" }}>
            <div
              css={{
                marginBottom: "1.2rem",
                textAlign: "center",
              }}
            >
              <GatsbyImage
                style={{ margin: "auto" }}
                image={data.representativeImage.childImageSharp.gatsbyImageData}
                alt=""
                aria-hidden="true"
              />
            </div>
            <h3
              css={{
                fontSize: "3.6rem",
                textAlign: "center",
              }}
            >
              <Link
                to={"/representatives"}
                css={{
                  color: "var(--cl-black)",
                }}
              >
                สมาชิกสภาผู้แทนราษฎร
              </Link>
            </h3>
            <PartyGroupList
              paneHeaderStyle={{
                textAlign: "center",
                fontSize: "2.4rem",
              }}
            />
            <div
              css={{
                textAlign: "center",
                margin: "4.8rem 0 0 0",
              }}
            >
              <Button to="/representatives">ดู ส.ส. ทั้งหมด</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
