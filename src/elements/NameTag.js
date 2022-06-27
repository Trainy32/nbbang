import React from "react"

// CSS 관련 Imports
import styled from 'styled-components'

const NameTag = () => {

  return (
    <Tag>
      강수현
    </Tag>
  )
}

const Tag = styled.div`
width: 100px;
padding: 5px 10px;
text-align: center;
background: slateblue;
color: white;
border-radius: 30px;
font-size: 20px;
`

export default NameTag