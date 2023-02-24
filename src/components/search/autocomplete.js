import React from "react"
import axios from "axios"
import Select, { components } from "react-select"
import Highlighter from "react-highlight-words"

const getLocationOptions = () => axios.get("/content/locations.json")
const getZones = () => axios.get("/content/zones.json")

const Autocomplete = ({ setIsZoneDialog, setSelected, selected, setZones }) => {
  const [locationOptions, setLocationOptions] = React.useState([])
  const [inputChange, setinputChange] = React.useState()

  const cssBtn = {
    cursor: "pointer",
    fontSize: "1.8rem",
    display: "inline-block",
    padding: "1rem",
    background: "var(--cl-black)",
    color: "var(--cl-white)",
    fontFamily: "var(--ff-title)",
    border: "1px solid #000000",
    borderRadius: " 0 4px 4px 0",
    display: "flex",
    alignItems: "center",
  }

  React.useEffect(() => {
    let ignore = false

    Promise.all([getLocationOptions(), getZones()]).then(results => {
      if (!ignore) {
        setLocationOptions(results[0].data)
        setZones(results[1].data)
      }
    })
    return () => {
      ignore = true
    }
  }, [])

  const customOption = React.useCallback(
    props => {
      const { children } = props

      return (
        <components.Option {...props}>
          <Highlighter
            searchWords={[inputChange]}
            textToHighlight={children}
            highlightStyle={{ fontWeight: "bold", background: "transparent" }}
          />
        </components.Option>
      )
    },
    [inputChange]
  )

  const handleOnSearch = () => {
    if (selected) setIsZoneDialog(true)
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Select
          styles={{
            control: baseStyles => ({
              ...baseStyles,
              width: "250px",
              height: "5rem",
              border: "3px solid #000000",
              borderRadius: " 4px 0 0 4px",
            }),
          }}
          options={locationOptions}
          placeholder="พิมพ์ชื่อเขต/อำเภอ"
          noOptionsMessage={() => "ไม่มีชื่อเขต/อำเภอนี้"}
          onChange={({ value }) => setSelected(value)}
          onInputChange={value => setinputChange(value)}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
            Option: customOption,
          }}
        />

        <button css={{ ...cssBtn }} onClick={handleOnSearch}>
          ค้าหา
          <svg
            style={{ marginLeft: "1rem" }}
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289L9.84315 0.928932C9.45262 0.538408 8.81946 0.538408 8.42893 0.928932C8.03841 1.31946 8.03841 1.95262 8.42893 2.34315L14.0858 8L8.42893 13.6569C8.03841 14.0474 8.03841 14.6805 8.42893 15.0711C8.81946 15.4616 9.45262 15.4616 9.84315 15.0711L16.2071 8.70711ZM0.5 9H15.5V7H0.5V9Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Autocomplete
