import React from "react"


// CSS 관련 Imports
import styled from 'styled-components'

const DaySummary = () => {

  
  return (
    <Wrapper>
      <ul>
        <li> 식비 </li>
        <li> 교통비 </li>
        <li> 내기 </li>
        <li></li>
      </ul>
    </Wrapper>
  )
}


const Wrapper = styled.div`
width: 90%;
height: 300px;
margin: 20px auto;
border: 1px solid #ddd;
border-radius: 5px;

`


export default DaySummary