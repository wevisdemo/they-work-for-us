import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { formatNumber, ageFromBirthdate } from "../utils"
import ExternalLink from "../components/externalLink"
import OfficialWebsite from "../components/profile/officialWebsite"
import PeopleVote from "../components/peopleVote"
import PeopleStatus from "../components/peopleStatus"

import { hr } from "./people-template.module.css"
import "../styles/profile-book.css"
import PeopleAvatar from "../components/peopleAvatar"

export const query = graphql`
  query($slug: String!, $name: String!, $lastname: String!, $party: String!) {
    person: peopleYaml(fields: { slug: { eq: $slug } }) {
      yamlId
      title
      name
      lastname
      gender
      birthdate
      education
      graduation
      degree
      ex_occupation
      cabinet_position
      is_cabinet
      is_senator
      is_mp
      is_active
      mp_type
      mp_province
      mp_zone
      mp_list
      vote
      senator_method
      party
      asset
      facebook
      twitter
      people_party_history {
        established_date
        party {
          name
        }
      }
      images {
        url
      }
    }
    peopleVoteYaml(name: { eq: $name }, lastname: { eq: $lastname }) {
      votelog {
        key
        value
      }
    }
    partyYaml(name: { eq: $party }) {
      color
    }
    allVotelogYaml(filter: { is_active: { eq: true } }) {
      nodes {
        yamlId
        fields {
          slug
        }
        title
        description_th
        legal_title
        vote_date
      }
    }
    infoImage: file(relativePath: { eq: "images/icons/info/info.png" }) {
      childImageSharp {
        gatsbyImageData(height: 24, layout: FIXED)
      }
    }
  }
`

const cssH1 = {
  fontSize: "4rem",
}

const cssH2 = { fontSize: "2.4rem" }

const cssSection = {
  paddingTop: "3rem",
  paddingBottom: "8rem",
  h2: {
    fontSize: "4.8rem",
    textAlign: "center",
  },
}
const cssSectionBlack = {
  ...cssSection,
  color: "var(--cl-white)",
  background: "var(--cl-black)",
  h2: {
    ...cssSection.h2,
    color: "var(--cl-white)",
  },
  blockquote: {
    color: "var(--cl-white)",
    lineHeight: 1.8,
    border: "none",
    fontSize: "3.6rem",
    fontStyle: "normal",
    fontFamily: "var(--ff-title)",
  },
}

const cssEngTitle = {
  fontSize: "2.4rem",
  textAlign: "left",
  margin: "1.5rem 0 1.2rem 0",
}

const cssRightPage = {
  fontSize: "1.8rem",
  p: {
    marginBottom: "1rem",
  },
  a: {
    color: "var(--cl-black)",
    textDecoration: "underline",
  },
  ".official-website a": {
    textDecoration: "none",
  },
}

