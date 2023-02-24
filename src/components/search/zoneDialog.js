import React from "react"
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
    marginTop: "1rem",
    border: "1px solid #9F9F9F",
    borderRadius: "10px",
    padding: "2rem",
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

  const [province, area] = selected.split(" ")
  const filteredZones = React.useMemo(() => {
    if (!selected || !zones) return []
    return zones
      .filter(({ province: p }) => p === province)
      .filter(({ areas }) => areas.includes(area))
  }, [selected, zones])

  const filteredPeoples = React.useMemo(() => {
    if (!selected || !zones) return []
    const zonesArray = filteredZones.map(z => String(z.zone))
    return allPeople
      .filter(({ node }) => node.mp_province === province)
      .filter(({ node }) => zonesArray.includes(node.mp_zone))
  }, [allPeople, selected])

  const filterdArea = zone => {
    return filteredZones.filter(z => z.zone === parseInt(zone))
  }

  const title = () => {
    const word = selected.split(" ")
    return `ส.ส. ใน ‘อ. ${word[1]} จ. ${word[0]}’`
  }

  React.useEffect(() => {
    if (selected) {
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
    }
  }, [])

  const handleOnClose = () => {
    setIsZoneDialog(false)
    document.body.style.position = "unset"
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
          {filteredPeoples.map((item, key) => (
            <div key={key} css={{ ...cssCard }}>
              {(() => {
                const {
                  title,
                  name,
                  lastname,
                  mp_province,
                  mp_zone,
                  party,
                } = item.node
                return (
                  <div style={{ display: "flex" }}>
                    <div css={{ ...imagePeople }}>
                      <PeopleAvatar {...item.node} />
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
                  </div>
                )
              })()}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ZoneDialog
