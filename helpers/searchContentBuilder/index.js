const yaml = require("js-yaml")
const fs = require("fs")
const zones = require("../../src/contents/zones.json")

const pick = (object, keys) =>
  keys.reduce((obj, key) => {
    obj[key] = object[key]
    return obj
  }, {})

function buildSearchContent(path) {
  try {
    const searchContent = {
      zones: zones.map(zone => ({
        ...zone,
        areas: zone.areas.map(area => area.area),
      })),
      people: yaml
        .safeLoad(fs.readFileSync("./src/contents/people.yaml", "utf8"))
        .filter(person => person.mp_type === "แบ่งเขต" && person.is_active)
        .map(person =>
          pick(person, ["title", "name", "lastname", "mp_province", "mp_zone"])
        ),
    }

    fs.writeFileSync(path, JSON.stringify(searchContent), "utf8")
  } catch (e) {
    console.log(e)
  }
}

module.exports = { buildSearchContent }
