import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  border: 5px solid ${props => props.theme.yellow};
  border-radius: 3px;
  height: 100%;
  width: 100%;
  font-size: 24px;
  color: ${props => props.theme.yellow};
`;

export default function GridItem({ value }) {
  return <Item>{value}</Item>;
}
