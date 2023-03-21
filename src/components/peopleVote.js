import React, { useState } from "react"
import { Link } from "gatsby"
import _ from "lodash"
import dayjs from "dayjs"

import { formatDate } from "../utils"
import VoteSearchInput from "./votesearch/VoteSearchInput"

const cssSection = { paddingBottom: "8rem" }
const cssSectionWhite = {
  ...cssSection,
  background: "var(--cl-white)",
}

const filterChoice = [
  { text: "ทั้งหมด", choice: 0 },
  { text: "เห็นด้วย", choice: 1 },
  { text: "ไม่เห็นด้วย", choice: 2 },
  { text: "งดออกเสียง", choice: 3 },
  { text: "ไม่ลงคะแนน", choice: 4 },
]

const voteColor = {
  "1": "var(--cl-vote-yes)",
  "2": "var(--cl-vote-no)",
  "3": "var(--cl-vote-abstained)",
  "4": "#272727",
  "": "-",
}

const voteText = {
  "1": "เห็นด้วย",
  "2": "ไม่เห็นด้วย",
  "3": "งดออกเสียง",
  "4": "ไม่ลงคะแนน",
  "": "-",
}

const PeopleVoteCard = ({ choice, fields, title, vote_date }) => (
  <Link
    to={fields.slug}
    css={{
      display: "block",
      color: "var(--cl-black)",
      padding: "0.5rem 2rem",
      fontSize: "2.4rem",
      borderRadius: 4,
      border: "1px solid black",
      borderLeft: `1rem solid ${voteColor[choice]}`,
      margin: "20px 0px",
      "&:hover": {
        textDecoration: "none",
      },
    }}
  >
    <div
      css={{
        color: choice === "3" ? "var(--cl-black)" : voteColor[choice],
        margin: "15px 0px",
        fontSize: "2.4rem",
      }}
    >
      <div
        css={{
          display: "inline-block",
          height: 15,
          width: 15,
          marginRight: 10,
          backgroundColor: voteColor[choice],
        }}
      ></div>
      {voteText[choice]}
    </div>
    <p css={{ fontFamily: "var(--ff-title)", fontSize: "2.4rem" }}>{title}</p>
    <p css={{ fontSize: "1.5rem", margin: "15px 0px" }}>
      {formatDate(vote_date)}
    </p>
  </Link>
)

const PeopleVote = ({ allVote, partyHistory }) => {
  const [statusFilter, setStatusFilter] = useState(0)
  const [titleFilter, setTitleFilter] = useState("")
  const [partyFilter, setPartyFilter] = useState(0)

  const matchConsecutiveSpaces = /\s+/g

  const applyStatusFilter = ({ choice }) =>
    statusFilter === 0 || choice === String(statusFilter)

  const applyTitleFilter = ({ title, legal_title }) =>
    new RegExp(
      titleFilter.trim().replace(matchConsecutiveSpaces, "|"),
      "g"
    ).test(title + legal_title)

  const applyPartyFilter = ({ vote_date }, dateRange) =>
    !dateRange ||
    (dayjs(vote_date).isAfter(dateRange[0], "date") &&
      dayjs(vote_date).isBefore(dateRange[1], "date"))

  const filteredVotes = allVote.filter(
    vote =>
      applyStatusFilter(vote) &&
      applyTitleFilter(vote) &&
      applyPartyFilter(vote, partyHistory[partyFilter]?.dateRange)
  )

  return (
    <section
      css={{
        ...cssSectionWhite,
        paddingTop: "6rem",
      }}
    >
      <div className="container">
        <h2
          css={{
            fontSize: "4.8rem",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          สรุปการลงมติในสภา
        </h2>
        <div
          css={{
            display: "block",
            listStyle: "none",
            textAlign: "center",
            marginBottom: "2.4rem",
            "> button": {
              display: "inline-block",
              fontSize: "2.4rem",
              padding: "1rem 0 0",
              margin: "0 1rem",
              cursor: "pointer",
              background: "transparent",
              border: "none",
              lineHeight: 1.5,
              "&.active": {
                borderBottom: "8px solid var(--cl-black)",
              },
            },
          }}
          role="tablist"
        >
          {filterChoice.map(({ text, choice }) => (
            <button
              type="button"
              key={choice}
              className={statusFilter === choice ? "active" : ""}
              role="tab"
              onClick={() => setStatusFilter(choice)}
              style={
                statusFilter === choice
                  ? {
                      borderBottomColor: voteColor[choice],
                    }
                  : null
              }
            >
              {text}
            </button>
          ))}
        </div>

        {partyHistory.length > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2.4rem",
              fontSize: 21,
            }}
          >
            <strong style={{ marginRight: 10 }}>สังกัดพรรค</strong>
            <select
              style={{
                padding: 6,
                borderColor: "#bdbdbd",
                backgroundColor: "white",
                borderRadius: 5,
              }}
              onChange={({ target }) => setPartyFilter(+target.value)}
              value={`${partyFilter}`}
            >
              {partyHistory.map(({ partyName, dateRange }, i) => (
                <option key={partyName} value={i}>
                  {partyName} (
                  {
                    allVote.filter(vote => applyPartyFilter(vote, dateRange))
                      .length
                  }{" "}
                  มติ)
                </option>
              ))}
            </select>
          </div>
        )}

        <VoteSearchInput
          value={titleFilter}
          onChangeText={text => setTitleFilter(text)}
        />

        {filteredVotes.length > 0 ? (
          filteredVotes.map(vote => (
            <PeopleVoteCard key={vote.yamlId} {...vote}></PeopleVoteCard>
          ))
        ) : (
          <div
            css={{
              textAlign: "center",
              margin: "6rem 0",
              color: "var(--cl-gray-2)",
            }}
          >
            ไม่พบการลงมติจากเงื่อนไขที่เลือก
          </div>
        )}
      </div>
    </section>
  )
}

export default function PeopleVoteComponent({
  peopleVoteYaml,
  allVotelogYaml,
  partyHistory,
}) {
  const voteLogs = peopleVoteYaml.votelog || []
  const allVotes = [...allVotelogYaml.nodes]
  // merge allVote and voteLog into allVote
  allVotes.forEach(vote => {
    const matchedVotelog = _.find(voteLogs, ["key", vote.yamlId])
    if (matchedVotelog) {
      vote.choice = matchedVotelog.value
    }
  })
  const sortedAllVotes = allVotes
    .filter(vote => vote.choice)
    .sort((a, b) => {
      return b.vote_date.localeCompare(a.vote_date)
    })

  return <PeopleVote allVote={sortedAllVotes} partyHistory={partyHistory} />
}