const MPParty = ({ person, partyHistory }) => {
  if (!person.is_mp) return null

  return (
    <div>
      <p css={{ fontWeight: "bold" }}>
        {person.party ? (
          <Link to={`/party/${person.party}`}>พรรค {person.party}</Link>
        ) : (
          "ไม่สังกัดพรรค"
        )}
      </p>
      {partyHistory.length > 1 && (
        <div css={{ fontSize: 14, color: "var(--cl-gray-1)" }}>
          พรรคที่เคยสังกัด :
          <ul css={{ marginLeft: 0, marginBottom: "1rem" }}>
            {partyHistory.slice(1).map(({ partyName, dateRange }, i) => (
              <li key={i} css={{ listStyle: "none" }}>
                <strong>{partyName}</strong> (
                {dateRange
                  .map(date =>
                    new Date(date).toLocaleDateString("TH-th", {
                      dateStyle: "medium",
                    })
                  )
                  .join(" - ")}
                )
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const PersonAffiliation = person => (
  <div>
    {!person.is_cabinet ? null : (
      <p css={{ fontWeight: "bold" }}>คณะรัฐมนตรี</p>
    )}

    {!person.is_senator ? null : (
      <p css={{ fontWeight: "bold" }}>สมาชิกวุฒิสภา {person.senator_method}</p>
    )}

    {!person.is_mp ? null : person.mp_type === "แบ่งเขต" ? (
      <p css={{ fontWeight: "bold" }}>
        สมาชิกสภาผู้แทนราษฎร แบ่งเขต จังหวัด {person.mp_province}
        เขต {person.mp_zone} จากคะแนนโหวต {formatNumber(person.vote)} คะแนน
      </p>
    ) : (
      <p css={{ fontWeight: "bold" }}>
        สมาชิกสภาผู้แทนราษฎร บัญชีรายชื่อ ลำดับที่ {person.mp_list}
      </p>
    )}
  </div>
)

const PersonPosition = person => (
  <div css={{ fontSize: "1.4rem" }}>
    {person.cabinet_position.length > 0 ? (
      <p>
        {person.cabinet_position.map((pos, i) => (
          <span key={pos}>
            {i > 0 && ", "}
            {pos}{" "}
          </span>
        ))}
      </p>
    ) : null}
  </div>
)

const PersonRecord = person => (
  <p>
    <span>
      <strong>เพศ</strong> {person.gender}
    </span>{" "}
    <span>
      <strong>อายุ</strong> {ageFromBirthdate(person.birthdate)} ปี
    </span>{" "}
    <span>
      <strong>การศึกษา</strong> {person.education}
    </span>{" "}
    <span>
      {person.graduation}
      {person.degree ? ` (${person.degree})` : null}
    </span>{" "}
    <span>
      <strong>อาชีพเดิม</strong> {person.ex_occupation}
    </span>
  </p>
)

const LinkPoliticsAndBusiness = (name, lastname, party) => {
  return (
    <ExternalLink
      href={`https://elect.in.th/politics-and-business/#/p/${party}/person/${name} ${lastname}`}
    >
      <strong>ตรวจสอบประวัติทางธุรกิจ</strong>
    </ExternalLink>
  )
}

const PersonFinance = person => (
  <p>
    <span>
      <strong>ทรัพย์สิน</strong>{" "}
      {person.asset === null
        ? "ไม่มีข้อมูล"
        : `${formatNumber(person.asset, 2)} บาท`}
    </span>{" "}
    <span>
      <strong>หนี้สิน</strong>{" "}
      {/* 
            'debt' is always null from data source (NocoDB) which caused error on this page query.
            Re-enable the query above once debt has some level of availability.
        */
      person.debt === null || person.debt === undefined
        ? "ไม่มีข้อมูล"
        : `${formatNumber(person.debt, 2)} บาท`}
    </span>{" "}
    {person.mp_type !== "" &&
      LinkPoliticsAndBusiness(person.name, person.lastname, person.party)}
  </p>
)

const PeoplePage = props => {
  const {
    person,
    peopleVoteYaml,
    partyYaml,
    allVotelogYaml,
    ...data
  } = props.data

  const pageBGColor = partyYaml !== null ? partyYaml.color : "var(--cl-gray-4)"
  const personFullName = `${person.title} ${person.name} ${person.lastname}`

  const partyHistory = person.people_party_history
    .sort((a, z) => z.established_date.localeCompare(a.established_date))
    .map(({ party, established_date }, i) => ({
      partyName: party?.name,
      dateRange: [
        established_date,
        i > 0
          ? person.people_party_history[i - 1].established_date
          : new Date(),
      ],
    }))
    .filter(({ partyName }) => partyName)

  return (
    <Layout
      pageStyles={{
        background: pageBGColor,
      }}
    >
      <Seo title={personFullName} imageUrl="/seo/share/people.png" />

      <section className="section">
        <div className="book">
          <div className="page leftPage">
            <div css={{ textAlign: "center", marginTop: "5rem" }}>
              <div
                css={{
                  height: 160,
                  width: 160,
                  borderRadius: 80,
                  margin: "0 auto",
                  overflow: "hidden",
                  marginBottom: 20,
                }}
              >
                <PeopleAvatar {...person} />
              </div>
              <h1 css={{ ...cssH1, margin: "1rem 0 0 0" }}>{personFullName}</h1>
              <PeopleStatus isActive={person.is_active} />
            </div>
          </div>
          <div className="page" css={cssRightPage}>
            <h2 css={{ ...cssH2, marginTop: "1rem", textAlign: "center" }}>
              <GatsbyImage
                image={data.infoImage.childImageSharp.gatsbyImageData}
                alt=""
                aria-hidden="true"
                style={{
                  verticalAlign: "bottom",
                  margin: "0 0.8rem",
                  display: "inline-block",
                }}
              />
              ข้อมูลพื้นฐาน
            </h2>
            <hr className={hr} />
            <MPParty person={person} partyHistory={partyHistory}></MPParty>
            <PersonAffiliation {...person}></PersonAffiliation>
            <PersonPosition {...person}></PersonPosition>

            <hr className={hr} />

            <PersonRecord {...person}></PersonRecord>

            <hr className={hr} />

            <PersonFinance {...person}></PersonFinance>

            <hr className={hr} />

            <h2 css={{ ...cssEngTitle }}>Official Website</h2>
            <OfficialWebsite {...person}></OfficialWebsite>
          </div>
        </div>
      </section>

      {person.is_mp && peopleVoteYaml && (
        <PeopleVote
          peopleVoteYaml={peopleVoteYaml}
          allVotelogYaml={allVotelogYaml}
          partyHistory={partyHistory}
        />
      )}
    </Layout>
  )
}

export default PeoplePage
