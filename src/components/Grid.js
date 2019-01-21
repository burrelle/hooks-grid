import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GridItem from './GridItem';

const GridWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
`;

export default function Grid({ values: { gridItems, columns, gap } }) {
  return (
    <GridWrapper
      css={`
        grid-template-columns: repeat(${columns}, 1fr);
        grid-gap: ${gap}px;
      `}
    >
      {[...Array(gridItems)].map((_, i) => (
        <GridItem key={i} value={i + 1} />
      ))}
    </GridWrapper>
  );
}

Grid.propTypes = {
  values: PropTypes.shape({}).isRequired
};
