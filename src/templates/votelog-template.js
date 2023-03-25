import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import _ from "lodash"

import ExternalLink from "../components/externalLink"
import Layout from "../components/layout"
import Seo from "../components/seo"
import VoterList from "../components/voterList"
import Waffle from "../components/waffle"
import QuantityLegend from "../components/quantityLegend"

import cross from "../images/icons/votelog/cross.png"

import { media } from "../styles"

export const query = graphql`
  query($slug: String!) {
    votelogYaml(fields: { slug: { eq: $slug } }) {
      yamlId
      title
      legal_title
      vote_date(formatString: "DD.M.YYYY")
      description_th
      reference
      document {
        title
        link
      }
      meeting
      passed
      approve
      disprove
      abstained
      absent
      total_voter
      special
      total_people
    }
    voteRecordIcon: file(
      relativePath: { eq: "images/icons/votelog/votelog.png" }
    ) {
      childImageSharp {
        gatsbyImageData(height: 30, layout: FIXED)
      }
    }
    downloadIcon: file(
      relativePath: { eq: "images/icons/download/download.png" }
    ) {
      childImageSharp {
        gatsbyImageData(height: 20, layout: FIXED)
      }
    }
    allPeopleVoteYaml {
      nodes {
        yamlId
        title
        name
        lastname
        votelog {
          key
          value
        }
      }
    }
    allPeopleYaml {
      nodes {
        yamlId
        fields {
          slug
        }
        is_mp
        is_senator
        is_cabinet
        is_active
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
    allPartyYaml {
      edges {
        node {
          fields {
            slug
          }
          name
          images {
            url
          }
        }
      }
    }
  }
`

const cssSection = {
  borderBottom: "0.5rem solid black",
  paddingTop: "3rem",
  paddingBottom: "3rem",
  h2: {
    fontSize: "4.8rem",
    textAlign: "center",
  },
  ".dot": {
    margin: "0 1rem",
    height: "2rem",
    width: "2rem",
    display: "inline-block",
    borderRadius: "50%",
  },
}

const filterVote = (combined, key, value) =>
  _.filter(combined, o => {
    return (
      _.get(
        _.find(o.votelog || [], p => p.key === key),
        "value"
      ) === value
    )
  })

