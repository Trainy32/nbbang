import React from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom'

// CSS 관련 Imports
import styled from 'styled-components'

//Components
import Header from './components/Header'
import ScrollRestore from './components/ScrollRestore'

import Home from './pages/Home'

function App() {


  return (
    <Wrapper className="App">
      <Header/>
      <ScrollRestore/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
width: 100%;
max-width: 700px;
margin: auto;
border: 1px solid #ddd;
`
