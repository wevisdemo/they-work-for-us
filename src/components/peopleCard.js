import React from "react"
import { media } from "../styles"
import PeopleAvatar from "./peopleAvatar"

export const ProfilePicture = props => {
  let className = "profile-picture"
  if (!props.is_active) {
    className += " in-active"
  }

  return (
    <div
      className={className}
      css={{
        flex: "0 0 84px",
        borderRadius: 84,
        width: 84,
        height: 84,
        marginBottom: 0,
        marginRight: "2rem",
        border: "2px solid var(--cl-black)",
        background: "var(--cl-gray-2) no-repeat",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&.in-active": {
          "> .avatar": {
            opacity: 0.5,
          },
          "> img": {
            opacity: 0.5,
          },
        },
      }}
    >
      <PeopleAvatar {...props} />

      {!props.is_active ? (
        <div
          css={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            color: "var(--cl-white)",
            fontSize: "1.2rem",
          }}
        >
          <span>พ้นจาก</span>
          <span>ตำแหน่ง</span>
        </div>
      ) : null}
    </div>
  )
}

const cssName = {
  fontFamily: "var(--ff-title)",
  fontSize: "2.4rem",
  lineHeight: 1.2,
  marginBottom: "0.5rem",
}

const MPInfo = ({
  title,
  name,
  lastname,
  mp_type,
  mp_list,
  mp_province,
  mp_zone,
  party,
  people_party_history,
}) => (
  <div className="card-info">
    <div
      className="card-name"
      css={cssName}
    >{`${title} ${name} ${lastname}`}</div>
    <div className="card-description">
      {mp_type === "บัญชีรายชื่อ"
        ? `ส.ส. ${mp_type}` + (mp_list ? ` ลำดับที่ ${mp_list}` : ``)
        : `ส.ส. ${mp_type} จังหวัด${mp_province} เขต ${mp_zone}`}{" "}
      พรรค{`${party}`}
    </div>
    {people_party_history?.filter(({ party }) => party.id !== null).length >
      1 && (
      <div>
        <span
          style={{
            backgroundColor: "#FEE5F2",
            borderRadius: 100,
            padding: "2px 6px",
            fontSize: 14,
          }}
        >
          เคยย้ายพรรค
        </span>
      </div>
    )}
  </div>
)

const SenatorInfo = props => (
  <div className="card-info">
    <div
      className="card-name"
      css={cssName}
    >{`${props.title} ${props.name} ${props.lastname}`}</div>
    <div className="card-description">สมาชิกวุฒิสภา</div>
  </div>
)

const memberDetailsCss = {
  fontSize: "1.8rem",
  fontFamily: "var(--ff-text)",
}

const CabinetInfo = props => (
  <div className="card-info">
    <div
      className="card-name"
      css={cssName}
    >{`${props.title} ${props.name} ${props.lastname}`}</div>
    <div className="card-description" css={memberDetailsCss}>
      {props.cabinet_position}
    </div>
    {props.party ? <div css={memberDetailsCss}>พรรค{props.party}</div> : null}
  </div>
)

const PeopleCard = ({ type, ...props }) => {
  let peopleInfo
  if (type === "mp" || props.is_mp) {
    peopleInfo = MPInfo(props)
  } else if (type === "senator" || props.is_senator) {
    peopleInfo = SenatorInfo(props)
  } else if (type === "cabinet" || props.is_cabinet) {
    peopleInfo = CabinetInfo(props)
  }

  return (
    <a
      target="_blank"
      rel="noreferrer nofollow noopener"
      href={props.fields.slug}
      key={props.id}
      className={props.className}
      css={{
        display: "flex",
        flex: "0 1 455px",
        padding: "4rem",
        paddingRight: "2rem",
        border: "1px solid var(--cl-gray-2)",
        borderRadius: "1rem",
        background: "var(--cl-white)",
        marginBottom: "1rem",
        fontSize: "1.8rem",
        [media(767)]: {
          "&:nth-of-type(2n+1)": {
            marginRight: "1rem",
          },
        },
        color: "inherit",
        "&:hover": {
          textDecoration: "none",
        },
      }}
      style={{ ...(props.style || {}) }}
    >
      <ProfilePicture {...props}></ProfilePicture>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {peopleInfo}
      </div>
    </a>
  )
}

export default PeopleCard
