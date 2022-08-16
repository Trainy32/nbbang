import React from "react"


// CSS 관련 Imports
import styled from 'styled-components'
import { HiMenu } from 'react-icons/hi';
import { IoCalendarNumber } from 'react-icons/io5';

const Header = () => {

  const year = new Date().getFullYear()

  return (
    <Wrapper>
      <HiMenu className="icon" />
      { year }
      <IoCalendarNumber className="icon" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin: auto;
  padding: 10px 20px;
  box-sizing: border-box;

  font-size: 26px;
  font-weight: 700;
  background-color: #ddd;

  .icon {
    margin: 0px 10px;
    font-size: 40px;
    cursor: pointer;
  }
`

export default Header