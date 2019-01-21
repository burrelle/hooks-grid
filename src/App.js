import React, { useState, Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Controller from './components/Controller';
import Grid from './components/Grid';

const theme = {
  yellow: 'rgba(253, 187, 45, 1)',
  darkblue: 'rgba(19, 84, 122, 1)'
};

const Container = styled.div`
  padding: 2rem;
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
        <Controller controls={controls} setControls={setControls} />
        <Container>
          <Grid values={{ ...controls }} />
        </Container>
      </Fragment>
    </ThemeProvider>
  );
}
