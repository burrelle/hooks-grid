import React from 'react';
import styled from 'styled-components';
import GridItem from './GridItem';

const GridWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
`;

export default function Grid({ values: { gridItems, columns, rows, gap } }) {
  return (
    <GridWrapper
      css={`
        grid-template-columns: repeat(${columns}, 1fr);
        grid-template-rows: repeat(${rows}, 1fr);
        grid-gap: ${gap}px;
      `}
    >
      {[...Array(gridItems)].map((_, i) => (
        <GridItem key={i} value={i + 1}/>
      ))}
    </GridWrapper>
  );
}
