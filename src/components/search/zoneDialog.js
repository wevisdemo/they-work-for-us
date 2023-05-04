import React from "react"
import { Link } from "gatsby"
import PeopleAvatar from "../peopleAvatar"
import { media } from "../../styles"

const ZoneDialog = ({ selected, zones, setIsZoneDialog, allPeople }) => {
  const cssBgDialog = {
    display: "flex",
    position: "fixed",
    height: "100%",
    width: "100%",
    maxWidth: "100vw",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "999",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  }
  const cssDialog = {
    position: "relative",
    background: "white",
    width: "100%",
    height: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "scroll",
    padding: "1rem",
    [media(821)]: {
      maxWidth: "850px",
      maxHeight: "650px",
    },
  }
  const cssCard = {
    display: "flex",
    color: "black",
    marginTop: "1rem",
    border: "1px solid #9F9F9F",
    borderRadius: "10px",
    padding: "2rem",
    "&:hover": {
      backgroundColor: "var(--cl-gray-4)",
      textDecoration: "none",
    },
  }
  const imagePeople = {
    border: "2px solid #222222",
    borderRadius: "99px",
    overflow: "hidden",
    marginRight: "2.7rem",
    maxWidth: "5rem",
    maxHeight: "5rem",
    [media(821)]: {
      maxWidth: "8.3rem",
      maxHeight: "8.3rem",
    },
  }

  const filteredZones = React.useMemo(() => {
    if (!selected || !zones) return []
    return zones
      .filter(({ province: p }) => p === selected.electionZones[0].province)
  }, [selected, zones])

  const filteredPeoples = React.useMemo(() => {
    if (!selected || !zones) return []

    return selected.electionZones.reduce((acc, z) => [
      ...acc,
      ...allPeople.filter(({ node }) => node.mp_type === "แบ่งเขต"
        && node.mp_province === selected.electionZones[0].province
        && selected.electionZones[0].zones.includes(node.mp_zone))
    ], [])
  }, [allPeople, selected, zones])

  const filterdArea = zone => filteredZones.filter(z => z.zone === parseInt(zone))


  const title = () => `ส.ส. ใน ${selected.label}`

  const handleOnClose = () => {
    setIsZoneDialog(false)
  }

  return (
    <div css={{ ...cssBgDialog }}>
      <div css={{ ...cssDialog }}>
        <button
          style={{
            position: "sticky",
            top: "0px",
            left: "100%",
            padding: "10px",
            cursor: "pointer",
            border: "none",
            background: "white",
          }}
          onClick={handleOnClose}
        >
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="22"
              width="31"
              height="4.88889"
              transform="rotate(-45 1 22)"
              fill="black"
            />
            <rect
              x="4"
              width="31"
              height="4.88889"
              transform="rotate(45 4 0)"
              fill="black"
            />
          </svg>
        </button>
        <div
          style={{
            fontSize: "2.8rem",
            marginTop: "3rem",
            marginBottom: "2rem",
            fontWeight: "700",
          }}
        >
          {title()}
        </div>
        <div>
          {filteredPeoples.map(({ node }, key) => {
            const { title, name, lastname, mp_province, mp_zone, party } = node

            return (
              <Link
                key={key}
                css={{ ...cssCard }}
                to={`/people/${name}-${lastname}`}
              >
                <div css={{ ...imagePeople }}>
                  <PeopleAvatar {...node} />
                </div>
                <div>
                  <div
                    css={{
                      fontSize: "1.8rem",
                      [media(821)]: {
                        fontSize: "2.4rem",
                      },
                    }}
                  >{`${title} ${name} ${lastname}`}</div>
                  <div
                    css={{
                      fontSize: "1.6rem",
                      [media(821)]: {
                        fontSize: "1.8rem",
                      },
                    }}
                  >
                    <div>
                      {`ส.ส. แบ่งเขต จังหวัด${mp_province}, เขต ${mp_zone}`}
                    </div>
                    <div style={{ color: "var(--cl-gray-1)" }}>
                      (
                      {filterdArea(mp_zone)[0]
                        .areas.map(area => `อำเภอ${area}`)
                        .join(" + ")}
                      )
                    </div>
                    <div>พรรค{party}</div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ZoneDialog
