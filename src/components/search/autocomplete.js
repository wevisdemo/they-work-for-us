import React from "react"
import axios from "axios"
import Select, { components } from "react-select"
import Highlighter from "react-highlight-words"

const getLocationOptions = () => axios.get("/content/locations.json")
const getZones = () => axios.get("/content/zones.json")

const Autocomplete = ({ setIsZoneDialog, setSelected, selected, setZones }) => {
  const [locationOptions, setLocationOptions] = React.useState([])
  const [inputChange, setinputChange] = React.useState()

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
            highlightStyle={{
              fontWeight: "bold",
              background: "transparent",
            }}
          />
        </components.Option>
      )
    },
    [inputChange]
  )

  const handleOnSearch = value => {
    setIsZoneDialog(true)
    setSelected(value)
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Select
          styles={{
            control: baseStyles => ({
              ...baseStyles,
              width: "300px",
              height: "5rem",
              border: "3px solid #000000",
              borderRadius: " 4px 0 0 4px",
              textAlign: "start",
            }),
            menu: baseStyles => ({
              ...baseStyles,
              textAlign: "start",
            }),
          }}
          options={locationOptions}
          placeholder="พิมพ์ชื่อเขต/อำเภอ"
          noOptionsMessage={() => "ไม่มีชื่อเขต/อำเภอนี้"}
          onChange={({ value }) => handleOnSearch(value)}
          onInputChange={value => setinputChange(value)}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
            Option: customOption,
          }}
        />
      </div>
    </div>
  )
}

export default Autocomplete
