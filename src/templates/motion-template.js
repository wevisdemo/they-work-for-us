import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import { css } from "@emotion/react"
import Info from "../components/motion/info"
import Nominator from "../components/motion/nominator"
import MotionMenu from "../components/motion/motionmenu"
import Breadcrumb from "../components/motion/breadcrumb"
import { MenuContext, MenuChoice } from "../constants/motion"
import { useState } from "react"
import { device } from "../components/motion/size"

export const query = graphql`
  query(
    $id: String!
    $select_committee: String!
    $main_cat: String!
    $votelog_id: String!
  ) {
    motion: motionYaml(id: { eq: $id }) {
      id
      content
      name
      votelog_id
      voting_url
      purposers {
        last_name
        name
        party
        title
      }
      seconders {
        last_name
        name
        party
        title
      }
      select_committee
      status
      sub_cat
      voting_date
      voting_result
      registration_no
      proposal_date(formatString: "DD/MM/YYYY")
      page_url
      voting_url
      main_cat
    }

    committee: allPeopleYaml(
      filter: {
        committee: { elemMatch: { set: { eq: $select_committee, ne: "" } } }
      }
    ) {
      nodes {
        id
        name
        lastname
        party
        fields {
          slug
        }
      }
    }

    motions: allMotionYaml(filter: { main_cat: { eq: $main_cat } }) {
      nodes {
        name
        registration_no
        fields {
          slug
        }
      }
    }

    votelog: votelogYaml(id: { eq: $votelog_id }) {
      passed
      is_no_vote
      no_vote_description
      disprove
      approve
      absent
      abstained
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 100vw;
  max-width: 100%;
  height: 100vh;

  position: ${({ popup }) => (popup ? "absolute" : "sticky")};
  top: 0;
  left: 0;
  ${({ popup }) => popup && `z-index: 3;`}
  background-color: ${({ popup }) =>
    popup ? "var(--cl-white)" : "transparent"};

  pointer-events: none;
  & * {
    pointer-events: all;
  }

  ${MotionMenu} {
    flex: ${({ popup }) => (popup ? "1" : "0 0 250px")};
  }

  ${Nominator} {
    flex: ${({ popup }) => (popup ? "1" : "0 0 250px")};
    ${({ popup }) => popup && "margin: 10vh auto;"}
  }

  & > .menu-title {
    position: absolute;
    left: 50%;
    top: 0;
    z-index: 5;
    transform: translateX(-50%);
    margin: 0;

    display: flex;
    height: 10vh;
    justify-content: space-between;
    align-items: center;
  }

  & > div {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    margin-top: ${({ popup }) => (popup ? "10vh" : "0")};

    &:after {
      content: "";
      position: absolute;
      z-index: 1;
      top: 60vh;
      left: 0;
      pointer-events: none;
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1) 90%
      );
      width: 100%;
      height: 20vh;
    }
  }
`

const MotionPage = props => {
  const {
    data: {
      motion,
      committee: { nodes: members },
      motions: { nodes: motionCat },
      votelog,
    },
  } = props

  const [menu, setMenu] = useState(null)

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      <Layout>
        <Breadcrumb
          sub_cat={motion.sub_cat}
          registration_no={motion.registration_no}
        />
        <Container
          popup={!!menu}
          style={{ pointerEvents: !!menu ? "all" : "none" }}
        >
          {!!menu && (
            <div
              className="menu-title"
              style={{
                maxWidth: menu === MenuChoice.motion && "500px",
                padding: menu === MenuChoice.nominator && "0 20px",
              }}
            >
              <h4
                css={css`
                  font-size: 15px;
                `}
              >
                {menu === MenuChoice.nominator
                  ? "ผู้เสนอและผู้รับรอง"
                  : "รายการญัตติ"}
              </h4>
              <button
                css={css`
                  width: 30px;
                  height: 30px;
                  background-color: transparent;
                  border: 2px solid var(--cl-black);
                  border-radius: 50%;
                  outline: none;
                  cursor: pointer;
                  position: relative;

                  display: flex;
                  justify-content: center;
                  align-items: center;

                  &:before,
                  &:after {
                    content: " ";
                    height: 15px;
                    width: 2px;
                    margin: 0 -0.5px;
                    background-color: var(--cl-black);
                  }
                  &:before {
                    transform: rotate(45deg);
                  }
                  &:after {
                    transform: rotate(-45deg);
                  }
                `}
                aria-label="ปิดเมนู"
                onClick={() => setMenu(null)}
                type="button"
              ></button>
            </div>
          )}
          {menu === MenuChoice.nominator ? (
            <></>
          ) : (
            <MotionMenu
              name={motion.name}
              motionCat={motionCat}
              popup={menu === MenuChoice.motion}
            />
          )}
          {menu === MenuChoice.motion ? (
            <></>
          ) : (
            <Nominator motion={motion} popup={menu === MenuChoice.nominator} />
          )}
        </Container>
        <Info
          css={css`
            margin: -100vh 250px 100px 250px;

            @media ${device.hideMotion} {
              margin-left: 0;
            }

            @media ${device.hideNominator} {
              margin-right: 0;
            }
          `}
          votelog={votelog}
          motion={motion}
          members={members}
        />
      </Layout>
    </MenuContext.Provider>
  )
}

export default MotionPage
