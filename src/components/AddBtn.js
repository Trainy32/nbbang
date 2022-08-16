import React from "react"
import styled from "styled-components"

const AddBtn = () => {

  return (
    <ButtonWrap>
      +
    </ButtonWrap>
  )
}

export default AddBtn

const ButtonWrap = styled.div`
  position: fixed;
  bottom: 10%;
  right: 10%;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background: slateblue;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #fff;
  cursor: pointer;

`