const VotelogPage = ({
  data: {
    votelogYaml,
    voteRecordIcon,
    downloadIcon,
    allPeopleVoteYaml,
    allPeopleYaml,
    allPartyYaml,
  },
}) => {
  const { passed, total_voter, total_people } = votelogYaml

  let combined = []
  allPeopleVoteYaml.nodes.forEach(votelog => {
    const matched = _.find(allPeopleYaml.nodes, ["yamlId", votelog.yamlId])
    combined.push({ ...votelog, ...matched })
  })

  const approve = filterVote(combined, votelogYaml.yamlId, "1")
  const disprove = filterVote(combined, votelogYaml.yamlId, "2")
  const abstained = filterVote(combined, votelogYaml.yamlId, "3")
  const absent = filterVote(combined, votelogYaml.yamlId, "4")
  const special = filterVote(combined, votelogYaml.yamlId, "")

  return (
    <Layout
      pageStyles={{
        background: "#000",
      }}
    >
      <Seo title={votelogYaml.title} imageUrl="/seo/share/votelog.png" />

      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "3rem",
          margin: "5rem auto",
          maxWidth: "min(calc(100% - 2rem), 920px)",
        }}
      >
        <section
          css={{
            ...cssSection,
            paddingBottom: "1rem !important",
            span: {
              fontSize: "3rem",
            },
          }}
        >
          <div className="container">
            <span>
              <GatsbyImage
                image={voteRecordIcon.childImageSharp.gatsbyImageData}
                alt=""
                aria-hidden="true"
                style={{
                  verticalAlign: "middle",
                  display: "inline-block",
                  marginRight: "5px",
                }}
              />
              {votelogYaml.meeting}
              <span
                css={css`
                  float: right;
                `}
              >
                {votelogYaml.vote_date}
              </span>
            </span>
          </div>
        </section>
        <section
          css={{
            ...cssSection,
            paddingBottom: "1rem !important",
            span: {
              fontSize: "3rem",
            },
          }}
        >
          <div
            className="container"
            css={css`
              margin-bottom: 3rem;
            `}
          >
            {" "}
            <h1
              css={{
                marginTop: 0,
              }}
            >{`${votelogYaml.title}`}</h1>
            <p
              css={css`
                font-size: 2rem;
              `}
            >
              {votelogYaml.legal_title}
            </p>
          </div>
          <div
            css={{
              [media(767)]: {
                display: "flex",
                justifyContent: "space-between",
              },
            }}
          >
            <span>
              สถานะ{" "}
              {passed ? (
                <span
                  css={css`
                    color: var(--cl-vote-yes);
                  `}
                >
                  <span
                    className="dot"
                    css={{
                      backgroundColor: "var(--cl-vote-yes)",
                    }}
                  ></span>
                  ผ่าน
                </span>
              ) : (
                <span
                  css={css`
                    color: var(--cl-vote-no);
                  `}
                >
                  <span
                    className="dot"
                    css={{
                      backgroundColor: "var(--cl-vote-no)",
                    }}
                  ></span>
                  ไม่ผ่าน
                </span>
              )}
            </span>

            <span
              css={{
                display: "block",
              }}
            >
              ผู้เข้าร่วมประชุม {total_voter} คน
              <span
                css={{
                  color: "#C5C5C5",
                }}
              >
                /{total_people.toLocaleString()}
              </span>{" "}
              คน
            </span>
          </div>
        </section>
        <section
          css={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            ...cssSection,
          }}
        >
          <div
            css={{ display: "flex", flexWrap: "wrap", marginBottom: "4rem" }}
          >
            <QuantityLegend
              text="เห็นด้วย"
              boxSize={10}
              quantity={votelogYaml.approve}
              background="var(--cl-vote-yes)"
            />
            <QuantityLegend
              text="ไม่เห็นด้วย"
              boxSize={10}
              quantity={votelogYaml.disprove}
              background="var(--cl-vote-no)"
            />
            <QuantityLegend
              text="งดออกเสียง"
              boxSize={10}
              quantity={votelogYaml.abstained}
              background="var(--cl-vote-abstained)"
            />
            <QuantityLegend
              text="ไม่ลงคะแนน"
              boxSize={10}
              quantity={votelogYaml.absent}
            />
            <QuantityLegend
              text="ไม่เข้าประชุม"
              boxSize={8}
              quantity={votelogYaml.special}
              imgSrc={cross}
            />
          </div>
          <Waffle
            data={[
              approve.map(p => ({ node: p })),
              disprove.map(p => ({ node: p })),
              abstained.map(p => ({ node: p })),
              absent.map(p => ({ node: p })),
              special.map(p => ({ node: p })),
            ]}
            colors={[
              `var(--cl-vote-yes)`,
              `var(--cl-vote-no)`,
              `var(--cl-vote-abstained)`,
              `var(--cl-vote-absent)`,
              `var(--cl-vote-absent)`,
            ]}
            borderColors={[
              `var(--cl-vote-yes)`,
              `var(--cl-vote-no)`,
              `var(--cl-vote-abstained)`,
              `var(--cl-black)`,
              `var(--cl-vote-absent)`,
            ]}
            crossLast={true}
            parties={allPartyYaml.edges.map(e => e.node)}
          />
        </section>
        <section
          css={{
            ...cssSection,
            fontSize: "2rem",
          }}
        >
          <h1>เนื้อหา</h1>
          <p>{votelogYaml.description_th}</p>
          <p
            css={css`
              font-weight: bold;
              padding-top: 2em;
            `}
          >
            อ้างอิง
          </p>
          <ExternalLink
            href={votelogYaml.reference}
            css={css`
              :hover {
                color: var(--cl-black);
              }
            `}
          >
            <p>{votelogYaml.reference}</p>
          </ExternalLink>
          <p
            css={css`
              font-weight: bold;
              padding-top: 2em;
            `}
          >
            เอกสารการลงมติ
          </p>
          <button
            css={css`
              display: flex;
              flex-flow: row wrap;
              padding: 0;
              border: none;
              background: none;
              width: 100%;
              border-radius: 5px;
              pointer-events: none;
              &:focus {
                outline: none;
              }
              text-align: left;
            `}
            type="button"
          >
            {votelogYaml.document
              .filter(doc => doc.link)
              .map(doc => (
                <ExternalLink
                  key={doc.link}
                  href={doc.link}
                  css={css`
                    color: var(--cl-black);
                    :hover {
                      color: var(--cl-black);
                    }
                  `}
                >
                  <span
                    css={css`
                      font-size: 2.4rem;
                      font-family: var(--ff-title);
                      line-height: 3rem;
                      cursor: pointer;
                      border-radius: 5px;
                      padding: 1rem 1rem;
                      margin-right: 1rem;
                      margin-bottom: 1rem;
                      display: block;
                      background-color: var(--cl-pink);
                      pointer-events: auto;
                    `}
                  >
                    <GatsbyImage
                      image={downloadIcon.childImageSharp.gatsbyImageData}
                      alt=""
                      aria-hidden="true"
                      css={{ marginRight: "1rem", display: "inline-block" }}
                    />
                    {doc.title || "เอกสาร"}
                  </span>
                </ExternalLink>
              ))}
          </button>
        </section>
        <section>
          <div className="container">
            <h1>บันทึกคะแนนเสียง</h1>
            <VoterList data={[approve, disprove, abstained, absent]} />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default VotelogPage
