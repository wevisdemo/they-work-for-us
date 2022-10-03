import React, { Component } from "react"
import { media } from "../styles"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const cssWrapper = ({ is_senate }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginBottom: is_senate ? "0" : "2.4rem",
  [media(767)]: {
    display: "flex",
  },
})

const cssDropdownDeafult = {
  ".arrow-down": {
    marginTop: "5px",
    width: "0",
    height: "0",
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderTop: "10px solid var(--cl-black);",
    float: "right",
    marginLeft: "1rem",
  },
  ".current-filter-list": {
    textAlign: "center",
    listStyle: "none",
    marginBottom: "0",
    button: {
      textAlign: "left",
      background: "var(--cl-pink)",
      border: "1px var(--cl-black) solid",
      cursor: "pointer",
      minWidth: "165px",
      height: "40px",
      margin: "1px 7.5px",
      "&:focus": {
        outline: "none",
      },
    },
    li: {
      display: "inline-block",
      position: "relative;",
    },
  },
  ".currentFilter": {
    borderRadius: "7.5px",
  },
  ".menuItems": {
    position: "absolute",
    zIndex: "1",
    border: "1px solid var(--cl-black)",
    minWidth: "165px",
    margin: "1px 7.5px",
    button: {
      display: "block",
      border: "none",
      backgroundColor: "white",
      margin: "0px",
      width: "100%",
      "&:hover": {
        backgroundColor: "var(--cl-pink)",
      },
    },
  },
}

const cssDropdownSortBarchart = {
  ".arrow-down": {
    marginTop: "3px",
    width: "0",
    height: "0",
    borderLeft: "6px solid transparent",
    borderRight: "6px solid transparent",
    borderTop: " 8px solid #aeaeae",
    float: "right",
    marginLeft: "1rem",
  },
  ".current-filter-list": {
    textAlign: "center",
    listStyle: "none",
    position: "absolute",
    button: {
      textAlign: "left",
      background: "white",
      border: "1px solid #e0e0e0",
      cursor: "pointer",
      minWidth: "50px",
      height: "31px",
      margin: "1px 0",
      "&:focus": {
        outline: "none",
        border: "1px solid #000000",
        boxSizing: "border-box",
        borderRadius: "5px",
      },
    },
    li: {
      display: "inline-block",
      position: "relative;",
    },
  },
  ".currentFilter": {
    borderRadius: "7.5px",
    margin: "0 0 0 5rem",
    "&:hover": {
      backgroundColor: "#eef090",
    },
  },
  ".menuItems": {
    position: "absolute",
    zIndex: "1",
    boxShadow:
      "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)",
    minWidth: "185px",
    margin: "1px 0",
    button: {
      display: "block",
      border: "none",
      backgroundColor: "white",
      margin: "0px",
      width: "100%",
      "&:hover": {
        backgroundColor: "#eef090",
      },
    },
  },
  ".bulletChoice , .clock_image": {
    content: "''",
    display: "inline-block",
    width: "15px",
    height: "15px",
    borderRadius: "7.5px",
    marginLeft: "20px",
    pointerEvents: "none",
  },
  ".cssChoice , .clock_text": {
    display: "inline-block",
    position: "absolute",
    margin: "-2px 0 0 15px",
  },
  ".clock_image": {
    marginTop: "5px",
  },
  ".clock_text": {
    marginTop: "3px",
  },
}

const cssDropdownSenatorType = {
  ".arrow-down": {
    marginTop: "3px",
    width: "0",
    height: "0",
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderTop: "10px solid #AEAEAE",
    float: "right",
    marginLeft: "1rem",
  },
  ".current-filter-list": {
    textAlign: "center",
    listStyle: "none",
    marginBottom: "1.8rem",
    button: {
      textAlign: "center",
      background: "transparent",
      border: "none",
      borderBottom: "1px solid #aaa",
      cursor: "pointer",
      width: "325px",
      height: "30px",
      margin: "0",
      fontSize: "1.4rem",
      "&:focus": {
        outline: "none",
      },
    },
    li: {
      display: "inline-block",
      position: "relative;",
      marginBottom: "0",
    },
  },
  ".menuItems": {
    position: "absolute",
    zIndex: "1",
    border: "1px solid #AEAEAE",
    minWidth: "325px",
    margin: "0",
    button: {
      display: "block",
      border: "none",
      backgroundColor: "white",
      margin: "0px",
      width: "100%",
      textAlign: "left",
      "&:hover": {
        backgroundColor: "#eef090",
      },
    },
  },
}

