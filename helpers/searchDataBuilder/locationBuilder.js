const postcodes = require("../../src/contents/postcode_62.json")
const zones = require("../../src/contents/zones_62.json")
const fs = require("fs")

const removeDuplicate = arr => Array.from(new Set(arr))
const buildLocationOptions = path => {
  try {
    const searchPostcode = (province, district) => postcodes.filter(
      pc => pc.province === province && pc.district === district
    )

    const searchSubdistricts = (
      province,
      district,
      includedSubdistricts,
      excludeSubdistricts
    ) => {
      const subdistricts = searchPostcode(province, district)
      if (includedSubdistricts.length > 0 && excludeSubdistricts.length > 0) {
        console.error("zone data is conflict.")
      }

      if (includedSubdistricts.length > 0) {
        return subdistricts.filter(s =>
          includedSubdistricts.includes(s.subDistrict)
        )
      }

      if (excludeSubdistricts.length > 0) {
        return subdistricts.filter(
          s => !excludeSubdistricts.includes(s.subDistrict)
        )
      }

      return subdistricts
    }

    const rawLocationOptions = zones.reduce((acc, zone) => {
      const options = zone.areas.reduce((acc, area) => {
        const subdistricts = searchSubdistricts(
          zone.province,
          area.area,
          area.interior,
          area.exterior
        ).reduce((acc, sd) => {
          let key = `ต.${sd.subDistrict} อ.${sd.district} จ.${sd.province}`
          if (sd.province === "กรุงเทพมหานคร") {
            key = `แขวง${sd.subDistrict} เขต${sd.district} จ.${sd.province}`
          }

          // check duplicate
          if (acc[key]?.electionZones[sd.province]) {
            return {
              ...acc,
              [key]: {
                electionZones: {
                  [sd.province]: removeDuplicate([
                    ...acc[key].electionZones[sd.province],
                    String(zone.zone),
                  ]),
                },
              },
            }
          }

          return {
            ...acc,
            [key]: {
              electionZones: {
                [sd.province]: [String(zone.zone)],
              },
            },
          }
        }, {})

        return {
          ...acc,
          ...subdistricts,
        }
      }, {})

      return {
        ...acc,
        ...options,
      }
    }, {})

    const locationOptions = Object.keys(rawLocationOptions).reduce((acc, key) => [
      ...acc,
      {
        label: key,
        value: key,
        electionZones: Object.keys(rawLocationOptions[key].electionZones).reduce((eAcc, eKey) => [
          ...eAcc,
          {
            province: eKey,
            zones: rawLocationOptions[key].electionZones[eKey]
          }
        ], [])
      }
    ], [])

    fs.writeFileSync(path, JSON.stringify(locationOptions), "utf8")
  } catch (e) {
    console.log(e)
  }
}

module.exports = buildLocationOptions
