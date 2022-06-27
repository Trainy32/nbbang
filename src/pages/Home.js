import React from "react"

//Components
import DaySummary from '../components/DaySummary'
import AccForOne from '../components/AccForOne'
import NameTag from "../elements/NameTag"

// CSS 관련 Imports
import styled from 'styled-components'


const Home = () => {

  return (
    <div>
      <DaySummary/>
      <AccForOne/>
      <NameTag/>
    </div>
  )
}

export default Home