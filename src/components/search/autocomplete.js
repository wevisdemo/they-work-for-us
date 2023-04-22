import React from "react"
import axios from "axios"
import { customOption } from "./customOption"
import AsyncSelect from "react-select/async"
const getLocationOptions = () => axios.get("/content/locations.json")
const getZones = () => axios.get("/content/zones.json")

const Autocomplete = ({ setIsZoneDialog, setSelected, setZones }) => {
  const [locationOptions, setLocationOptions] = React.useState([])
  const [defaultOptions, setDefaultOptions] = React.useState([])
  const [inputChange, setInputChange] = React.useState()

  React.useEffect(() => {
    let ignore = false

    Promise.all([getLocationOptions(), getZones()]).then(results => {
      if (!ignore) {
        setLocationOptions(results[0].data)
        setZones(results[1].data)

        if (results[0].data.length > 10) {
          setDefaultOptions(results[0].data.slice(0, 10))
        } else {
          setDefaultOptions(results[0].data)
        }
      }
    })
    return () => {
      ignore = true
    }
  }, [])

  const handleOnSearch = value => {
    setIsZoneDialog(true)
    setSelected(value)
  }

  const filterOptions = inputValue => {
    return locationOptions
      .filter(o => o.label.indexOf(inputValue) > -1)
      .slice(0, 10)
  }

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterOptions(inputValue))
    }, 300)
  }

  return (
    <div>
      <div style={{ display: "flex", position: "relative" }}>
        <AsyncSelect
          styles={{
            control: baseStyles => ({
              ...baseStyles,
              width: "300px",
              height: "5rem",
              border: "3px solid #000000",
              borderRadius: "4px",
              textAlign: "start",
              cursor: "pointer",
            }),
            menu: baseStyles => ({
              ...baseStyles,
              textAlign: "start",
            }),
          }}
          cacheOptions
          loadOptions={loadOptions}
          placeholder="พิมพ์ชื่อเขต/อำเภอ"
          noOptionsMessage={() => "ไม่มีชื่อเขต/อำเภอนี้"}
          onChange={e => {
            handleOnSearch(e)
          }}
          onInputChange={value => setInputChange(value)}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
            Option: e => customOption(e, inputChange),
          }}
          defaultOptions={defaultOptions}
        />
        <div
          style={{
            position: "absolute",
            right: "10px",
            top: "55%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.1368 11.1207C19.1368 15.7381 15.3936 19.4812 10.7763 19.4812C6.15889 19.4812 2.41577 15.7381 2.41577 11.1207C2.41577 6.50337 6.15889 2.76026 10.7763 2.76026C15.3936 2.76026 19.1368 6.50337 19.1368 11.1207Z"
              stroke="black"
              stroke-width="4"
            />
            <rect
              width="4"
              height="16.5821"
              transform="matrix(0.707107 -0.707106 0.707107 0.707106 15.0305 17.5144)"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Autocomplete
