import React, { useState, Fragment } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Controller from './components/Controller';
import Grid from './components/Grid';

const theme = {
  yellow: 'rgba(253, 187, 45, 1)',
  lightblue: 'rgba(128, 208, 199, 1)',
  darkblue: 'rgba(19, 84, 122, 1)'
};

const Container = styled.div`
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: rgb(19, 84, 122);
    background: linear-gradient(
      0deg,
      ${theme.darkblue} 0%,
      ${theme.lightblue} 100%
    );
    height: 100vh;
    overflow: hidden;
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
    font-family: Montserrat;
  }
`;

export default function App() {
  const [controls, setControls] = useState({
    gridItems: 1,
    columns: 1,
    gap: 20
  });

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Controller controls={controls} setControls={setControls} />
        <Container>
          <Grid values={{ ...controls }} />
        </Container>
      </Fragment>
    </ThemeProvider>
  );
}