class DropDown extends Component {
  container = React.createRef()
  state = {
    show: false,
    is_senate: this.props.is_senate,
    is_mobile: this.props.is_mobile,
  }
  dot = (
    <div
      className="dot"
      style={{
        position: "absolute",
        display: "flex",
        top: "10%",
        color: "#aeaeae",
      }}
    >
      ...
    </div>
  )

  handleFilter = (e, field) => {
    this.setState({ show: !this.state.show })
    this.props.handleFilter(e, field)
  }
  handleClickOutside = e => {
    if (this.container.current && !this.container.current.contains(e.target)) {
      this.setState({
        show: false,
      })
    }
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside)
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside)
  }
  render() {
    return (
      <div
        css={
          this.state.is_senate
            ? this.state.is_mobile
              ? cssDropdownSenatorType
              : cssDropdownSortBarchart
            : cssDropdownDeafult
        }
      >
        <ul className="current-filter-list" css={{ margin: 0 }}>
          <li ref={this.container} className="css-dropdown">
            <button
              onClick={() => this.setState({ show: !this.state.show })}
              className="currentFilter"
            >
              {this.state.is_senate && !this.state.is_mobile ? (
                this.props.is_selected_position ||
                this.props.is_selected_yourSelf ||
                this.props.is_selected_government ||
                this.props.isShowAll ? (
                  !this.props.currentFilter ? (
                    <GatsbyImage image={this.props.clock_image} alt="" />
                  ) : this.props.currentFilter === "เวลาล่าสุด" ? (
                    <GatsbyImage image={this.props.clock_image} alt="" />
                  ) : (
                    <div
                      className="bulletChoice"
                      style={{
                        backgroundColor: this.props.colors[
                          this.props.currentFilter - 1
                        ],
                        marginLeft: 0,
                      }}
                    />
                  )
                ) : (
                  this.dot
                )
              ) : (
                this.props.currentFilter[this.props.filter]
              )}
              <span>
                <i
                  className="arrow-down"
                  style={this.state.show ? { transform: "rotate(180deg)" } : {}}
                ></i>
              </span>
            </button>
            {this.state.show ? (
              <div className="menuItems">
                <button onClick={e => this.handleFilter(e, this.props.filter)}>
                  {this.state.is_senate && !this.state.is_mobile ? (
                    <div>
                      <GatsbyImage
                        image={this.props.clock_image}
                        className="clock_image"
                        alt=""
                      />
                      <div className="clock_text">
                        {" "}
                        {this.props.choices.default}
                      </div>
                    </div>
                  ) : (
                    this.props.choices.default
                  )}
                </button>
                {this.props.choices.others.map((choice, i) => (
                  <button
                    onClick={e => this.handleFilter(e, this.props.filter)}
                  >
                    {this.state.is_senate && !this.state.is_mobile ? (
                      <>
                        <div
                          className="bulletChoice"
                          style={{ backgroundColor: this.props.colors[i] }}
                        />
                        <div className="cssChoice">{choice}</div>
                      </>
                    ) : (
                      choice
                    )}
                  </button>
                ))}
              </div>
            ) : null}
          </li>
        </ul>
      </div>
    )
  }
}
export default function DropDownComponent({
  choices,
  currentFilter,
  handleFilter,
  is_senate,
  is_mobile,
  colors,
  is_selected_government,
  is_selected_yourSelf,
  is_selected_position,
  isShowAll,
}) {
  const data = useStaticQuery(graphql`
    {
      clock: file(relativePath: { eq: "images/clock/clock.png" }) {
        childImageSharp {
          gatsbyImageData(height: 15, layout: FIXED)
        }
      }
    }
  `)
  return (
    <div css={cssWrapper({ is_senate })}>
      {Object.entries(choices).map(([filter, choices], key) => (
        <DropDown
          currentFilter={currentFilter}
          handleFilter={handleFilter}
          filter={filter}
          choices={choices}
          key={key}
          is_senate={is_senate}
          is_mobile={is_mobile}
          colors={colors}
          clock_image={data.clock.childImageSharp.gatsbyImageData}
          is_selected_government={is_selected_government}
          is_selected_yourSelf={is_selected_yourSelf}
          is_selected_position={is_selected_position}
          isShowAll={isShowAll}
        />
      ))}
    </div>
  )
}
